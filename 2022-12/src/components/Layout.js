import { Outlet } from "react-router-dom";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { MusicPlayerProvider, useMusicPlayer } from "../context/MusicPlayerContext";

const PersistentPlayer = () => {
  const { audioLists, playIndex } = useMusicPlayer();

  if (audioLists.length === 0) return null;

  return (
    <ReactJkMusicPlayer
      audioLists={audioLists}
      playIndex={playIndex}
      theme="light"
      mode="full"
      autoPlay
      showMediaSession
      remove={false}
    />
  );
};

const Layout = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Outlet />
      </div>
      <PersistentPlayer />
    </MusicPlayerProvider>
  );
};

export default Layout;
