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
              <span>{track.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
