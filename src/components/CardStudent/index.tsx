import React from 'react'
import PropTypes from 'prop-types'
import { Box, Image, Text } from '@chakra-ui/react'

interface CardStudentProps {
	name: string;
	email: string;
	phone: string;
	address:string;
	photo: string;
      }
      
const CardStudent: React.FC<CardStudentProps> = ({ name, email, phone,address, photo }) => {
  return (
    <Box 
    boxShadow="rgb(0 0 0 / 30%) 0px 4px 8px 0px"
    rounded={"md"}
    p={"1em"}
    w={["16em"]}
    h={"auto"}
    fontFamily={"Flexo-Demi"}
    _hover={{ transform: `translate(0px, -5px)` }}
    cursor={"pointer"}>
	<Image src={photo}/>
	<Text fontSize="2xl" textTransform={"capitalize"}>{name}</Text>
	<Text>{email}</Text>
	<Text>{address}</Text>
	<Text>{phone}</Text>

    </Box>
  )
}

CardStudent.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	address:PropTypes.string.isRequired,
	photo: PropTypes.string.isRequired
}

export default CardStudent
