import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Components/Navbar/Navbar'
import {Hero} from './Components/Hero/Hero'
import { About } from './Components/Main/About/About'
import { Skills } from './Components/Main/Skills/Skills'
import { Services }  from './Components/Main/MyServices/Services'
import { Projects } from './Components/Main/Projects/Projects'
import { Contact } from './Components/Main/Contact/Contact'
import { Footer } from './Components/Footer/Footer'
import './index.css'
import './responsive.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Services/>
    <Projects/>
    <Contact />
    <Footer />
  </React.StrictMode>,
)
