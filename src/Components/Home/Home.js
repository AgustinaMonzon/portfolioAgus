import React, { Component } from "react";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <div className="presentación">
        <h2 className="h1">Bienvenidos</h2> <h2 className="h1">Soy</h2>
        <p className="home">Agustina Monzón</p>
        <p className="escritura">Full Stack Web Developer</p>
        {/* <p className="descripcion">
          | HTML | CSS | Javascript | Boostrap | React | Redux | Node.js |
          Express | Sequelize | PostgreSQL | MySQL | Git & GitHub | Scrum
        </p> */}
        <div className="habilidades">
          <h3> Mis habilidades:</h3>
          <br />
          <br />
          <p align="izquierda">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="120"
                height="120"
              />
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                alt="react"
                width="120"
                height=" 120"
              />
            </a>
            <a href="https://redux.js.org" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="redux"
                width="120"
                height="120"
              />
            </a>
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              <img
                src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                alt="nodejs"
                width="120"
                height="120"
              />
            </a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width="120"
                height="120"
              />
            </a>
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="120"
                height="120"
              />
            </a>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="120"
                height="120"
              />
            </a>
            <a
              href="https://www.postgresql.org"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="postgresql"
                width="120"
                height="120"
              />
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
