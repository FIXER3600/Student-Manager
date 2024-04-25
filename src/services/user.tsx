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
    .then(() => {
      console.log(form);
      goToHomePage(navigate);
    })
    .catch((err) => {
      console.log(err.response);
    });
};