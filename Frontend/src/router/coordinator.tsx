import { NavigateFunction } from "react-router-dom"

export const goToLoginPage=(navigate: NavigateFunction)=>{
	navigate("/")
}
export const goToHomePage=(navigate: NavigateFunction)=>{
	navigate("/home")
}
export const goToAddStudentPage=(navigate: NavigateFunction)=>{
	navigate("/add-student")
}
export const goToStudentDetailsPage=(id:string,navigate: NavigateFunction)=>{
	navigate(`/student-details/${id}`)
}