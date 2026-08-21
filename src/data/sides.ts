export interface Side {
  id: number
  name: string
  description: string
  price: number
  tag?: string
  image: string
}

export const sides: Side[] = [
  {
    id: 1,
    name: "RYKO Fries",
    description: "Papas crujientes con nuestro toque especial.",
    price: 250,
    tag: "Classic",
    image: "/images/sides/ryko_fries.png",
  },
  {
    id: 2,
    name: "Loaded Fries",
    description: "Papas, queso y salsa RYKO. Sin reglas.",
    price: 400,
    tag: "Favorita",
    image: "images/sides/ryko_loaded_fries.png",
  },
  {
    id: 3,
    name: "Onion Rings",
    description: "Aros de cebolla crujientes y llenos de sabor.",
    price: 350,
    tag: "Crunch",
    image: "images/sides/ryko_onion_rings.png",
  },
]