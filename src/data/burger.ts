export interface Burger {
  id: number
  name: string
  description: string
  price: number
  tag?: string
  image: string
}

export const burgers: Burger[] = [
  {
    id: 1,
    name: "RYKO Classic",
    description: "Carne, queso, salsa de la casa y actitud.",
    price: 500,
    tag: "Original",
    image: "public/images/burgers/ryko_classic.png",
  },
  {
    id: 2,
    name: "RYKO Brava",
    description: "Carne, queso, salsa picante y mucho carácter.",
    price: 600,
    tag: "Picante",
    image: "public/images/burgers/ryko_brava.png",
  },
  {
    id: 3,
    name: "RYKO Double",
    description: "Doble carne, doble queso. Sin medias tintas.",
    price: 700,
    tag: "Double",
    image: "public/images/burgers/ryko_double.png",
  },
]