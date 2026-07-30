import { loadSavedPlaybackState, rotateTracks } from "./MusicPlayerContext";

const STORAGE_KEY = "musicPlaybackState";

describe("rotateTracks", () => {
  it("rotates the clicked track to the front", () => {
    // REGRESSION-SHAPED: the player resets its own play index to 0
    // whenever the audioLists array reference changes, so the clicked
    // track has to actually be first in the returned array -- passing
    // the original array with just an index prop wouldn't play the
    // right track.
    expect(rotateTracks(["a", "b", "c", "d"], 2)).toEqual(["c", "d", "a", "b"]);
  });

  it("is a no-op when index is 0", () => {
    expect(rotateTracks(["a", "b", "c"], 0)).toEqual(["a", "b", "c"]);
  });

  it("wraps the last track around to still put it first", () => {
    expect(rotateTracks(["a", "b", "c"], 2)).toEqual(["c", "a", "b"]);
  });

  it("does not mutate the original array", () => {
    const original = ["a", "b", "c"];
    rotateTracks(original, 1);
    expect(original).toEqual(["a", "b", "c"]);
  });
});

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
