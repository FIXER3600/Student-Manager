import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Edit from "../pages/Edit";
import Signup from "../pages/Signup";
import StudentDetails from "../pages/StudentDetails";
import { GlobalStorage } from "../GlobalContext/globalContext";
import AddStudent from "../pages/AddStudent";
export function ConfigRoutes() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student-details/:id" element={<StudentDetails />} />
          <Route path="/add-student" element={<AddStudent />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default ConfigRoutes;
