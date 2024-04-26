import { NavigateFunction } from "react-router-dom";
import { goToHomePage } from "../router/coordinator";
import { httpClient } from "./httpClient";

export const addStudent = async (
  form: {
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
    foto: string | null;
  },
  navigate: NavigateFunction
) => {
  await httpClient
    .post("/student", form)
    .then((data) => {
      console.log(data);
      goToHomePage(navigate);
    })
    .catch((err) => {
      console.log(err.response);
    });
};
export const editStudent = async (
  form: {
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
    foto: string;
  },
  id: string | undefined,
  navigate: NavigateFunction
) => {
  await httpClient
    .post(`/students/${id}`, form)
    .then((data) => {
      console.log(data);
      goToHomePage(navigate);
    })
    .catch((err) => {
      console.log(err.response);
    });
};
export const getStudentById = async (id: string | undefined) => {
  const res = await httpClient
    .get(`student/${id}`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

  return res;
};
export const deleteStudent = async (id: string | undefined, navigate: NavigateFunction) => {
  await httpClient
    .post(`/student/${id}`)
    .then((data) => {
      console.log(data);
      goToHomePage(navigate);
    })
    .catch((err) => {
      console.log(err.response);
    });
};
