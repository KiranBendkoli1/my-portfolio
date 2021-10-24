import React from 'react'
import Project from './Project'
import projects from './ProjectList'

const Bbms = () => {
    return (
        <div>
            <Project title={projects[1].title} domain={projects[1].domain} img1={projects[1].img1} img2={projects[1].img2} img3={projects[1].img3} desc={projects[1].desc}/>
        </div>
    )
}

export default Bbms
