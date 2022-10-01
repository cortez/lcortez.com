import Projects from "./components/Projects";
import Dock from "./components/Dock";

function App() {
  return (
    <div>
        <p data-aos="zoom-in">
          <span className="caps">About</span>
          <br />
          Joseph Cortez is a recent computer information systems graduate interested in building compelling brand identities using intuitive software.
          <br /><br />
          <span className="caps">Projects</span>
          <br />
          <Projects />
        </p>
        <Dock />
    </div>
  );
}

export default App;
