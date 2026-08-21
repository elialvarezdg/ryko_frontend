import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/useCart"

function CheckoutPages() {
  const { cart } = useCart()

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [notes, setNotes] = useState("")

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  )

  const isFormComplete =
    name.trim() !== "" &&
    phone.trim() !== "" &&
    address.trim() !== "" &&
    notes.trim() !== ""

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!isFormComplete) return

    // Aquí conectaremos después la confirmación del pedido
    console.log("Pedido listo para confirmar")
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#0A0A0A] px-6 py-32 text-[#F5F5F2]">
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E53935]">
            RYKO ORDER
          </p>

          <h1 className="mt-4 text-6xl font-black uppercase leading-none tracking-tighter">
            Tu carrito
            <br />
            está vacío
          </h1>

          <p className="mx-auto mt-6 max-w-md text-sm font-bold uppercase tracking-widest text-white/40">
            Todavía no elegiste tu RYKO.
          </p>

          <Link
            to="/menu"
            className="group relative mt-10 inline-block overflow-hidden bg-[#E53935] px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-white"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0A0A0A]">
              Ver menú
            </span>

            <span className="absolute inset-0 origin-left scale-x-0 bg-[#F5F5F2] transition-transform duration-300 group-hover:scale-x-100" />
          </Link>

        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-24 text-[#F5F5F2]">
      <div className="mx-auto max-w-6xl">

        <Link
          to="/menu"
          className="group mb-10 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/40 transition-colors hover:text-[#E53935]"
        >
          <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>

          Volver al menú
        </Link>

        {/* Header */}
        <div className="mb-16">

          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E53935]">
            RYKO ORDER
          </p>

          <h1 className="mt-3 text-6xl font-black uppercase leading-none tracking-tighter md:text-8xl">
            Pedir
            <span className="text-[#E53935]"> ahora</span>
          </h1>

        </div>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">

          {/* Customer information */}
          <section>

            {/* Section label */}
            <div className="mb-10 flex items-center gap-4">

              <div className="h-px w-12 bg-[#E53935]" />

              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
                Tus datos
              </span>

            </div>

            {/* Form frame */}
            <div className="relative border border-white/10 p-6 sm:p-10 md:p-14">

              {/* Red corner */}
              <div className="absolute left-0 top-0 h-12 w-px bg-[#E53935]" />
              <div className="absolute left-0 top-0 h-px w-12 bg-[#E53935]" />

              <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="border-b border-white/10">

                  <label
                    htmlFor="name"
                    className="block pt-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/30"
                  >
                    Nombre
                  </label>

                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Tu nombre"
                    required
                    className="w-full bg-transparent py-5 text-2xl font-black uppercase tracking-tight text-[#F5F5F2] outline-none placeholder:text-white/15 focus:placeholder:text-white/30 sm:text-3xl"
                  />

                </div>

                {/* Phone */}
                <div className="border-b border-white/10">

                  <label
                    htmlFor="phone"
                    className="block pt-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/30"
                  >
                    Teléfono
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="Tu teléfono"
                    required
                    className="w-full bg-transparent py-5 text-2xl font-black uppercase tracking-tight text-[#F5F5F2] outline-none placeholder:text-white/15 focus:placeholder:text-white/30 sm:text-3xl"
                  />

                </div>

                {/* Address */}
                <div className="border-b border-white/10">

                  <label
                    htmlFor="address"
                    className="block pt-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/30"
                  >
                    Dirección de entrega
                  </label>

                  <textarea
                    id="address"
                    rows={3}
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    placeholder="¿Dónde te llevamos tu RYKO?"
                    required
                    className="w-full resize-none bg-transparent py-5 text-2xl font-black uppercase tracking-tight text-[#F5F5F2] outline-none placeholder:text-white/15 focus:placeholder:text-white/30 sm:text-3xl"
                  />

                </div>

                {/* Notes */}
                <div className="border-b border-white/10">

                  <label
                    htmlFor="notes"
                    className="block pt-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/30"
                  >
                    Notas
                  </label>

                  <textarea
                    id="notes"
                    rows={3}
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    placeholder="Algo más que debamos saber..."
                    required
                    className="w-full resize-none bg-transparent py-5 text-2xl font-black uppercase tracking-tight text-[#F5F5F2] outline-none placeholder:text-white/15 focus:placeholder:text-white/30 sm:text-3xl"
                  />

                </div>

                {/* Mobile confirmation */}
                <div className="mt-10 lg:hidden">

                  <button
                    type="submit"
                    disabled={!isFormComplete}
                    className={`group relative w-full overflow-hidden px-6 py-5 text-sm font-black uppercase tracking-[0.2em] transition-transform duration-300 ${
                      isFormComplete
                        ? "bg-[#E53935] text-white hover:-translate-y-1"
                        : "cursor-not-allowed bg-white/10 text-white/30"
                    }`}
                  >
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isFormComplete
                          ? "group-hover:text-[#0A0A0A]"
                          : ""
                      }`}
                    >
                      Confirmar pedido
                    </span>

                    {isFormComplete && (
                      <span className="absolute inset-0 origin-left scale-x-0 bg-[#F5F5F2] transition-transform duration-300 group-hover:scale-x-100" />
                    )}
                  </button>

                </div>

              </form>

            </div>

          </section>

          {/* Order summary */}
          <aside className="h-fit border border-white/10 p-6 md:p-8">

            <div className="flex items-center gap-4">

              <div className="h-px w-8 bg-[#E53935]" />

              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
                Tu pedido
              </p>

            </div>

            <div className="my-8 space-y-5 border-y border-white/10 py-6">

              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-start justify-between gap-4"
                >

                  <div>

                    <p className="text-sm font-black uppercase">
                      {item.product.name}
                    </p>

                    <p className="mt-1 text-xs font-bold text-white/40">
                      × {item.quantity}
                    </p>

                  </div>

                  <span className="text-sm font-black">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>

                </div>
              ))}

            </div>

            <div className="flex items-end justify-between">

              <span className="text-xs font-black uppercase tracking-widest text-white/40">
                Subtotal
              </span>

              <span className="text-3xl font-black tracking-tighter">
                ${subtotal.toFixed(2)}
              </span>

            </div>

            {/* Desktop confirmation */}
            <button
              type="submit"
              disabled={!isFormComplete}
              onClick={() => {
                if (!isFormComplete) return

                console.log("Pedido listo para confirmar")
              }}
              className={`group relative mt-8 hidden w-full overflow-hidden px-6 py-5 text-sm font-black uppercase transition-transform duration-300 lg:block ${
                isFormComplete
                  ? "bg-[#E53935] text-white hover:-translate-y-1"
                  : "cursor-not-allowed bg-white/10 text-white/30"
              }`}
            >

              <span
                className={`relative z-10 transition-colors duration-300 ${
                  isFormComplete
                    ? "group-hover:text-[#0A0A0A]"
                    : ""
                }`}
              >
                Confirmar pedido
              </span>

              {isFormComplete && (
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#F5F5F2] transition-transform duration-300 group-hover:scale-x-100" />
              )}

            </button>

            {!isFormComplete && (
              <p className="mt-4 text-center text-[9px] font-black uppercase tracking-[0.25em] text-white/20">
                Completa tus datos para continuar
              </p>
            )}

          </aside>

        </div>

      </div>
    </main>
  )
}

export default CheckoutPages