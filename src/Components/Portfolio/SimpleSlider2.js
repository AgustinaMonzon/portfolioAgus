import React, { Component } from "react";
import Slider from "react-slick";
import imagen5 from "./5.png";
import imagen6 from "./6.png";
import imagen7 from "./7.png";
import imagen8 from "./8.png";
import imagen9 from "./9.png";

export default class SimpleSlider2 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div>
        <h2> </h2>
        <section id="Proyect">
          <Slider {...settings}>
            <div className="contenedor-foto">
              <img
                src={imagen5}
                alt="Landing page"
                width="100%"
                height="100%"
              />
            </div>
            <div className="contenedor-foto">
              <img src={imagen6} alt="Home" width="100%" height="100%" />
            </div>
            <div className="contenedor-foto">
              <img src={imagen7} alt="Detelles" width="100%" height="100%" />
            </div>
            <div className="contenedor-foto">
              <img
                src={imagen8}
                alt="Crear receta"
                width="100%"
                height="100%"
              />
            </div>
            <div className="contenedor-foto">
              <img
                src={imagen9}
                alt="Crear receta"
                width="100%"
                height="100%"
              />
            </div>
          </Slider>
        </section>
      </div>
    );
  }
}
