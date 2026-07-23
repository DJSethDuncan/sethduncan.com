export const DEFAULT_COVER =
  "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/seth-duncan-logo.jpg";

const rawTracks = [
  {
    group: "DJ Sets",
    name: "Lattice Hack Week",
    singer: "DJ Bashful & Seth Duncan",
    year: 2024,
    tags: ["Prog House", "Pop Remix"],
    cover: 'https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Album%20Art/Lattice%20Hack%20Week.png',
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/DJ%20Bashful%20%26%20Seth%20Duncan%20-%20Lattice%20Hack%20Week%202024.mp3",
  },
  {
    group: "DJ Sets",
    name: "Live at Finn's",
    singer: "Seth Duncan",
    year: 2014,
    tags: ["Drum & Bass"],
    cover: 'https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Album%20Art/Live%20At%20Todd%20Brians.png',
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Finns%20(DJ%20Set).mp3",
  },
  {
    group: "DJ Sets",
    name: "Beatsgiving",
    singer: "Seth Duncan",
    year: 2010,
    tags: ["Prog House", "Tech House"],
    cover: 'https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Album%20Art/Beatsgiving.png',
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Beatsgiving.mp3",
  },
  {
    group: "DJ Sets",
    name: "Anfang 2",
    singer: "Seth Duncan",
    year: 2008,
    tags: ["Trip Hop", "Dubstep", "Drum & Bass"],
    cover: 'https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Album%20Art/Anfang.png',
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Anfang%202.mp3",
  },
  {
    group: "DJ Sets",
    name: "Anfang 1",
    singer: "Seth Duncan",
    year: 2008,
    tags: ["Prog House"],
    cover: 'https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Album%20Art/Anfang%201.png',
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Anfang%201%20(1.1.08).mp3",
  },
  {
    group: "DJ Sets",
    name: "Clear Future",
    singer: "Seth Duncan",
    tags: ["Trance"],
    year: 2004,
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Clear%20Future%20(05-01-04).mp3",
  },
  {
    group: "DJ Sets",
    name: "Fall of 07",
    singer: "Seth Duncan",
    tags: ["Prog House", "Downtempo", "Minimal"],
    year: 2007,
    cover: 'https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Album%20Art/Finns.png',
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Fall%20of%2007.mp3",
  },
  {
    group: "DJ Sets",
    name: "Renovate",
    singer: "Seth Duncan",
    year: 2007,
    tags: ["Prog House", "Tech House"],
    cover: 'https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Album%20Art/Pub.png',
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Renovate.mp3",
  },
  {
    group: "DJ Sets",
    name: "DJ Debut",
    singer: "Seth Duncan",
    year: 2002,
    tags: ["Prog Trance"],
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20DJ%20Debut%20(09.09.02).mp3",
  },
  {
    group: "DJ Sets",
    name: "Amore 1",
    singer: "Seth Duncan",
    year: 2005,
    tags: ["Trance"],
    cover: 'https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Album%20Art/decks.png',
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Amore%201.mp3",
  },
  {
    group: "DJ Sets",
    name: "Amore 3",
    singer: "Seth Duncan",
    year: 2006,
    tags: ["Prog Trance"],
    cover: 'https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Album%20Art/Pub2.png',
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Amore%203.mp3",
  },
  {
    group: "DJ Sets",
    name: "Amore 4",
    singer: "Seth Duncan",
    year: 2007,
    tags: ["Prog Trance"],
    cover: 'https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Album%20Art/Finns2.png',
    musicSrc:
      "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Seth%20Duncan%20-%20Amore%204.mp3",
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

const ROBOT_FAIRYTALE_BASE =
    "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/[2010]%20Robot%20Fairytale/";

const THERE_IS_MORE_BASE =
  "https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/[2005]%20There%20Is%20More/";

const rawAlbums = [
  {
    group: "Albums",
    name: "Captured Life",
    year: 2019,
    tags: ["Synthwave", "Synthpop", "Vocal"],
    cover: 'https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Album%20Art/Captured%20Life%20Album%20Art.jpg',
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
  {
    group: "Albums",
    name: "Robot Fairytale",
    year: 2010,
    tags: ["Orchestral", "Electronic"],
    cover: 'https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Album%20Art/Robot%20Fairytale%20Album%20Art.jpg',
    tracks: [
      { name: "Overcast", musicSrc: `${ROBOT_FAIRYTALE_BASE}01%20-%20Overcast.mp3` },
      { name: "Robots Invaded My Fairytale", musicSrc: `${ROBOT_FAIRYTALE_BASE}02%20-%20Robots%20Invaded%20My%20Fairytale.mp3` },
      { name: "And They Took the Princess", musicSrc: `${ROBOT_FAIRYTALE_BASE}03%20-%20And%20They%20Took%20the%20Princess.mp3` },
      { name: "Negotiation", musicSrc: `${ROBOT_FAIRYTALE_BASE}04%20-%20Negotiation.mp3` },
      { name: "The Peace That Comes", musicSrc: `${ROBOT_FAIRYTALE_BASE}05%20-%20The%20Peace%20That%20Comes.mp3` },
      { name: "So Alone", musicSrc: `${ROBOT_FAIRYTALE_BASE}06%20-%20So%20Alone.mp3` },
      { name: "Again", musicSrc: `${ROBOT_FAIRYTALE_BASE}07%20-%20Again.mp3` },
      { name: "Low Valley", musicSrc: `${ROBOT_FAIRYTALE_BASE}08%20-%20Low%20Valley.mp3` },
      { name: "Uprise Reprise", musicSrc: `${ROBOT_FAIRYTALE_BASE}09%20-%20Uprise%20Reprise.mp3` },
      { name: "Shoreline", musicSrc: `${ROBOT_FAIRYTALE_BASE}10%20-%20Shoreline.mp3` },
    ],
  },
  {
    group: "Albums",
    name: "There Is More",
    year: 2005,
    tags: ["Electronic"],
    cover: 'https://pub-f6d8a0a86ad24f58b195e5703a09e4ab.r2.dev/Album%20Art/There%20Is%20More%20Album%20Art.jpg',
    tracks: [
      { name: "Over It", musicSrc: `${THERE_IS_MORE_BASE}Seth%20Duncan%20-%2001%20-%20Over%20It.mp3` },
      { name: "Conflict (Breaks Mix)", musicSrc: `${THERE_IS_MORE_BASE}Seth%20Duncan%20-%2002%20-%20Conflict%20(Breaks%20Mix).mp3` },
      { name: "Heaven", musicSrc: `${THERE_IS_MORE_BASE}Seth%20Duncan%20-%2003%20-%20Heaven.mp3` },
      { name: "asHes", musicSrc: `${THERE_IS_MORE_BASE}Seth%20Duncan%20-%2004%20-%20asHes.mp3` },
      { name: "Glory", musicSrc: `${THERE_IS_MORE_BASE}Seth%20Duncan%20-%2005%20-%20Glory.mp3` },
      { name: "The Reason", musicSrc: `${THERE_IS_MORE_BASE}Seth%20Duncan%20-%2006%20-%20The%20Reason.mp3` },
      { name: "Conflict (Original Mix)", musicSrc: `${THERE_IS_MORE_BASE}Seth%20Duncan%20-%2007%20-%20Conflict%20(Original%20Mix).mp3` },
    ],
  },
];

export const albums = rawAlbums.map((album) => {
  const cover = album.cover || DEFAULT_COVER;
  const tags = album.tags || [];
  const albumTracks = album.tracks.map((track) => ({
    singer: "Seth Duncan",
    cover,
    tags: track.tags || tags,
    ...track,
  }));
  return {
    ...album,
    cover,
    tags,
    tracks: albumTracks,
  };
});
