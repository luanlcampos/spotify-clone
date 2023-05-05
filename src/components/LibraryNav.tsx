import LibraryNavBody from "./LibraryNavBody";
import LibraryNavChips from "./LibraryNavChips";
import LibraryNavFilter from "./LibraryNavFilter";
import LibraryNavHeader from "./LibraryNavHeader";

const LibraryNav = () => {
  return (
    <div className="library-nav flex flex-col gap-y-3 px-3 py-2 bg-[var(--foreground-color)] rounded-lg h-[calc(100%-80px)]">
      <LibraryNavHeader />
      <LibraryNavChips />
      <LibraryNavBody />
    </div>
  );
};

export default LibraryNav;
