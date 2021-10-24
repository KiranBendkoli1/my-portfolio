import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({ projects }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="col-10 mx-auto">
                    <div className="row">
                        {
                            projects.map((proj) => {
                                return (
                                    <div className="card col-lg-4"  >
                                        <img src={proj.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{proj.title}</h5>
                                            <p className="card-text">{proj.domain}</p>
                                            
                                            <NavLink exact to={proj.link} className="btn " style={{ border: "2px solid #0cb8ec", borderRadius: "24px", color: "#0cb8ec" }}>Go to Source code</NavLink>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
