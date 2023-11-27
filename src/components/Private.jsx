import React from "react";
import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
const Private = ({ children }) => {
  const cookies = new Cookies();
  let user = useSelector((store) => store.user);
  
 let token=cookies.get("token")
  if (user || token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default Private;
