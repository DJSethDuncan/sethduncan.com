import { renderHook, act } from "@testing-library/react";
import { MusicPlayerProvider, useMusicPlayer } from "./MusicPlayerContext";

const STORAGE_KEY = "musicPlaybackState";

function setup() {
  return renderHook(() => useMusicPlayer(), {
    wrapper: MusicPlayerProvider,
  });
}

describe("MusicPlayerProvider", () => {
  afterEach(() => {
    localStorage.clear();
    jest.restoreAllMocks();
  });

  it("onAudioProgress writes the playback state to localStorage on the first call", () => {
    const { result } = setup();

    act(() => {
      result.current.onAudioProgress({ playIndex: 1, currentTime: 12.5 });
    });

    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    expect(saved.playIndex).toBe(1);
    expect(saved.currentTime).toBe(12.5);
  });

  it("throttles onAudioProgress writes to once per SAVE_INTERVAL_MS", () => {
    // REGRESSION-SHAPED: onAudioProgress fires continuously during playback
    // (many times a second) -- without throttling, every progress tick would
    // hit localStorage, which is needlessly expensive and can hit quota limits.
    jest.useFakeTimers();
    const { result } = setup();

    act(() => {
      result.current.onAudioProgress({ playIndex: 0, currentTime: 1 });
    });
    let saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    expect(saved.currentTime).toBe(1);

    act(() => {
      jest.advanceTimersByTime(5_000);
      result.current.onAudioProgress({ playIndex: 0, currentTime: 6 });
    });
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // still the first write -- 5s hasn't crossed the 10s throttle window
    expect(saved.currentTime).toBe(1);

    act(() => {
      jest.advanceTimersByTime(5_001);
      result.current.onAudioProgress({ playIndex: 0, currentTime: 11 });
    });
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    expect(saved.currentTime).toBe(11);

    jest.useRealTimers();
  });

  it("does not throw when localStorage.setItem fails", () => {
    // REGRESSION-SHAPED: private browsing or a full storage quota can make
    // setItem throw -- resuming playback position is a nice-to-have, not
    // worth crashing playback over.
    jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("QuotaExceededError");
    });
    const { result } = setup();

    expect(() => {
      act(() => {
        result.current.onAudioProgress({ playIndex: 0, currentTime: 1 });
      });
    }).not.toThrow();
  });

  it("playGroup rotates the clicked track to the front and resets playIndex to 0", () => {
    const { result } = setup();
    const tracks = [{ name: "a" }, { name: "b" }, { name: "c" }];

    act(() => {
      result.current.playGroup(tracks, 1);
    });

    expect(result.current.audioLists).toEqual([{ name: "b" }, { name: "c" }, { name: "a" }]);
    expect(result.current.playIndex).toBe(0);
  });

  it("onAudioPlay seeks to the restored position exactly once, on the first call", () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        audioLists: [{ name: "a", musicSrc: "https://example.com/a.mp3" }],
        playIndex: 0,
        currentTime: 42,
      })
    );
    const { result } = setup();
    const instance = { currentTime: 0 };

    act(() => {
      result.current.getAudioInstance(instance);
      result.current.onAudioPlay();
    });
    expect(instance.currentTime).toBe(42);

    // A later track start (e.g. auto-advance to the next track) must not
    // seek again -- that would yank playback back to the restored position
    // on every subsequent track.
    act(() => {
      instance.currentTime = 0;
      result.current.onAudioPlay();
    });
    expect(instance.currentTime).toBe(0);
  });

  it("onAudioPlay does nothing when there is no saved position to restore", () => {
    const { result } = setup();
    const instance = { currentTime: 0 };

    act(() => {
      result.current.getAudioInstance(instance);
      result.current.onAudioPlay();
    });

    expect(instance.currentTime).toBe(0);
  });
});
