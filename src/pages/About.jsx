import React from 'react'
import web from "../images/bitmoji1-min.png"
import Common from '../components/Common'

const About = () => {
    return (
        <>
            <Common
                desc="Currently I am in Third year of Engineering and learning about emerging trends, I want to explore as much as I can during student phase, because this is the phase where you can explore differents fields as much"
                beforebtn="you can check out my resume below"
                path="https://drive.google.com/file/d/1MDodN0KVn6IJA9k-OZDaH7eodI2BI7mX/view?usp=sharing"
                linkstatus={false}
                img={web}
                btncap="Resume"
                greet={false}
                pagename="About Page"
                />
        </>
    )
}

export default About
