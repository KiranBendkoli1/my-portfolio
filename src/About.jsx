import React from 'react'
import web from "../src/images/bitmoji1.png"
import Common from './Common'

const About = () => {
    return (
        <>
            <Common
                desc="Currently I am in Third year of Engineering and learning about emerging trends, I want to explore as much as I can during student phase, because this is the phase where you can explore differents fields as much"
                beforebtn="you can check out my resume below"
                path="https://drive.google.com/file/d/1uAQrYZ-zzN25OMGesK5z6vgDJzxUlQxv/view?usp=sharing"
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
