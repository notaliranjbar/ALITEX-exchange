const Login = () => {
    return(
        <div className="login-overlay">
            <p className="loginHeader">Swap anywhere , anytime</p>
            <div className="login-form">
                <h2 className="loginTitle">Log in</h2>
                <input type="text" placeholder="Username" className="logInInformations"/>
                <input type="password" placeholder="Password" className="logInInformations"/>
                <button className="logInButton">Next</button>
            </div>
            <p className="loginFooter">Don’t have an account? <a href="#">Sign up</a></p>
            <p className="loginDiscription"><span>Buy and Sell crypto in 14+ networks including Ethereum,</span><span>Unichain and Base </span></p>
        </div>
    )
}
export default Login;
