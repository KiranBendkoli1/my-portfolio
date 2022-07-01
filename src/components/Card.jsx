import React from 'react'
import SubCard from './SubCard'

const Card = ({ projects }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row mx-auto" >
                    {
                        projects.map((proj, index) => {
                            return <SubCard project={proj} key={proj.index} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Card
