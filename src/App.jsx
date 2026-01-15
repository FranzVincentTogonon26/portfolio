import Navbar from "./components/layout/Navbar"
import About from "./components/sections/About"
import Hero from "./components/sections/Hero"
import Skills from "./components/sections/Skills"



function App() {

  return (
    <div className="min-h-screen bg-black ">
      <Navbar />
      <main className="max-w-330 mx-auto ">
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  )
}

export default App
