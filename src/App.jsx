import Navbar from "./components/layout/Navbar"
import About from "./components/sections/About"
import Hero from "./components/sections/Hero"



function App() {

  return (
    <div className="min-h-screen bg-black ">
      <Navbar />
      <main className="max-w-330 mx-auto ">
        <Hero />
        <About />
      </main>
    </div>
  )
}

export default App
