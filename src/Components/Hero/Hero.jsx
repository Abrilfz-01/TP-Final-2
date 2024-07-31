import React from 'react'
import './Hero.css'
import {Box, Text, Flex, Button} from '@chakra-ui/react'
import fotoPersonal from '/Yo.jpg'

const Hero = () => {
  return (
    <Box className='container-home' id='irHero'>
      <Flex className='container-1' flexDirection='column'>
        <Text className='titulo-1' fontSize='65px' fontWeight='480' as='h1' mb='0px' mt='50px'>Hola! Yo soy</Text>
        <Text className='titulo-2' fontSize='75px' fontWeight='480' as='h2' color='#9B0623' mt='0px' mb='0px'>Abril Funez</Text>
        <Text className='info' fontSize='20px' as='p' color='#575757'>Soy estudiante de Ingenieria en Sistemas y ademas tengo un emprendimiento de artesanias, el cual lo forme hace 4 años.</Text>

        <Button className="download" fontSize='22px' fontWeight='450' width='200px'
        bg='#9B0623' border='1px' color='white' padding='20px 30px' borderRadius='5px' mr='30px' mt='20px'
        >Descargar CV</Button>
      </Flex>

      <img src={fotoPersonal} alt="" />
    </Box>
  )
}

export {Hero}