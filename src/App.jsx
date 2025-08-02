import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import * as motion from "motion/react-client"
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  


  return (
    <>
    <Hero />

     <motion.div
           initial={{ opacity: 0, scale: 0 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
          transition={{
              duration: 1.5,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
        >
    
       <About />

      </motion.div>

    
      <motion.div
           initial={{ translateX: '-100%' }}
           whileInView={{ translateX: '0%'}}
           viewport={{ once: true }}
          transition={{
              duration: 1.1,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
        >
         <Projects />
      </motion.div>

    <motion.div
           initial={{ translateX: '100%' }}
           whileInView={{ translateX: '0%'}}
           viewport={{ once: true }}
          transition={{
              duration: 1.1,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
        >
    <Testimonials />
    </motion.div>

     <motion.div
           initial={{ translateY: '-100%' }}
           whileInView={{ translateY: '0%'}}
           viewport={{ once: true }}
          transition={{
              duration: 1.1,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
        >
    <ContactUs />
    </motion.div>

    <Footer />


    </>
  )
}

export default App
