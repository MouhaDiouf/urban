import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale.
          </p>
          <button
            type="submit"
            onClick={register}
            className="login__registerButton"
          >
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
