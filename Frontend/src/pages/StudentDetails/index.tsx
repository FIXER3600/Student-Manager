import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  Image,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";
import { Form, Formik, Field } from "formik";
import React, { useEffect, useState } from "react";
import { deleteStudent, editStudent, getStudentById } from "../../services/student";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import DefaultImage from "../../assets/default-profile-picture.jpg";
import IconError from "../../assets/errorIcon.png";
import DeltaLogo from "../../assets/deltaGlobal-deltagrupo-logo-color.svg";
import TextField from "../../components/TextField";
import { goToHomePage } from "../../router/coordinator";
import ConfirmDeleteModal from "../ConfirmDeleteModal";

// const EditStudentSchema = Yup.object().shape({
//   name: Yup.string().required("Campo obrigatório*"),
//   email: Yup.string().required("Campo obrigatório*"),
//   phone: Yup.string().required("Campo obrigatório*"),
//   address: Yup.string().required("Campo obrigatório*"),
//   photo: Yup.string().required("Campo obrigatório*"),
// });

function StudentDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const [deleteModal, setDeleteModal] = useState(false);
  const [contador, setContador] = useState(0);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [student, setStudent] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
    address: "",
    photo: "",
  });

  useEffect(() => {
    const getStudent = async () => {
      try {
        const data = await getStudentById(params.id);
        const { id, nome, email, telefone, endereco, foto } = data.data;
        setStudent({ id: id, name: nome, email, phone: telefone, address: endereco, photo: foto });
        setId(id);
        setName(nome);
        setEmail(email);
        setPhone(telefone);
        setAddress(endereco);
        setPhoto(foto);
      } catch (err) {
        console.log("Erro ao buscar dados do usuário:", err);
      }
    };
    getStudent();
  }, [contador, params.id]);

  const initialValues = {
    id:id,
    name: name,
    email: email,
    phone: phone,
    address: address,
    photo: photo,
  };

  const handleSubmit = async () => {
    try {
      await editStudent(
        { nome: name, email, telefone: phone, endereco: address, foto: photo },
        params.id,
        navigate
      );
      setContador(contador + 1);
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  const deleteUser = async () => {
    setDeleteModal(true); // Abre o modal de confirmação
  };

  const handleModalClose = () => {
    setDeleteModal(false); // Fecha o modal de confirmação
  };

  const handleDeleteConfirmed = async () => {
    try {
      await deleteStudent(id, navigate);
      setContador(contador + 1);
      setDeleteModal(false); // Fecha o modal após a exclusão
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <Flex alignItems="center" h="100vh" marginLeft="5em">
      <Flex flexDirection="column" justifyContent="space-between" borderRadius="10px">
        <Flex backgroundColor="#0089BF" h="350px" w="250px" borderRadius="10px" mb="0.8rem">
          <Image borderRadius="10px" src={photo || DefaultImage} />
        </Flex>
        <Button onClick={deleteUser} color="white" backgroundColor="#b81414">
          Deletar Aluno
        </Button>
      </Flex>

      <Formik
      //  validationSchema={EditStudentSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values }) => (
          <Form>
            <Flex
              ml={"15em"}
              borderRadius={"10px"}
              backgroundColor={"#F0F0F0"}
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
                 
                  <Box display={"flex"} justifyContent={"center"}>
                    <Field
                      as={TextField}
                      name="name"
                      required
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
                      required
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
                      required
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
                      required
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

      <ConfirmDeleteModal
        isOpen={deleteModal}
        onClose={handleModalClose}
        onConfirm={handleDeleteConfirmed}
        nameStudent={name}
        idStudent={id}
        message={`Deseja mesmo deletar o aluno ${name}?`}
        pathNavigate={undefined}
      />
    </Flex>
  );
}

export default StudentDetails;
