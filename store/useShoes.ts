import { create } from "zustand";
import { SHOES_ARRAY } from "../data/Shoes";
import { Shoes } from "../types/Shoes";

interface ShoeState {
  shoes: Shoes[];
  favoriteShoes: number[];
  visitedShoes: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  setShoeAsVisited: (id: number) => void;
}

export const useShoes = create<ShoeState>((set) => ({
  shoes: SHOES_ARRAY,
  favoriteShoes: [],
  visitedShoes: [],

  addFavorite: (id) =>
    set((state) => ({
      favoriteShoes: [...state.favoriteShoes, id],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favoriteShoes: state.favoriteShoes.filter((s) => s !== id),
    })),

  setShoeAsVisited: (id) =>
    set((state) =>
      state.visitedShoes.includes(id)
        ? state
        : { visitedShoes: [...state.visitedShoes, id] }
    ),
}));
