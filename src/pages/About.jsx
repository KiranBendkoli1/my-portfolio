import React from 'react'
import web from "../images/bitmoji1-min.png"
import Common from '../components/Common'

const About = () => {
    return (
        <>
            <Common
                desc="Currently I am in Third year of Engineering and I expect to graduate in 2023. "
                beforebtn="you can check out my resume below"
                path="/Resume"
                linkstatus={false}
                img={web}
                btncap="Resume"
                greet={false}
                pagename="About"
                />
        </>
    )
}

export default About
