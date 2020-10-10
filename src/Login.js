import React from "react";
import './Login.css';


const Login = (props) => {
    const{email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordEror} = props;

    return(
        <section>
            <div className="loginContainer">
                <label>
                    Usre Name
                </label>
                <input type = "text" autoFocus required 
                value = {email} 
                onChange = {(e) => setEmail(e.target.value)}></input>
                <p className = "errorMsg">{emailError}</p>
                <label>
                    Password
                </label>
                <input type = "password" autoFocus required 
                value = {password} 
                onChange = {(e) => setPassword(e.target.value)}></input>
                <p className = "errorMsg">{passwordEror}</p>
                <div className = "btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}></button>
                        <p>Don't have an account?<span onClick={() => setHasAccount(!hasAccount)}>
                            Sign Up</span></p>
                        </>
                    ):(
                        <>
                        <button onClick = {handleSignUp}>Sign Up</button>
                        <p>Have an Account?<span>Sign In</span></p>
                        </>
                    )}

                </div>
            </div>
        </section>
    );
};

export default Login;