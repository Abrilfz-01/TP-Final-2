import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Image} from '@chakra-ui/react'


function CardP({imageSource, title, info }) {
  return (
    <div>
        <Card className='card' maxW='sm' borderRadius='8px' boxShadow='0 0 15px 0 #D9A0AF' p='30px 30px' height='360px'>
            <CardBody>
                <Image
                src={imageSource}
                borderRadius='6px'
                width='365px'
                height='200px'
                />
                <Stack mt='6' spacing='3'>
                    <Heading as='h1' size='md' fontWeight='550' marginBottom='10px' marginTop='10px'>{title}</Heading>
                    <Text as='p'>{info}</Text>
                </Stack>
            </CardBody>
        </Card>
    </div>
  )
}

export default CardP