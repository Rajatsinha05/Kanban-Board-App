import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/Action";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/signup.css";

const SignUp = () => {
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
      await dispatch(signup(data));
      const userToken = token; 
      cookies.set("token", userToken);
      toast.success("Sign Up successful!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (error) {
      toast.error("Sign Up failed. Please check your information.", {
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
    <div>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && <p>{errors.username.message}</p>}

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

          <button type="submit">Sign Up</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
