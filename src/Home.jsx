import React from "react";
import Common from "./Common";
import front from "../src/images/bitmoji3.png"
const Home = () => {


    return (
        <>
            <Common desc="I am a Computer Engineering Student and a tech enthusiast, I love to build project such as android and web apps"
                beforebtn="you can check out some of my projects down here"
                linkstatus={true}
                path="/Portfolio"
                img={front}
                btncap="Portfolio" 
                greet={true}
                pagename="Home Page"
                />
        </>
    )
}

export default Home;