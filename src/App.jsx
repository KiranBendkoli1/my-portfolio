import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home";
import { Switch, Route } from "react-router";
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Bbms from "./Bbms";
import Exmp from "./Exmp";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/my-prof">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/portfolio">
                    <Portfolio />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/bbms">
                    <Bbms/>
                </Route>
                <Route exact path="/expm">
                    <Exmp/>
                </Route>
            </Switch>

        </>
    )
}

export default App;
