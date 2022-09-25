import { Projects } from "./svg/Projects";
import { LinkedIn } from "./svg/LinkedIn";
import { GitHub } from "./svg/GitHub";
import { Contact } from "./svg/Contact";
import { useState } from "react";

const projectsColor = "255, 202, 15";
const githubColor = "109, 74, 255";
const linkedinColor = "0, 115, 177";
const contactColor = "122, 130, 171";

export default function Dock() {
    const [visible, setVisible] = useState(false);
    const handleClick = event => {
        event.preventDefault();
        setVisible(current => !current);
      };
      return (
        <div>
          {} {visible && (
            <div className="box">
                <section class="note-popup-box">
                    <div class="note-popup-content">
                        <div class="note-popup-text">
                            <h2>Projects</h2>
                            <br />
                            <h3 class="popup-text"><a class="underline" href="https://quill.live">Quill</a> (2022): A plain text collaboration tool where changes to each generated page are updated in real-time and accessible from any device.
                            </h3>
                        </div>
                        <a class="note-popup-close" onClick={handleClick}>
                        <div class="note-popup-line"></div>
                        <div class="note-popup-line"></div>
                        </a>
                    </div>
                    <div class="note-popup-background" onClick={handleClick}>
                    </div>
                </section>
            </div>
          )}
            <section class="container">
                <div class="icons">
                    <ul class="lists">
                        <span class="floation"></span>
                        <a class="note-popup" href="" onClick={handleClick}>
                            <li data-color={projectsColor}>
                                <Projects />
                                <span class="txt">Projects</span>
                            </li>
                        </a>
                        <a href="https://github.com/cortez">
                            <li data-color={githubColor}>
                                <LinkedIn />
                                <span class="txt">GitHub</span>
                            </li>
                        </a>
                        <a href="https://linkedin.com/in/seph">
                            <li data-color={linkedinColor}>
                                <GitHub />
                                <span class="txt">LinkedIn</span>
                            </li>
                        </a>
                        <a href="mailto:joseph@lcortez.com">
                            <li data-color={contactColor}>
                                <Contact />
                                <span class="txt">Contact</span>
                            </li>
                        </a>
                    </ul>
                </div>
            </section>
        </div>
    );
}

window.onload = function () {
    let lists = document.querySelectorAll(".lists li"),
      float = document.getElementsByClassName("floation")[0];
    for (let i = 0; i < lists.length; i++) {
      let position = lists[i].offsetLeft,
        color = lists[i].getAttribute('data-color');
      let parentColor = lists[i].parentElement.parentElement.parentElement;
      lists[i].onmouseover = function () {
        this.style.color = "rgb("+color+")";
        float.style.left = position + "px";
        float.style.backgroundColor = "rgb("+color+", 0.12)";
      }
      lists[i].onmouseleave = function () {
        this.style.color = "var(--icon)";
        float.style.backgroundColor = "var(--box-bg)";
      }
}
}