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

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    messageError: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name + "Error"]: "",
    });
  };

  const validate = () => {
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!formData.name) {
      nameError = "Por favor ingrese su nombre";
    }

    if (!formData.email) {
      emailError = "Por favor ingrese su correo electrónico";
    }

    if (!formData.message) {
      messageError = "Por favor escriba su mensaje";
    }

    if (nameError || emailError || messageError) {
      setErrors({ nameError, emailError, messageError });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
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
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
        {!formData.name && errors.nameError && (
          <span style={{ color: "red" }}>{errors.nameError}</span>
        )}
        <input
          type="email"
          name="email"
          placeholder="Tu Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
        />
        {!formData.email && errors.emailError && (
          <span style={{ color: "red" }}>{errors.emailError}</span>
        )}
        <textarea
          name="message"
          placeholder="Escribe tu mensaje"
          value={formData.message}
          onChange={handleChange}
          className="form-input"
        />
        {!formData.message && errors.messageError && (
          <span style={{ color: "red" }}>{errors.messageError}</span>
        )}
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
