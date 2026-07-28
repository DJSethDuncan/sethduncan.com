import tracks, { albums } from "./tracks";

describe("tracks data - notes defaulting", () => {
  it("defaults every flat (DJ Set) track's notes to its own name", () => {
    tracks.forEach((track) => {
      expect(track.notes).toBe(track.name);
    });
  });

  it("defaults every album track's notes to the parent album's name", () => {
    // REGRESSION: an album track's own `name` is the song title, not the
    // album/djset name -- defaulting to track.name instead of album.name
    // would put the wrong text in the hover popup.
    albums.forEach((album) => {
      album.tracks.forEach((track) => {
        expect(track.notes).toBe(album.name);
      });
    });
  });

  it("never leaves notes empty", () => {
    tracks.forEach((track) => expect(track.notes).toBeTruthy());
    albums.forEach((album) =>
      album.tracks.forEach((track) => expect(track.notes).toBeTruthy())
    );
  });
});
