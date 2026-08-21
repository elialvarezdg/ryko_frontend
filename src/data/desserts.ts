export interface Dessert {
  id: number
  name: string
  description: string
  price: number
  tag?: string
  image: string
}

export const desserts: Dessert[] = [
  {
    id: 1,
    name: "RYKO Brownie",
    description: "Chocolate intenso para terminar arriba.",
    price: 300,
    tag: "Sweet",
    image: "images/desserts/ryko_brownie.png",
  },
  {
    id: 2,
    name: "Cheesecake RYKO",
    description: "Cremoso, suave y con estilo propio.",
    price: 400,
    tag: "Special",
    image: "images/desserts/ryko_cheesecake.png",
  },
]