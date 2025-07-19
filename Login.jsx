import React from 'react'
import "./Login.css"
import logo from "../../assets/logo.png";
import { useState } from 'react';
import LoginFooter from './LoginFooter/LoginFooter';

import { login , signUp} from '../../firebase';

function Login() {
  let [Signstate, setSignState]=useState("Sign In")

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  const user_auth = async (event) => {
    event.preventDefault();
    if(Signstate === "Sign In"){
      await login(email, password);
    }else{
      await signUp(name, email, password);
    }
  }



  return (
    <div className='Login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{Signstate}</h1>
        <form>
          {Signstate === "Sign Up" ?          <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"  placeholder='Your name'/>: <></>}

          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email"  placeholder='Email'/>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"  placeholder='Password'/>
          <button onClick={user_auth} type='submit'>{Signstate === "Sign In" ? "Sign In": "Sign Up"}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {Signstate === "Sign In" ?           <p>New to Netflix?<span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:           <p>Already have account <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}


        </div>

      </div>

      <LoginFooter />
    </div>
  )
}

export default Login