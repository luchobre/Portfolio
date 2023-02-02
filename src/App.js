import "./App.css";
import Aboutme from "./components/Aboutme/Aboutme";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Video from "./components/Video/video.mp4";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="body">
      <div className="header">
        <video autoPlay loop muted className="video">
          <source src={Video} type="video/mp4" />
        </video>
        <Navbar />
        <Banner />
      </div>
      <Aboutme />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;





