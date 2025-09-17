import { products } from "../api/products";
import { ProductDTO } from "../models/ProductDTO";

export function findByPrice(min: number, max: number): ProductDTO[] {
  return products
    .filter((x) => x.price >= min && x.price <= max)
    .sort((x, y) => x.price - y.price);
}
