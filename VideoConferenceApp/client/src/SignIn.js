// import React from "react";
// import { useState } from "react";
// import {Link} from "react-router-dom"
// import './signin.css';
// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const userData = {
//       email,
//       password,
//     };

//     try {
//       const response = await fetch("http://localhost:3001/signin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });

//       if (response.ok) {
//         // Sign-in was successful, handle JWT token here
//         const data = await response.json();
//         localStorage.setItem("token", data.token);
//         // Redirect or handle success as needed
//       } else {
//         const data = await response.json();
//         setError(data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   return (
//     <div className="signin-container">
//       <h1 style={{ color: "black", marginBottom: "30px", fontSize: "25px" }}><b>Sign In</b></h1>
//       <form className="signin-form" onSubmit={handleSubmit} method="post">
//         <label htmlFor="email"><b>Email</b></label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="youremail@example.com"
//           required
//         />
//         <label htmlFor="password"><b>Password</b></label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="********"
//           required
//         />
//         {error && <p className="error-message">{error}</p>}
//         <button type="submit">Sign In</button>
//       </form>
//       <p className="signup-link">
//         Don't have an account? <Link to="/signup">Sign up</Link>
//       </p>
//     </div>
//   );
//   };
// export default SignIn;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import './signin.css'; // Import the associated CSS file

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:3001/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Sign-in was successful, handle JWT token here
        const data = await response.json();
        localStorage.setItem("token", data.token);
        // Redirect to Home component after successful sign-in
        navigate('/'); // Use navigate instead of history.push
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signin-container">
      <h1 style={{ color: "black", marginBottom: "30px", fontSize: "25px" }}><b>Sign In</b></h1>
      <form className="signin-form" onSubmit={handleSubmit} method="post">
      <label htmlFor="email"><b>Email</b></label>
         <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="youremail@example.com"
          required
        />
       <label htmlFor="password"><b>Password</b></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          required
       />
         {error && <p className="error-message">{error}</p>}
         <button type="submit">Sign In</button>
      </form>
      <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default SignIn;
