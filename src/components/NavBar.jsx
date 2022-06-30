import React from "react";
import icon from "../images/plogo2-min.png";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="container-fluid" style={{backgroundImage: `url("https://images.unsplash.com/photo-1586775490184-b79f0621891f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
        <div className="row box1">
          <div className="col-lg-10 mx-auto">
            <div>
              <nav className="navbar navbar-expand-lg  navbar-light">
                <div className="container-fluid">
                  <div className="head">
                    <div>
                      <NavLink exact className="navbar-brand" to="/">
                        <img src={icon} className="inverted" alt="" />
                      </NavLink>
                    </div>
                    <div className="pt-2">
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
                    </div>
                  </div>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav  m-auto mr-2 mb-lg-0"></ul>
                    <ul className="d-flex navbar-nav">
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link"
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item mr-2">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link"
                          to="/Portfolio"
                        >
                          Portfolio
                        </NavLink>
                      </li>
                      <li className="nav-item mr-2">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link"
                          to="/Resume"
                        >
                          Resume
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          exact
                          className="nav-link"
                          to="/Contact"
                        >
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
