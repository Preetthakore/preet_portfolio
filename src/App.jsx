
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
// import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    
    <div  className="bg-[#0F172A] min-h-screen text-white font-sans">
      <Header />
      
      <section id="home">
  <Home />
</section>

<section id="about">
  <About />
</section>

<section id="projects">
  <Projects />
</section>

<section id="contact">
  <Contact />
</section>
    </div>
  )
}

export default App
