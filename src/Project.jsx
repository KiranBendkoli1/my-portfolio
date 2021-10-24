import React from 'react'



const Project = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10  mx-auto my-auto align-self-center">
                    <div className="row">
                        <div className="col-lg-8 common my-5 align-self-center ">
                            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                        <img src={props.img1} className="d-block w-100" alt="..." />
                                        <div class="carousel-caption d-none d-md-block">
                                            
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={props.img2} className="d-block w-100" alt="..." />
                                        <div class="carousel-caption d-none d-md-block">
                                            
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={props.img3} className="d-block w-100" alt="..." />
                                        <div class="carousel-caption d-none d-md-block">
                                            
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
                            <h2 className="name align-self-center">{props.title}</h2>
                            <p>{props.domain}</p>
                            <p>{props.desc}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Project
