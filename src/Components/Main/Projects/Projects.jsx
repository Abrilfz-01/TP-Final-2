import React from 'react'
import Cards from './CardP'
import './Projects.css'
import img1 from '/Img1.jpg'
import img2 from '/Img2.jpg'
import { Container, Stack, Text, SimpleGrid, Button} from '@chakra-ui/react'


const Projects = () => {
    const cardConten = [
        {
            image: img1,
            title: 'Formulario de inicio',
            info: 'Diseñe un formulario de inicio de sesion, con sus respectivas secciones: "Email", "Contraseña", "Boton de Inicio" y la posibilidad de "Registrarse" en caso de que el usuario no tenga una cuenta.',
        },
        {
            image: img2,
            title: 'Servicios',
            info: 'En esta ocasion, elabore una imagen describiendo los servicios que ofrece una empresa.',
        },
    ];

  return (
    <Container paddingTop='80px' paddingBottom='90px' className='projects' id='irProjects'>
        <Stack spacing={0} className='container-titulos' marginBottom='60px' alignItems='center'>
            <Text className='titulo-1' fontSize='22px' fontWeight='450' as='h1' color='#9B0623'>Proyectos</Text>
            <Text className='titulo-2' fontSize='40px' fontWeight='550' as='h2'>Que he hecho</Text>
        </Stack>

        <Stack alignItems='center' className='container-cards'>
            <SimpleGrid spacing={50} columns={2} width='900px' className='sect-card'>
                {
                    cardConten.map(card => (
                        <Cards title={card.title} info={card.info} imageSource={card.image}/>
                    ))
                }
            </SimpleGrid>

            <Button 
            className="expand" 
            marginTop='70px'
            bg='#9B0623' color='white' 
            p='15px 15px' border='1px' borderRadius='5px'
            fontSize='25px' fontWeight='450' 
            width='200px'
            >Ver mas</Button>
        </Stack>
    </Container>
  )
}

export { Projects }