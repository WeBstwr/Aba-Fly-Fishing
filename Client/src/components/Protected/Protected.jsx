import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/SignUp");
  });
  return <div>{children}</div>;
};

export default Protected;
