export interface Drink {
  id: number
  name: string
  description: string
  price: number
  tag?: string
  image: string
}

export const drinks: Drink[] = [
  {
    id: 1,
    name: "Coca Cola",
    description: "El clásico que acompaña cualquier RYKO.",
    price: 150,
    tag: "Classic",
    image: "public/images/drinks/ryko_coca_cola.png",
  },
  {
    id: 2,
    name: "RYKO Fresh",
    description: "Limonada fresca con actitud RYKO.",
    price: 250,
    tag: "House",
    image: "public/images/drinks/ryko_fresh.png",
  },
  {
    id: 3,
    name: "RYKO Shake",
    description: "Batido cremoso para cerrar la experiencia.",
    price: 350,
    tag: "Sweet",
    image: "public/images/drinks/ryko_shake.png",
  },
]