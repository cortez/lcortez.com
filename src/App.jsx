import Projects from "./components/Projects";
import Dock from "./components/Dock";

function App() {
  return (
    <div>
        <p>
          <span className="caps" data-aos="zoom-in" data-aos-delay="250">About</span>
          <br />
          <span className="about" data-aos="zoom-in" data-aos-delay="300">Joseph Cortez is a recent computer information systems graduate interested in building compelling brand identities using intuitive software. </span>
          <br /><br />
          <span className="caps" data-aos="zoom-in" data-aos-delay="350">Projects</span>
          <br />
          <Projects />
        </p>
        <Dock />
    </div>
  );
}

export default App;
