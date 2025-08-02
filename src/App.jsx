import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero />
    <About />
    <Projects />
    <Testimonials />
    <ContactUs />
    </>
  )
}

export default App
