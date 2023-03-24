import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProtectedRoute({ children, users }) {
  const token = localStorage.getItem("token");

  if (!token) {
    toast("Sign in to create a review");
    return <Navigate to="/register" replace="true" />;
  }

  return children;
}

export default ProtectedRoute;
