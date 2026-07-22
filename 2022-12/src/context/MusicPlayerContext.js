import { createContext, useContext, useState } from "react";

const MusicPlayerContext = createContext(null);

export function MusicPlayerProvider({ children }) {
  const [audioLists, setAudioLists] = useState([]);
  const [playIndex, setPlayIndex] = useState(0);

  const playGenre = (tracks, index = 0) => {
    // The player forces its internal play index to 0 whenever the audioLists
    // reference changes (see clearPriorAudioLists in Layout.js), so rotate the
    // clicked track to the front instead of relying on the index prop alone.
    const rotated = [...tracks.slice(index), ...tracks.slice(0, index)];
    setAudioLists(rotated);
    setPlayIndex(0);
  };

  return (
    <MusicPlayerContext.Provider
      value={{ audioLists, playIndex, setPlayIndex, playGenre }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  return useContext(MusicPlayerContext);
}
