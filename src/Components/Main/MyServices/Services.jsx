import React from 'react'
import Cards from './Card'
import { SimpleGrid, Container, Stack, Text} from '@chakra-ui/react'

const Services = () => {
    const cardConten = [
        {
            title: 'Diseñadora Web Junior',
            info: 'Utilizo mis conocimientos en varios lenguajes de programacion como HTML5, CSS, JAVA, PYTHON para crear soluciones digitales para los usuarios. Actualmente me estoy formando en Desarrollo Full-Stack.',
        },
    ];

  return (
    <Container className='container-services' bg='#FFF1F4' paddingTop='80px' paddingBottom='90px' id='irServices'>
        <Stack spacing={0} marginBottom='60px' alignItems='center'>
            <Text fontSize='22px' fontWeight='450' as='h1' color='#9B0623'>Servicios</Text>
            <Text fontSize='40px' fontWeight='550' as='h2'>Que ofrezco</Text>
        </Stack>

        <Stack alignItems='center' className='container-cards'>
            <SimpleGrid spacing={50} columns={3} width='1000px' className='sect-cards'>
                {
                    cardConten.map(card => (
                        <Cards title={card.title} info={card.info}/>
                    ))
                }
            </SimpleGrid>
        </Stack>
    </Container>
  )
}

export {Services}
