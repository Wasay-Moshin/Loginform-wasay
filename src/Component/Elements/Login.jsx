import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

function Login() {
  const [emails, setEmails] = useState("");
  const [password, setPassword] = useState("");
  const getformdata = (e) => {
    e.preventDefault();
    localStorage.setItem("email", JSON.stringify(emails));
    localStorage.setItem("pass", JSON.stringify(password));
  };
  return (
    <div className="login">
      <form onSubmit={getformdata}>
        <div className="text-center">
          <BiUserCircle size={"60px"} />
          <h1>Login</h1>
          <hr />
        </div>
        <div></div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={(e) => setEmails(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <div className="text-center">
          <br />
          <hr />
          <label>If you don't have account</label>
          <br />
          <Link to="/Signup">
            <button type="button" className="btn btn-link">
              Sign Up
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
