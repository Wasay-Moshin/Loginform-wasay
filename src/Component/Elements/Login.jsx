import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

function Login(prop) {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const getformdata = (e) => {
      e.preventDefault();
      console.log(email);
      console.log(password);
      setEmail('');
      setPassword('');
    }
  return (
    <div className="login">
      <form onSubmit={getformdata}>
        <div className="text-center">
          <BiUserCircle size={"60px"} />
          <h1>Login</h1>
          <hr />
        </div>
        <div></div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
           onChange={(e)=>setPassword(e.target.value)}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
        <div className="text-center">
          <br />
          <hr />
          <label>If you don't have account</label>
          <br />
          <Link to="/Signup">
            <button type="button" class="btn btn-link">
              Sign Up
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
