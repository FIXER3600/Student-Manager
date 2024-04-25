import { httpClient } from "./httpClient";

export const getStudents = async () => {
  await httpClient
    .post("/students")
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err.response);
    });
};
