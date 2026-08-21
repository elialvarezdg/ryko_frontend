import { createContext } from "react"
import type { Product } from "../data/menu"

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
)