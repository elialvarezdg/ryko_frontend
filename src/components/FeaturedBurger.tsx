function FeaturedBurger() {
  return (
    <section
      id="featuredburger"
      className="relative overflow-hidden bg-[#F5F5F2] px-6 pb-20 pt-10 text-[#0A0A0A] md:pb-28 md:pt-14"
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#E53935]">
              La estrella
            </p>

            <h2 className="ryko-display max-w-4xl text-7xl uppercase leading-[0.8] sm:text-8xl lg:text-[9rem]">
              Esto es
              <span className="text-[#E53935]"> RYKO</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm font-bold uppercase leading-relaxed tracking-wide text-black/50">
            Una burger hecha para quienes <br />no quieren comer como todos
          </p>
        </div>

        {/* Producto destacado */}
        <div className="relative grid overflow-hidden bg-[#0A0A0A] md:grid-cols-2">

          {/* Número decorativo */}
          <span className="pointer-events-none absolute -left-5 top-1/2 z-0 -translate-y-1/2 text-[10rem] font-black leading-none text-white/3 sm:text-[14rem] md:text-[18rem]">
            01
          </span>

          {/* Imagen */}
          <div className="relative flex min-h-105 items-center justify-center overflow-hidden bg-[#0A0A0A] md:min-h-130">
            <img
              src={`${import.meta.env.BASE_URL}images/burgers/ryko_double.png`}
              alt="RYKO Double"
              className="relative z-10 w-[75%] max-w-xl object-contain transition-transform duration-500 hover:scale-105"
            />

            {/* Etiqueta */}
            <span className="absolute left-4 top-4 z-20 bg-[#E53935] px-3 py-2 text-xs font-black uppercase tracking-widest text-white">
              La estrella
            </span>
          </div>

          {/* Información */}
          <div className="relative flex flex-col justify-between overflow-hidden p-8 text-white sm:p-12 md:p-16">

            {/* Elemento gráfico */}
            <span className="pointer-events-none absolute -bottom-16 -right-6 text-[12rem] font-black leading-none text-white/2.5 sm:text-[16rem]">
              R
            </span>

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-2 w-2 bg-[#E53935]" />

                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#E53935]">
                  RYKO ORIGINAL
                </p>
              </div>

              <h3 className="text-6xl font-black uppercase leading-[0.82] tracking-tighter sm:text-7xl md:text-8xl">
                RYKO
                <br />
                <span className="text-[#E53935]">Double</span>
              </h3>

              <div className="mt-8 max-w-md">
                <p className="text-base font-medium leading-relaxed text-white/50">
                  Doble carne, doble queso.
                  <br />
                  Sin medias tintas.
                </p>

                <p className="mt-3 text-sm font-black uppercase tracking-[0.2em] text-white">
                  Simple. Directa. Sin excusas.
                </p>
              </div>
            </div>

            {/* Precio + botón */}
            <div className="relative z-10 mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <p className="mb-1 text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                  Precio
                </p>

                <span className="text-4xl font-black tracking-tight">
                  $700.00
                </span>
              </div>

              <a
                href="#menu"
                className="group relative inline-flex overflow-hidden bg-[#E53935] px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 font-black transition-colors duration-300 group-hover:text-black">
                  Ver Menú
                </span>

                <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </div>
          </div>

          {/* Identificador */}
          <span className="pointer-events-none absolute right-4 top-4 z-20 text-[10px] font-black uppercase tracking-[0.35em] text-white/30">
            RYKO / 003
          </span>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBurger