import Link from "next/link";
import Image from "next/image";

const projects = [
    { name: "Myoelectric Hand Prosthetic", date: "project date", description: "project description", link: "/link", video: "/video"},
    { name: "PinPoint", date: "project date", description: "project description", link: "/link", video: "/video"},
    { name: "Continuous Irrigation Device", date: "project date", description: "project description", link: "/link", video: "/video"},
    { name: "MELD Liver Transplant Analysis", date: "project date", description: "project description", link: "/link", video: "/video"},
    { name: "HERO Sling", date: "project date", description: "project description", link: "/link", video: "/video"},
    { name: "C.L.A.W", date: "project date", description: "project description", link: "/link", video: "/video"},
    { name: "Plastic Eating E. Coli", date: "project date", description: "project description", link: "/link", video: "/video"},
]

function ProjectCard({ name, date, description, link, video }: { name: string; date: string; description: string; link: string; video: string }) {
    return (
        <Link href={link} className="relative block rounded-3xl overflow-hidden group">
            <Image src={video} alt={name} width={1000} height={500} className="object-cover transition-transform duration-500 group-hover:scale-105"/>
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h2 className="text-xs tracking-widest uppercase text-white/70">
                    {date}
                </h2>
                <h1 className="text-3xl font-semibold tracking-tight">
                    {name}
                </h1>
                <p className="text-white/80">
                    {description}
                </p>
            </div>
        </Link>
    );
}

export default function Projects() {
    return (
        <div className="my-20 grid grid-cols-1 gap-16">
            {projects.map((project, index) => (
                <ProjectCard key={project.name} name={project.name} date={project.date} description={project.description} link={project.link} video={project.video} />
            ))}
        </div>
    );
}