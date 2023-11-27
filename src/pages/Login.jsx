import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/login.css";
import { login } from "../redux/Action";
import Cookies from "universal-cookie";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const cookies = new Cookies(null, { path: "/" });

  let nav = useNavigate();
  const token = useSelector((store) => store.user);
  console.log("token: ", token);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(login(userData));
      
      cookies.set("token", token.token);
      nav("/");
    } catch (error) {}
  };

  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
