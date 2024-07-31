import React, {useRef} from 'react'
import './Contact.css'
import { Container, Stack, Text, Link, Input, FormControl, Center, Textarea, Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import emailjs, { send } from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6ps7zig', 'template_7yl4eys', form.current, {
        publicKey: 'xK0-U9tlWZYTc9GUT',
      })
      .then(
        () => {
          console.log('ÉXITO!');
        },
        (error) => {
          console.log('FALLIDO...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Container bg='#FFF1F4' paddingTop='80px' paddingBottom='90px' className='contact' id='irContact'>
          <Stack spacing={0} marginBottom='60px' alignItems='center' >
            <Text fontSize='22px' fontWeight='450' as='h1' color='#9B0623'>Contacto</Text>
            <Text fontSize='40px' fontWeight='550' as='h2' textAlign='center'>Ponete en Contacto</Text>

            <Link href='mailto:abril.funez@gmail.com' isExternal 
            color='#9B0623' fontSize='20px' 
            marginTop='20px' fontWeight='500'>
                  abril.funez@gmail.com <ExternalLinkIcon mx='2px' color='#9B0623'/>
            </Link>
          </Stack>

          <Center>
              <FormControl>
                  <Input className='input_n' type='text' name='user_name' placeholder='Tu Nombre' fontSize='18px' 
                  marginRight='20px' pl='15px' height='50px' width='250px'
                  border='1.5px solid #9B0623' borderRadius='3px' outline='none'/>
                  <Input className='input_e' type='email' name='user_email' placeholder='Tu Email' fontSize='18px' 
                  pl='15px' height='50px' width='350px'
                  border='1.5px solid #9B0623' borderRadius='3px' outline='none'/>
              </FormControl>
          </Center>

          <Center>
              <Textarea className='textarea' name='message' placeholder='Tu Mensaje' marginTop='30px' padding='10px 15px' 
              fontSize='18px' border='1.5px solid #9B0623' borderRadius='3px' outline='none'
              width='620px' height='250px'/>
          </Center>

          <Center className='container-button'>
              <Button type='submit' value={send}
              className="send" 
              marginTop='30px'
              bg='#9B0623' color='white' 
              p='15px 15px' border='1px' borderRadius='5px'
              fontSize='25px' fontWeight='450' 
              width='650px'
              >Enviar</Button>
          </Center>
          

      </Container>
    </form>
    
  )
}

export {Contact}