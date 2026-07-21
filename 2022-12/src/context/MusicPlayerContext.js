import { createContext, useContext, useState } from "react";

const MusicPlayerContext = createContext(null);

export function MusicPlayerProvider({ children }) {
  const [audioLists, setAudioLists] = useState([]);
  const [playIndex, setPlayIndex] = useState(0);

  const playGenre = (tracks, index = 0) => {
    setAudioLists(tracks);
    setPlayIndex(index);
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
