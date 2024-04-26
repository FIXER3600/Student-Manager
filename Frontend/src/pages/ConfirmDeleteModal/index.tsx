// SuccessModal.js
import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Center,
  Text,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";


const ConfirmDeleteModal = ({ isOpen, onClose, message, pathNavigate, nameStudent }) => {
  //const navigate = useNavigate()
  // useEffect(() => {
  //   // const timeoutId = setTimeout(() => {
  //   //   onClose(); // Fechar o modal após 3 segundos
  //   //   navigate(pathNavigate); // Navegar para a tela de login
  //   // }, 3000)


  //   //return () => clearTimeout(timeoutId); // Limpar o timeout se o componente for desmontado
  // }, [onClose, navigate, pathNavigate]);
console.log("MODAL:",isOpen);

  return (
    <Center>
      <Modal isOpen={isOpen} isCentered
      onClose={onClose }>
        <ModalOverlay />
        <Center>
          <ModalContent
            borderRadius={"32px"}
            textAlign={"center"}
          >
            <ModalBody>
              <Text

               fontSize={"32px"}
                fontWeight={700}
                textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
              >
                {message}
              </Text>
              <Flex>
              <Button >Sim</Button>
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
