import "../styles/Music.css";
import { Link } from "react-router-dom";
import tracks, { albums } from "../data/tracks";
import { useMusicPlayer } from "../context/MusicPlayerContext";
import IndividualLink from "./IndividualLink";
import AlbumCard from "./AlbumCard";

const musicServiceLinks = [
  { text: "Bandcamp", link: "https://sethduncanmusic.bandcamp.com/" },
  {
    text: "Spotify",
    link: "https://open.spotify.com/artist/2t6ePx2o2UqGKXu0527JxJ",
  },
  {
    text: "Apple Music",
    link: "https://music.apple.com/us/artist/seth-duncan/1461326610",
  },
  {
    text: "YouTube",
    link: "https://www.youtube.com/channel/UC2EZLBOo_5SaZjrucDD1RDw",
  },
];

export default function Music() {
  const { playGenre } = useMusicPlayer();

  const genres = [
    ...new Set([
      ...tracks.map((track) => track.genre),
      ...albums.map((album) => album.genre),
    ]),
  ];

  return (
    <div id="musicPage">
      <Link to="/" className="homeLink">
        ← Home
      </Link>
      <h1 className="musicTitle">Music</h1>
      <div className="musicServiceLinks">
        {musicServiceLinks.map((service) => (
          <IndividualLink
            key={service.text}
            link={service.link}
            text={service.text}
            external
          />
        ))}
      </div>
      {genres.map((genre) => {
        const genreTracks = tracks.filter((track) => track.genre === genre);
        const genreAlbums = albums.filter((album) => album.genre === genre);
        const entries = [
          ...genreAlbums.map((album) => ({ type: "album", album })),
          ...genreTracks.map((track) => ({ type: "track", track })),
        ].sort((a, b) => {
          const yearA = a.type === "album" ? a.album.year : a.track.year;
          const yearB = b.type === "album" ? b.album.year : b.track.year;
          return yearB - yearA;
        });
        return (
          <div className="genreSection" key={genre}>
            <h2 className="genreTitle">{genre}</h2>
            <div className="trackGrid">
              {entries.map((entry) =>
                entry.type === "album" ? (
                  <AlbumCard
                    key={entry.album.name}
                    album={entry.album}
                    onPlayTrack={(index) => playGenre(entry.album.tracks, index)}
                  />
                ) : (
                  <button
                    key={entry.track.name}
                    className="trackCard"
                    onClick={() => playGenre(genreTracks, genreTracks.indexOf(entry.track))}
                  >
                    <img src={entry.track.cover} alt={entry.track.name} />
                    <span className="trackName">{entry.track.name}</span>
                    <span className="trackYear">{entry.track.year}</span>
                    {entry.track.note && (
                      <span className="trackNote">{entry.track.note}</span>
                    )}
                    {entry.track.tags.length > 0 && (
                      <span className="tagList">
                        {entry.track.tags.map((tag) => (
                          <span className="tagPill" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </span>
                    )}
                  </button>
                )
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
