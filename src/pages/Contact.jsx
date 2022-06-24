import React from 'react'
import Mailer from '../components/Mailer'

const Contact = () => {
    return (
        <div>
            <div className="container-fluid" style={{height:"89.5vh"}}>
                <div className="row justify-content-center">
                    <div className="col-10 mx-auto">
                        <Mailer/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
