import React from 'react'
import Card from './Card'
import projects from './ProjectList'
const Portfolio = () => {
    return (
        <div>
            <div className="container-fluid mb-5 justify-content-self">
                <center><h1 className="name mb-5">My Portfolio</h1></center>
                     <Card projects={projects}/>
            </div>
        </div >
    )
}

export default Portfolio
