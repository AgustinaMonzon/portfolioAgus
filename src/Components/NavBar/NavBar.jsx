import React, { Component } from "react";
import { Route, NavLink, Link } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./NavBar.css";
import DownloadCV from "../Resume/Resume";
import Testimonial from "../Testimonial/TestimonialCarousel";
import Habilidades from "../Habilidades/Habilidades";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({ open: this.state.open ? false : true });
  }

  render() {
    return (
      <div className="fondo">
        <div className="containerNav">
          <nav>
            <ul id="nav" className={`nav${this.state.open}`}>
              <li>
                <NavLink
                  className="nav-link"
                  onClick={this.clickHandler}
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  onClick={this.clickHandler}
                  to="/about"
                >
                  Sobre mi
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  onClick={() => {
                    this.clickHandler();
                    document.getElementById("testimonios").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  to="/about#testimonios"
                >
                  Testimonios
                </NavLink>
              </li>
              <li>
                <DownloadCV />
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  onClick={this.clickHandler}
                  to="/portfolio"
                >
                  Proyectos
                </NavLink>
              </li>
              {/* <li>
                <a
                  className="a"
                  onClick={() => {
                    this.clickHandler();
                    document.getElementById("habilidades").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Habilidades
                </a>
              </li> */}
              <li>
                <NavLink
                  className="nav-link"
                  onClick={() => {
                    this.clickHandler();
                    document.getElementById("habilidades").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  to="/#habilidades"
                >
                  Habilidades
                </NavLink>
              </li>

              <li>
                <NavLink className="nav-link" to="/contact">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/testimoniosCarousel" component={Testimonial} />
            <Route path="/habilidades" component={Habilidades} />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default NavBar;
