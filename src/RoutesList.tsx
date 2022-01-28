import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "./page/dashboard";
import Home from "./page/home";
import Login from "./page/login";
import { getToken } from "./utils/Common";

function PrivateRoute({ children }:any) {
  const auth = getToken();
  return auth ? children : <Navigate to="/login" />;
}

const RoutesList = () => {
    return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    );
}

export default RoutesList;