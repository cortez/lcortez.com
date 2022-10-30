import Projects from "./components/Projects";
import Dock from "./components/Dock";

function App() {
  return (
    <>
      <div className="render">
          <span className="caps" data-aos="zoom-in" data-aos-delay="350">Joseph Cortez</span>
          <p data-aos="zoom-in" data-aos-delay="300">Recent computer information systems graduate interested in building compelling brand identities and intuitive software. </p>
          <br /><br />
          <span className="caps" data-aos="zoom-in" data-aos-delay="350">Selected Projects</span>
          <br />
          <Projects />
      </div>
      <Dock />
    </>
  );
}

export default App;