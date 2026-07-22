import { createContext, useContext, useRef, useState } from "react";

const MusicPlayerContext = createContext(null);

const STORAGE_KEY = "musicPlaybackState";
const SAVE_INTERVAL_MS = 10_000;

export function loadSavedPlaybackState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.audioLists) || parsed.audioLists.length === 0) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function MusicPlayerProvider({ children }) {
  const saved = useRef(loadSavedPlaybackState()).current;
  const [audioLists, setAudioLists] = useState(saved?.audioLists ?? []);
  const [playIndex, setPlayIndex] = useState(saved?.playIndex ?? 0);

  // Position to seek to once the resumed track starts playing. Cleared as
  // soon as it's used (or as soon as the user picks a new track directly).
  const pendingSeekTime = useRef(saved?.currentTime ?? null);
  const hasAttemptedRestore = useRef(false);
  const instanceRef = useRef(null);
  const lastSaveTimestamp = useRef(0);

  const playGroup = (tracks, index = 0) => {
    // The player forces its internal play index to 0 whenever the audioLists
    // reference changes (see clearPriorAudioLists in Layout.js), so rotate the
    // clicked track to the front instead of relying on the index prop alone.
    const rotated = [...tracks.slice(index), ...tracks.slice(0, index)];
    pendingSeekTime.current = null;
    setAudioLists(rotated);
    setPlayIndex(0);
  };

  const getAudioInstance = (instance) => {
    instanceRef.current = instance;
  };

  // Fires once per track start. On the very first play after mount, if we
  // restored a saved position, seek to it -- this is what makes "pick up
  // where they left off" actually resume mid-track instead of from 0:00.
  const onAudioPlay = () => {
    if (hasAttemptedRestore.current) return;
    hasAttemptedRestore.current = true;
    if (pendingSeekTime.current != null && instanceRef.current) {
      instanceRef.current.currentTime = pendingSeekTime.current;
    }
  };

  // Fires continuously during playback. audioInfo.playIndex reflects the
  // player's own live index (it advances this internally on auto-play-next,
  // independent of the playIndex we passed in), so persisting it -- rather
  // than our own playIndex state -- is what lets a refresh resume on
  // whichever track actually ended up playing, not just the one originally clicked.
  const onAudioProgress = (audioInfo) => {
    const now = Date.now();
    if (now - lastSaveTimestamp.current < SAVE_INTERVAL_MS) return;
    lastSaveTimestamp.current = now;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          audioLists,
          playIndex: audioInfo.playIndex,
          currentTime: audioInfo.currentTime,
        })
      );
    } catch {
      // Storage unavailable (private browsing, quota) -- resuming playback
      // position is a nice-to-have, not worth surfacing an error for.
    }
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        audioLists,
        playIndex,
        setPlayIndex,
        playGroup,
        getAudioInstance,
        onAudioPlay,
        onAudioProgress,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  return useContext(MusicPlayerContext);
}
