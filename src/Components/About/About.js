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
  {
    quote:
      "Agustina fue mi TA en mi tiempo de cursado dentro de Henry y puedo confirmar que es una de las personas mas capases que conozco, tiene un manejo de grupo extraordinario, liderazgo y las ganas de seguir aprendiendo constantemente. Hizo que cada uno de los encuentros que teníamos fuera distinto y espectacular. Es una persona que esta en constante aprendizaje , se nota en los proyectos que tiene que cada vez son mejores. Por eso para mi ,Agus es un muy buen ejemplo a seguir como persona y como Developer.",
    author: "Lisandro Romero",
  },
  {
    quote:
      "Agus es una persona excepcional, la conocí mientras trabajaba como Henry assistant en soy Henry y la verdad me encantó la experiencia de estar en su mismo equipo.La gran cantidad de propuestas y iniciativas que vinieron de ella en esa instancia fueron sorprendentes, su pasión y compromiso por lo que hace la destaca y estimula a los demás, es muy carismática y llena de energía. No tengo que pensar dos veces antes de afirmar que será una excelente aportación a cualquier equipo en qué participe.",
    author: "Matheus Oliveira Teixeira",
  },
  {
    quote:
      "Agustina es una persona perseverante, dedicada, solidaria con su grupo de trabajo. Talentosa como líder de grupo: Como Teaching Assistant se brindaba en su totalidad a formar un grupo integro y homogéneo. Carácter firme pero flexible para empatizar con sus compañeros.",
    author: "Pedro Torcuato Insausti",
  },
  {
    quote:
      "Durante mi tiempo como Asistente de Enseñanza Full-Stack en SoyHenry, Agustina fue mi líder y una figura clave en mi desarrollo profesional. Desde el primer día, ella demostró ser una persona extremadamente comprensiva y comprometida, siempre dispuesta a ayudarnos y aconsejarnos en todo lo que necesitábamos. Una de las cosas que más aprecié de Agustina fue su capacidad para escucharnos y comprender nuestras necesidades individuales. Ella siempre estaba dispuesta a ofrecernos consejos prácticos y soluciones creativas para ayudarnos a enfrentar los desafíos diarios que encontrábamos en el SUPP. Además, estaba siempre dispuesta a trabajar con nosotros para encontrar formas de mejorar nuestra eficacia y productividad.Lo que más aprecié de Agustina fue su compromiso con nuestro bienestar. Ella siempre se aseguraba de que nos sintiéramos cómodos y seguros en nuestro trabajo, y siempre estaba buscando maneras de hacer que nuestra experiencia fuera lo más agradable posible. Gracias a ella, me sentí apoyado y motivado durante todo mi tiempo en SoyHenry.",
    author: "Marcos Hernán Parella",
  },
  {
    quote:
      "Tuve la suerte de conocer a Agustina como TA de su grupo y entre todos hicimos un equipo solido y de confianza. Esto me habilita a conocer su personalidad y cualidades. Ella es una excelente persona que nunca se rinde y encara los objetivos con mucha garra hasta llegar a ellos. Muy despierta, enérgica , siempre aportando mejoras (Le han aceptado ideas nuevas en Henry y han sido implementadas), estudiosa, muy hábil, preparada para encontrar la solución de cualquier tipo de problema, y sobre todo destaco su compañerismo y su encantadora onda.",
    author: "Patricio Uskaer",
  },
  {
    quote:
      "Agustina,Paso mi taller de capacitación para candidatos en búsqueda activa de empleo.Un placer haberla capacitado una persona que tiene mucho compromiso, dedicación. Una profesional que tiene una enorme humildad para aprender. Lo que más destaco de ella es su creatividad y su versatilidad.Es una persona muy dispuesta a seguir aprendiendo e incorporar nuevos lenguajes de programación. Sin lugar a duda, su pasión es el mundo de la tecnología.Tiene todas las condiciones para liderar, es una profesional que motiva mucho y creadora de una buena sinergia. Muy bien preparada para asumir un nuevo desafío laboral y formar parte de un equipo de trabajo.",
    author: "Romina Blanco",
  },
  
   {
    quote:
     "Conocí a Agustina durante mi periodo como TA en Henry, y desde el minuto 1 fue un placer tenerla como Henry Assistant. Es una persona super capaz que posee una condición no tan frecuente, que es la de ser una excelente persona con cualidades humanas muy importantes y al mismo tiempo tener las mismas capacidades técnicas que se requiere para ser Full Stack Developer.Trabajar con Agus es algo muy fácil y agradable, siempre con energía, simpatía, predispuesta a dar su ayuda en cualquier momento. Además, tiene cualidades de manejo de grupo excepcionales, el liderazgo es algo muy natural en ella. Recomiendo ampliamente a Agustina! cualquier proyecto o empresa que la sume a su equipo sumara talento, capacidad y don de gente en un nivel muy importante!",
    author: "Bruno Buglioni",
  },
     {
    quote:
       "Contratamos a Agustina para realizar la pagina Web de la empresa, y realmente entendió a la perfección todas las necesidades que teníamos en mente. Es una persona muy profesional para trabajar, dedicada y se nota que le apasiona lo que hace. Tiene un fuerte compromiso y orientación a los resultados. Sin dudas la volvería a elegir",
    author: "Nahir Reverdito",
  }
];

const About = () => {
  return (
    <div className="respon">
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
