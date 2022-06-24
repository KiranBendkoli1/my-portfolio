import React from "react";
import Common from "../components/Common";
import front from "../images/bitmoji3-min.png"
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