import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
}));

// Note: for setSearchText method, only set value for "searchText" and leave the other fields empty,
// so when searching we'll get results from all categories

export default useQueryStore;