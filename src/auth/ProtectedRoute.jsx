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
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZnZWxvZW5AZ21haWwuY29tIiwidXVpZCI6IjN2N29qMzg5MzhsNTB4cWR4ayIsImlhdCI6MTY1NjY3MTM0Mn0.-79UczDjb8NXkIhY84v8b36XTRHEcsQZUwd5b5dpdFg";
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
