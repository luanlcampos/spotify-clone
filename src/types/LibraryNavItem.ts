export type LibraryNavItem = {
  type: string; // artist, playlist
  title: string;
  songsQty?: number;
  imageUrl: string;
  isPinned: boolean;
  author: string; // either artist name or playlist creator
};
