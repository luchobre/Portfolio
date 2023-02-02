import "../Aboutme/Aboutme.css";
import me from './images/mypic.jpg';
import cv from './docs/cv-luciano-bregoli.pdf'

const Aboutme = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-title">
        <p>ABOUT ME</p>
      </div>
      <div className="container-aboutme">
        <div className="container-pic">
          <img src={me} className="pic"/>
        </div>
        <div className="container-info">
          <h3>MY INTRO</h3>
          <h1>
            I am <span>Luciano. B</span>
          </h1>
          <h5>Junior Full Stack Developer based in Argentina</h5>
          <div className="info-text">
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions. Check out my Portfolio.
            </p>
            <p>I like work with new people. New people new Experiences.</p>
          </div>
          <div className="container-personal-information">
            <div className="container-1col">
              <li>
                Birthday: <span>25 August 1992</span>
              </li>
              <li>
                Age: <span>30 years</span>
              </li>
              <li>
                Adress: <span>San carlos de Bariloche</span>
              </li>
            </div>
            <div className="container-2col">
              <li>
                Phone: <span>(+549) 11 5891 4320</span>
              </li>
              <li>
                Email: <span>lucho.bregoli@gmail.com</span>
              </li>
              <li>
                LinkedIn: <span><a href="https://www.linkedin.com/in/luciano-bregoli-31a445102/" target="_blank">Luciano Brégoli</a></span>
              </li>
            </div>
          </div>
          <a className="aboutme-button" href={cv} target="_blank">
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
