import { useCart } from "../context/useCart"
import { useNavigate } from "react-router-dom"

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

function Cart({ isOpen, onClose }: CartProps) {
  const navigate = useNavigate()

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart()

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  )

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col overflow-hidden bg-[#0A0A0A] text-[#F5F5F2] shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="relative border-b border-white/10 px-6 py-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="mb-1 text-[10px] font-black uppercase tracking-[0.3em] text-[#E53935]">
                RYKO ORDER
              </p>

              <h2 className="text-4xl font-black uppercase leading-none tracking-tighter">
                Tu RYKO
              </h2>
            </div>

            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center border border-white/20 text-5xl font-black transition-all duration-200 hover:border-[#E53935] hover:bg-[#E53935] hover:rotate-90"
              aria-label="Cerrar carrito"
            >
              ×
            </button>
          </div>

          {/* Decorative line */}
          <div className="absolute bottom-0 left-6 h-0.5 w-16 bg-[#E53935]" />
        </div>

        {/* Products */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
          {cart.length === 0 ? (
            <div className="flex h-full items-center justify-center text-center">
              <div>
                <p className="text-6xl font-black uppercase leading-none tracking-tighter">
                  Está
                  <br />
                  vacío
                </p>

                <div className="mx-auto mt-6 h-1 w-12 bg-[#E53935]" />

                <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-white/40">
                  El hambre no espera
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <article
                  key={item.product.id}
                  className="group border border-white/10 bg-[#151515] p-3 transition-colors duration-200 hover:border-white/20"
                >
                  <div className="flex gap-4">
                    {/* Product image */}
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden bg-[#0A0A0A]">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Product info */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-lg font-black uppercase leading-none tracking-tight">
                            {item.product.name}
                          </h3>

                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="shrink-0 text-[10px] font-black uppercase tracking-widest text-white/30 transition-colors hover:text-[#E53935]"
                          >
                            ×
                          </button>
                        </div>

                        <p className="mt-2 text-xs font-bold text-white/40">
                          ${item.product.price.toFixed(2)} c/u
                        </p>
                      </div>

                      <div className="mt-3 flex items-end justify-between">
                        {/* Quantity */}
                        <div className="flex items-center border border-white/20">
                          <button
                            onClick={() => decreaseQuantity(item.product.id)}
                            className="flex h-8 w-8 items-center justify-center text-lg font-black transition-colors hover:bg-[#F5F5F2] hover:text-[#0A0A0A]"
                          >
                            −
                          </button>

                          <span className="flex h-8 min-w-8 items-center justify-center border-x border-white/20 text-xs font-black">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increaseQuantity(item.product.id)}
                            className="flex h-8 w-8 items-center justify-center text-lg font-black transition-colors hover:bg-[#E53935] hover:text-white"
                          >
                            +
                          </button>
                        </div>

                        {/* Item total */}
                        <span className="text-lg font-black">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-white/10 bg-[#0A0A0A] px-6 py-4">
            {/* Subtotal */}
            <div className="mb-4 flex items-end justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
                  Tu total
                </p>

                <p className="mt-1 text-sm font-black uppercase tracking-widest">
                  Subtotal
                </p>
              </div>

              <span className="text-3xl font-black leading-none tracking-tighter">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            {/* Checkout button */}
            <button
              onClick={() => {
                onClose()
                navigate("/checkout")
              }}
              className="group relative w-full overflow-hidden bg-[#E53935] px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-white"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0A0A0A]">
                Pedir ahora
              </span>

              <span className="absolute inset-0 origin-left scale-x-0 bg-[#F5F5F2] transition-transform duration-300 group-hover:scale-x-100" />
            </button>

            {/* Clear cart */}
            <button
              onClick={clearCart}
              className="mt-4 w-full text-[10px] font-black uppercase tracking-[0.25em] text-white/30 transition-colors hover:text-[#E53935]"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </aside>
    </>
  )
}

export default Cart