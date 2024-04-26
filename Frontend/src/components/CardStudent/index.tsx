import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { goToStudentDetailsPage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import DefaultImage from "../../assets/default-profile-picture.jpg";
import ConfirmDeleteModal from "../../pages/ConfirmDeleteModal";


interface CardStudentProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  photo: string;
}

const CardStudent: React.FC<CardStudentProps> = ({
  id,
  name,
  email,
  phone,
  address,
  photo,
}) => {
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState(false);

  const deleteUser = async () => {
    setDeleteModal(true); // Abre o modal de confirmação
  };

  const handleModalClose = () => {
    setDeleteModal(false); // Fecha o modal de confirmação
  };
  
  return (
    <Box
      boxShadow="rgb(0 0 0 / 30%) 0px 4px 8px 0px"
      rounded={"md"}
      p={"1em"}
      w={["16em"]}
      h={"auto"}
      fontFamily={"Flexo-Demi"}
      _hover={{ transform: `translate(0px, -5px)` }}
      cursor={"pointer"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Image src={photo || DefaultImage} />
      <Text fontSize="2xl" textTransform={"capitalize"}>
        {name}
      </Text>
      <Text>{email}</Text>
      <Text>{address}</Text>
      <Text>{phone}</Text>
      <Flex justifyContent={"space-between"} alignItems={"flex-end"} marginTop={"1em"}>
      <Button onClick={() =>  goToStudentDetailsPage(id, navigate)}>Editar</Button>
      <Button onClick={deleteUser} color="white" backgroundColor="#b81414">
          Deletar Aluno
        </Button>
      

      </Flex>
   
      <ConfirmDeleteModal
        idStudent={id}
        isOpen={deleteModal}
        onClose={handleModalClose}
        message={`Deseja mesmo deletar o aluno ${name}?`}
      />       
	
    </Box>
  );
};

CardStudent.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default CardStudent;
