import Image from "next/image";

const experiences = [
    {date: "date", logo: "/logo", title: "title", position: "position", location: "location", description: "description"},
    {date: "date", logo: "/logo", title: "title", position: "position", location: "location", description: "description"},
    {date: "date", logo: "/logo", title: "title", position: "position", location: "location", description: "description"},
    {date: "date", logo: "/logo", title: "title", position: "position", location: "location", description: "description"},
    {date: "date", logo: "/logo", title: "title", position: "position", location: "location", description: "description"},
]

function ExperienceCard({ date, logo, title, position, location, description }: { date: string, logo: string, title: string, position: string, location: string, description: string}) {
    return (
        <div className="grid grid-cols-3 pr-4 py-2">

            <div className="flex flex-row items-top">
                <p className="text-4xl -ml-2 -mt-3">•</p>
                <p className="pl-16">{date}</p>
            </div>

            <div className="border-b-1 pb-5">
                <Image src={logo} alt={logo} width={100} height={50} />
                <h1>{title}</h1>
                <h2>{position}</h2>
                <p>{description}</p>
            </div>

            <div>
                {location}
            </div>
        </div>
    );
}

export default function Experience() {
    return (
        <div className="px-4 grid grid-cols-3 items-top">
            <h1>My Experience</h1>
            <div className="border-l-1">
                {experiences.map((experience) => (
                    <ExperienceCard date={experience.date} logo={experience.logo} title={experience.title} position={experience.position} description={experience.description} location={experience.location} />
                ))}
            </div>
            <h1>Testing Again</h1>
        </div>
    );
}