import LibraryNavFilterSelect from "./LibraryNavFilterSelect";

const LibraryNavFilter = () => {
  return (
    <div className="flex w-full py-2 justify-center">
      <div className="flex-1">
        <button className="hover:bg-[#282828] p-2 rounded-full ">
          <svg
            width={16}
            height={16}
            aria-hidden="true"
            className="fill-white opacity-50"
            data-encore-id="icon"
          >
            <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z" />
          </svg>
        </button>
      </div>
      <LibraryNavFilterSelect />
    </div>
  );
};

export default LibraryNavFilter;
