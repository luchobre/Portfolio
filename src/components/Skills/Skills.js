import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import CountUp from "react-countup";

const Skills = () => {
  return (
    <div className="skills">
      <div className="Skills-title">
        <p>SKILLS</p>
      </div>
      <div className="Skills-text">
        <div className="Skills-1">
          <div className="Skills-one">
            <div className="html">
              <FaHtml5 />
              <CountUp end={90} duration={5} suffix=" %" className="counter" />
            </div>
            <div>
              <p>HTML</p>
            </div>
          </div>
          <div className="Skills-one">
            <div className="css">
              <FaCss3Alt />
              <CountUp end={90} duration={5} suffix=" %" className="counter" />
            </div>
            <div>
              <p>CSS</p>
            </div>
          </div>
        </div>
        <div className="Skills-2">
          <div className="Skills-one">
            <div className="react">
              <FaReact />
              <CountUp end={50} duration={5} suffix=" %" className="counter" />
            </div>
            <div>
              <p>ReactJS</p>
            </div>
          </div>
          <div className="Skills-one">
            <div className="mongo">
              <SiMongodb />
              <CountUp end={30} duration={5} suffix=" %" className="counter" />
            </div>
            <div>
              <p>MongoDB</p>
            </div>
          </div>
        </div>
        <div className="Skills-3">
          <div className="Skills-one">
            <div className="js">
              <FaJs />
              <CountUp end={70} duration={5} suffix=" %" className="counter" />
            </div>
            <div>
              <p>JavaScript</p>
            </div>
          </div>
          <div className="Skills-one">
            <div className="node">
              <FaNodeJs />
              <CountUp end={50} duration={5} suffix=" %" className="counter" />
            </div>
            <div>
              <p>Node JS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
