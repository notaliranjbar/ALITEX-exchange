const Login = () => {
    return(
        <div className="login-overlay">
            <p className="login-text-above">Welcome back! Please log in to continue</p>
            <div className="login-form">
                <h2 className="loginTitle">Log in</h2>
                <input type="text" placeholder="Username" className="logInInformations"/>
                <input type="password" placeholder="Password" className="logInInformations"/>
                <button className="logInButton">Next</button>
            </div>
            <p className="login-text-below">Don’t have an account? <a href="#">Sign up</a></p>
        </div>
    )
}
export default Login;
