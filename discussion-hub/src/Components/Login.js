import React from 'react';
import {useContext} from "react";
import "../login.css";
import {auth,provider} from "../firebase";
import {AuthContext} from "../contexts/auth-context";
const logo = require("../images/logo.png");



const Login = () => {
    const {dispatch} = useContext(AuthContext)
    const signin=()=>
    {
        auth.signInWithPopup(provider).then((result)=>
        {
            console.log(result);
            dispatch({type:"set",payload:result.user})
        }).catch(error=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src={logo.default} alt=""/>
                <p>A place for healthy discussion</p>
                <h1>Sign in to Discussion Hub</h1>
                <button onClick={signin}>Sign In With Google</button>
               
            </div>
        </div>
    );
};



export default Login;