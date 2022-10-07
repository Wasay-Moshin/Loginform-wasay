import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGoogleCircle} from 'react-icons/ai'
function Signup() {
  return (
    <div className="signup">
      <form>
        <div className="text-center">
        <h2>Create an account</h2>
        <a target="_blank" href='https://www.facebook.com/login'>
             <BsFacebook size={"20px"} color={'darkblue'}/>
          </a> &nbsp;
          <a target="_blank" href='https://twitter.com/i/flow/login'>
             <AiFillTwitterCircle size={"25px"} color={'blue'}/>
          </a>&nbsp;
          <a target="_blank" href='https://www.linkedin.com/login'>
             <AiFillLinkedin size={"25px"} color={'darkblue'}/>
          </a>&nbsp;
          <a target="_blank" href='https://www.google.com/search?q=gmail+login&oq=gmail&aqs=chrome.1.69i57j0i67i131i433l2j0i67i433j0i67i131i433j0i433i512l2j69i61.4387j0j7&sourceid=chrome&ie=UTF-8'>
             <AiFillGoogleCircle size={"25px"} color={'brown'}/>
          </a>
          <br/>
          <br/>
        <p>Or Sign-up</p>
        </div>
        <hr />
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Full Name
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            {" "}
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Confrim Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          {/* <input type="checkbox" class="form-check-input" id="exampleCheck1" /> */}
          <label>
            If you already have then
            <Link to="/Login">
            <button type="button" class="btn btn-link">
              Click here
            </button>
            </Link>
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
