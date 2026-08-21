import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import HomePage from "./pages/HomePage"
import MenuPage from "./pages/MenuPage"
import AboutUsPage from "./pages/AboutUsPage"
import ContactPage from "./pages/ContactPage"
import CheckoutPages from "./pages/CheckoutPages"
import NotFoundPage from "./pages/NotFoundPage"
import { CartProvider } from "./context/CartProvider"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about_us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/checkout" element={<CheckoutPages />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        
      </BrowserRouter>
    </CartProvider>
  )
}

export default App