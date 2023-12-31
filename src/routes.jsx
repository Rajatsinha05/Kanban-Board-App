import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Private from "./components/Private";
import Home from "./pages/Home";
import TaskForm from "./components/TaskForm";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Private><Home/></Private> } />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/task" element={<Private> <TaskForm/></Private>} />
    </Routes>
  );
};

export default AllRoutes;
