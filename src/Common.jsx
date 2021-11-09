import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { NavLink } from "react-router-dom";

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
                                    (props.greet) ? <h1 >Hi, I'm <span className="name">Kiran Bendkoli</span></h1> :
                                        <h1 className="name" >{props.pagename}</h1>
                                }
                                <p className='my-5'>{props.desc}</p>
                                <p>{props.beforebtn}</p>
                                {
                                    props.linkstatus ? <NavLink exact to={props.path} className="btn btn-outline-info shadow" style={btnStyle}>{props.btncap}</NavLink> :
                                        <a href={props.path} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info shadow" style={btnStyle}>{props.btncap}</a>
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
                                        <a className="hv btn btn-outline-info " style={btnStyle} href="https://github.com/KiranBendkoli1" target="_blank" rel="noopener noreferrer"><FaGithub size="1.5rem" border="2px solid #0cb8ec" color="#000" /></a>
                                    </div>
                                    <div className="card shadow" style={{ width: "2.8", height: "2.8rem", borderRadius: "2rem",  }}>
                                        <a className="hv btn btn-outline-info inverted" style={btnStyle} href="https://www.linkedin.com/in/kiran-bendkoli-2a2b741b9/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size="1.5rem" border="2px solid #0cb8ec" color="#1168cc" /></a>
                                    </div>
                                    <div className="card shadow" style={{ width: "2.8", height: "2.8rem", borderRadius: "2rem",  }}>
                                        <a className="hv btn btn-outline-info inverted" style={btnStyle} href="https://www.instagram.com/kiran_bendkoli_/" target="_blank" rel="noopener noreferrer"><FaInstagram size="1.5rem" border="2px solid #0cb8ec" color="#af0298" /></a>
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