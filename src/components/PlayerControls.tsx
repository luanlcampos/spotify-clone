import {
  AleatoryIcon,
  DeviceIcon,
  ForwardIcon,
  FullScreenIcon,
  PlayIcon,
  QueueIcon,
  RepeatIcon,
  VolumeIcon,
} from "./icons/PlayerIcons";

const PlayerControls = () => {
  return (
    <div className="player-controls flex flex-1 max-w-[50%] flex-col  items-center justify-center gap-1">
      <div className="controls flex gap-x-5 ">
        <button className="fill-white hover:opacity-100 opacity-50 text-white  py-2 px-2">
          <AleatoryIcon />
        </button>
        <button className="fill-white hover:opacity-100 opacity-50 text-white  py-2 px-2">
          <ForwardIcon />
        </button>
        <button className="play bg-transparent bg-white text-black py-2 px-2 rounded-full hover:scale-110">
          <PlayIcon />
        </button>
        <button className="fill-white hover:opacity-100 opacity-50 text-white  py-2 px-2 rotate-180">
          <ForwardIcon />
        </button>
        <button className="fill-white hover:opacity-100 opacity-50 text-white  py-2 px-2">
          <RepeatIcon />
        </button>
      </div>

      <div className="volume-control flex items-center justify-end w-full">
        <span>0:02</span>
        <div className="relative z-10 volume-slider bg-gray-500 h-0.5 w-full mx-2 rounded-full">
          <div className="absolute volume-slider bg-white z-0 h-0.5 w-4  rounded-full"></div>
        </div>
        <span>1:42</span>
      </div>
    </div>
  );
};

export default PlayerControls;
