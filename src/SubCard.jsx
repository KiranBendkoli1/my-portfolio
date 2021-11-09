import React from 'react'
import { NavLink } from 'react-router-dom'

const SubCard = (props) => {
    return (
        <>
            <div className="card shadow my-1 col-lg-4 mx-auto"  >
                <div className="card-inner">
                    <img src={props.project.img} className="card-img-top inverted" alt="..." />
                </div>
                <div className="card-body">

                    <h5 className="card-title">{props.project.title}</h5>
                    <p className="card-text">{props.project.domain}</p>

                    <NavLink exact to={`Project/${props.project.index}`} className="btn btn-outline-info shadow" style={{ border: "2px solid #0cb8ec", borderRadius: "24px", }}>View Details</NavLink>
                </div>
            </div>
        </>
    )
}

export default SubCard
