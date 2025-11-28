import { create } from "zustand";
import { SHOES_ARRAY } from "../data/Shoes";
import { Shoes } from "../types/Shoes";

/**
 * ShoeState Interface
 *
 * Defines the shape of our global shoe store state and available actions.
 *
 * State:
 * - shoes: Array of all available shoes
 * - favoriteShoes: Array of shoe IDs that user has marked as favorite
 * - visitedShoes: Array of shoe IDs that user has viewed (opened detail modal)
 *
 * Actions:
 * - addFavorite: Add a shoe to favorites list
 * - removeFavorite: Remove a shoe from favorites list
 * - setShoeAsVisited: Mark a shoe as visited (when user views details)
 */
interface ShoeState {
  shoes: Shoes[];
  favoriteShoes: number[];
  visitedShoes: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  setShoeAsVisited: (id: number) => void;
}

/**
 * useShoes Hook
 *
 * Global state management store using Zustand.
 * Manages all shoe-related data and user interactions including:
 * - The complete list of shoes
 * - User's favorite shoes
 * - Shoes the user has visited/viewed
 *
 * This hook can be used in any component to access or modify shoe state.
 */
export const useShoes = create<ShoeState>((set) => ({
  // Initialize with all shoes from the data file
  shoes: SHOES_ARRAY,
  // Start with empty favorites list
  favoriteShoes: [],
  // Start with empty visited list
  visitedShoes: [],

  /**
   * Add a shoe to the favorites list by its ID
   */
  addFavorite: (id) =>
    set((state) => ({
      favoriteShoes: [...state.favoriteShoes, id],
    })),

  /**
   * Remove a shoe from the favorites list by its ID
   */
  removeFavorite: (id) =>
    set((state) => ({
      favoriteShoes: state.favoriteShoes.filter((s) => s !== id),
    })),

  /**
   * Mark a shoe as visited by its ID
   * Only adds to the list if not already visited (prevents duplicates)
   */
  setShoeAsVisited: (id) =>
    set((state) =>
      state.visitedShoes.includes(id)
        ? state
        : { visitedShoes: [...state.visitedShoes, id] }
    ),
}));
