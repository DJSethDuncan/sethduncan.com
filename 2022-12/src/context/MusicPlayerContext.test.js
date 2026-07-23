import { loadSavedPlaybackState } from "./MusicPlayerContext";

const STORAGE_KEY = "musicPlaybackState";

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
