import React from 'react'
import Card from '../components/Card'
import projects from '../components/ProjectList'
const Portfolio = () => {
    return (
        <div>
            <div className="container-fluid mb-5 justify-content-self" style={{backgroundImage: `url("https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
                <center><h1 className="name mb-5 ">My Portfolio</h1></center>
                     <Card projects={projects}/>
            </div>
        </div >
    )
}

export default Portfolio
