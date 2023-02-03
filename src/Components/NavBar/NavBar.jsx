import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./NavBar.css";
import DownloadCV from "../Resume/Resume";

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
