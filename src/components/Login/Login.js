import React, { useState } from "react";

// useState Hook: Manages component state (email and password)
// Returns [currentValue, setterFunction]
// debugger;
console.log("Login.js loaded");
/*In React, writing ({ onLogin }) in a function component is called "destructuring props." 
It means you are extracting the onLogin property from the props object directly, 
not that onLogin is an object itself.*/
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission reload

    if (email && password) {
      console.log("Logging in with", email, password);
      onLogin({ email, password });
    }
  };

  /*
The JSX in the return statement is executed whenever:
When the component is first mounted (added to the DOM)
Whenever the component's state or props change
*/
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Login</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your Email:"
                value={email} //Controlled Input: value from state//
                onChange={(e) => setEmail(e.target.value)} //Upate state on change
                required //HTML5 validation
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your Password:"
                value={password} //Controlled Input: value from state//
                onChange={(e) => setPassword(e.target.value)} //Update state on change
                required //HTML5 validation
              />
            </div>
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
