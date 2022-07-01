import React, { useState,useEffect } from "react";
import icon from "../images/plogo2-min.png";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll=()=>{
    const offset = window.scrollY;
    if (offset>200){
      setScrolled(true);
    }else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
  
    
  }, [])
  let navbarClasses = ['navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }
  
  return (
    <>
      <div
        className="container fixed-top gbackground mb-5 mt-2"
      >
        <div className="row navbar-glass">
          <div>
            <nav className="navbar  navbar-expand-lg  navbar-light" >
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
    </>
  );
};

export default NavBar;
