import React, { useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token) || localStorage.getItem("token");
  const hasWarned = useRef(false);

  useEffect(() => {
    if (!token && !hasWarned.current) {
      toast.warning("You must be logged in to access this page.");
      hasWarned.current = true;
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
