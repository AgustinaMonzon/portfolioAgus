import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_9jbojtl",
        "template_aqnrvlq",
        templateParams,
        "D5OjuYBEv9e6mWj1g"
      )
      .then((res) => {
        console.log("Email successfully sent!");
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        alert("Failed to send email, please try again later");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="form-input"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="form-input"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="form-input"
      />
      <button
        type="submit"
        style={{
          backgroundColor: "rgba(255, 169, 112, 0.703)",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          alignItems: "center",
        }}
      >
        Send Email
      </button>
    </form>
  );
};

export default Contact;
