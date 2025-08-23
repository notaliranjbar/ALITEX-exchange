import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../UsersProvider";

const Login = () => {
  const { user, login } = useUsers();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameErr, setUsernameErr] = useState("none");
  const [passErr, setPassErr] = useState("none");
  const [usernameInvalid, setUsernameInvalid] = useState(false);
  const [passWordInvalid, setPasswordInvalid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasErr = false;

    if (!password) {
      setPasswordInvalid(true);
      hasErr = true;
    }
    if (!username) {
      setUsernameInvalid(true);
      hasErr = true;
    }
    if (hasErr) return;

    try {
      const success = await login(username, password);
      if (success) {
        navigate("/profile");
      } else {
        setUsernameErr("block");
        setPassErr("block");
      }
    } catch (err) {
      console.error(err);
    }
  };
  if (user) {
  return (
    <div className="login-overlay">
      <p className="loginHeader fade-up" style={{ display: "none" }}>
        Swap anywhere, anytime
      </p>

      <h1
        className="fade-up"
        style={{
          animationDelay: "0.2s",
          textAlign: "center",
          color: "#ffffff", 
          textShadow: "2px 2px 8px #33d6a8",
          fontSize: "3rem",
        }}
      >
        Enjoy!
      </h1>
    </div>
  );

}
  return (
    <div className="login-overlay">
      <p className="loginHeader fade-up">Swap anywhere , anytime</p>
      <form className="login-form fade-up" style={{ animationDelay: "0.2s" }} onSubmit={handleSubmit}>
        <h2 className="loginTitle" style={{ cursor: "pointer" }}>Log in</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
            setUsernameInvalid(false);
            setUsernameErr("none");
          }}
          value={username}
          className={`logInInformations ${usernameInvalid ? "invalid" : ""}`}
        />
        <h2 className="err" style={{ display: usernameErr }}>This username doesn't exist</h2>

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordInvalid(false);
          }}
          value={password}
          className={`logInInformations ${passWordInvalid ? "invalid" : ""}`}
        />
        <h2 className="err" style={{ display: passErr }}>The password is incorrect</h2>

        <button type="submit" className="logInButton">Next</button>
      </form>

      <p className="loginFooter fade-up" style={{ cursor: "default", animationDelay: "0.4s" }}>
        Don’t have an account? <a href="signup">Sign up</a>
      </p>
      <p className="loginDiscription fade-up" style={{ animationDelay: "0.4s" }}>
        <span>Buy and Sell crypto in 14+ networks including Ethereum,</span>
        <span>Unichain and Base </span>
      </p>
    </div>
  );
};

export default Login;
