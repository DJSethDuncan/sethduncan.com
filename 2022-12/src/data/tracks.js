export const DEFAULT_COVER =
  "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/seth-duncan-logo.jpg";

const rawTracks = [
  {
    genre: "DJ Sets",
    name: "Finns (DJ Set) - 12.12.2014",
    singer: "Seth Duncan",
    year: 2014,
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Finns%20(DJ%20Set).mp3",
  },
  {
    genre: "DJ Sets",
    name: "Anfang 1 (DJ Set)",
    singer: "Seth Duncan",
    year: 2008,
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Anfang%201%20(1.1.08).mp3",
  },
  {
    genre: "DJ Sets",
    name: "Anfang 2 (DJ Set)",
    singer: "Seth Duncan",
    year: 2008,
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Anfang%202.mp3",
  },
];

const tracks = rawTracks.map((track) => ({
  ...track,
  cover: track.cover || DEFAULT_COVER,
  tags: track.tags || [],
}));

export default tracks;

const CAPTURED_LIFE_BASE =
  "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/2019%20-%20Captured%20Life/";

const rawAlbums = [
  {
    genre: "Synthwave",
    name: "Captured Life (2019)",
    year: 2019,
    tracks: [
      { name: "Digital Mountains", musicSrc: `${CAPTURED_LIFE_BASE}01%20-%20Digital%20Mountains.mp3` },
      { name: "Captured Life", musicSrc: `${CAPTURED_LIFE_BASE}02%20-%20Captured%20Life.mp3` },
      { name: "Just Pretend", musicSrc: `${CAPTURED_LIFE_BASE}03%20-%20Just%20Pretend.mp3` },
      { name: "The Machine", musicSrc: `${CAPTURED_LIFE_BASE}04%20-%20The%20Machine.mp3` },
      { name: "Into the Night", musicSrc: `${CAPTURED_LIFE_BASE}05%20-%20Into%20the%20Night.mp3` },
      { name: "Sully", musicSrc: `${CAPTURED_LIFE_BASE}06%20-%20Sully.mp3` },
      { name: "Around the Bend", musicSrc: `${CAPTURED_LIFE_BASE}07%20-%20Around%20the%20Bend.mp3` },
      { name: "Water Level", musicSrc: `${CAPTURED_LIFE_BASE}08%20-%20Water%20Level.mp3` },
    ],
  },
];

export const albums = rawAlbums.map((album) => {
  const cover = album.cover || DEFAULT_COVER;
  const albumTracks = album.tracks.map((track) => ({
    singer: "Seth Duncan",
    cover,
    tags: track.tags || [],
    ...track,
  }));
  const tags = [...new Set(albumTracks.flatMap((track) => track.tags))];
  return {
    ...album,
    cover,
    tags,
    tracks: albumTracks,
  };
});
