import { Links } from "./Links"
import React, { useState } from "react";

export default function Dock() {
    
    const [visible, setVisible] = useState(false);
    const handleClick = event => {
        event.preventDefault();
        setVisible(current => !current); 
    };

    function Popup() {
        return (
            <div className="box">
                <section className="note-popup-box">
                    <div className="note-popup-content">
                        <div className="note-popup-text">
                            <h2>Projects</h2>
                            <br />
                            <h3 className="popup-text"><a className="underline"
                                href="https://quill.live">Quill</a> (2022): A plain text collaboration tool
                                where changes to each generated page are updated in real-time and accessible
                                from any device.
                                <br /><br />
                                *This website was built with React and the source code is available <a className="underline" href="https://github.com/cortez/web">here</a>.
                            </h3>
                        </div>
                        <a className="note-popup-close" onClick={handleClick}>
                            <div className="note-popup-line"></div>
                            <div className="note-popup-line"></div>
                        </a>
                    </div>
                    <div className="note-popup-background" onClick={handleClick}></div>
                </section>
            </div>
        );
    }

    let renderLinks = () => {
        return (
            Links.map((link) => (
                <a href={link.href} className={link.class}>
                    <li data-color={link.color}>
                        {link.icon}
                        <span className="tooltip">{link.name}</span>
                    </li>
                </a>
            ))
        );
    }

    return (
        <div>
            {} {visible && (
                <Popup />
            )}
            <section className="container">
                <div className="icons">
                    <ul className="lists">
                        <span className="floation"></span>
                        <a href={Links[0].href} className={"note-popup"} onClick={handleClick}>
                            <li data-color={Links[0].color}>
                            {Links[0].icon}
                            <span className="tooltip">{Links[0].name}</span>
                            </li>
                        </a>
                        {renderLinks().slice(1)}
                    </ul>
                </div>
            </section>
        </div>
    );
}

window.onload = () => {
    let links = document.querySelectorAll("li"), float = document.getElementsByClassName("floation")[0];

    for (let i = 0; i < links.length; i++) {
        let position = (links[i]).offsetLeft, color = links[i].getAttribute('data-color');
            
        links[i].onmouseover = function () {
            this.style.color = "rgb("+color+")";
            float.style.left = position + "px";
            float.style.backgroundColor = "rgb("+color+", 0.12)";
        }

        links[i].onmouseleave = function () {
            this.style.color = "var(--icon)";
            float.style.backgroundColor = "var(--box-bg)";
        }
    }
}