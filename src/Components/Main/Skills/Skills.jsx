import React from 'react'
import './Skills.css'
import { Box, Text, Stack } from '@chakra-ui/react'


const Skills = () => {
    let skillsItems = [
        {
            title: 'Excel',
            src:'/Excel-icono.png', 
        },
        {
            title: 'Python',
            src: '/Python-icono.png', 
        },
        {
            title: 'Html',
            src: '/Html-icono.png', 
        },
        {
            title: 'Css',
            src: '/Css-icono.png', 
        },
        {
            title: 'Java',
            src: '/Java-icono.png', 
        },
        {
            title: 'Access',
            src: '/Access-icono.png', 
        },
    ]

  return (
    <Box className='section-skills' id='irSkills' as='section'>
        <Stack spacing={0} alignItems='center' pt='80px' mb='35px'>
            <Text fontSize='22px' fontWeight='450' as='h1' color='#9B0623'>Habilidades</Text>
            <Text className='titulo-2' fontSize='40px' fontWeight='550' as='h2'>Que dispongo</Text>
        </Stack>
        
        <Box className='container-skills' as='div' pb='80px'>
            {skillsItems.map((skill) => 
                <div key={skill.title}>
                    <h1>{skill.title}</h1>
                    <img src={skill.src} alt=''/>
                </div>
            )}
        </Box>
    </Box>
  )
}

export {Skills}