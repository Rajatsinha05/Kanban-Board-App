import React, { useState } from "react";
import "../css/signup.css";
import Cookies from "universal-cookie";
import { Navigate, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/Action";

const SignUp = () => {
  const cookies = new Cookies(null, { path: "/" });
  let nav = useNavigate();
  let dispatch = useDispatch();
  const token = useSelector((store) => store.user);
  console.log("token: ", token);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signup(userData));
      cookies.set("token", token.token);
      nav("/");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />

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

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
