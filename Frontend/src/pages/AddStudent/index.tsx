import {
  Box,
  Image,
  Link as ChakraLink,
  Text,
  FormControl,
  FormErrorMessage,
  Center,
  Button,
  FormLabel,
  Flex,
  Input,
} from "@chakra-ui/react";
import TextField from "../../components/TextField";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import IconError from "../../assets/errorIcon.png";
import DeltaLogo from "../../assets/delta_assist_logo_fundo_branco.png";
import { Link as LinkSignup, useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import { addStudent } from "../../services/student";
import { goToHomePage } from "../../router/coordinator";
const AddStudentSchema = Yup.object().shape({
  name: Yup.string().when(["email", "password", "phone", "address", "photo"], {
    is: (val: string) => !val?.length,
    then: () =>
      Yup.string().required("Todos os campos precisam ser preenchidos"),
    otherwise: () => Yup.string().required("Campo obrigatório*"),
  }),
  email: Yup.string().required("Campo obrigatório*"),

  phone: Yup.string().required("Campo obrigatório*"),
  address: Yup.string().required("Campo obrigatório*"),

  //  photo: Yup.string().required("Campo obrigatório*"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  photo: "",
};

function AddStudent() {
  const navigate = useNavigate();
  const [base64Image, setBase64Image] = useState(null);
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (values: {
    name: string;
    email: string;
    phone: string;
    address: string;
    photo: string;
  }) => {
    try {
      addStudent(
        {
          nome: values.name,
          email: values.email,
          telefone: values.phone,
          endereco: values.address,
          foto: base64Image,
        },
        navigate
      );
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Flex alignItems={"center"} marginLeft={"5em"}>
      <Box>
    
                <Box display={"flex"} justifyContent={"center"} m={"1em"}>
                  <Button onClick={()=>handleButtonClick}>Adicione uma imagem</Button>
                 
                  <Input
                    as={TextField}
                    id="photoInput" // Adicione um id ao input
                    name="photo"
                    type="file"
                    ref={fileInputRef}
                   // hidden
                    onChange={handleImageUpload}
                  
            
                  />
                </Box>
               
            
              {base64Image && (
                <Image
              
                  src={base64Image}
                  alt="Uploaded"
                  style={{ maxWidth: "100%", maxHeight: "100px" }}
                />
              )}

      </Box>
      <Formik
      validationSchema={AddStudentSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, values }) => (
        <Form>
          <Box
            display={"flex"}
            w={"100vw"}
            h={"100vh"}
            backgroundColor={"#FFF"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Image src={DeltaLogo} />
              <Text marginBottom={"1em"} fontSize="3xl">
                Adicione um novo aluno ao sistema
              </Text>
             
              <FormControl>
                {errors.name === "Todos os campos precisam ser preenchidos" ? (
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
                    type="email"
                    hasError={errors.email}
                    isCheck={errors.email === undefined && values.email !== ""}
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
                    type="phone"
                    hasError={errors.phone}
                    isCheck={errors.phone === undefined && values.phone !== ""}
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
                    placeholder="Digite o endereço do aluno..."
                    type="name"
                    hasError={errors.address}
                    isCheck={
                      errors.address === undefined && values.address !== ""
                    }
                  />
                </Box>
                <FormErrorMessage name="address" />
                {errors.address === "Campo obrigatório*" && touched.address ? (
                  <Text fontFamily={"Questrial"} color="red.500">
                    {errors.address}
                  </Text>
                ) : null}
              </FormControl>
           
             
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
                  Adicionar
                </Button>
              </Center>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
    </Flex>
   
  );
}

export default AddStudent;
