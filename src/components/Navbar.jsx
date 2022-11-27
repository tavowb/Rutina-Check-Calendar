import React from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">
          Rutine Aim Check <i className="bi bi-calendar-check"></i>{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/app"
              >
                Daily Check
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/months"
              >
                Months
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active text-white" : ""}`
                }
                aria-current="page"
                to="/calendar"
              >
                Calendar
              </NavLink>
            </li>
          </ul>

          <div className="dropstart  ">
            <button
              className="btn btn-light rounded-circle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-person-fill"></i>
            </button>
            <div
              className=" dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton1"
              style={{
                width: "25rem",
              }}
            >
              <Card />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
