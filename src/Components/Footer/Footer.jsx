import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
import logo from '/Logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faXTwitter, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { IconButton } from '@chakra-ui/react'
import irFacebook from './functions/irFacebook'
import irTwitter from './functions/irTwitter'
import irGitHub from './functions/irGitHub'
import irLinkedin from './functions/irLinkedin'

const Footer = () => {
  return (
    <footer className='footer'>
        <nav className='container-footer'>
            <div className='nav-footer'>  
                <img src={logo} className='logo' />

                <ul className='nav-items'>
                    <li><Link to='irHero'
                    spy={true}
                    smooth={true}
                    offset={-50}
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
                    offset={80}
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
                </ul>


                <div class="redes">
                    <IconButton className='facebook-icon'
                    isRound={true}
                    borderRadius='50%' border='none'
                    padding='15px' width='50px' mr='30px'
                    backgroundColor='#9B0623' color='#FFFFFF'
                    aria-label='Done'
                    fontSize='20px' onClick={irFacebook}
                    ><FontAwesomeIcon icon={ faFacebookF }/></IconButton>

                    <IconButton className='twitter-icon'
                    isRound={true}
                    variant='solid'
                    borderRadius='50%' border='none'
                    padding='15px' width='50px' mr='30px'
                    backgroundColor='#9B0623' color='#FFFFFF'
                    aria-label='Done'
                    fontSize='20px' onClick={irTwitter}
                    ><FontAwesomeIcon icon={ faXTwitter }/></IconButton>

                    <IconButton className='git-icon'
                    isRound={true}
                    variant='solid'
                    borderRadius='50%' border='none'
                    padding='15px' width='50px' mr='30px'
                    backgroundColor='#9B0623' color='#FFFFFF'
                    aria-label='Done'
                    fontSize='20px' onClick={irGitHub}
                    ><FontAwesomeIcon icon={ faGithub }/></IconButton>

                    <IconButton className='linkedin-icon'
                    isRound={true}
                    variant='solid'
                    borderRadius='50%' border='none'
                    padding='15px' width='50px'
                    backgroundColor='#9B0623' color='#FFFFFF'
                    aria-label='Done'
                    fontSize='20px' onClick={irLinkedin}
                    ><FontAwesomeIcon icon={ faLinkedinIn }/></IconButton> 
                </div>
            </div>
        </nav>
    </footer>
  )
}

export {Footer}