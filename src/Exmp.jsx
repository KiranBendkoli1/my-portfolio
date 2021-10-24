import React from 'react'
import Project from './Project'
import projects from './ProjectList'

const Exmp = () => {
    return (
        <div>
            <Project title={projects[0].title} domain={projects[0].domain} img1={projects[0].img1} img2={projects[0].img2} img3={projects[0].img3} desc={projects[0].desc}/>
        </div>
    )
}

export default Exmp
