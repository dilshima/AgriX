import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Signup.css'

function Signup() {
  const [username, setUsername] = useState('');
  const [address, setaddress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('');

  async function handleSignup(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/user/signup', {
        username: username,
        address: address,
        phonenumber: phonenumber,
        email: email,
        password: password
      });
      console.log(response.data);
      alert('Signup successful');
    }
    catch (error) {
      console.error('Error signing up: ', error);
      alert('Signup failed');
    }
  }

  return (
    <>
  <div className="signup-container">
    <h2><u> Sign up </u></h2>
    <form onSubmit={handleSignup}>
      <label  className='label'><b> Name </b></label>
      <input
        type="text"
        className="input-field"
        placeholder="Name"
        required=""
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className='label'><b> Address </b></label>
      <input
        type="text"
        className="input-field"
        placeholder="Address"
        required=""
        value={address}
        onChange={(e) => setaddress(e.target.value)}
      />
      <label className='label'><b> Phone No. </b></label>
      <input
        type="number"
        className="input-field"
        placeholder={+91}
        required=""
        value={phonenumber}
        onChange={(e) => setPhonenumber(e.target.value)}
      />
      <label className='label'><b> Email </b></label>
      <input
        type="email"
        className="input-field"
        placeholder="Email"
        required=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className='label'><b> Password </b></label>
      <input
        type="password"
        className="input-field"
        placeholder="Password"
        required=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="signup-button">
        Sign In
      </button>
    </form>
    <br />
  </div>
</>


  )
}

export default Signup