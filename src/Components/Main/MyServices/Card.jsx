import React from 'react'
import {Card, CardHeader, CardBody, Text, Heading } from '@chakra-ui/react'

function Cards({title, info}) {
  return (
    <div>
        <Card className='card' borderRadius='8px' boxShadow='0 0 15px 0 #D9A0AF' p='30px 30px' height='300px' bg='#FFFFFF'>
            <CardHeader>
                <Heading fontSize='23px' fontWeight='600' marginBottom='15px'> {title}</Heading>
            </CardHeader>
            <CardBody>
                <Text fontSize='17px'>{info}</Text>
            </CardBody>
        </Card>
    </div>
  )
}

export default Cards