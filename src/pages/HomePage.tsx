import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import FeaturedBurger from "../components/FeaturedBurger"
import Menu from "../components/Menu"
import Manifesto from "../components/Manifesto"
import Footer from "../components/Footer"

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F2]">
      <Navbar />

      <main className="pt-20">
        <Hero />
        <FeaturedBurger />
        <Manifesto />
        <Menu />
        <Footer />
      </main>
    </div>
  )
}

export default HomePage