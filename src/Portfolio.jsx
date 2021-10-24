import React from 'react'
import img0 from "../src/images/bitmoji2.png"
import img1 from "../src/images/bitmoji1.png"
import img2 from "../src/images/bitmoji3.png"
import Card from './Card'
import projects from './ProjectList'
const Portfolio = () => {



    return (
        <div>
            <div className="container-fluid justify-content-self">
                <center><h1 className="name mb-5">My Portfolio</h1></center>
                     <Card projects={projects}/>
            </div>
        </div >
    )
}

export default Portfolio
