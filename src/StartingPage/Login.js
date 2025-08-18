import { useState } from "react";
import axios from "axios";
const Login = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [usernameErr , setUsernameErr] = useState("none");
    const [passErr , setPassErr] = useState("none");
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = async(e) =>{
        e.preventDefault()
        setSubmitted(true);
        if (!username|| !password) return;
        try{
            const response = await axios.get("http://localhost:5000/users");
            const users = response.data;
            if(!(users.some(user => user.username === username))) {
                setUsernameErr("block");
                return;
            } else {
                    setUsernameErr("none");
            }
            const user = users.find((user) => (user.username === username));
            if(!(user.password === password)){
                setPassErr("block")
                return;
            }else{
                setPassErr("none")
            }
            alert("you loged in successfuly")
        }catch{
            console.error("Error fetching users:");
        }

    }
    return(
        <div className="login-overlay">
            <p className="loginHeader fade-up">Swap anywhere , anytime</p>
            <form className="login-form fade-up" style={{animationDelay:"0.2s"}}  onSubmit={handleSubmit}>
                <h2 className="loginTitle">Log in</h2>
                <input type="text" placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={submitted && !username ? "logInInformations invalid" : "logInInformations"}/>
                <h2 className="err" style={{display: usernameErr}}>This username doesnt exist</h2>
                <input type="password" placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className={submitted && !password ? "logInInformations invalid" : "logInInformations"}/>
                <h2 className="err" style={{display: passErr}}>The password is incorrect</h2>
                <button type="submit"  className="logInButton">Next</button>
            </form>
            <p className="loginFooter fade-up" style={{cursor:"default" , animationDelay:"0.4s"}}>Don’t have an account? <a href="#">Sign up</a></p>
            <p className="loginDiscription fade-up" style={{animationDelay:"0.4s"}}><span>Buy and Sell crypto in 14+ networks including Ethereum,</span><span>Unichain and Base </span></p>
        </div>
    )
}
export default Login;
