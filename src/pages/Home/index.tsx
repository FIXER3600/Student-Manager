import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import CardStudent from '../../components/CardStudent'
import Header from '../../components/Header'

function Home() {
  return (
   
      
    <Box w={"100vw"} h={"100vh"} display={"flex"} flexDirection={"column"}>
    <Header />
      <Text margin={"50px"}>LISTA DE ALUNOS</Text>

      
      <Grid templateColumns='repeat(5, 1fr)' gap={6} m={"5em"}>
      <CardStudent name='Gui' email='gui@gmail.com' phone='11985628555' address='rua qualquer'
      photo='daf'/>
      <CardStudent name='Gui' email='gui@gmail.com' phone='11985628555' address='rua qualquer'
      photo='daf'/>
        <CardStudent name='Gui' email='gui@gmail.com' phone='11985628555' address='rua qualquer'
      photo='daf'/>
      </Grid>
      
    </Box>
   
  )
}

export default Home