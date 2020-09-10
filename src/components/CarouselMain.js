import React from "react";
import "../css/style.css";
import slider1 from "../images/slider-1.jpg";
import slider2 from "../images/slider-2.jpg";
import slider3 from "../images/slider-3.jpg";
import { Carousel } from "react-bootstrap";

function CarouselMain() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>First slide description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Second slide description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Third slide description</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselMain;
