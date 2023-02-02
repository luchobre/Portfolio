import { Link } from "react-scroll";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          L<span>B</span>
        </h3>
        <p className="footer-links">
          <Link
            activeClass="active"
            to="banner"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span className="link-1">Home</span>
          </Link>
          <Link
            activeClass="active"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span className="link-1">About me</span>
          </Link>
          <Link
            activeClass="active"
            to="Projects-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span className="link-1">Projects</span>
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span className="link-1">Skills</span>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <span className="link-1">Contact</span>
          </Link>
        </p>
        <p className="footer-company-name">Company Name © 2015</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Las Victorias</span> San Carlos de Bariloche
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>(+549) 11 5891 4320</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:lucho.bregoli@gmail.com">lucho.bregoli@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About me</span>
        </p>

        <div className="footer-icons">
          <a
            href="https://www.facebook.com/luchobregoli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/luchobregoli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/luchobre"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/luchobregoli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
