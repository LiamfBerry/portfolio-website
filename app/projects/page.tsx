import Link from "next/link";
import Image from "next/image";

const projects = [
    { name: "project name 1", date: "project date", description: "project description", link: "/link", video: "/video"},
    { name: "project name 2", date: "project date", description: "project description", link: "/link", video: "/video"},
    { name: "project name 3", date: "project date", description: "project description", link: "/link", video: "/video"},
    { name: "project name 4", date: "project date", description: "project description", link: "/link", video: "/video"},
    { name: "project name 5", date: "project date", description: "project description", link: "/link", video: "/video"},
    { name: "project name 6", date: "project date", description: "project description", link: "/link", video: "/video"},
]

function ProjectCard({ name, date, description, link, video }: { name: string; date: string; description: string; link: string; video: string }) {
    return (
        <Link href={link} className="relative block">
            <Image src={video} alt={name} width={1000} height={500} className="object-cover"/>
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h1 className="text-4xl">
                    {name}
                </h1>
                <h2>
                    {date}
                </h2>
                <p>
                    {description}
                </p>
            </div>
        </Link>
    );
}

export default function Projects() {
    return (
        <div className="my-20">
            {projects.map((project, index) => (
                <ProjectCard key={project.name} name={project.name} date={project.date} description={project.description} link={project.link} video={project.video} />
            ))}
        </div>
    );
}