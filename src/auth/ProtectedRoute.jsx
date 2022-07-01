import React, { useEffect, useState } from "react";
// Component
import Admin from "../admin/admin";
// Routing
import { Navigate } from "react-router-dom";
// Service
import verifyToken from "../service/auth";

const ProtectedRoute = () => {
  const [resultToken, setResultToken] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(false);
    const token = localStorage.getItem("token_access_portfolio");
    verifyToken(token)
      .then((result) => {
        setResultToken(result.data);
        setLoad(true);
      })
      .catch(() => {
        setResultToken(false);
        setLoad(true);
      });
  }, []);

  if (load) {
    if (!resultToken) return <Navigate to="/login" />;
    else {
      return <Admin />;
    }
  } else {
    return null;
  }
};

export default ProtectedRoute;
