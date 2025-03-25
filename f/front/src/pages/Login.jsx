import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('');

  async function sendData() {
    if (email === '' || password === '') {
      alert("username and password can't be empty");
      return;
  }
  try {
    const response = await axios.post('http://localhost:3002/user/login', {
      email: email,
      password: password
    });
    console.log(response.data);
    alert('Login successful');
  } catch (error) {
    console.error('Error logging in: ', error);
    alert('Login failed');
  }
  }
  
  return (
     <>
   <div className="login-container">
    <h2><u>Login</u></h2>
    <form onSubmit={(e) => { e.preventDefault(); sendData(); }}>
      <label className="label"><b> Email </b> </label> <br />
      <input
        type="email"
        className="input-field"
        placeholder="Email"
        required=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br /> 
      <label className="label"><b> Password </b></label>
      <input
        type="password"
        className="input-field"
        placeholder="Password"
        required=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}

      <button type="submit" className="login-button">
        Sign In
      </button>
    </form>
    <br />
    <Link to="/signup" className="signup">
      Sign up
    </Link>
    <a href="#" className="link">
      Forgot Password?
    </a>
  </div>
  <img className="img" src="freepik__background__56254.png" />
</>


  )
}

export default Login