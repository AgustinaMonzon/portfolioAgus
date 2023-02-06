import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";
import swal from "sweetalert";

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
        swal({
          text: "Email enviado correctamente",
          icon: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        swal({
          text: "Falló el envío de email",
        });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        {" "}
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />
        <textarea
          name="message"
          placeholder="Escribe tu mensaje"
          value={formData.message}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="submit"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            alignItems: "center",
          }}
        >
          Enviar Email
        </button>
      </div>
    </form>
  );
};

export default Contact;
