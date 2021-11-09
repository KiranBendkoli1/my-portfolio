import React from 'react'
import SubCard from './SubCard'

const Card = ({ projects }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="col-10 mx-auto">
                    <div className="row">
                        {
                            projects.map((proj, index) => {
                                return  <SubCard project={proj} key={proj.index} /> 
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
