import { burgers } from "../data/burger"
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom"

function Menu() {
  return (
    <section
      id="menu"
      className="bg-[#0A0A0A] px-6 py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="relative mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#E53935]">
              El menú
            </p>

            <h2 className="ryko-display max-w-3xl text-6xl uppercase leading-[0.85] sm:text-7xl md:text-8xl">
              Elegí tu
              <span className="text-[#E53935]"> RYKO</span>
            </h2>
          </div>


          <p className="max-w-sm text-sm font-bold uppercase leading-relaxed tracking-wide text-white/40">
            Tres formas de hacer <br />las cosas diferentes
          </p>

        </div>


        {/* Products */}
        <div className="grid gap-6 md:grid-cols-3">

          {burgers.slice(0, 3).map((burger) => (
            <ProductCard
              key={burger.id}
              product={burger}
            />
          ))}

        </div>


        {/* Button */}
        <div className="mt-14 flex justify-center">

          <Link
            to="/menu"
            className="group relative inline-flex overflow-hidden bg-[#E53935] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10 font-black transition-colors duration-300 group-hover:text-black">
              Ver menú completo
            </span>

            <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
          </Link>

        </div>

      </div>
    </section>
  )
}

export default Menu