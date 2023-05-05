import MainNav from "./MainNav";
import LibraryNav from "./LibraryNav";

const NavBar = () => {
  return (
    <div className="navbar flex flex-col gap-y-3 w-[var(--nav-width)] h-full">
      <MainNav />
      <LibraryNav />
    </div>
  );
};

export default NavBar;
