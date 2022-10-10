import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
function Signup() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const dataHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  // const [email1, setEmail1] = useState("");
  // const [password1, setPassword1] = useState();

  const formdata = (e) => {
    e.preventDefault();
    const newData = { ...data, id: new Date().getTime().toString() };
    localStorage.setItem("data", JSON.stringify(newData));
    console.log(newData);
    // localStorage.setItem("name", JSON.stringify(fullname));
    // localStorage.setItem("email", JSON.stringify(email1));
    // localStorage.setItem("pass", JSON.stringify(password1));
  };
  // console.log (localStorage.getItem(fullname));
  // console.log(localStorage.getItem(email1))
  return (
    <div className="signup">
      <form onSubmit={formdata}>
        <div className="text-center">
          <h2>Create an account</h2>
          <BsFacebook size={"20px"} color={"darkblue"} />
          &nbsp;
          <AiFillTwitterCircle size={"25px"} color={"blue"} />
          &nbsp;
          <AiFillLinkedin size={"25px"} color={"darkblue"} />
          &nbsp;
          <AiFillGoogleCircle size={"25px"} color={"brown"} />
          <br />
          <br />
          <p>Or Sign-up</p>
        </div>
        <hr />
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Full Name
          </label>
          <input
            onChange={dataHandler}
            name="fullname"
            value={data.fullname}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            onChange={dataHandler}
            name="email"
            value={data.email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            {" "}
            Password
          </label>
          <input
            onChange={dataHandler}
            type="password"
            name="password"
            value={data.password}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          {/* <input type="checkbox" class="form-check-input" id="exampleCheck1" /> */}
          <label>
            If you already have then
            <Link to="/Login">
              <button type="button" className="btn btn-link">
                Click here
              </button>
            </Link>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default Signup;
