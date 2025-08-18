
import React, { useState } from "react";
import axios from "axios";
import "./SignupPage.css"; 
import SignupHeader from "./SignupHeader";
import SignupFooter from "./SignupFooter";
function SignupPage() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [usernameErr , setUsernameErr] = useState("none");
  const [phoneErr , setPhoneErr] = useState("none");
  const [passErr , setPassErr] = useState("none");
  const [usernameExist , setUsernameExist] = useState(false)
  const [phoneExists , setphoneExists] = useState(false)
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const validatePassword = (password) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
      return regex.test(password);
    }
    if (!validatePassword(password)) {
      setPassErr("block")
      return
    }else{
      setPassErr("none")
    }
    if (!username || !phone || !password) return;
    const response = await axios.get("http://localhost:5000/users");
    const users = response.data;
    if(users.some(user => user.username===username)){
      setUsernameExist(true)
      return;
    }
    if(users.some(user => user.phone===phone)){
      setphoneExists(true)
      return;
    }
    if (!usernameExist && !phoneExists){
      const newUser = { username, phone, password };
      try {
        await axios.post("http://localhost:5000/users", newUser);
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }
};

  return (
    <div className="signup-page">
      <div className="signup-container">
        <SignupHeader/>
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={async (e) => {
              setUsername(e.target.value);
              const response = await axios.get("http://localhost:5000/users");
              const users = response.data;
              if(users.some(user => user.username === e.target.value)) {
                setUsernameErr("block");
              } else {
                setUsernameErr("none");
              }
            }}
            className={submitted && !username ? "invalid" : ""}
          />
          <h2 className="err" style={{display : usernameErr}}>This username already exists please choose another one</h2>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={async (e) => {
              setPhone(e.target.value);
              const response = await axios.get("http://localhost:5000/users");
              const users = response.data;
              if(users.some(user => user.phone === e.target.value)) {
                setPhoneErr("block");
              } else {
                setPhoneErr("none");
              }
            }}
            className={submitted && !phone ? "invalid" : ""}
          />
          <h2 className="err" style={{display: phoneErr}}>This phonenumber already exists please choose another one</h2>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={submitted && !password ? "invalid" : ""}
          />
          <h2 className="err" style={{display: passErr}}>Password must have 8letters length and contain at least one uppercase letter, one lowercase letter, and a number</h2>
          <button type="submit">Sign Up</button>
        </form>
        <p className="loginFooter fade-up" style={{cursor:"default" , animationDelay:"0.4s"}}>Do you have an account? <a href="#">Log in</a></p>
      </div>
      <SignupFooter/>
    </div>
  );
}

export default SignupPage;
