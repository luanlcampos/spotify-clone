const PlayerSongInfo = () => {
  return (
    <div className="song-info text-white text-sm flex gap-x-4 items-center">
      <div className="song-image">
        <img src={`http://via.placeholder.com/50x50`} alt="img" className="" />
      </div>
      <div className="flex flex-col">
        <div className="song-name font-bold">Song Title Goes Here</div>
        <div className="song-artist ">Artist Name Goes Here</div>
      </div>
    </div>
  );
};

export default PlayerSongInfo;
