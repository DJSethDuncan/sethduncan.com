export const DEFAULT_COVER =
  "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/seth-duncan-logo.jpg";

const rawTracks = [
  {
    genre: "Synthwave",
    name: "Under the Sky (Remastered)",
    singer: "Seth Duncan, Charley Young",
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%2C%20Charley%20Young%20-%20Under%20the%20Sky%20(Remastered).mp3",
  },
];

const tracks = rawTracks.map((track) => ({
  ...track,
  cover: track.cover || DEFAULT_COVER,
}));

export default tracks;
