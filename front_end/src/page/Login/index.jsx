import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='loginContainer'>
        <h1 className="logo">Fotify</h1>
        <div className="loginInput">
            <input placeholder='Username/ Email' type="text" />
            <input placeholder='Password' type="text" />
            <NavLink className={"forgot--pass"}>Forgot password?</NavLink>
            <button>Sign In</button>
            
            <div className="or">
               <hr />
               <p>OR</p>
               <hr />
            </div>
            <button className="loginWFb">
            <i className="fa-brands fa-square-facebook icon--item" />
            Sign in with Facebook

            </button>
            <div className="signUp">
                <p className="">Don't have an account?</p>
                <NavLink to={"/signup"} className={"signUpLink"}>Sign Up</NavLink>
            </div>
        </div>
    </div>
  )
}

export default LoginPage