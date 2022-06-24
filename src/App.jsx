import React from "react";
import Home from "./pages/Home";
import { Switch, Route } from "react-router";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
