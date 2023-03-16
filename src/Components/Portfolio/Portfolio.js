import React from "react";
import "./Portfolio.css";
import SimpleSlider from "./SimpleSlider";
import SimpleSlider2 from "./SimpleSlider2";
import SimpleSlider3 from "./SimpleSlider3";


function Portfolio() {
  return (
    <div className="content">
      <div className="container">
        <div className="proyecto1">
          <div className="info">
            <h4 className="h3">
              <strong>Food App</strong>
            </h4>
            <br />
            <br />
            <p>
              Es una Single Page Aplication desarrollada para el Proyecto
              Individual del Bootcamp de Henry. Búsquedas, filtrados,
              ordenamientos y creación de datos traídos de una API. Desarrollé
              la app usando para el Front React, Redux, CSS puro y Back
              desarrollado en Node.js con Express. Base de datos en PostgreSQL y
              Sequelize.
            </p>

            <br />
            <br />

            <SimpleSlider />
            <br />
            <br />
            <div className="botones">
              {/* <a
                href="https://test-deploy-topaz-nine.vercel.app/"
                target="_blank"
                class="button"
              >
                {" "}
                Demo
              </a> */}

              <a
                href="https://github.com/AgustinaMonzon/PI-FOOD-main"
                target="_blank"
                class="button"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="proyecto">
          <div className="info">
            <h4 className="h3">
              <strong>Mc Burger</strong>
            </h4>
            <br />
            <p>
              App de comidas rápidas similar a McDonlads, Burger King.
              Utilizamos tecnologías tales como, SQL, Sequelize, Express, Java
              Script, Node js para nuestro back-end y base d datos. Para nuestro
              front-end usamos react-redux, Chakra-UI, cloudinary. Para nuestra
              pasarela de pago integramos mercado pago. Auth0, google para la
              autenticación de usuarios. Nodemailer para el envío de e-mails, y
              una Api de mapas para la ubicación de nuestros locales más
              cercanos. Nuestra página web está full responsive y cuenta con un
              dashboard de administrador.
            </p>
            <SimpleSlider2 />
            <br />
            <br />
            <div className="botones">
              <a
                href="https://test-deploy-topaz-nine.vercel.app/"
                target="_blank"
                class="button"
              >
                {" "}
                Demo
              </a>
              <a
                href="https://github.com/AgustinaMonzon/McBurger.PF.Henry-deploy"
                target="_blank"
                class="button"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
<div className="proyecto">
          <div className="info">
            <h4 className="h3">
              <strong>RR Consultoría</strong>
            </h4>
            <br />
            <p>
              La página está dividida en dos sectores de servicios: uno para
              candidatos y otro para empresas, para que puedan encontrar
              fácilmente el servicio que necesitan.  Agregamos una sección
              para que los usuarios puedan cargar su CV, donde también los
              llevamos a completar un formulario de Google. También incluimos
              una sección de contacto más directa donde utilizamos MailJS para
              asegurarnos de que los potenciales clientes puedan contactarse de
              manera fácil y rápida. Utilizamos:react, Chakra-UI, cloudinary.
            </p>
            <SimpleSlider3 />
            <br />
            <br />
            <div className="botones">
              {/* <a
                href="https://test-deploy-topaz-nine.vercel.app/"
                target="_blank"
                class="button"
              >
                {" "}
                Demo
              </a> */}
              <a href="rrconsultoria.com.ar" target="_blank" class="button">
                Link
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Portfolio;
