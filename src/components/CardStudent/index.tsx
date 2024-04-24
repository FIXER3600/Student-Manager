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
    <Box>
	<Image src={photo}/>
	<Text>{name}</Text>
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
