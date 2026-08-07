import { loadSavedPlaybackState, rotateToIndex } from "./MusicPlayerContext";

const STORAGE_KEY = "musicPlaybackState";

describe("rotateToIndex", () => {
  const tracks = ["a", "b", "c", "d"];

  it("returns the list unchanged when the clicked track is already first", () => {
    expect(rotateToIndex(tracks, 0)).toEqual(["a", "b", "c", "d"]);
  });

  it("moves the clicked track to the front, wrapping the preceding tracks to the end", () => {
    // REGRESSION: playGroup relies on this rotation (not the raw index) to put
    // the clicked track at position 0, since the player resets its internal
    // play index to 0 whenever audioLists changes.
    expect(rotateToIndex(tracks, 2)).toEqual(["c", "d", "a", "b"]);
  });

  it("rotates the last track to the front", () => {
    expect(rotateToIndex(tracks, 3)).toEqual(["d", "a", "b", "c"]);
  });

  it("doesn't mutate the original array", () => {
    const original = [...tracks];
    rotateToIndex(tracks, 2);
    expect(tracks).toEqual(original);
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
