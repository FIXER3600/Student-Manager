import { NavigateFunction } from "react-router-dom";
import { goToHomePage } from "../router/coordinator";
import { httpClient } from "./httpClient";

export const addStudent = async (form:{nome:string,email:string,telefone:string,endereco:string,foto:string},navigate:NavigateFunction) => {
  await httpClient
    .post("/student",form)
    .then((data) => {
      console.log(data);
      goToHomePage(navigate)
    })
    .catch((err) => {
      console.log(err.response);
    });
};
