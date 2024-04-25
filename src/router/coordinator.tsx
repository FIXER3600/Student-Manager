import { NavigateFunction } from "react-router-dom"

export const goToLoginPage=(navigate: NavigateFunction)=>{
	navigate("/")
}
export const goToHomePage=(navigate: NavigateFunction)=>{
	navigate("/home")
}