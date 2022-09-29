import { Projects } from "./svg/Projects";
import { LinkedIn } from "./svg/LinkedIn";
import { GitHub } from "./svg/GitHub";
import { Contact } from "./svg/Contact";

export const Links = [
    {
        name: "Projects",
        color: "255, 202, 15",
        href: "",
        icon: <Projects />
    },
    {
        name: "GitHub",
        color: "109, 74, 255",
        href: "https://github.com/cortez",
        icon: <GitHub />
    },  
    {
        name: "LinkedIn",
        color: "0, 115, 177",
        href: "https://linkedin.com/in/seph",
        icon: <LinkedIn />
    },
    {
        name: "Contact",
        color: "122, 130, 171",
        href: "mailto:joseph@lcortez.com",
        icon: <Contact />
    }
];