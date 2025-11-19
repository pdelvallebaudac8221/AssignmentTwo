import { create } from "zustand";
import { SHOES_ARRAY } from "../data/Shoes";
import { Shoes } from "../types/Shoes";

interface ShoeState {
  shoes: Shoes[],
  favoriteShoes: number[],
  addFavorite: (id: number) => void
  removeFavorite: (id: number) => void
}

const useShoes = create((set) => ({
  shoes: SHOES_ARRAY,
  favoriteShoes: [],
  addFavorite: (id: number) => set((state: ShoeState) => ({
    favoriteShoes: [...state.favoriteShoes, id]
  })),
  removeFavorite: (id: number) => set((state: ShoeState) => ({
    favoriteShoes: state.favoriteShoes.filter((s: number) => s !== id)
  })),
}))
