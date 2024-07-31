import React from 'react'
import {Box, Text, Stack} from '@chakra-ui/react'


const About = () => {
  return (
    <Box className='container-about' id='irAbout' bg='#FFF1F4' display='flex' flexDirection='column'
    justifyContent='center' alignItems='center' pt='80px'>
        <Stack spacing={0} className='container-titulos' alignItems='center'>
          <Text fontSize='20px' fontWeight='450' as='h1' color='#9B0623'>Acerca de</Text>
          <Text className='subtitulo' fontSize='40px' fontWeight='550' as='h2'>Quien soy</Text>
        </Stack>
        
        <Text className='info' fontSize='20px' as='p' textAlign='justify' width='80%' 
        color='black' pb='30px' mb='60px' mt='30px' 
        >Me llamo Abril, soy de San Luis-Capital, me mude a Cordoba hace 4 años por cuestiones de estudio, actualmente estudio la carrera de Ing. en Sistemas en la UTN-FRC, en la cual ingrese hace 2 años. Ademas, como especifique en el inicio, tengo un emprendimiento de accesorios(artesanias) de hilo encerado, el cual lo vengo desempeñando hace 4 años.
        Me gusta el crecimiento personal, lo cual busco constantemente aprender cosas nuevas. Me egrese del colegio con "Bachiller en Informatica", hice un curso de "Fundamentos de Prog. y Bases de Datos". Por otro lado, fuera del ambiente de la Informatica, hice tambien un curso de "Barberia y Peluqueria Masc.".</Text>
    </Box>
  )
}

export {About}