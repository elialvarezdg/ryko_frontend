import { useCart } from "../context/useCart"
import type { Product } from "../data/menu"

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <article className="group relative overflow-hidden bg-white text-[#0A0A0A] transition-transform duration-300 hover:-translate-y-2">

      {/* Product visual */}
      <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-[#0A0A0A]">

        <img
          src={product.image}
          alt={product.name}
          className="relative z-10 w-[88%] object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {product.tag && (
          <span className="absolute left-4 top-4 z-20 bg-[#E53935] px-3 py-2 text-xs font-black uppercase tracking-widest text-white">
            {product.tag}
          </span>
        )}

        <span className="absolute bottom-4 right-4 z-20 text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
          RYKO
        </span>

      </div>

      {/* Information */}
      <div className="p-6">

        <div className="flex items-start justify-between gap-4">

          <h3 className="ryko-display text-3xl uppercase leading-none transition-colors duration-300 group-hover:text-[#E53935]">
            {product.name}
          </h3>

          <span className="shrink-0 text-lg font-black">
            ${product.price.toFixed(2)}
          </span>

        </div>

        <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#0A0A0A]/60">
          {product.description}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-6 w-full border-2 border-[#0A0A0A] px-5 py-3 text-xs font-black uppercase tracking-widest transition-all duration-300 hover:border-[#E53935] hover:bg-[#E53935] hover:text-white"
        >
          Agregar
        </button>

      </div>
    </article>
  )
}

export default ProductCard