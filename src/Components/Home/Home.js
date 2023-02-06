import React, { Component } from "react";
import "./Home.css";
import Habilidades from "../Habilidades/Habilidades";

class Home extends Component {
  scrollToHabilidades = () => {
    document.getElementById("hola").scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <div className="presentación">
        <h2 className="h1">¡Hola, bienvenidos!</h2>
        <h2 className="h1">Soy</h2>
        <p className="home">Agustina Monzón</p>
        <p className="escritura">Full Stack Web Developer</p>
        <br />
        {/* <button onClick={this.scrollToHabilidades}>Ver Habilidades</button> */}

        <Habilidades />
      </div>
    );
  }
}

export default Home;
