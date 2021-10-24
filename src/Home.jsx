import React from "react";
import back from "../src/images/bg1.png"
import { NavLink } from "react-router-dom";
import Common from "./Common";
import front from "../src/images/bitmoji3.png"
const Home = () => {
    
    
    return (
        <>
            <Common desc="I am an Computer Engineering Student and a tech enthusiast, I love to build project such as android and web apps" beforebtn="you can check out some of my projects down here" path="/Portfolio" img={front} btncap="Portfolio"/>         
        </>
    )
}

export default Home;