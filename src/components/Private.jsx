import React from "react";
import { Navigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Private = ({ children }) => {
  
  let user = useSelector((store) => store.user);
  console.log("user: ", user);

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default Private;
