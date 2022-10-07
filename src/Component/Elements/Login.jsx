import React from "react";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

function Login() {
  return (
    <div className="login">
      <form>
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
