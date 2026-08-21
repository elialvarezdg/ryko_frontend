function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] text-[#F5F5F2]">

      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-0 px-6 py-2 md:grid-cols-[0.85fr_1.15fr] md:py-1">

        {/* Content */}
        <div className="relative z-20 md:translate-x-15">

          <h1 className="ryko-display max-w-4xl text-7xl uppercase leading-[0.8] sm:text-8xl lg:text-[9rem]">
            Hazlo
            <br />
            <span className="text-[#E53935]">RYKO</span>
          </h1>

          <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/50 sm:text-base">
            Una mordida. Una actitud. Lo demás sobra.
          </p>

          <a
            href="#menu"
            className="group relative mt-10 inline-flex overflow-hidden bg-[#E53935] px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition-transform duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Ver menú
            </span>

            <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
          </a>

        </div>

        {/* Product */}
        <div className="relative flex min-h-105 items-center justify-center md:min-h-140">

          {/* Graphic circle */}
          <svg
            className="absolute h-80 w-80 text-white/20 sm:h-105 sm:w-105 lg:h-150 lg:w-150"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            <defs>
              <path
                id="ryko-circle"
                d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                fill="none"
              />
            </defs>

            <text
              className="fill-current text-[8px] font-black uppercase tracking-[0.35em]"
            >
              <textPath href="#ryko-circle">
                RYKO • HAZLO RYKO • RYKO • PÁSALA RYKO • RYKO • HAZLO RYKO • RYKO • PÁSALA RYKO •
              </textPath>
            </text>
          </svg>

          {/* Graphic square */}
          <div className="absolute h-65 w-65 -rotate-5 border border-[#E53935] sm:h-85 sm:w-85 lg:h-105 lg:w-105" />

          <img
            src={`${import.meta.env.BASE_URL}images/burgers/ryko_classic.png`}
            alt="RYKO Classic"
            className="relative z-10 w-[90%] max-w-130 object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
          />

          <div className="absolute bottom-6 right-0 z-20 border-l-2 border-[#E53935] pl-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/60">
            RYKO CLASSIC
            <br />
            <span className="text-[#E53935]">01 / 03</span>
          </div>

          <span className="absolute -bottom-12 -right-8 select-none text-[140px] font-black uppercase italic leading-none text-white/2.5 sm:text-[200px]">
            RYKO
          </span>

        </div>

      </div>

      {/* Bottom detail */}
      <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/10 px-6 py-4 text-[9px] font-black uppercase tracking-[0.25em] text-white/30">
        <span>Hazlo RYKO</span>
        <span>01 / 03</span>
        <span>Scroll</span>
      </div>

    </section>
  )
}

export default Hero