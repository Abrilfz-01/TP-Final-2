import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { Button } from '@chakra-ui/react'
import logo from '/Logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className='container-header'>
        <div className='container-nav'>  
          <img src={logo} className='logo' />

          <ul className={`nav-items ${isOpen && "open"}`}>
            <li><Link to='irHero'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            >Inicio</Link></li>

            <li><Link to='irAbout'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            >Acerca de</Link></li>

            <li><Link to='irSkills'
            smooth={true}
            offset={70}
            duration={700}
            >Habilidades</Link></li>

            <li><Link to='irServices'
            smooth={true}
            offset={80}
            duration={700}
            >Servicios</Link></li>

            <li><Link to='irProjects'
            smooth={true}
            offset={80}
            duration={700}
            >Proyectos</Link></li>

            <li><Link to='irContact'
            smooth={true}
            offset={80}
            duration={700}
            >Contacto</Link></li>

            <Button className='contactme'
            marginRight='50px' marginLeft='40px'
            bg='#9B0623' 
            p='10px' border='1px' borderRadius='5px'
            fontSize='20px' fontWeight='450' 
            width='140px' ><a href='mailto:abril.funez@gmail.com'>Hablemos</a></Button>
          </ul>

          <div className={`nav-menu ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar