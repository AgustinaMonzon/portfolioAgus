import React from "react";
import "./About.css";
import { FaEnvelope } from "react-icons/fa";
const About = () => {
  return (
    <div className="containerAbout">
      <h3 className="h2">Sobre mi</h3>
      <br />
      <p className="texto">
        Soy Full Stack Web Developer, con experiencia realizando proyectos Full
        Stack desarrollados en el stack PERN con React, Redux, PostgreSQL,
        Express, Node js, HTML, CSS, Express, Java Script y Sequelize. Uno de
        los proyectos fue realizado en equipo utilizando SCRUM con sprints de
        una semana. <ul />
        Tengo experiencia previa durante 10 años como Profesora, lo que me
        permitió desarrollar habilidades como liderazgo, capacidad de trabajar
        en ambientes colaborativos, creatividad, expansión de mis conocimientos
        y ganas de tener un aprendizaje continuo. <ul />
        Soy una persona proactiva con excelente formación académica, resiliente
        y con buenos valores; lo cual me hace una profesional muy comprometida y
        apasionada en lo que hago, con pensamiento analítico y creativo, en
        búsqueda activa de resultados y resolución de problemas, orientación,
        integración y excelente trabajo en equipo, empatía, iniciativa,
        curiosidad y dedicación a lo que hago.
      </p>
      <p className="texto">
        Tengo experiencia trabajando con tecnologías como: <li />
        JavaScript <li />
        React
        <li />
        NodeJS <li />
        PostgreSQL <li />
        Redux <li />
        Express <li />Y tambien trabajando con la metodología: SCRUM
      </p>
      <a className="Link" href="mailto: agusdlmonzon@gmail.com" target="_blank">
        <FaEnvelope size="40" color="black" />
      </a>
    </div>
  );
};

export default About;
