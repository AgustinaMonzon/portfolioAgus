import React, { Component } from "react";
import Slider from "react-slick";
import imagen from "./upb1.png";
import imagen2 from "./upb2.png";
import imagen3 from "./upb3.png";
import imagen4 from "./upb4.png";

export default class SimpleSlider extends Component {
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
              <img src={imagen} alt="Landing page" width="100%" height="100%" />
            </div>
            <div className="contenedor-foto">
              <img src={imagen2} alt="Home" width="100%" height="100%" />
            </div>
            <div className="contenedor-foto">
              <img src={imagen3} alt="Detelles" width="100%" height="100%" />
            </div>
            <div className="contenedor-foto">
              <img
                src={imagen4}
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
