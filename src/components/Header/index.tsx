import { Button, Flex, Image, Input,InputGroup,InputRightElement} from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons"
import React from 'react'
import DeltaLogo from "../../assets/delta_assist_logo.jpg"
function Header() {
  return (
    <Flex backgroundColor={"#08699B"} h={"10em"} >
	<Image src={DeltaLogo} />
	<Flex alignItems={"center"} justifyContent={"space-around"}>
	<InputGroup margin={"1em"}
	w={"80vw"} >
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="white" />}
        />
        <Input
         // value={searchPokemon}
          //onChange={handlePokemon}
          type={"search"}
          variant="flushed"
          placeholder="Procure um Aluno..."
          _placeholder={{ color: "white" }}
          color={"white"}

        />
      </InputGroup>
      <Button>Perfil</Button>
      </Flex>
    </Flex>
  )
}

export default Header