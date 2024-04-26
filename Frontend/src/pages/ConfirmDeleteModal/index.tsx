import React, { useEffect } from "react";
import {
  ModalOverlay,
  Modal,
  ModalBody,
  Center,
  Text,
  Button,
  Flex,
  ModalContent,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { deleteStudent } from "../../services/student";

interface CardStudentProps {
  isOpen: boolean;
  message: string;
  idStudent: string;
  onClose: () => void;
}
const ConfirmDeleteModal: React.FC<CardStudentProps> = ({
  isOpen,
  onClose,
  message,
  idStudent
}) => {
  const navigate = useNavigate();

  const handleDeleteConfirmed = async () => {
    try {
      console.log(idStudent);
      
      await deleteStudent(idStudent, navigate);
      onClose();
      window.location.reload()
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Center>
      <Modal isOpen={isOpen} isCentered onClose={onClose}>
        <ModalOverlay />
        <Center>
          <ModalContent borderRadius={"32px"} textAlign={"center"}>
            <ModalBody>
              <Text
                fontSize={"32px"}
                fontWeight={700}
                textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              >
                {message}
              </Text>
              <Flex justifyContent="center" mt={4}>
                <Button
                  colorScheme="red"
                  mr={4}
                  onClick={handleDeleteConfirmed}
                >
                  Sim
                </Button>
                <Button onClick={onClose}>Não</Button>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Center>
      </Modal>
    </Center>
  );
};

export default ConfirmDeleteModal;
