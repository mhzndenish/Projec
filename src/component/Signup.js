import React from "react";
import { HiMail,HiUser, HiUserAdd, HiLockClosed, HiAcademicCap } from "react-icons/hi";
import "../css/signup.css"; // Include necessary CSS styles

const Signup = () => {
  return (
    <div className="session">
      <div className="left">
        <HiAcademicCap size={100} color="#fff" />
      </div>
      <form className="log-in" autoComplete="off">
        <h4>
          We are <span>ENTRANCE GATEWAY</span>
        </h4>
        <p>Welcome! Let's get you signed up.</p>

        {/* User Name */}
        <div className="floating-label">
          <input
            placeholder="Full Name"
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            required
          />
          <label htmlFor="fullname">Full Name:</label>
          <div className="icon">
            <HiUser size={20} />
          </div>
        </div>

        {/* Email */}
        <div className="floating-label">
          <input
            placeholder="Email"
            type="text"
            name="Email"
            id="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Enter a valid email address"
            autoComplete="off"
            required
          />
          <label htmlFor="Email">Email:</label>
          <div className="icon">
            <HiMail size={20} />
          </div>
        </div>

        {/* Gender */}
        <div className="floating-label">
          <select name="gender" id="gender" required>
            <option value="" disabled selected>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="gender">Gender:</label>
        </div>

        {/* Contact Number */}
        <div className="floating-label">
          <input
            placeholder="Contact Number"
            type="text"
            name="contact"
            id="contact"
            pattern="[0-9]{10}"
            title="Enter a 10-digit contact number"
            autoComplete="off"
            required
          />
          <label htmlFor="contact">Contact Number:</label>
          <div className="icon">
            <HiUserAdd size={20} />
          </div>
        </div>

        {/* New Password */}
        <div className="floating-label">
          <input
            placeholder="New password"
            type="password"
            name="New password"
            id="password"
            autoComplete="off"
            required
          />
          <label htmlFor="New password">New Password:</label>
          <div className="icon">
            <HiLockClosed size={20} />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="floating-label">
          <input
            placeholder="Confirm Password"
            type="password"
            name="confirm-password"
            id="confirm-password"
            autoComplete="off"
            required
          />
          <label htmlFor="confirm-password">Confirm Password:</label>
          <div className="icon">
            <HiLockClosed size={20} />
          </div>
        </div>

        <button className="signup-btn" type="submit" onClick={(e) => e.preventDefault()}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
