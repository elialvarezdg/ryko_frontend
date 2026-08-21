import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F2]">
      <Navbar />

      <main className="pt-20">

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-0 px-6 py-12 md:grid-cols-[1fr_1fr] md:py-4">

            {/* Content */}
            <div className="relative z-20">

              <p className="mb-6 text-[10px] font-black uppercase tracking-[0.35em] text-white/40">
                ABOUT RYKO
              </p>

              <h1 className="ryko-display max-w-3xl text-7xl uppercase leading-[0.8] tracking-tight sm:text-8xl lg:text-[8rem]">
                HAZLO
                <br />
                <span className="text-[#E53935]">DISTINTO</span>
              </h1>

              <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/50 sm:text-base">
                RYKO nació para hacer las cosas diferente.
                Con hambre. Con calle. Con actitud.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-[#E53935]" />

                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
                  Hazlo RYKO
                </span>
              </div>

            </div>

            {/* Graphic */}
            <div className="relative flex min-h-105 items-center justify-center md:min-h-140">

              {/* Circle */}
              <svg
                className="absolute h-80 w-80 text-white/20 sm:h-105 sm:w-105 lg:h-135 lg:w-135"
                viewBox="0 0 200 200"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="about-ryko-circle"
                    d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                    fill="none"
                  />
                </defs>

                <text
                  className="fill-current text-[8px] font-black uppercase tracking-[0.35em]"
                >
                  <textPath href="#about-ryko-circle">
                    RYKO • HAZLO RYKO • RYKO • PÁSALA RYKO • RYKO • HAZLO RYKO • RYKO • PÁSALA RYKO •
                  </textPath>
                </text>
              </svg>

              {/* Square */}
              <div className="absolute h-60 w-60 -rotate-6 border border-[#E53935] sm:h-75 sm:w-75 lg:h-95 lg:w-95" />

              {/* Inner square */}
              <div className="absolute h-44 w-44 rotate-6 border border-white/10 sm:h-60 sm:w-60 lg:h-75 lg:w-75" />

              {/* RYKO */}
              <span className="relative z-10 select-none text-[110px] font-black uppercase italic leading-none text-white/5 sm:text-[160px] lg:text-[200px]">
                RYKO
              </span>

              {/* Technical detail */}
              <div className="absolute bottom-8 right-0 z-20 border-l-2 border-[#E53935] pl-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/50">
                ABOUT RYKO
                <br />
                <span className="text-[#E53935]">
                  01 / 03
                </span>
              </div>

            </div>

          </div>

          {/* Bottom detail */}
          <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/10 px-6 py-4 text-[9px] font-black uppercase tracking-[0.25em] text-white/30">
            <span>RYKO</span>
            <span>01 / 03</span>
            <span>Scroll</span>
          </div>

        </section>

        {/* What is RYKO */}
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">

            {/* Section label */}
            <div className="mb-12">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">
                WHAT IS RYKO
              </span>
            </div>

            {/* Content */}
            <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-24">

              {/* Title */}
              <div>
                <h2 className="ryko-display max-w-4xl text-6xl uppercase leading-[0.82] tracking-tight sm:text-7xl md:text-8xl lg:text-[8rem]">
                  No es solo
                  <br />
                  <span className="text-[#E53935]">
                    comida
                  </span>
                </h2>
              </div>

              {/* Description */}
              <div className="flex flex-col justify-end md:pb-2">

                <div className="mb-8 h-1 w-12 bg-[#E53935]" />

                <p className="max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
                  RYKO nació para hacer algo diferente.
                  Tomar algo tan simple como una hamburguesa
                  y convertirla en una experiencia con identidad propia.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* Our Story */}
        <section className="bg-[#0A0A0A] px-6 py-12 md:py-20">
          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-24 md:items-end">

              {/* Story */}
              <div className="md:order-1">

                <div className="mb-8 h-1 w-12 bg-[#E53935]" />

                <p className="max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
                  RYKO nació de una idea sencilla: hacer las cosas a nuestra manera.
                  Sin copiar lo que ya existe. Sin seguir un molde.
                </p>

                <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
                  Empezamos con una hamburguesa porque queríamos convertir algo
                  cotidiano en algo que la gente pudiera reconocer, recordar y hacer suyo.
                </p>

                <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
                  Así nació una marca con energía de calle, una identidad propia
                  y ganas de hacer las cosas diferente.
                </p>

              </div>

              {/* Title */}
              <div className="md:order-2">

                <div className="mb-8">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">
                    OUR STORY
                  </span>
                </div>

                <h2 className="ryko-display max-w-4xl text-6xl uppercase leading-[0.82] tracking-tight sm:text-7xl md:text-8xl lg:text-[8rem]">
                  Una idea
                  <br />
                  <span className="text-[#E53935]">
                    Una actitud
                  </span>
                </h2>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default AboutUsPage