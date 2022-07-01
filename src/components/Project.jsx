import React from 'react'
import { useParams } from 'react-router'
import projects from './ProjectList';

const Project = (props) => {
    const {index} = useParams();
    console.log(index);
    return (
        <div className="container  margintop" >
            <div className="row mb-5 box1">
                <div className="mx-auto my-auto align-self-center">
                    <div className="row">
                        <div className="col-lg-8 common my-5 align-self-center ">
                            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-interval="2000" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner " style={{borderRadius:"0.6rem"}}>
                                    <div className="carousel-item active" data-bs-interval="3000">
                                        <img src={projects[index].img1} className="inverted d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="3500">
                                        <img src={projects[index].img2} className="inverted d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="3500"  >
                                        <img src={projects[index].img3} className="inverted d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 common order-2 my-5 align-self-center order-lg-1">
                            <h2 className="name align-self-center">{projects[index].title}</h2>
                            <p>{projects[index].domain}</p>
                            <p>{projects[index].desc}</p>
                        <a href={projects[index].source} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info shadow" style={{ border: "2px solid #0cb8ec", borderRadius: "24px",  }}>Soure Code</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {
                            projects[index].islink? <a href={projects[index].link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info shadow" style={{ border: "2px solid #0cb8ec", borderRadius: "24px",  }}>Live Link</a>: <p></p>
                        }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Project
