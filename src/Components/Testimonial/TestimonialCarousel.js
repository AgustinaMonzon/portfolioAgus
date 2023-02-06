import React from "react";
import Slider from "react-slick";
import Testimonial from "./Testimonial";
import "./TestimonialCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialsCarousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section id="testimonios">
      <div className="testimonials-carousel">
        <Slider {...settings}>
          {props.testimonials.map((testimonial) => (
            <Testimonial
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;
