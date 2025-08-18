const Login = () => {
    return(
        <div className="login-overlay">
            <p className="loginHeader fade-up">Swap anywhere , anytime</p>
            <div className="login-form fade-up" style={{animationDelay:"0.2s"}}>
                <h2 className="loginTitle">Log in</h2>
                <input type="text" placeholder="Username" className="logInInformations"/>
                <input type="password" placeholder="Password" className="logInInformations"/>
                <button className="logInButton">Next</button>
            </div>
            <p className="loginFooter fade-up" style={{cursor:"default" , animationDelay:"0.4s"}}>Don’t have an account? <a href="#">Sign up</a></p>
            <p className="loginDiscription fade-up" style={{animationDelay:"0.4s"}}><span>Buy and Sell crypto in 14+ networks including Ethereum,</span><span>Unichain and Base </span></p>
        </div>
    )
}
export default Login;
