import React , {useState} from 'react'
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    return (
        <div className='login'>
           <h1>Sign In</h1>
            <form className='login__container'>
                <h3>E-mail</h3>
                <input type="email" />
                <h3>Password</h3>
                <input  type="password" />
            <Link to="/">
               <button type='submit' className='signinbutton' > Sign In </button>
               </Link>
            <p>By signing-in you agree to <b>Cloud's</b> condition of Use and Sale.</p>
             </form>
        </div>
    )
}

export default Login

