import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Action";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/login.css";

const Login = () => {
  const cookies = new Cookies(null, { path: "/" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((store) => store.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data));
      const userToken = token;
      toast.success("Login successful!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      cookies.set("token", userToken);
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1000);
    } catch (error) {
      toast.error("Login failed. Please check your credentials.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Login</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
