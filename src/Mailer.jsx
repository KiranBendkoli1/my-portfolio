import React from 'react'
import emailjs from "emailjs-com"
const Mailer = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm("service_sigmtph",
        "template_2jgsaoo", 
        e.target,
        "user_7d857o3wlxspCU9YaduCr").then(
            result => alert("Your Message is sent Successfully")
        ).catch(
            err => alert("Oops! please try again later")
        )
    }
    return (
        <div className="container" style={{width:"50%"}}>
            <center><h1 className="my-5 name">Contact</h1> </center> 
            <form onSubmit={sendEmail}>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" name="name" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="user_email" name="user_email"/>
                    <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea type="text" class="form-control" id="message" rows="4" name="message"/>
                </div>
                <button type="submit" class="my-3 btn "  style={{ border: "2px solid #0cb8ec", borderRadius: "24px", color: "#0cb8ec" }}>Submit</button>
            </form>
        </div>
    )
}

export default Mailer
