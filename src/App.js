import React, { Component } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/TestimonialCarousel";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Habilidades from "./Components/Habilidades/Habilidades";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Testimonial />
        <Habilidades />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;
