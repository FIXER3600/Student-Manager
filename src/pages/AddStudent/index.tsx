import {
  Box,
  Image,
  Link as ChakraLink,
  Text,
  FormControl,
  FormErrorMessage,
  Center,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import TextField from "../../components/TextField";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import Eye from "../../assets/eye-open.png";
import EyeClosed from "../../assets/eye-closed.png";
import IconError from "../../assets/errorIcon.png";
import DeltaLogo from "../../assets/deltaGlobal-deltagrupo-logo-color.svg"
import {
  Link as LinkSignup,
  // useNavigate
} from "react-router-dom";
import React, { useState } from "react";
const CreateStudentSchema = Yup.object().shape(
  {

    name: Yup.string().when("password", {
      is: (val: string) => !val?.length,
      then: () =>
        Yup.string().required("Todos os campos precisam ser preenchidos"),
      otherwise: () => Yup.string().required("Campo obrigatório*"),
    }),
    phone: Yup.string().when("password", {
      is: (val: string) => !val?.length,
      then: () =>
        Yup.string().required("Todos os campos precisam ser preenchidos"),
      otherwise: () => Yup.string().required("Campo obrigatório*"),
    }),
    email: Yup.string().when("password", {
      is: (val: string) => !val?.length,
      then: () =>
        Yup.string().required("Todos os campos precisam ser preenchidos"),
      otherwise: () => Yup.string().required("Campo obrigatório*"),
    }),
    password: Yup.string().when("email", {
      is: (val: string) => !val?.length,
      then: () =>
        Yup.string().required("Todos os campos precisam ser preenchidos"),
      otherwise: () => Yup.string().required("Campo obrigatório*"),
    }),
    photo: Yup.string().when("photo", {
      is: (val: string) => !val?.length,
      then: () =>
        Yup.string().required("Todos os campos precisam ser preenchidos"),
      otherwise: () => Yup.string().required("Campo obrigatório*"),
    }),
  },
  [["email", "password","name","phone","photo"]]
);

const initialValues = {
  name:"",
  email: "",
  password: "",
};

function Login() {
  // const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (
	//values
) => {
    //     try {
    //       login(
    //         {
    //           email: values.email,
    //           password: values.password,
    //         },
    //         navigate
    //       );
    //     } catch (error) {
    //       console.error("Erro na requisição:", error);
    //     }
  };
  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
     
    >
      {({ errors, touched, values }) => (
        <Form  >
       
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
<Image src={DeltaLogo}/>
<Text marginBottom={"1em"} fontSize='3xl'>Entre com sua conta no sistema</Text>

              <FormControl>
                {errors.password ===
                "Todos os campos precisam ser preenchidos" ? (
                  <Box display={"flex"} marginLeft={30} marginBottom={2}  >
                    <Image src={IconError} marginRight={1} />
                    <Text
                      fontFamily={"Questrial"}
                      fontSize={"12px"}
                      color="red.500"
                    >
                      {errors.password}
                    </Text>
                  </Box>
                ) : null}
                <Box display={"flex"} justifyContent={"center"}>
                <Field
                      as={TextField}
                  name="email"
                  placeholder="Email"
                  type="email"
                  hasError={errors.email}
                  isCheck={errors.email === undefined && values.email !== ""}
                />
                </Box>
                <FormErrorMessage name="email" />
                {errors.email === "Campo obrigatório*" && touched.email ? (
                  <Text
                    fontFamily={"Questrial"}
                  
                    color="red.500"
                  >
                    {errors.email}
                  </Text>
                ) : null}
              </FormControl>
              <br />
              <FormControl>
                <InputGroup display={"flex"} justifyContent={"center"}>
                  <Field
                        as={TextField}
                    name="password"
                    placeholder="Senha"
                    hasError={errors.password && touched.password}
                    isCheck={
                      errors.password === undefined && values.password !== ""
                    }
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement
                    width="auto"
                   marginRight={"1em"}
                    marginTop={"0.8em"}
                  >
                    {showPassword ? (
                      <Image src={Eye} onClick={() => setShowPassword(false)} />
                    ) : (
                      <Image
                        src={EyeClosed}
                        onClick={() => setShowPassword(true)}
                      />
                    )}
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage name="password" />
                {errors.password === "Campo obrigatório*" &&
                touched.password ? (
                  <Text
                    fontFamily={"Questrial"}
                   
                    color="red.500"
                  >
                    {errors.password}
                  </Text>
                ) : null}
              </FormControl>

              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-around"}
                className="font-text"
              >
                <Box display={"flex"} paddingBottom={5} >
                  <Text fontSize="25px" color={"#000"} marginRight={"8px"}>
                    Ainda não tem uma conta?
                  </Text>
                  <ChakraLink
                    fontSize="25px"
                    color={"#3182CE"}
                    fontWeight={400}
                    as={LinkSignup}
                    to="/signup"
                  >
                    Cadastre-se
                  </ChakraLink>
                </Box>
              </Box>

              <Center marginTop={5} className="font-text">
                <Button size='lg' type={"submit"}>Criar</Button>
              </Center>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default AddStudent;
