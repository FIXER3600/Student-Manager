import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToHomePage, goToLoginPage } from "../router/coordinator"


const useProtectedPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
  if(!sessionStorage.getItem("token")){
	goToLoginPage(navigate)
    }else{
	goToHomePage(navigate)
    }
  }, [navigate])

  return
}

export default useProtectedPage