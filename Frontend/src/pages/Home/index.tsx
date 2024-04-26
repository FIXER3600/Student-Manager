import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { useContext } from "react";
import CardStudent from "../../components/CardStudent";
import Header from "../../components/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import { GlobalContext } from "../../GlobalContext/globalContext";
import { goToAddStudentPage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";

function Home() {
  useProtectedPage();
  const navigate = useNavigate();
  const { students, searchStudent } = useContext(GlobalContext);

  const filteredStudents = students
    ?.filter((student:{id:string,nome:string,email:string,phone:string,address:string,photo:string}) => {
      return student.nome.toLowerCase().includes(searchStudent.toLowerCase());
    });

  return (
    <Box w={"100vw"} h={"100%"} display={"flex"} flexDirection={"column"}>
      <Header />
      <Flex justifyContent={"space-between"} w={"auto"}>
        <Text
          margin={"50px"}
          fontSize={"2em"}
          fontWeight={"bold"}
          fontFamily={"Helvetica"}
        >
          LISTA DE ALUNOS
        </Text>
        <Button m={"2em"} onClick={() => goToAddStudentPage(navigate)}>
          Novo Aluno
        </Button>
      </Flex>

      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        m={"2em"}
        overflow={"hidden"}
      >
        {!filteredStudents.length && (
          <>
            <Text
              align={"center"}
              h={"100vh"}
              gridArea="1/1/3/5"
              fontSize="4xl"
              fontFamily={"Helvetica"}
            >
              Aluno não encontrado!
            </Text>
          </>
        )}
        {filteredStudents.map(
          (student: {
            id: string;
            nome: string;
            email: string;
            endereco: string;
            telefone: string;
            foto: string;
          }) => {
            return (
              <CardStudent
                key={student.id}
                name={student.nome}
                email={student.email}
                address={student.endereco}
                phone={student.telefone}
                photo={student.foto}
                id={student.id}
              />
            );
          }
        )}
      </Grid>
    </Box>
  );
}

export default Home;
