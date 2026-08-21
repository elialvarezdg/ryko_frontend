export interface Chicken {
  id: number
  name: string
  description: string
  price: number
  tag?: string
  image: string
}

export const chicken: Chicken[] = [
  {
    id: 1,
    name: "RYKO Chicken",
    description: "Pollo crujiente, queso, salsa de la casa y actitud.",
    price: 550,
    tag: "Crispy",
    image: "public/images/chickens/ryko_chicken.png",
  },
  {
    id: 2,
    name: "Chicken Bites",
    description: "Trozos de pollo crujiente con salsa RYKO.",
    price: 450,
    tag: "Share",
    image: "public/images/chickens/ryko_chicken_bites.png",
  },
]