import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import WhyAcenna from './components/sections/WhyAcenna'
import Services from './components/sections/Services'
import Technology from './components/sections/Technology'
import Analytics from './components/sections/Analytics'
import Clients from './components/sections/Clients'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <WhyAcenna />
        <Services />
        <Technology />
        <Analytics />
        <Clients />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
