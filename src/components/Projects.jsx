export default function Projects() {
    
    const projects = [
        {
            name: "Quill",
            href: "https://quill.live",
            desc: "Plain text collaboration tool accessible from any device."
        },
    ];

    return (
        projects.map((project, index) => (
            <>
                <div data-aos="zoom-in" data-aos-delay={(index+6)*50}><a href={project.href} className="underline project">{project.name}</a>: {project.desc}</div>
                <br /><br />
            </>
        ))
    );
}