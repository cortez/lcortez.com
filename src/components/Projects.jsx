export default function Projects() {
    
    const projects = [
        {
            name: "Coins",
            href: "https://coins.lcortez.com",
            desc: "Real-time cash and cryptocurrency portfolio tracker."
        },
        {
            name: "Quill",
            href: "https://quill.live",
            desc: "Plain text collaboration tool accessible from any device."
        },
        // {
        //     name: "cortez/web",
        //     href: "https://github.com/cortez/web",
        //     desc: "The source code of this website, built using React."
        // }
    ];

    return (
        projects.map((project, index) => (
            <>
                <p data-aos="zoom-in" data-aos-delay={(index+6)*50}><a href={project.href} className="underline">{project.name}</a>: {project.desc}</p>
                <br />
            </>
        ))
    );
}