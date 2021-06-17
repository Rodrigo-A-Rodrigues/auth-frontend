import { Flex, Box, Input, Button, Heading, Text, Img } from '@chakra-ui/react';
import { FormEvent, useContext, useState } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { withSSRGuest } from './../utils/withSSRGuest';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = useContext(AuthContext);

  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    
    const data = {
      email,
      password,
    }

    await signIn(data);
  }

  return (
    <Flex w="100vw" h="100vh" justify="center" align="center" >
      <Box w="50vw" px="10" py="20" h="100vh" position="relative">
        <Box mb="10">
          <Heading as="h3" fontSize="2xl">Welcome to Dashboard 👊</Heading>
          <Text maxW="500px" my="15">
            Atualmente essa página de login é derecionada a prática de 
            conhecimentos mas pode ser adaptada para atender a diversos 
            sistemas que necessitem de Sign In and Out de usuários. 
          </Text>
          <Heading as="h1">Login:</Heading>
        </Box>
        <Box maxW="500px">
          <form onSubmit={handleSubmit}>
            <Input 
              variant="outline" 
              placeholder="E-mail" 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
            />
            
            <Input 
              variant="outline" 
              placeholder="Password" 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              my="5"
            />
            
            <Button 
              type="submit" 
              bg="purple.700"
              _hover={{
                background: "purple.500"
              }} 
              w="500px">Login</Button>
          </form>
        </Box>
        <Box position="absolute" bottom="5">
          ©2021 Rodrigo Rodrigues - All rights reserved.
        </Box>
      </Box>
      <Box>
        <Img src="/back_01.svg" w="500px" />
      </Box>
    </Flex>
  )
}


export const getServerSideProps = withSSRGuest(async (ctx) => {
  return{
    props: {}
  }
});