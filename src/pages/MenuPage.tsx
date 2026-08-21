import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import { menu } from "../data/menu"

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts =
    activeCategory === "all"
      ? menu
      : menu.filter((product) => product.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F2]">
      <Navbar />

      <main className="pt-20">
        {/* Header del menú */}
        <section className="px-6 pt-24 pb-16 md:pt-28">
          <div className="mx-auto max-w-7xl">
            <p className="mb-1 text-sm font-bold uppercase tracking-[0.25em] text-[#F5F5F2]/60">
              RYKO MENU
            </p>

            <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.9] tracking-tighter md:text-8xl">
              Escoge tu RYKO
            </h1>

            <p className="mt-8 max-w-xl text-lg text-[#F5F5F2]/60">
              Sabor callejero. Actitud propia.
            </p>
          </div>
        </section>

        {/* Categorías */}
        <section className="px-6 pb-12">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                activeCategory === "all"
                  ? "bg-[#F5F5F2] text-[#0A0A0A]"
                  : "border border-[#F5F5F2]/30 hover:bg-[#F5F5F2]/10"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setActiveCategory("burgers")}
              className={`rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                activeCategory === "burgers"
                  ? "bg-[#F5F5F2] text-[#0A0A0A]"
                  : "border border-[#F5F5F2]/30 hover:bg-[#F5F5F2]/10"
              }`}
            >
              Burgers
            </button>

            <button
              onClick={() => setActiveCategory("chicken")}
              className={`rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                activeCategory === "chicken"
                  ? "bg-[#F5F5F2] text-[#0A0A0A]"
                  : "border border-[#F5F5F2]/30 hover:bg-[#F5F5F2]/10"
              }`}
            >
              Chicken
            </button>

            <button
              onClick={() => setActiveCategory("sides")}
              className={`rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                activeCategory === "sides"
                  ? "bg-[#F5F5F2] text-[#0A0A0A]"
                  : "border border-[#F5F5F2]/30 hover:bg-[#F5F5F2]/10"
              }`}
            >
              Sides
            </button>

            <button
              onClick={() => setActiveCategory("drinks")}
              className={`rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                activeCategory === "drinks"
                  ? "bg-[#F5F5F2] text-[#0A0A0A]"
                  : "border border-[#F5F5F2]/30 hover:bg-[#F5F5F2]/10"
              }`}
            >
              Drinks
            </button>

            <button
              onClick={() => setActiveCategory("desserts")}
              className={`rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                activeCategory === "desserts"
                  ? "bg-[#F5F5F2] text-[#0A0A0A]"
                  : "border border-[#F5F5F2]/30 hover:bg-[#F5F5F2]/10"
              }`}
            >
              Desserts
            </button>
          </div>
        </section>

        {/* Productos */}
        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default MenuPage