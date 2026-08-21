function Manifesto() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[#E53935] px-6 py-20 text-[#0A0A0A] md:py-24">
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-between">

        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-black pb-4 text-[10px] font-black uppercase tracking-[0.3em]">
          <span>Esto es RYKO</span>
          <span>01 / Manifiesto</span>
        </div>


        {/* Main */}
        <div className="grid flex-1 items-center gap-10 py-8 md:grid-cols-[1.1fr_0.9fr] md:gap-6">

          {/* Text */}
          <div className="relative">

            <p className="mb-6 text-xs font-black uppercase tracking-[0.35em]">
              No venimos a hacer
            </p>

            <h2 className="ryko-display text-6xl uppercase leading-[0.76] sm:text-8xl md:text-[8rem] lg:text-[9rem]">
              Lo de
              <br />
              <span className="text-white">
                Siempre
              </span>
            </h2>


            <div className="mt-10 flex flex-wrap gap-4">

              <span className="border-2 border-black px-4 py-2 text-xs font-black uppercase tracking-[0.25em]">
                Sin reglas
              </span>

              <span className="border-2 border-black px-4 py-2 text-xs font-black uppercase tracking-[0.25em]">
                Sin excusas
              </span>

            </div>

          </div>


          {/* Graphic */}
          <div className="relative flex min-h-90 items-center justify-center md:min-h-112.5">

            {/* Square */}
            <div className="absolute h-60 w-60 -rotate-6 border border-white sm:h-72 sm:w-72" />


            {/* Burger */}
            <img
              src="/images/burgers/ryko_brava.png"
              alt="RYKO Brava"
              className="relative z-10 w-[85%] max-w-96 object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />


            {/* Label */}
            <div className="absolute bottom-8 right-0 z-20 border-l-2 border-black pl-3 text-[9px] font-black uppercase tracking-[0.25em]">

              RYKO
              <br />

              <span className="text-black/50">
                02 / 03
              </span>

            </div>


            {/* Corner detail */}
            <div className="absolute left-6 top-10 h-16 w-16 border-l-2 border-t-2 border-black" />

          </div>

        </div>


        {/* Bottom */}
        <div className="grid gap-8 border-t-2 border-black pt-8 md:grid-cols-2 md:items-end">


          <p className="max-w-xl text-base font-bold leading-relaxed sm:text-lg">
            No seguimos el molde.
            <br />
            No necesitamos permiso.
          </p>


          <div className="flex flex-col items-start md:items-end">

            <p className="mb-2 text-xs font-black uppercase tracking-[0.3em]">
              Una burger. Una actitud.
            </p>

            <p className="text-4xl font-black uppercase tracking-tighter sm:text-6xl">
              Hazlo RYKO
            </p>

          </div>

        </div>

      </div>


      {/* Background typography */}
      <span className="pointer-events-none absolute -bottom-24 -left-8 select-none text-[180px] font-black uppercase italic leading-none text-black/5 sm:text-[240px] md:text-[320px]">
        RYKO
      </span>


      {/* Extra graphic */}
      <span className="pointer-events-none absolute right-10 top-20 hidden text-[10px] font-black uppercase tracking-[0.4em] text-black/30 md:block">
        RYKO / 2026
      </span>

    </section>
  )
}

export default Manifesto