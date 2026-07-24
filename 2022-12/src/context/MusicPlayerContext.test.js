import { render, screen, act } from "@testing-library/react";
import {
  loadSavedPlaybackState,
  MusicPlayerProvider,
  useMusicPlayer,
} from "./MusicPlayerContext";

const STORAGE_KEY = "musicPlaybackState";

function Probe({ capture }) {
  const ctx = useMusicPlayer();
  capture(ctx);
  return (
    <div data-testid="audio-lists">
      {JSON.stringify(ctx.audioLists.map((t) => t.name))}
    </div>
  );
}

function renderProvider() {
  let ctx;
  render(
    <MusicPlayerProvider>
      <Probe
        capture={(c) => {
          ctx = c;
        }}
      />
    </MusicPlayerProvider>
  );
  return {
    getCtx: () => ctx,
  };
}

describe("loadSavedPlaybackState", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("returns null when nothing has been saved yet", () => {
    expect(loadSavedPlaybackState()).toBeNull();
  });

  it("returns null for corrupt JSON instead of throwing", () => {
    // REGRESSION: a bad JSON.parse here would crash the whole app on load,
    // since MusicPlayerProvider calls this during initial render.
    localStorage.setItem(STORAGE_KEY, "{not valid json");
    expect(loadSavedPlaybackState()).toBeNull();
  });

  it("returns null when audioLists is missing or empty", () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ playIndex: 0, currentTime: 42 }));
    expect(loadSavedPlaybackState()).toBeNull();

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ audioLists: [], playIndex: 0, currentTime: 42 })
    );
    expect(loadSavedPlaybackState()).toBeNull();
  });

  it("returns the saved state when it's well-formed", () => {
    const saved = {
      audioLists: [{ name: "Track A", musicSrc: "https://example.com/a.mp3" }],
      playIndex: 0,
      currentTime: 87.5,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    expect(loadSavedPlaybackState()).toEqual(saved);
  });
});

describe("playGroup", () => {
  it("rotates the clicked track to the front, wrapping the rest around", () => {
    const { getCtx } = renderProvider();
    const tracks = [{ name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }];

    act(() => {
      getCtx().playGroup(tracks, 2);
    });

    expect(screen.getByTestId("audio-lists").textContent).toBe(
      JSON.stringify(["C", "D", "A", "B"])
    );
    expect(getCtx().playIndex).toBe(0);
  });

  it("leaves order unchanged when the first track is clicked", () => {
    const { getCtx } = renderProvider();
    const tracks = [{ name: "A" }, { name: "B" }];

    act(() => {
      getCtx().playGroup(tracks);
    });

    expect(screen.getByTestId("audio-lists").textContent).toBe(
      JSON.stringify(["A", "B"])
    );
  });
});

describe("onAudioProgress", () => {
  afterEach(() => {
    localStorage.clear();
    jest.restoreAllMocks();
  });

  it("persists the rotated audioLists, live playIndex, and currentTime", () => {
    const { getCtx } = renderProvider();

    act(() => {
      getCtx().playGroup([{ name: "A" }, { name: "B" }], 1);
    });
    act(() => {
      getCtx().onAudioProgress({ playIndex: 1, currentTime: 12.3 });
    });

    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    expect(saved.audioLists.map((t) => t.name)).toEqual(["B", "A"]);
    expect(saved.playIndex).toBe(1);
    expect(saved.currentTime).toBe(12.3);
  });

  it("throttles saves within SAVE_INTERVAL_MS of the previous one", () => {
    const { getCtx } = renderProvider();
    act(() => {
      getCtx().playGroup([{ name: "A" }]);
    });

    act(() => {
      getCtx().onAudioProgress({ playIndex: 0, currentTime: 1 });
    });
    act(() => {
      // Fires immediately after -- well within the 10s throttle window --
      // so this update must be dropped, not overwrite the saved state.
      getCtx().onAudioProgress({ playIndex: 0, currentTime: 99 });
    });

    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    expect(saved.currentTime).toBe(1);
  });

  it("does not throw when localStorage.setItem fails", () => {
    const { getCtx } = renderProvider();
    act(() => {
      getCtx().playGroup([{ name: "A" }]);
    });

    jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("quota exceeded");
    });

    expect(() => {
      act(() => {
        getCtx().onAudioProgress({ playIndex: 0, currentTime: 1 });
      });
    }).not.toThrow();
  });
});
