import React from "react";
import Home from "./pages/Home";
import { Switch, Route } from "react-router";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Project from "./components/Project";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/portfolio">
                    <Portfolio />
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
            {/* <Footer/> */}
        </>
    )
}

export default App;
