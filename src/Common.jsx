import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Common = (props) => {
    let btnStyle =
    {
        border: "2px solid #0cb8ec",
        borderRadius: "24px",
    }

    
    return (
        <>
            <div className="container-fluid myh" >
                <div className="row my-5">
                    <div className="col-10 mx-auto my-auto align-self-center">
                        <div className="row">
                            <div className="col-lg-6 common order-2 my-5 align-self-center order-lg-1">
                                {
                                    (props.greet) ? <motion.h1   initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}   transition={{ duration: 2}}>Hi, I'm <span className="name">Kiran Bendkoli</span></motion.h1> :
                                        <motion.h1   initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}   transition={{ duration: 2}} className="name" >{props.pagename}</motion.h1>
                                }
                                <motion.p className='my-5'    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}   transition={{ duration: 2.5}}>{props.desc}</motion.p>
                                <motion.p    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}   transition={{ duration: 3}}>{props.beforebtn}</motion.p>
                                {
                                    props.linkstatus ? <NavLink  exact to={props.path} className="btn btn-outline-info shadow" style={btnStyle}>{props.btncap}</NavLink> :
                                        <motion.a whileHover={{scale:1.2}}  href={props.path} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info shadow" style={btnStyle}>{props.btncap}</motion.a>
                                }

                            </div>
                            <div className="col-lg-6  order-1 order-lg-2">
                                <div className="inner">
                                    <div className="img-fluid">
                                        <img src={props.img} alt="" className="img inverted"  height="80%" width="80%" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        {
                            (props.pagename==="Home Page")?
                            <div className="row">
                            <div className="s-icons row mb-5">
                                <div className="minline">
                                    <div className="card shadow" style={{ width: "2.8", height: "2.8rem", borderRadius: "2rem", }}>
                                        <a className="hv btn btn-outline-info my-auto " style={{ borderRadius: "2rem", height: "2.8rem"}} href="https://github.com/KiranBendkoli1" target="_blank" rel="noopener noreferrer"><FaGithub size="1.5rem" border="2px solid #0cb8ec" color="#000" /></a>
                                    </div>
                                    <div className="card shadow"  style={{ width: "2.8", height: "2.8rem", borderRadius: "2rem", }}>
                                        <a className="hv btn btn-outline-info my-auto " style={{ borderRadius: "2rem", height: "2.8rem"}} href="https://www.linkedin.com/in/kiran-bendkoli-2a2b741b9/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size="1.5rem" border="2px solid #0cb8ec" color="#1168cc" /></a>
                                    </div>
                                    <div className="card shadow" style={{ width: "2.8", height: "2.8rem", borderRadius: "2rem", }}>
                                        <a className="hv btn btn-outline-info my-auto " style={{ borderRadius: "2rem", height: "2.8rem"}}  href="https://www.instagram.com/kiran_bendkoli_/" target="_blank" rel="noopener noreferrer"><FaInstagram size="1.5rem" border="2px solid #0cb8ec" color="#af0298" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>:""
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Common;