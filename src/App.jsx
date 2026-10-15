import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />

     <main>
      <Hero/>
     </main>
    </>
  )
}

export default App
