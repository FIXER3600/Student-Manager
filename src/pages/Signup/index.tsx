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
import DeltaLogo from "../../assets/deltaGlobal-deltagrupo-logo-color.svg";
import IconError from "../../assets/errorIcon.png";
import {
  Link as LinkSignup,
  useNavigate,
  // useNavigate
} from "react-router-dom";
import React, { useState } from "react";
import { signup } from "../../services/user";
const LoginSchema = Yup.object().shape(
  {
    name: Yup.string().when(["email", "password"], {
      is: (val: string) => !val?.length,
      then: () =>
        Yup.string().required("Todos os campos precisam ser preenchidos"),
      otherwise: () => Yup.string().required("Campo obrigatório*"),
    }),
    email: Yup.string().required("Campo obrigatório*"),
    password: Yup.string().required("Campo obrigatório*"),
  },
  [["email", "password"]]
);

const initialValues = {
  name: "",
  email: "",
  password: "",
};

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      signup(
        {
          name: values.name,
          email: values.email,
          password: values.password,
        },
        navigate
      );
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };
  return (
    <Formik
      validationSchema={LoginSchema}
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
                Cadastre-se no sistema
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
                    placeholder="Digite seu nome..."
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
                    placeholder="Informe seu Email..."
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
                <InputGroup display={"flex"} justifyContent={"center"}>
                  <Field
                    as={TextField}
                    name="password"
                    placeholder="Informe sua Senha..."
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
                  <Text fontFamily={"Questrial"} color="red.500">
                    {errors.password}
                  </Text>
                ) : null}
              </FormControl>

              <Center marginTop={5} className="font-text" display={"flex"}>
                <Button
                  m={"2em"}
                  size="lg"
                  type={"submit"}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Voltar
                </Button>
                <Button
                  size="lg"
                  color={"white"}
                  backgroundColor={"#0089BF"}
                  _hover={{ backgroundColor: "#33A1CC" }}
                  type={"submit"}
                >
                  Cadastrar
                </Button>
              </Center>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default Signup;
