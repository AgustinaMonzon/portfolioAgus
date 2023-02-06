import React from "react";
import "./Testimonial.css";
function Testimonial(props) {
  return (
    <div className="testimonial">
      <p className="quote">"{props.quote}"</p>
      <p className="author">- {props.author}</p>
    </div>
  );
}
export default Testimonial;
