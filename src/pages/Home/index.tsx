import { Box, Grid, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import CardStudent from '../../components/CardStudent'
import Header from '../../components/Header'
import useProtectedPage from '../../hooks/useProtectedPage'
import { GlobalContext } from '../../GlobalContext/globalContext'

function Home() {
  useProtectedPage()
  const [sortParameter, setSortParameter] = useState("default");
  const {
   students,
    setStudents,
    searchStudent,
  } = useContext(GlobalContext);
  const handleSortParameter = ({ target }) => {
    setSortParameter(target.value);
  };
console.log(students);
console.log(searchStudent);



  const filteredStudents = students?.filter((student) => {
    return student.nome.toLowerCase().includes(searchStudent.toLowerCase());
  })
  .sort((currentStudent, nextStudent) => {
    if (sortParameter === "a-z") {
      return currentStudent.name.localeCompare(nextStudent.name);
    }
    if (sortParameter === "z-a") {
      return nextStudent.name.localeCompare(currentStudent.name);
    }
  });
  // console.log(filteredStudents);
  
  return (
   
      
    <Box w={"100vw"} h={"100vh"} display={"flex"} flexDirection={"column"}>
    <Header />
      <Text margin={"50px"}>LISTA DE ALUNOS</Text>

      
      <Grid templateColumns='repeat(5, 1fr)' gap={6} m={"5em"}>
      {!filteredStudents.length && (
          <>
            <Text
              align={"center"}
              gridArea="1/1/3/5"
              fontSize="4xl"
              fontFamily={"Flexo-Demi"}
            >
             Aluno não encontrado!
            </Text>
          </>
        )}
        {
          filteredStudents.map((student: { id:number,nome: string; email: string;endereco: string; telefone: string,photo:string }) => {
            return (
              <CardStudent
                key={student.id}
                name={student.nome}
                email={student.email}
                address={student.endereco}
                phone={student.telefone} photo={'adad'}      
              />
            );
          })
        }
      </Grid>
    </Box>
   
  )
}

export default Home