import React from "react";
import './Login.css';
const Login = (props) => {
    const{email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordEror} = props;
    return(
        <section>
            <div className="loginContainer">
                <h3 className = "welcome">Welcome to ToDoList</h3>
                <input type = "text" autoFocus required  className ="input-text"
                value = {email} 
                onChange = {(e) => setEmail(e.target.value)}
                placeholder ="Your Email"></input>
                <p className = "errorMsg">{emailError}</p>
            
                <input type = "password" autoFocus required className="input-pw"
                value = {password} 
                onChange = {(e) => setPassword(e.target.value)}
                placeholder="Your password"></input>
                <p className = "errorMsg">{passwordEror}</p>
                <div className = "btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin} className="signin">Sign in</button>
                        <p className = "setAccount">Don't have an account?<span onClick={() => setHasAccount(!hasAccount)} className = "spanIn">
                            Sign Up</span></p>
                        </>
                    ):(
                        <>
                        <button onClick = {handleSignUp} className="signUp">Sign Up</button>
                        <p className="setAccount">Have an Account?<span onClick={()=>setHasAccount(!hasAccount)} className = "spanIn">Sign In</span></p>
                        </>
                    )}

                </div>
            </div>
        </section>
    );
};

export default Login;