import React from "react";
import { HiMail, HiLockClosed, HiAcademicCap } from "react-icons/hi";
import "../css/login.css"; // Include necessary CSS styles

const Login = () => {
  return (
    <div className="session">
      <div className="left">
        <HiAcademicCap size={100} color="#fff" />
      </div>
      <form className="log-in" autoComplete="off">
        <h4>
          We are <span>ENTRANCE GATEWAY</span>
        </h4>
        <p>Welcome back! </p>

        {/* Email Input */}
        <div className="floating-label">
          <input
            placeholder="Email"
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            required
          />
          <label htmlFor="email">Email:</label>
          <div className="icon">
            <HiMail size={20} />
          </div>
        </div>

        {/* Password Input */}
        <div className="floating-label">
          <input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            required
          />
          <label htmlFor="password">Password:</label>
          <div className="icon">
            <HiLockClosed size={20} />
          </div>
        </div>

        <button type="submit" onClick={(e) => e.preventDefault()}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
