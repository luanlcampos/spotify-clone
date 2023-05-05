import LibraryNavFilter from "./LibraryNavFilter";
import useSWR from "swr";
import { LibraryNavItem as LibraryNavItemType } from "@/types/LibraryNavItem";
import LibraryNavItem from "./LibraryNavItem";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const LibraryNavBody = () => {
  const { data, error } = useSWR<LibraryNavItemType[]>(
    "/api/getLibraryItems",
    fetcher
  );
  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;

  return (
    <div className="body overflow-auto w-full px-3">
      <LibraryNavFilter />
      <ul className="flex flex-col gap-y-2">
        {data.map((e) => {
          return <LibraryNavItem item={e} key={e.author} />;
        })}
      </ul>
    </div>
  );
};

export default LibraryNavBody;
