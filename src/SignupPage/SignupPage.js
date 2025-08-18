
import React, { useState } from "react";
import axios from "axios";
import "./SignupPage.css"; 
import SignupHeader from "./SignupHeader";
function SignupPage() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { username, phone, password };
    try {
      await axios.post("http://localhost:5000/users", newUser);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="signup-container">
      <SignupHeader/>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p className="loginFooter fade-up" style={{cursor:"default" , animationDelay:"0.4s"}}>Do you have an account? <a href="#">Log in</a></p>
    </div>
  );
}

export default SignupPage;
