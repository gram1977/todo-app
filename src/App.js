import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import Welcome from "./components/Welcome/Welcome";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
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
        {isLoggedIn ? (
          // Render Welcome component when logged in
          <Welcome user={user} />
        ) : (
          // Render Login component when not logged in
          <Login onLogin={handleLogin} />
          /*           onLogin={(email, password) => {
                        console.log("Logging in with", email, password);
                        // For now, just set logged in to true
                        handleLogin({ email, password });
                      }} */
        )}
      </main>
      <Footer />
    </div>

    // Conditional Rendering: Show different components based on Login status
  );
}

export default App;
