import React from 'react'
import icon from "../src/images/plogo2.png"
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div>
                            <nav className="navbar navbar-expand-lg  navbar-light">
                                <div className="container-fluid">

                                    <div className="head">
                                        <div>
                                            <NavLink exact className="navbar-brand" to="/my-portfolio"><img src={icon} className="inverted" alt="" /></NavLink>
                                        </div>
                                        <div className="pt-2">
                                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav  m-auto mr-2 mb-lg-0">

                                        </ul>
                                        <ul className="d-flex navbar-nav">
                                            <li className="nav-item">
                                                <NavLink activeClassName="menu_active" exact className="nav-link" aria-current="page" to="/my-portfolio">Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink activeClassName="menu_active" exact className="nav-link" to="/Portfolio">Portfolio</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink activeClassName="menu_active" exact className="nav-link" to="/About">About</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink activeClassName="menu_active" exact className="nav-link" to="/Contact">Contact</NavLink>
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
    )
}

export default NavBar;
