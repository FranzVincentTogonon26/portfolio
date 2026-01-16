import Navbar from "./components/layout/Navbar"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import Skills from "./components/sections/Skills"
import Testimonials from "./components/sections/Testimonials"



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
    </div>
  )
}

export default App
