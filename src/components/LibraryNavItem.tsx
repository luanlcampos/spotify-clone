import { LibraryNavItem } from "@/types/LibraryNavItem";
import PinIcon from "./icons/PinIcon";
import { isTemplateSpan } from "typescript";

type LibraryNavItemProps = {
  item: LibraryNavItem;
};

const LibraryNavItem = ({ item }: LibraryNavItemProps) => {
  return (
    <li className="flex px-2 py-1 text-sm gap-x-3 items-center hover:bg-[#282828] hover:cursor-pointer rounded-md">
      <div className="img ">
        <img src={item.imageUrl} alt="image" className="rounded-md" />
      </div>
      <div className="desc flex flex-col h-full justify-center mt-1 ">
        <span className="font-bold">{item.title}</span>
        <div className="scnd-line flex gap-x-2 items-center text-opacity-50">
          {item.isPinned ? (
            <PinIcon className="fill-[#1ed760] opacity-100" />
          ) : (
            ""
          )}{" "}
          {item.type[0].toUpperCase() + item.type.slice(1)}{" "}
          {item.songsQty ? " • " + item.songsQty + " songs" : ""}
          {item.author ? " • " + item.author : ""}
        </div>
      </div>
    </li>
  );
};

export default LibraryNavItem;
