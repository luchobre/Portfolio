
import "./Projects.css";
import { useState } from "react";
import Slider from "react-slick";
import pic1 from './images/1.jpg'
import pic2 from './images/2.jpg'
import pic3 from './images/3.jpg'
import pic4 from './images/4.jpg'
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx"

const images = [pic1, pic2, pic3, pic4];

const Projects = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <RxDoubleArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <RxDoubleArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Projects-container">
      <div className="Projects">
        <div className="Projects-title">
          <p>PROJECTS</p>
        </div>
          <Slider {...settings} className= 'Projects-slider'>
            {images.map((img, idx) => (
              <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
      </div>
      </div>
  );
}

export default Projects