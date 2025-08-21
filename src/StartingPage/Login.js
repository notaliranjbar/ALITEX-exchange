import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { useUsers } from "../UsersProvider";
const Login = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [usernameErr , setUsernameErr] = useState("none");
    const [passErr , setPassErr] = useState("none");
    const [submitted , setSubmitted] = useState(false)
    const [usernameInvalid, setUsernameInvalid] = useState(false);
    const [passWordInvalid, setPasswordInvalid] = useState(false);
    let hasErr = false;
    const { user, login } = useUsers();
    const handleSubmit = async(e) =>{
        e.preventDefault()
        setSubmitted(true);
        if(!password){
            setPasswordInvalid(false)
            setTimeout(() => {
                setPasswordInvalid(true);
            }, 10);
            hasErr = true
        }
        if(!username){
            setUsernameInvalid(false)
            setTimeout(() => {
                setUsernameInvalid(true);
            }, 10);
            hasErr = true
        }
        if(hasErr) return;
        try{
            const response = await axios.get("http://localhost:5000/users");
            const users = response.data;
            if(username && !(users.some(user => user.username === username))) {
                setUsernameErr("block");
                return;
            } else {
                    setUsernameErr("none");
            }
            const user = users.find((user) => (user.username === username));
            if(password && !(user.password === password)){
                setPassErr("block")
                return;
            }else{
                setPassErr("none")
            }
            await login(username, password);
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
                    onChange={(e) => {setUsername(e.target.value);
                                    setUsernameInvalid(false);
                                    setUsernameErr("none");}}
                    value={username}
                    className={`logInInformations ${usernameInvalid? "invalid" : ""}`}/>
                <h2 className="err" style={{display: usernameErr}}>This username doesnt exist</h2>
                <input type="password" placeholder="Password" 
                    onChange={(e) => {setPassword(e.target.value);
                                    setPasswordInvalid(false);
                                    setPasswordInvalid("none");}}
                    value={password}
                    className={`logInInformations ${passWordInvalid ? "invalid" : ""}`}/>
                <h2 className="err" style={{display: passErr}}>The password is incorrect</h2>
                <button type="submit"  className="logInButton">Next</button>
            </form>
            <p className="loginFooter fade-up" style={{cursor:"default" , animationDelay:"0.4s"}}>Don’t have an account? <a href="#">Sign up</a></p>
            <p className="loginDiscription fade-up" style={{animationDelay:"0.4s"}}><span>Buy and Sell crypto in 14+ networks including Ethereum,</span><span>Unichain and Base </span></p>
        </div>
    )
}
export default Login;
