function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0A0A0A] px-6 py-16 text-[#F5F5F2]">
      <div className="mx-auto max-w-7xl">

        {/* Main */}
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">

          {/* Brand */}
          <div>

            <h2 className="ryko-display text-8xl uppercase italic leading-none sm:text-[10rem]">
              RYKO
            </h2>

            <p className="mt-4 text-sm font-bold uppercase tracking-[0.25em] text-white/40">
              Hazlo RYKO
            </p>

          </div>


          {/* Links */}
          <div className="grid grid-cols-2 gap-x-16 text-xs font-black uppercase tracking-widest">

            {/* Navigation */}
            <div className="flex flex-col gap-5">

              <p className="mb-2 text-[10px] text-[#E53935]">
                Navegación
              </p>

              <a
                href="/menu"
                className="transition-colors hover:text-[#E53935]"
              >
                Menú
              </a>

              <a
                href="/about_us"
                className="transition-colors hover:text-[#E53935]"
              >
                Nosotros
              </a>

              <a
                href="/contact"
                className="transition-colors hover:text-[#E53935]"
              >
                Contacto
              </a>

            </div>


            {/* Social */}
            <div className="flex flex-col gap-5">

              <p className="mb-2 text-[10px] text-[#E53935]">
                Síguenos
              </p>

              <a
                href="#"
                className="transition-colors hover:text-[#E53935]"
              >
                Instagram
              </a>

              <a
                href="#"
                className="transition-colors hover:text-[#E53935]"
              >
                Facebook
              </a>

              <a
                href="#"
                className="transition-colors hover:text-[#E53935]"
              >
                X
              </a>

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] font-bold uppercase tracking-widest text-white/30 sm:flex-row">

          <span>
            RYKO © 2026
          </span>

          <span>
            Hazlo RYKO. Pásala RYKO
          </span>

        </div>


      </div>


      {/* Background detail */}
      <span className="pointer-events-none absolute -bottom-20 right-0 select-none text-[180px] font-black uppercase italic leading-none text-white/2 sm:text-[260px]">
        R
      </span>

    </footer>
  )
}

export default Footer