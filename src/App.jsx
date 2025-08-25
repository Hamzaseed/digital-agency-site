import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes , Route } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Footer from './Components/Footer/Footer'
import Tesimonials from './Components/Testimonials/Tesimonials'
import CTA from './Components/CTA/CTA'
import Main from './Pages/Main'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div    className="App">
        <Navbar />
     
        <Main/>
    
        <Footer />



    

    </div>
  
    </>
  )
}

export default App
