import { create } from "zustand";
import { SHOES_ARRAY } from "../data/Shoes";
import { Shoes } from "../types/Shoes";

// Specify types of useShoes store
interface ShoeState {
  shoes: Shoes[],
  favoriteShoes: number[],
  favoriteShoesWithDetails: () => Shoes[],
  visitedShoes: number[],
  visitedCount: () => number,
  addFavorite: (id: number) => void,
  removeFavorite: (id: number) => void,
  setShoeAsVisited: (id: number) => void,
}

const useShoes = create<ShoeState>((set, get) => ({
  shoes: SHOES_ARRAY, // the list with all shoes' data (name, brand, type...)
  favoriteShoes: [], // array to save favorited shoes' IDs, 

  // a computed array of the favorited shoes plus their details
  // use this in the template to list the favorited shoes with their name, brand, type, etc
  favoriteShoesWithDetails: () => {
    const state = get();
    return state.shoes.filter(shoe => state.favoriteShoes.includes(shoe.shoeId))
  },

  visitedShoes: [], // array to save visited shoes' IDs
  visitedCount: () => get().visitedShoes.length, // a shorthand value for the total count of visited shoes

  // save a shoe to favorites, pushes only the ID of the shoe
  addFavorite: (id: number) => set((state: ShoeState) => ({
    favoriteShoes: [...state.favoriteShoes, id]
  })),

  // remove shoe from favorites, pushes only the ID of the shoe
  removeFavorite: (id: number) => set((state: ShoeState) => ({
    favoriteShoes: state.favoriteShoes.filter((s: number) => s !== id)
  })),

  // mark a shoe as "visited" by saving its ID
  setShoeAsVisited: (id: number) => set((state: ShoeState) => {
    if (state.visitedShoes.includes(id)) {
      return state
    } else {
      return { visitedShoes: [...state.visitedShoes, id]}
    }
  })
}))
