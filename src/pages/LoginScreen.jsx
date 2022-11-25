import React from "react";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { emailAndPLogin, googlelogin } from "../actions/auth";
import { useState } from "react";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleGoogleLogin = () => {
    dispatch(googlelogin());
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    }

    dispatch(emailAndPLogin(email, password));
  };

  return (
    <div className="container mt-5 aling-items-center col-6">
      <h1>Login Page</h1>
      <hr />

      <div className="container row align-items-center ">
        <form onSubmit={handleEmailLogin} className="fluid">
          <div className="row">
            <div className="form-group mb-1">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                onChange={handleChange}
                value={email}
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group ">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                onChange={handleChange}
                value={password}
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
          </div>
          <br />
          <button
            className="btn btn-primary waves-effect waves-light"
            type="submit"
            name="action"
          >
            Login
          </button>
          <hr />
          <GoogleButton onClick={handleGoogleLogin} />
          <br />
          <Link to="/register"> Register in the platform </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
