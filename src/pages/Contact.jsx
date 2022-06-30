import React from 'react'
import Mailer from '../components/Mailer'

const Contact = () => {
    return (
        <div>
            <div className="container-fluid" style={{height:"89.5vh", width:"auto",backgroundImage: `url("https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} >
                <div className="row justify-content-center ">
                    <div className="col-10 mx-auto  mt-3 ">
                        <Mailer/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
