import React from "react";
import "./About.css";
import TestimonialsCarousel from "../Testimonial/TestimonialCarousel";
import yo from "./Diseño sin título.jpg";

const testimonials = [
  {
    quote:
      "Tuve la gran fortuna de que Agustina Monzón fungiera como mi Teacher Assistant, es una mujer con una gran capacidad de liderazgo, entusiasta, muy creativa, empática y con un gran sentido de la justicia, no solo es muy buena en el código, también en habilidades blandas. Aprendí de ella grandes cosas y la recomiendo ampliamente porque sé que en cualquier trabajo que se desenvuelva lo hará de forma no solo buena, si no sobresaliente.",
    author: "Odette Arriola",
  },
  {
    quote:
      "Trabajar con Agustina fue genial!! Me encanta la energia que trae al grupo, las ideas y el liderazgo que tiene. Sinceramente una persona asombrosa!!",
    author: "Francisco Rodriguez",
  },
  {
    quote:
      "Agustina fue mi Teaching Assistant durante mi cursada en el bootcamp de Henry. Es una excelente persona siempre positiva con buenas energías que contagiaba a quienes estábamos a su cargo, siempre con ideas nuevas para ayudar y apoyar al grupo. En lo personal me ayudo mucho en mi cursada, solo puedo agradecer todo apoyo y dedicación para nuestro grupo.",
    author: "Matias Acosta",
  },
  {
    quote:
      "Excelente compañera, muy buenas habilidades blandas y tecnicas. Un lujo trabajar con Agus!",
    author: "Cristian Ganon",
  },
  {
    quote:
      "Una increíble persona, con unas cualidades que sobresalen ante cualquier entorno laboral, además de unos conocimientos magníficos que destacan en todo momento. Súper recomendada ❤️",
    author: "Jorge Torres",
  },
  {
    quote:
      "Agustina es una persona extremadamente creativa, con mucha tenacidad y dedicación en lo que hace.",
    author: "Sandra Cecilia Garaycochea",
  },
  {
    quote:
      "Agustina es una persona con muchas habilidades tech y soft skills. Trabajé con ella durante 6 meses y es una excelente compañera, sabe trabajar en equipo y agrega valor a cada persona. Yo la recomiendo 100% para trabajar en cualquier empresa, ella puede aportar mucho al equipo de trabajo.",
    author: "Melina Veyrat Durbex",
  },
];

const About = () => {
  return (
    <div>
      <div className="h2">
        <h3>Sobre mi</h3>
      </div>
      <div className="containerAbout">
        <img className="yo" src={yo} alt="yo" />
        <p className="texto">
          Mi nombre es Agustina del Luján Monzón, soy Full Stack Web Developer,
          con experiencia realizando proyectos Full Stack desarrollados en el
          stack PERN con React, Redux, PostgreSQL, Express, Node js, HTML, CSS,
          Express, Java Script y Sequelize. Uno de los proyectos fue realizado
          en equipo utilizando SCRUM con sprints de una semana. <ul />
          Tengo experiencia previa durante 10 años como Profesora, lo que me
          permitió desarrollar habilidades como liderazgo, capacidad de trabajar
          en ambientes colaborativos, creatividad, expansión de mis
          conocimientos y ganas de tener un aprendizaje continuo. <ul />
          Soy una persona proactiva con excelente formación académica,
          resiliente y con buenos valores; lo cual me hace una profesional muy
          comprometida y apasionada en lo que hago, con pensamiento analítico y
          creativo, en búsqueda activa de resultados y resolución de problemas,
          orientación, integración y excelente trabajo en equipo, empatía,
          iniciativa, curiosidad y dedicación a lo que hago. <ul />
          Tengo experiencia trabajando con tecnologías como: JavaScript, React,
          NodeJS, PostgreSQL, Redux, Express, y tambien trabajando con la
          metodología: SCRUM
        </p>

        {/* <a className="Link" href="mailto: agusdlmonzon@gmail.com" target="_blank">
        <FaEnvelope size="40" color="black" />
      </a> */}
      </div>
      <div className="test">
        <h3>Testimonios</h3>
      </div>
      <div>
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </div>
  );
};

export default About;
