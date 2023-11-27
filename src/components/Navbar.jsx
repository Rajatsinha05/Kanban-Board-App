import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/Action";

const Navbar = () => {
  const cookies = new Cookies();

  const dispatch = useDispatch();
  const token = useSelector((store) => store.user);

  const userToken = cookies.get("token");

  useEffect(() => {
    if(userToken){
      dispatch(loginSuccess(userToken))
    }
  }, [])
const LogOut=()=>{
  Cookies.
}
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src="https://gurucool.life/static/media/GurucoolNewWebLogo.7044d1e41f0ae5cc0426c727085ab32d.svg"
            alt="img"
          />
        </Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/task" className="navbar-link">
            Add Task
          </Link>
          <Link to="/login" className="navbar-link">
            {token ? <span onClick={LogOut}> LogOut</span> :<span>Login</span>}
          </Link>
          <Link to="/signup" className="navbar-link">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
