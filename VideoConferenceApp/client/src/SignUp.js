import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import './signup.css'; // Import the associated CSS file
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [registrationSuccess,setRegistrationSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });      

      if (response.ok) {
        // Sign-up was successful, handle JWT token here
        const data = await response.json();
        localStorage.setItem("token", data.token);
        // Redirect or handle success as needed
        setRegistrationSuccess(true);
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="signup-container">
      <h2 style={{ color: "black", marginBottom: "30px", fontSize: "20px" }}><b>Sign Up</b></h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="youremail@example.com"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          required
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="********"
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign Up</button>
        {/* <p className="already-account" style={{ marginLeft: "10px" }}>
          Already have an account?{" "}
          <Link to="/signin" className="login-link">
            Go to login page
          </Link>
        </p> */}
        {registrationSuccess && (
          <div className="success-message">
            <strong style={{marginLeft:"0px"}}>Registration successful! You can now signin using below link👇👇</strong>
          </div>
        )}
        <p className="already-account" style={{ marginLeft: "10px" }}>
        Already have an account?{" "}
        <Link to="/signin" className="login-link">
          Go to login page
        </Link>
       </p>
      </form>
    </div>
  );
  };
export default SignUp;
