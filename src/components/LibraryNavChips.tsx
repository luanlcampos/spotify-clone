type ChipType = {
  chipName: string;
};

const Chip = ({ chipName }: ChipType) => {
  return (
    <div className="chip bg-transparent">
      <span className="text-sm px-2 py-2 rounded-full bg-[#353535] hover:bg-[#424242] hover:cursor-pointer">
        {chipName}{" "}
      </span>
    </div>
  );
};

const LibraryNavChips = () => {
  return (
    <div className="chips-list flex gap-x-2 px-3 flex-wrap">
      <Chip chipName="Playlists" />
      <Chip chipName="Artists" />
      <Chip chipName="Albums" />
      <Chip chipName="Podcasts & Shows" />
    </div>
  );
};

export default LibraryNavChips;
