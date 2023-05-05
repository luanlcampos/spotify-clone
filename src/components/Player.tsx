import PlayerControls from "./PlayerControls";
import PlayerRightControls from "./PlayerRightControls";
import PlayerSongInfo from "./PlayerSongInfo";

const Player = () => {
  return (
    <div className="footer-player bg-black flex items-center justify-between h-full px-4">
      <PlayerSongInfo />
      <PlayerControls />
      <PlayerRightControls />
    </div>
  );
};

export default Player;
