import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F2]">
      <Navbar />

      <main className="pt-20">
        <section className="relative overflow-hidden">
          <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1fr_0.9fr] md:gap-0 md:py-8">

            {/* Content */}
            <div className="relative z-20">

              <p className="mb-6 text-[10px] font-black uppercase tracking-[0.35em] text-white/40">
                CONTACT RYKO
              </p>

              <h1 className="ryko-display max-w-3xl text-7xl uppercase leading-[0.8] tracking-tight sm:text-8xl lg:text-[8rem]">
                Hablemos
                <br />
                <span className="text-[#E53935]">RYKO</span>
              </h1>

              <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/50 sm:text-base">
                ¿Tienes una pregunta, una idea o simplemente hambre?
                Estamos del otro lado.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-[#E53935]" />

                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
                  Pásala RYKO
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
                    id="contact-ryko-circle"
                    d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                    fill="none"
                  />
                </defs>

                <text className="fill-current text-[8px] font-black uppercase tracking-[0.35em]">
                  <textPath href="#contact-ryko-circle">
                    RYKO • PÁSALA RYKO • RYKO • HAZLO RYKO • RYKO • PÁSALA RYKO • RYKO • HAZLO RYKO •
                  </textPath>
                </text>
              </svg>

              {/* Square */}
              <div className="absolute h-60 w-60 rotate-6 border border-[#E53935] sm:h-75 sm:w-75 lg:h-95 lg:w-95" />

              {/* Inner square */}
              <div className="absolute h-44 w-44 -rotate-6 border border-white/10 sm:h-60 sm:w-60 lg:h-75 lg:w-75" />

              {/* Contact mark */}
              <span className="relative z-10 select-none text-[100px] font-black uppercase italic leading-none text-white/5 sm:text-[150px] lg:text-[190px]">
                RYKO
              </span>

              {/* Technical detail */}
              <div className="absolute bottom-8 right-0 z-20 border-l-2 border-[#E53935] pl-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/50">
                CONTACT
                <br />
                <span className="text-[#E53935]">
                  03 / 03
                </span>
              </div>

            </div>

          </div>

          {/* Bottom detail */}
          <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/10 px-6 py-4 text-[9px] font-black uppercase tracking-[0.25em] text-white/30">
            <span>Pásala RYKO</span>
            <span>03 / 03</span>
            <span>Scroll</span>
          </div>
        </section>

        {/* Contact form */}
        <section className="border-t border-white/10 px-6 py-24">
          <div className="mx-auto max-w-5xl">

            {/* Section label */}
            <div className="mb-10 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-[#E53935]" />

              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
                Escríbenos
              </span>

              <div className="h-px w-12 bg-[#E53935]" />
            </div>

            {/* Form frame */}
            <div className="relative border border-white/10 p-6 sm:p-10 md:p-14">

              {/* Red corner */}
              <div className="absolute left-0 top-0 h-12 w-px bg-[#E53935]" />
              <div className="absolute left-0 top-0 h-px w-12 bg-[#E53935]" />

              <form>

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
                    placeholder="Tu nombre"
                    className="w-full bg-transparent py-5 text-2xl font-black uppercase tracking-tight text-[#F5F5F2] outline-none placeholder:text-white/15 focus:placeholder:text-white/30 sm:text-3xl"
                  />
                </div>

                {/* Email */}
                <div className="border-b border-white/10">
                  <label
                    htmlFor="email"
                    className="block pt-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/30"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Tu correo"
                    className="w-full bg-transparent py-5 text-2xl font-black uppercase tracking-tight text-[#F5F5F2] outline-none placeholder:text-white/15 focus:placeholder:text-white/30 sm:text-3xl"
                  />
                </div>

                {/* Subject */}
                <div className="border-b border-white/10">
                  <label
                    htmlFor="subject"
                    className="block pt-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/30"
                  >
                    Asunto
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="¿De qué hablamos?"
                    className="w-full bg-transparent py-5 text-2xl font-black uppercase tracking-tight text-[#F5F5F2] outline-none placeholder:text-white/15 focus:placeholder:text-white/30 sm:text-3xl"
                  />
                </div>

                {/* Message */}
                <div className="border-b border-white/10">
                  <label
                    htmlFor="message"
                    className="block pt-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/30"
                  >
                    Mensaje
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Cuéntanos..."
                    className="w-full resize-none bg-transparent py-5 text-2xl font-black uppercase tracking-tight text-[#F5F5F2] outline-none placeholder:text-white/15 focus:placeholder:text-white/30 sm:text-3xl"
                  />
                </div>

                {/* Submit */}
                <div className="mt-10 flex justify-center">
                  <button
                    type="submit"
                    className="group relative inline-flex overflow-hidden bg-[#E53935] px-7 py-4 text-sm font-black uppercase tracking-widest text-white transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                      Enviar mensaje
                    </span>

                    <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                  </button>
                </div>

              </form>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default ContactPage