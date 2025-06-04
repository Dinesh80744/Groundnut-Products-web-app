import React from 'react'
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Adminupload from '../Pages/Adminupload';

function Login() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedin, setloggedin] = useState(false)
    const handleLogin = (e)=>{
        e.preventDefault();
    

    if (email === 'admin@e.com' && password === '123456') {
      setloggedin(true);
      
    } else {
      setError('Invalid email or password');
    }
  };
  if (loggedin){
    return <Adminupload/>
  }
    return (
    <><div>
            <h2>Login:</h2>
            <form onSubmit={handleLogin}>
                <input className='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' required></input>
                <br />
                <input className='password' type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'></input>
                <br />
                {error && <p className="error">{error}</p>}
                <button type='submit'>Submit</button>
            </form>

        </div></>

  )
}

export default Login