import "./Navbar.css";
import { Link } from "react-scroll";
import { useState } from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Navbar.elements";
import {
  FaBars,
  FaTimes,
  FaUserAlt,
  FaBriefcase,
  FaGlasses,
  FaReact,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <Link
              activeClass="active"
              to="banner"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <div className="navbar-logo">
                L<span>B</span>
              </div>
            </Link>
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink>
                <Link
                  activeClass="active"
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <span>
                      <FaUserAlt />
                    </span>
                    <a className="navbar-link">ABOUT ME</a>
                  </div>
                </Link>
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink>
                <Link
                  activeClass="active"
                  to="Projects-container"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <span>
                      <FaBriefcase />
                    </span>
                    <a className="navbar-link">PROJECTS</a>
                  </div>
                </Link>
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink>
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <span>
                      <FaReact />
                    </span>
                    <a className="navbar-link">SKILLS</a>
                  </div>
                </Link>
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <div>
                    <span>
                      <FaGlasses />
                    </span>
                    <a className="navbar-link">CONTACT</a>
                  </div>
                </Link>
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink>
                <div className="navbar-container-button">
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                  >
                    <div>
                      <button className="navbar-button">HIRE ME!</button>
                    </div>
                  </Link>
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
