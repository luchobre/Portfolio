import "./Projects.css";
import { useState } from "react";
import Slider from "react-slick";
import pic1 from "./images/1.jpg";
import pic2 from "./images/2.jpg";
import pic3 from "./images/3.jpg";
import pic4 from "./images/4.jpg";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";

const images = [pic1, pic2, pic3, pic4];
const imageUrls = [
  "https://luchobre.github.io/zapaterialb/",
  "https://luchobre.github.io/clublb/",
  "https://alcubo3.vercel.app/",
  "https://goon.vercel.app/",
];

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
        <Slider {...settings} className="Projects-slider">
          {images.map((img, idx) => (
            <div 
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
            key={idx}
            >
              <a href={imageUrls[idx]} target="_blank" rel="noopener noreferrer">
                <img src={img} alt={img} /></a>
            </div>
          ))}
        </Slider>
      </div>
      <div className="projects-list">
        <img src={pic1} alt="Pic1"></img>
        <img src={pic2} alt="Pic2"></img>
        <img src={pic3} alt="Pic3"></img>
        <img src={pic4} alt="Pic4"></img>
  </div>
    </div>
  );
};

export default Projects;
