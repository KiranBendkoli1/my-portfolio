import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Mailer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
 
  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const date = new Date();
      const dt = date.toLocaleDateString() + "  " + date.toLocaleTimeString();
         await addDoc(collection(db, "messages"), {
        name: name,
        email: email,
        date: dt,
        message: message,
      });
      alert("Your Message is sent Successfully");
   
    } catch (error) {
      alert("Oops! please try again later"); 
    }
  };
  return (
    <div className="container box1 pb-5" >
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <center>
            <h1 className="my-5 name">Contact</h1>
          </center>
          <form onSubmit={sendMessage}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control input-glass"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control input-glass"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                type="text"
                className="form-control input-glass"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                rows="4"
                name="message"
                required
              />
            </div>
            <input
              type="submit"
              className="button"
              
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mailer;
