import { render, screen } from "@testing-library/react";
import { loadSavedPlaybackState, MusicPlayerProvider, useMusicPlayer } from "./MusicPlayerContext";

const STORAGE_KEY = "musicPlaybackState";

function Probe() {
  const { audioLists, playIndex } = useMusicPlayer();
  return <div data-testid="probe">{JSON.stringify({ audioLists, playIndex })}</div>;
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

describe("MusicPlayerProvider restore", () => {
  afterEach(() => localStorage.clear());

  it("rotates the saved audioLists so the resumed track ends up first", () => {
    // REGRESSION: the underlying player library resets its play index to 0
    // on the very first render with a real audioLists array (a reference
    // change) -- passing the saved playIndex straight through as a separate
    // prop gets silently discarded, so a refresh always resumed track 0
    // instead of whichever track was actually playing. Rotating the saved
    // track to the front (same trick playGroup uses) is what makes the
    // resumed track actually the one that plays.
    const saved = {
      audioLists: [{ name: "Track A" }, { name: "Track B" }, { name: "Track C" }],
      playIndex: 2,
      currentTime: 42,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));

    render(
      <MusicPlayerProvider>
        <Probe />
      </MusicPlayerProvider>
    );

    const { audioLists, playIndex } = JSON.parse(screen.getByTestId("probe").textContent);
    expect(audioLists.map((t) => t.name)).toEqual(["Track C", "Track A", "Track B"]);
    expect(playIndex).toBe(0);
  });

  it("starts with an empty list when nothing was saved", () => {
    render(
      <MusicPlayerProvider>
        <Probe />
      </MusicPlayerProvider>
    );

    const { audioLists } = JSON.parse(screen.getByTestId("probe").textContent);
    expect(audioLists).toEqual([]);
  });

  it("clamps an out-of-range saved playIndex instead of producing an empty rotation", () => {
    const saved = {
      audioLists: [{ name: "Track A" }, { name: "Track B" }],
      playIndex: 7,
      currentTime: 0,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));

    render(
      <MusicPlayerProvider>
        <Probe />
      </MusicPlayerProvider>
    );

    const { audioLists } = JSON.parse(screen.getByTestId("probe").textContent);
    expect(audioLists.map((t) => t.name)).toEqual(["Track B", "Track A"]);
  });
});
