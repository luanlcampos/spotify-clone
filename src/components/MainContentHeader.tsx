import {
  DownloadIcon,
  GoBackIcon,
  ProfileIcon,
} from "./icons/MainContentHeaderIcons";

const MainContentHeader = () => {
  return (
    <div className="header flex w-full h-20 items-center">
      <div className="nav-buttons flex-1">
        <button className="go-back fill-white p-2 rounded-full bg-black bg-opacity-20 cursor-not-allowed">
          <GoBackIcon />
        </button>
        <button className="go-back fill-white rotate-180 p-2 rounded-full bg-black bg-opacity-20 cursor-not-allowed">
          <GoBackIcon />
        </button>
      </div>
      <div className="right flex-1 flex w-full justify-end gap-x-4">
        <button className="fill-white flex items-center gap-x-2 border rounded-full px-3 py-2 text-sm bg-black hover:scale-105">
          {" "}
          <DownloadIcon />
          <span>Install App</span>
        </button>
        <button className="fill-white flex items-center gap-x-2 border rounded-full px-3 py-3 text-sm bg-black hover:scale-105">
          <ProfileIcon />
        </button>
      </div>
    </div>
  );
};
export default MainContentHeader;
