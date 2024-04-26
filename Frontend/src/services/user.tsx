import { NavigateFunction } from "react-router-dom";
import { goToHomePage, goToLoginPage } from "../router/coordinator";
import { httpClient } from "./httpClient";

export const signup = async (
  form: { name: string; email: string; password: string },
  navigate: NavigateFunction
) => {
  await httpClient
    .post("/signup", form)
    .then(() => {
      console.log(form);
      goToLoginPage(navigate);
    })
    .catch((err) => {
      console.log(err.response);
    });
};
export const login = async (
  form: { email: string; password: string },
  navigate: NavigateFunction
) => {
  await httpClient
    .post("/login", form)
    .then((data) => {
      if (data.status === 200) {
        const token = data.data.token;
        sessionStorage.setItem("token", token);
   
          goToHomePage(navigate);
        
      }
    })
    .catch((err) => {
      console.log(err.response);
    });
};