import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home";
import { Switch, Route } from "react-router";
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Project from "./Project";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/">
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
                <Route exact path="/Project/:index">
                    <Project/>
                </Route>
            </Switch>
            {/* <Footer/> */}
        </>
    )
}

export default App;
