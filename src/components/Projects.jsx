export default function Projects() {
    
    const projects = [
        {
            name: "Quill",
            href: "https://quill.live",
            desc: "Plain text collaboration tool accessible from any device."
        },
    ];

    return (
        projects.map((project) => (
            <>
                <a href={project.href} className="underline">{project.name}</a>: {project.desc}
                <br /><br />
            </>
        ))
    );
}