import { useState } from "react";

export default function AlbumCard({ album, onPlayTrack }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="albumEntry">
      <button
        className="trackCard albumCard"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        <img src={album.cover} alt={album.name} />
        <span className="trackName">
          {album.name}
          <span className={`chevron${expanded ? " expanded" : ""}`}>›</span>
        </span>
        <span className="trackYear">{album.year}</span>
        {album.tags.length > 0 && (
          <span className="tagList">
            {album.tags.map((tag) => (
              <span className="tagPill" key={tag}>
                {tag}
              </span>
            ))}
          </span>
        )}
      </button>
      {expanded && (
        <div className="albumTracklist">
          {album.tracks.map((track, index) => (
            <button
              key={track.name}
              className="albumTrackRow"
              onClick={() => onPlayTrack(index)}
            >
              <span className="albumTrackNumber">{index + 1}</span>
              <span className="albumTrackText">
                <span className="albumTrackName">{track.name}</span>
                {track.notes && (
                  <span className="notesPopup">{track.notes}</span>
                )}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
