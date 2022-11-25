import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
    username: "",
  });

  const { email, username, password, password2 } = data;

  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (username.trim().length < 2) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    } else {
      if (password.trim() !== password2.trim()) {
        return;
      }
    }

    dispatch(register(email, password, username));
  };

  return (
    <div className="container mt-5 col-6 aling-items-center">
      <h1>Register Page</h1>
      <hr />

      <div className="row container">
        <form onSubmit={handleRegister} className="col s12">
          <div className="row">
            <div className="form-group mb-1">
              <label htmlFor="exampleInputEmail">Email</label>
              <input
                onChange={handleChange}
                value={email}
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mb-1">
              <label htmlFor="exampleInputUsername">Username</label>
              <input
                onChange={handleChange}
                value={username}
                name="username"
                type="text"
                className="form-control"
                id="exampleInputUsername"
                aria-describedby="userNameHelp"
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group col-6 mb-3 ">
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

            <div className="form-group col-6 mb-3 ">
              <label htmlFor="exampleInputPassword2">Confirm Password</label>
              <input
                onChange={handleChange}
                value={password2}
                name="password2"
                type="password"
                className="form-control"
                id="exampleInputPassword2"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <button className="btn btn-primary" type="submit" name="action">
            Register
          </button>
          <hr />
          <br />
          <Link to="/Login"> Login in to account </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
