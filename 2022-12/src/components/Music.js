import "../styles/Music.css";
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
        return (
          <div className="genreSection" key={genre}>
            <h2 className="genreTitle">{genre}</h2>
            <div className="trackGrid">
              {genreAlbums.map((album) => (
                <AlbumCard
                  key={album.name}
                  album={album}
                  onPlayTrack={(index) => playGenre(album.tracks, index)}
                />
              ))}
              {genreTracks.map((track, index) => (
                <button
                  key={track.name}
                  className="trackCard"
                  onClick={() => playGenre(genreTracks, index)}
                >
                  <img src={track.cover} alt={track.name} />
                  <span className="trackName">{track.name}</span>
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
