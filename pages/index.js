'use client';
import React, { useState } from 'react';
import Link from 'next/link';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  return (
    <div className='register'>
      <h2>Register</h2>
      <form className='sign-up-form'>
        <p className='error-para'>"Email or password isn't entered!"</p>
        <div className='email-div'>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' />
        </div>
        <div className='password-div'>
          <label htmlFor='password'>Password: </label>
          <input type='password' id='password' />
        </div>
        <button type='submit' className='register-btn'>
          Register
        </button>
      </form>
      <div>
        Already have an account?
        <Link href=''>
          <button className='login-link'>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
