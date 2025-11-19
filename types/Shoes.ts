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