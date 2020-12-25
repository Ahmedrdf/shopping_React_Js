export interface IProduct {
  id?: number;
  code?: string;
  nom?: string;
}

export class Product implements IProduct {
  constructor(public id?: number, public code?: string, public nom?: string) {}
}
