import React from 'react'
import emailjs from "emailjs-com"
const Mailer = () => {
    let btnStyle =
    {
        border: "2px solid #0cb8ec",
        borderRadius: "24px",
    }
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_1b6ex25",
            "template_b43zwcq",
            e.target,
            "user_wWkTE91hjg4KrRmsWlFlO").then(
                result => alert("Your Message is sent Successfully")
            ).catch(
                err => alert("Oops! please try again later")
            )
    }
    return (
        <div className="container" >
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <center><h1 className="my-5 name">Contact</h1> </center>
                    <form onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="user_email" name="user_email" required/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea type="text" className="form-control" id="message" rows="4" name="message" required />
                        </div>
                        <button type="submit" className="my-3 btn btn-outline-info shadow " style={btnStyle}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Mailer
