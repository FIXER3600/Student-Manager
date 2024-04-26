import { Button, Flex, Image, Input,InputGroup,InputRightElement} from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons"
import { useContext } from 'react'
import DeltaLogo from "../../assets/delta_assist_logo.jpg"
import { GlobalContext } from '../../GlobalContext/globalContext'
import { goToLoginPage } from '../../router/coordinator'
import { useNavigate } from 'react-router-dom'
function Header() {
  const { searchStudent, setSearchStudent } = useContext(GlobalContext)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleStudent = ({ target }:any) => {
    setSearchStudent(target.value)
  }
  const navigate=useNavigate()
  return (
    <Flex backgroundColor={"#08699B"} h={"10em"} w={"100vw"}>
	<Image src={DeltaLogo} w={"150px"} h={"10em"}/>
	<Flex alignItems={"center"} justifyContent={"space-around"}>
	<InputGroup margin={"1em"}
	w={"80vw"} >
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="white" />}
        />
        <Input
         value={searchStudent}
          onChange={handleStudent}
          type={"search"}
          variant="flushed"
          placeholder="Procure um Aluno..."
          _placeholder={{ color: "white" }}
          color={"white"}

        />
      </InputGroup>
      <Button marginLeft={"0.5em"} onClick={()=>goToLoginPage(navigate)}>Sair</Button>
      </Flex>
    </Flex>
  )
}

export default Header