import React from "react";
import Home from "./pages/Home";
import { Switch, Route, useLocation } from "react-router";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Project from "./components/Project";
import Experience from "./pages/Experience";

const App = () => {
    const location = useLocation();
    return (
        <div >
            <NavBar />
            <Switch  location={location}>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/portfolio">
                    <Portfolio />
                </Route>
                <Route exact path="/experience">
                    <Experience />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/resume">
                    <Resume />
                </Route>
                <Route exact path="/Project/:index">
                    <Project/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;
