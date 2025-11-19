export enum ShoeType {
  Loafers,
  Boots,
  Sandals,
  Sports,
  Crocs,
  Sneakers,
}

export interface Shoes {
  shoeId: number,
  shoeName: string,
  brand: string,
  cost: number,
  shoeType: ShoeType,
  madeIn: string,
}

export const SHOES_ARRAY: Shoes[] = [
  { shoeId: 1, shoeName: "Classic Loafer", brand: "Allen Edmonds", cost: 180, shoeType: ShoeType.Loafers, madeIn: "USA" },
  { shoeId: 2, shoeName: "Desert Boot", brand: "Clarks", cost: 130, shoeType: ShoeType.Boots, madeIn: "UK" },
  { shoeId: 3, shoeName: "Trail Runner XT", brand: "Salomon", cost: 160, shoeType: ShoeType.Sports, madeIn: "France" },
  { shoeId: 4, shoeName: "Beach Slide", brand: "Adidas", cost: 35, shoeType: ShoeType.Sandals, madeIn: "Vietnam" },
  { shoeId: 5, shoeName: "Icon Clog", brand: "Crocs", cost: 55, shoeType: ShoeType.Crocs, madeIn: "China" },
  { shoeId: 6, shoeName: "Urban Sneaker", brand: "Nike", cost: 120, shoeType: ShoeType.Sneakers, madeIn: "Indonesia" },
  { shoeId: 7, shoeName: "Leather Moc Loafer", brand: "Cole Haan", cost: 150, shoeType: ShoeType.Loafers, madeIn: "India" },
  { shoeId: 8, shoeName: "Hiking Boot Pro", brand: "Merrell", cost: 170, shoeType: ShoeType.Boots, madeIn: "Bangladesh" },
  { shoeId: 9, shoeName: "Sportmax Sprint", brand: "Puma", cost: 110, shoeType: ShoeType.Sports, madeIn: "Vietnam" },
  { shoeId: 10, shoeName: "Trail Sandal", brand: "Teva", cost: 75, shoeType: ShoeType.Sandals, madeIn: "Cambodia" },
  { shoeId: 11, shoeName: "Marina Clog", brand: "Crocs", cost: 50, shoeType: ShoeType.Crocs, madeIn: "China" },
  { shoeId: 12, shoeName: "Street Runner", brand: "New Balance", cost: 140, shoeType: ShoeType.Sneakers, madeIn: "USA" },
  { shoeId: 13, shoeName: "Formal Loafer Pro", brand: "Florsheim", cost: 160, shoeType: ShoeType.Loafers, madeIn: "India" },
  { shoeId: 14, shoeName: "Winter Boot 500", brand: "Sorel", cost: 190, shoeType: ShoeType.Boots, madeIn: "Canada" },
  { shoeId: 15, shoeName: "Marathon Elite", brand: "Asics", cost: 150, shoeType: ShoeType.Sports, madeIn: "Japan" },
];