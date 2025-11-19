import { create } from "zustand";
import { SHOES_ARRAY } from "../data/Shoes";
import { Shoes } from "../types/Shoes";

interface ShoeState {
  shoes: Shoes[],
  favoriteShoes: number[],
  visitedShoes: number[],
  visitedCount: () => number,
  addFavorite: (id: number) => void,
  removeFavorite: (id: number) => void,
  setShoeAsVisited: (id: number) => void,
}

const useShoes = create<ShoeState>((set, get) => ({
  shoes: SHOES_ARRAY,
  favoriteShoes: [],
  visitedShoes: [],
  visitedCount: () => get().visitedShoes.length,
  addFavorite: (id: number) => set((state: ShoeState) => ({
    favoriteShoes: [...state.favoriteShoes, id]
  })),
  removeFavorite: (id: number) => set((state: ShoeState) => ({
    favoriteShoes: state.favoriteShoes.filter((s: number) => s !== id)
  })),
  setShoeAsVisited: (id: number) => set((state: ShoeState) => {
    if (state.visitedShoes.includes(id)) {
      return state
    } else {
      return { visitedShoes: [...state.visitedShoes, id]}
    }
  })
}))
