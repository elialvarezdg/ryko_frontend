import { burgers } from "./burger"
import { chicken } from "./chicken"
import { sides } from "./sides"
import { drinks } from "./drinks"
import { desserts } from "./desserts"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  tag?: string
  image: string
  category: string
}

export const menu: Product[] = [
  ...burgers.map((product) => ({
    ...product,
    id: `burgers-${product.id}`,
    category: "burgers",
  })),

  ...chicken.map((product) => ({
    ...product,
    id: `chicken-${product.id}`,
    category: "chicken",
  })),

  ...sides.map((product) => ({
    ...product,
    id: `sides-${product.id}`,
    category: "sides",
  })),

  ...drinks.map((product) => ({
    ...product,
    id: `drinks-${product.id}`,
    category: "drinks",
  })),

  ...desserts.map((product) => ({
    ...product,
    id: `desserts-${product.id}`,
    category: "desserts",
  })),
]