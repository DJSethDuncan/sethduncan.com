import "../styles/Music.css";
import { Link } from "react-router-dom";
import tracks, { albums } from "../data/tracks";
import { useMusicPlayer } from "../context/MusicPlayerContext";
import IndividualLink from "./IndividualLink";
import AlbumCard from "./AlbumCard";
import { NotesPopup } from "./NotesPopup";

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
  const { playGroup } = useMusicPlayer();

  const group = [
    ...new Set([
      ...albums.map((album) => album.group),
      ...tracks.map((track) => track.group),
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
      {group.map((group) => {
        const groupTracks = tracks.filter((track) => track.group === group);
        const groupAlbums = albums.filter((album) => album.group === group);
        const entries = [
          ...groupAlbums.map((album) => ({ type: "album", album })),
          ...groupTracks.map((track) => ({ type: "track", track })),
        ].sort((a, b) => {
          const yearA = a.type === "album" ? a.album.year : a.track.year;
          const yearB = b.type === "album" ? b.album.year : b.track.year;
          return yearB - yearA;
        });
        return (
          <div className="groupection" key={group}>
            <h2 className="groupTitle">{group}</h2>
            <div className="trackGrid">
              {entries.map((entry) =>
                entry.type === "album" ? (
                  <AlbumCard
                    key={entry.album.name}
                    album={entry.album}
                    onPlayTrack={(index) => playGroup(entry.album.tracks, index)}
                  />
                ) : (
                  <button
                    key={entry.track.name}
                    className="trackCard"
                    onClick={() => playGroup(groupTracks, groupTracks.indexOf(entry.track))}
                  >
                    <img src={entry.track.cover} alt={entry.track.name} />
                    <span className="trackName">{entry.track.name}</span>
                    <span className="trackYear">{entry.track.year}</span>
                    {entry.track.notes && <NotesPopup text={entry.track.notes} />}
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
