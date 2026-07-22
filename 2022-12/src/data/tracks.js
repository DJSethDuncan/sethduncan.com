export const DEFAULT_COVER =
  "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/seth-duncan-logo.jpg";

const rawTracks = [
  {
    genre: "DJ Sets",
    name: "Live at Finn's",
    singer: "Seth Duncan",
    year: 2014,
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Finns%20(DJ%20Set).mp3",
  },
  {
    genre: "DJ Sets",
    name: "Anfang 2",
    singer: "Seth Duncan",
    year: 2008,
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Anfang%202.mp3",
  },
  {
    genre: "DJ Sets",
    name: "Anfang 1",
    singer: "Seth Duncan",
    year: 2008,
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Anfang%201%20(1.1.08).mp3",
  },
  {
    genre: "DJ Sets",
    name: "Lattice Hack Week",
    singer: "DJ Bashful & Seth Duncan",
    year: 2024,
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/DJ%20Bashful%20%26%20Seth%20Duncan%20-%20Lattice%20Hack%20Week%202024.mp3",
  },
  {
    genre: "DJ Sets",
    name: "Beatsgiving",
    singer: "Seth Duncan",
    year: 2010,
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Beatsgiving.mp3",
  },
  {
    genre: "DJ Sets",
    name: "Clear Future",
    singer: "Seth Duncan",
    year: 2004,
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Clear%20Future%20(05-01-04).mp3",
  },
  {
    genre: "DJ Sets",
    name: "DJ Debut",
    singer: "Seth Duncan",
    year: 2002,
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20DJ%20Debut%20(09.09.02).mp3",
  },
  {
    genre: "DJ Sets",
    name: "Fall of 07",
    singer: "Seth Duncan",
    year: 2007,
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Fall%20of%2007.mp3",
  },
  {
    genre: "DJ Sets",
    name: "Renovate",
    singer: "Seth Duncan",
    year: 2007,
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Renovate.mp3",
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
    name: "Captured Life",
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
