import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'

const SubCard = (props) => {
    return (
        <>
            <div className=" shadow col-lg-4 px-1 mx-auto my-2  py-1 box1" style={{width:"25rem"}} >
                <div className="card-inner" style={{borderRadius:"0.4rem"}}>
                    <img src={props.project.img} className="card-img-top inverted" alt="..." />
                </div>
                <div className="">

                    <h5 className="" >{props.project.title}</h5>
                    <p className="">{props.project.domain}</p>

                    <NavLink exact to={`Project/${props.project.index}`} ><motion.a whileHover={{scale:1.1}} className="btn btn-outline-info shadow" style={{ border: "2px solid #0cb8ec", borderRadius: "24px", }}> View Details </motion.a></NavLink>
                </div>
            </div>
        </>
    )
}

export default SubCard
