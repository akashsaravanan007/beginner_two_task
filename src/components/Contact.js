import React, { useState } from "react";
import { db } from "../components/firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        phno: phno,
        message: message,
      })
      .then(() => {
        alert("Message/Query Submitted Successfully!!!🔥");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setPhno("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-page-wrapper">
        <h1 className="primary-heading">Have Question In Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
        <div className="contact-form-container">
          <input
            type="text"
            placeholder="Your Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="contact-form-container">
          <input
            type="text"
            placeholder="Your Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="contact-form-container">
          <input
            type="text"
            placeholder="Your Ph.no..."
            value={phno}
            onChange={(e) => setPhno(e.target.value)}
          />
        </div>
        <div className="contact-form-container">
          <textarea
            name="postContent"
            placeholder="Your Query/Message..."
            rows={4}
            cols={40}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="button-form-container">
          <button
            className="secondary-button"
            type="submit"
            style={{ background: loader ? "#ccc" : "#fe9e0d " }}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
