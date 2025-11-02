import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import Welcome from "./components/Welcome/Welcome";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Todos from "./Todos";
// debugger;
console.log("App.js loaded");
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  /*user = {
  email: null,
  password: null,
};*/
  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    /*saves the user's email and password in the state variable user.
    user = {
  email: "abc@example.com",
  password: "mypassword",
};*/
  };
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Menu user={user} isLoggedIn={isLoggedIn} />
      <main className="flex-grow-1">
        <Routes>
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to={`/welcome/${user?.email?.split("@")[0]}`} />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/welcome/:username"
            element={
              isLoggedIn ? <Welcome user={user} /> : <Navigate to="/login" />
            }
          />
          {/* Default route */}
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to={`/welcome/${user?.email?.split("@")[0]}`} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/todos/:username"
            element={isLoggedIn ? <Todos /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
