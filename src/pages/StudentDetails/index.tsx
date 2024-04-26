import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Image,
  Text,
  Center,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { Form, Formik, Field } from "formik";
import React, { useEffect } from "react";
import { deleteStudent, editStudent, getStudentById } from "../../services/student";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import DefaultImage from "../../assets/default-profile-picture.jpg"

import IconError from "../../assets/errorIcon.png";

import DeltaLogo from "../../assets/deltaGlobal-deltagrupo-logo-color.svg";

import TextField from "../../components/TextField";
import { goToHomePage } from "../../router/coordinator";
import ConfirmDeleteModal from "../ConfirmDeleteModal";

const EditStudentSchema = Yup.object().shape({
  name: Yup.string().when(["email", "password", "phone", "address", "photo"], {
    is: (val: string) => !val?.length,
    then: () =>
      Yup.string().required("Todos os campos precisam ser preenchidos"),
    otherwise: () => Yup.string().required("Campo obrigatório*"),
  }),
  email: Yup.string().required("Campo obrigatório*"),

  phone: Yup.string().required("Campo obrigatório*"),
  address: Yup.string().required("Campo obrigatório*"),

  photo: Yup.string().required("Campo obrigatório*"),
});



function StudentDetails() {
  const navigate = useNavigate();
  const params = useParams();
  let deleteModal=false
  //  const [deleteModal,setDeleteModal]=useState(false)
    const handleModal=()=>{
    deleteModal=!deleteModal
    console.log(deleteModal);
    
    }
  const [contador, setContador] = React.useState(0);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [student, setStudent] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    photo: "",
  });

  useEffect(() => {
    const getStudent = async () => {
      try {
        await getStudentById(params.id)
          .then((data) => {
            setStudent({
              name: data.data.nome,
              email: data.data.email,
              phone: data.data.telefone,
              address: data.data.endereco,
              photo: data.data.foto,
            });
            setName(data.data.nome);
            console.log(name);
            
            setEmail(data.data.email);
            setPhone(data.data.telefone);
            setAddress(data.data.endereco);
            setPhoto(data.data.foto);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.error("Erro ao buscar dados do usuário:", err);
      }
    };
    getStudent();
  }, [contador,params.id]);
  const initialValues = {
    name: name,
    email: email,
    phone:phone,
    address: address,
    photo: photo,
  };
  const handleSubmit = async () => {
    try {
      editStudent(
        {
          nome: name,
          email:email,
          telefone: phone,
          endereco: address,
          foto: photo,
        },
        params.id,
        navigate
      );
      setContador(contador + 1);
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

const deleteUser=async () => {
  deleteModal=true
  try {

    deleteStudent(
    
      params.id,
      navigate
    );
    setContador(contador + 1);
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
};


  return (
    <Flex alignItems={"center"} h={"100vh"} marginLeft={"5em"}>
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
       
        borderRadius={"10px"}
      >
<Flex
        backgroundColor={"#0089BF"}
        h={"350px"}
        w={"250px"}
        borderRadius={"10px"}
       mb={"0.8rem"}
      >
     
        <Image  borderRadius={"10px"} src={photo || DefaultImage} />
       
      </Flex>
<Button  onClick={()=>deleteUser} color={"white"} backgroundColor={"#b81414"}>Deletar Aluno</Button>
      </Flex>
      
    
      <Formik
        validationSchema={EditStudentSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values }) => (
          <Form>
            <Flex
              ml={"15em"}
              borderRadius={"10px"}
              backgroundColor={"#0089BF"}
              w={"850px"}
              h={"750px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Flex flexDirection={"column"} alignItems={"center"}>
                <Image src={DeltaLogo} />
                <Text marginBottom={"1em"} fontSize="3xl">
                  Adicione um novo aluno ao sistema
                </Text>
                <FormControl>
                  {errors.name ===
                  "Todos os campos precisam ser preenchidos" ? (
                    <Box display={"flex"} marginLeft={30} marginBottom={2}>
                      <Image src={IconError} marginRight={1} />
                      <Text
                        fontFamily={"Questrial"}
                        fontSize={"12px"}
                        color="red.500"
                      >
                        {errors.name}
                      </Text>
                    </Box>
                  ) : null}
                  <Box display={"flex"} justifyContent={"center"}>
                    <Field
                      as={TextField}
                      name="name"
                      placeholder="Digite o nome do aluno..."
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type="name"
                      hasError={errors.name}
                      isCheck={errors.name === undefined && values.name !== ""}
                    />
                  </Box>
                  <FormErrorMessage name="name" />
                  {errors.name === "Campo obrigatório*" && touched.name ? (
                    <Text fontFamily={"Questrial"} color="red.500">
                      {errors.name}
                    </Text>
                  ) : null}
                </FormControl>
                <br />
                <FormControl>
                  <Box display={"flex"} justifyContent={"center"}>
                    <Field
                      as={TextField}
                      name="email"
                      placeholder="Digite o Email do aluno..."
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      hasError={errors.email}
                      isCheck={
                        errors.email === undefined && values.email !== ""
                      }
                    />
                  </Box>
                  <FormErrorMessage name="email" />
                  {errors.email === "Campo obrigatório*" && touched.email ? (
                    <Text fontFamily={"Questrial"} color="red.500">
                      {errors.email}
                    </Text>
                  ) : null}
                </FormControl>
                <br />
                <FormControl>
                  <Box display={"flex"} justifyContent={"center"}>
                    <Field
                      as={TextField}
                      name="phone"
                      placeholder="Digite o telefone do aluno..."
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      type="phone"
                      hasError={errors.phone}
                      isCheck={
                        errors.phone === undefined && values.phone !== ""
                      }
                    />
                  </Box>
                  <FormErrorMessage name="phone" />
                  {errors.phone === "Campo obrigatório*" && touched.phone ? (
                    <Text fontFamily={"Questrial"} color="red.500">
                      {errors.phone}
                    </Text>
                  ) : null}
                </FormControl>
                <br />
                <FormControl>
                  <Box display={"flex"} justifyContent={"center"}>
                    <Field
                      as={TextField}
                      name="address"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      placeholder="Digite o endereço do aluno..."
                      type="name"
                      hasError={errors.address}
                      isCheck={
                        errors.address === undefined && values.address !== ""
                      }
                    />
                  </Box>
                  <FormErrorMessage name="address" />
                  {errors.address === "Campo obrigatório*" &&
                  touched.address ? (
                    <Text fontFamily={"Questrial"} color="red.500">
                      {errors.address}
                    </Text>
                  ) : null}
                </FormControl>
                <br />

                <Center display={"flex"}>
                  <Button
                    m={"2em"}
                    size="lg"
                    type={"submit"}
                    onClick={() => {
                      goToHomePage(navigate);
                    }}
                  >
                    Voltar
                  </Button>
                  <Button
                    size="lg"
                    m={"2em"}
                    color={"white"}
                    backgroundColor={"#0089BF"}
                    _hover={{ backgroundColor: "#33A1CC" }}
                    type={"submit"}
                  >
                    Editar
                  </Button>
                </Center>
              </Flex>
            </Flex>
          </Form>
        )}
      </Formik>
      { deleteModal ? 
        (   <ConfirmDeleteModal isOpen={deleteModal} onClose={handleModal} nameStudent={name} message={`Deseja mesmo deletar o aluno ${name}?`} pathNavigate={undefined}/>
      )
      :null
       }
    </Flex>
  );
}

export default StudentDetails;
