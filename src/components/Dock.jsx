import { Links } from "./Links"
import { Form } from "./Form"
import React, { useState, useEffect, useCallback } from "react";

export default function Dock() {  
    const [visible, setVisible] = useState(false);
    const handleClick = event => {
        event.preventDefault();
        setVisible(current => !current); 
    };

    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            setVisible(false); 
        }
    }, []);
    
    useEffect(() => {
        document.addEventListener("keydown", escFunction);
        return () => {
          document.removeEventListener("keydown", escFunction);
        };
    }, [escFunction]);

    function Popup() {
        return (
            <div className="box">
                <section className="note-popup-box">
                    <div className="note-popup-content">
                        <div className="note-popup-text">
                            <Form />
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
            {} {visible && (<Popup />)}
            <section className="container">
                <div className="icons">
                    <ul className="lists">
                        <span className="floation"></span>
                        {renderLinks().slice(0, -1)}
                        <a href={Links[2].href} className={"note-popup"} onClick={handleClick}>
                            <li data-color={Links[2].color}>
                            {Links[2].icon}
                            <span className="tooltip">{Links[2].name}</span>
                            </li>
                        </a>
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