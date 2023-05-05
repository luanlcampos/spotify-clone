const LibraryNavFilterSelect = () => {
  return (
    <div className="right flex justify-end select-filter text-sm items-center gap-x-2 hover:cursor-pointer">
      <span>Recents</span>
      <svg
        width={16}
        height={16}
        aria-hidden="true"
        className="fill-white opacity-50 rotate-180"
        data-encore-id="icon"
      >
        <path d="M14 10 8 4l-6 6h12z" />
      </svg>
    </div>
  );
};

export default LibraryNavFilterSelect;
