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

const PlayerRightControls = () => {
  return (
    <div className="volume-control flex  items-center justify-end">
      <button className="fill-white hover:opacity-100 opacity-50 text-white  py-2 px-2">
        <QueueIcon />
      </button>
      <button className="fill-white hover:opacity-100 opacity-50 text-white  py-2 px-2">
        <DeviceIcon />
      </button>
      <button className="fill-white hover:opacity-100 opacity-50 text-white  py-2 px-2">
        <VolumeIcon />
      </button>
      <div className="volume-slider bg-white h-0.5 w-20 mx-2 rounded-full"></div>
      <button className="fill-white hover:opacity-100 opacity-50 text-white  py-2 px-2">
        <FullScreenIcon />
      </button>
    </div>
  );
};

export default PlayerRightControls;
