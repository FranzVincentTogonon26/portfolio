import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Skills from "./components/sections/Skills"
import Services from "./components/sections/Services"
import Testimonials from "./components/sections/Testimonials"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"



function App() {

  return (
    <div className="min-h-screen bg-black ">
      <Navbar />
      <main className="max-w-330 mx-auto ">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
