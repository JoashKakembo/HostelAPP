import "./index.css";
import React, { useState, useEffect, createContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import RegisterCustodian from "./components/RegisterCustodian";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const logIn = () => {
    setIsLoggedIn(true);
  };
  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage logIn={logIn} />} />
        <Route path="/register1" element={<RegisterPage />} />
        <Route path="/register2" element={<RegisterCustodian />} />
      </Routes>
    </div>
  );
}

export default App;
