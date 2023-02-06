import React from "react";
import { Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Resume from "../Components/Resume/Resume";
import Portfolio from "../Components/Portfolio/Portfolio";
import Contact from "../Components/Contact/Contact";
import Testimonial from "../Components/Testimonial/TestimonialCarousel";
import Habilidades from "../Components/Habilidades/Habilidades";

const Routes = () => (
  <div className="content">
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/resume" component={Resume} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contact" component={Contact} />
    <Route path="/testimoniosCarousel" component={Testimonial} />
    <Route path="/habilidades" component={Habilidades} />
  </div>
);

export default Routes;
