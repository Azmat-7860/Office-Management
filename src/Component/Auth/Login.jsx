import React, { useState } from "react";

const Login = ({ openDashboard }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    openDashboard(email, password);
    // Perform login logic (e.g., authentication)
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
    // You can store user data in localStorage if needed
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg card-Container" style={{}}>
        <h3 className="text-center text-success mb-4">Employee Management</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="text-success">
              Email
            </label>
            <input
              type="email"
              className="form-control "
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="text-success">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-success btn-block fw-bold w-100"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
