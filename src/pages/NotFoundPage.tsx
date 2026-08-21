import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F2]">
      <Navbar />

      <main>
        <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1fr_0.9fr]">

            {/* Content */}
            <div className="relative z-20">

              <p className="mb-6 text-[10px] font-black uppercase tracking-[0.35em] text-[#E53935]">
                ERROR 404
              </p>

              <h1 className="ryko-display max-w-3xl text-7xl uppercase leading-[0.8] tracking-tight sm:text-8xl lg:text-[9rem]">
                Aquí no
                <br />
                <span className="text-[#E53935]">hay RYKO</span>
              </h1>

              <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/50 sm:text-base">
                Parece que tomaste una calle equivocada.
                Volvamos al camino.
              </p>

              <Link
                to="/"
                className="group relative mt-10 inline-flex overflow-hidden bg-[#E53935] px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Volver a RYKO
                </span>

                <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
              </Link>

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
                    id="not-found-ryko-circle"
                    d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                    fill="none"
                  />
                </defs>

                <text className="fill-current text-[8px] font-black uppercase tracking-[0.35em]">
                  <textPath href="#not-found-ryko-circle">
                    RYKO • HAZLO RYKO • RYKO • PÁSALA RYKO • RYKO • HAZLO RYKO • RYKO • PÁSALA RYKO •
                  </textPath>
                </text>
              </svg>

              {/* Square */}
              <div className="absolute h-60 w-60 rotate-6 border border-[#E53935] sm:h-75 sm:w-75 lg:h-95 lg:w-95" />

              {/* Inner square */}
              <div className="absolute h-44 w-44 -rotate-6 border border-white/10 sm:h-60 sm:w-60 lg:h-75 lg:w-75" />

              {/* 404 */}
              <span className="relative z-10 select-none text-[100px] font-black uppercase italic leading-none text-white/5 sm:text-[150px] lg:text-[190px]">
                404
              </span>

              {/* Technical detail */}
              <div className="absolute bottom-8 right-0 z-20 border-l-2 border-[#E53935] pl-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/50">
                LOST RYKO
                <br />
                <span className="text-[#E53935]">
                  404 / 404
                </span>
              </div>

            </div>

          </div>

          {/* Bottom detail */}
          <div className="absolute bottom-0 left-0 right-0 mx-auto flex max-w-7xl items-center justify-between border-t border-white/10 px-6 py-4 text-[9px] font-black uppercase tracking-[0.25em] text-white/30">
            <span>Hazlo RYKO</span>
            <span>404</span>
            <span>Back</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default NotFoundPage