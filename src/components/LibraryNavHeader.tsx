const LibraryNavHeader = () => {
  return (
    <div className="header flex w-full items-center px-3 py-1 gap-x-3 ">
      <div className="flex gap-x-3 opacity-50 hover:opacity-100 hover:cursor-pointer">
        <svg
          width={24}
          height={24}
          aria-hidden="true"
          data-encore-id="icon"
          className="fill-white"
        >
          <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z" />
        </svg>
        <h2 className="whitespace-nowrap ">Your Library</h2>
      </div>
      <div className="right flex w-2/3 justify-end gap-x-3">
        <button className="opacity-50 hover:opacity-100 p-2 rounded-full hover:cursor-pointer hover:bg-[#1a1a1a] ">
          <svg
            width={16}
            height={16}
            aria-hidden="true"
            className="fill-white"
            data-encore-id="icon"
          >
            <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z" />
          </svg>
        </button>
        <button className="opacity-50 hover:opacity-100 p-2 rounded-full hover:cursor-pointer hover:bg-[#1a1a1a] ">
          <svg
            width={16}
            height={16}
            aria-hidden="true"
            className="fill-white"
            data-encore-id="icon"
          >
            <path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LibraryNavHeader;
