import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'

const SubCard = (props) => {
    return (
        <>
            <div className="card shadow col-lg-4 mx-auto py-2" >
                <div className="card-inner">
                    <img src={props.project.img} className="card-img-top inverted" alt="..." />
                </div>
                <div className="card-body">

                    <h5 className="card-title">{props.project.title}</h5>
                    <p className="card-text">{props.project.domain}</p>

                    <NavLink exact to={`Project/${props.project.index}`} ><motion.a whileHover={{scale:1.1}} className="btn btn-outline-info shadow" style={{ border: "2px solid #0cb8ec", borderRadius: "24px", }}> View Details </motion.a></NavLink>
                </div>
            </div>
        </>
    )
}

export default SubCard
