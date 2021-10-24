import React from "react";

import { NavLink } from "react-router-dom";

const Common = (props) => {
    let btnStyle =
    {
        border: "2px solid #0cb8ec",
        borderRadius: "24px",
        color: "#0cb8ec",
    }
    
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto my-auto align-self-center">
                        <div className="row">
                            <div className="col-lg-6 common order-2 my-5 align-self-center order-lg-1">
                                <h1 style={{fontSize:"3rem"}}>Hi, I'm <span className="name">Kiran Bendkoli</span></h1>
                                <p className='my-5'>{props.desc}</p> 
                                <p>{props.beforebtn}</p>
                                <NavLink exact to={props.path} className="btn" style={btnStyle}>{props.btncap}</NavLink>
                            </div>
                            <div className="col-lg-6  order-1 order-lg-2">
                                <div className="img-fluid">
                                    <img src={props.img} alt="" className="front-img " srcset="" height="80%" width="80%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Common;