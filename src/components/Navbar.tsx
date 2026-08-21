import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/useCart"
import Cart from "./Cart"

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { cart } = useCart()

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0A0A0A]/95 text-[#F5F5F2] backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-black italic tracking-tighter"
        >
          RYKO
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/menu"
            className="text-sm font-bold uppercase tracking-widest transition-colors hover:text-[#E53935]"
          >
            Menú
          </Link>

          <Link
            to="/about_us"
            className="text-sm font-bold uppercase tracking-widest transition-colors hover:text-[#E53935]"
          >
            Nosotros
          </Link>

          <Link
            to="/contact"
            className="text-sm font-bold uppercase tracking-widest transition-colors hover:text-[#E53935]"
          >
            Contacto
          </Link>
        </div>

        {/* Desktop cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          type="button"
          className="group relative hidden overflow-hidden bg-[#E53935] px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition-transform duration-300 hover:-translate-y-1 md:inline-flex"
        >
          <span className="relative z-10 font-black transition-colors duration-300 group-hover:text-black">
            Carrito ({cartCount})
          </span>

          <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
        </button>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-12 w-12 items-center justify-center border border-white/20 transition-colors duration-200 hover:border-[#E53935] hover:text-[#E53935] md:hidden"
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
        >
          <span className="text-xl font-black">
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6">
          <div className="flex flex-col">
            <a
              href="/menu"
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-white/10 py-4 text-lg font-black uppercase tracking-tight transition-colors hover:text-[#E53935]"
            >
              Menú
            </a>

            <a
              href="/about_us"
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-white/10 py-4 text-lg font-black uppercase tracking-tight transition-colors hover:text-[#E53935]"
            >
              Nosotros
            </a>

            <a
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-white/10 py-4 text-lg font-black uppercase tracking-tight transition-colors hover:text-[#E53935]"
            >
              Contacto
            </a>

            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false)
                setIsCartOpen(true)
              }}
              className="group relative mt-5 inline-flex w-full overflow-hidden bg-[#E53935] px-6 py-4 text-sm font-black uppercase tracking-widest text-white"
            >
              <span className="relative z-10 w-full text-center transition-colors duration-300 group-hover:text-black">
                Carrito ({cartCount})
              </span>

              <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          </div>
        </div>
      </div>

      {/* Cart */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </header>
  )
}

export default Navbar