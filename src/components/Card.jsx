import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions/auth";
import { limpiar } from "../actions/nomina";

const Card = () => {
  const { auth } = useSelector((state) => state);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(limpiar());
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="container text-center">
      <div className="card text-white bg-dark w-100  ">
        <img
          src={auth.photoURL}
          className="card-img img-responsive mt-5  h-25 w-25 rounded-circle mx-auto d-block"
          alt="perfil"
        />
        <div className="card-body ">
          <h5 className="card-title"> {auth.username} </h5>
          <p className="card-text"> {auth.email} </p>
          <button className="btn  btn-outline-light"> Editar Perfil</button>
        </div>
        <div className="card-footer">
          <hr />
          <button
            className="btn btn-outline-light"
            type="submit"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
