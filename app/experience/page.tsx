import Image, { StaticImageData } from "next/image";
import AMD from "./images/AMD_Logo.svg"
import Arche from "./images/Arche_Logo.svg"
import McMaster from "./images/McMaster_Logo.svg"
import Tutorax from "./images/Tutorax_Logo.svg"

const experiences = [
    {date: "September 2026 - Present", logo: McMaster, title: "Teaching Assistant", position: "Anatomy and Physiology Lab Teaching Assistant", location: "Hamilton, ON", description: "description"},
    {date: "September 2026 - Present", logo: McMaster, title: "Teaching Assitant", position: "Health Solutions Design Projects Lab Teaching Assistant", location: "Hamilton, ON", description: "description"},
    {date: "May 2025 - Present", logo: AMD, title: "Product Managememt", position: "DCGPU Software Product Management Intern", location: "Calgary, AB", description: "description"},
    {date: "January 2025 - April 2025", logo: McMaster, title: "Teaching Assistant", position: "Engineering Mathematics II Teaching Assistant", location: "Hamilton, ON", description: "description"},
    {date: "September 2024 - December 2024", logo: McMaster, title: "Teaching Assistant", position: "Engineering Mathematics III Teaching Assistant", location: "location", description: "description"},
    {date: "May 2024 - October 2024", logo: Tutorax, title: "Personal Tutoring", position: "Contract Tutor", location: "Hamilton, ON", description: "description"},
    {date: "May 2024 - August 2024", logo: Arche, title: "Electrical Engineering", position: "Electrical Engineering Intern", location: "Hamilton, ON", description: "description"},
]

function ExperienceCard({ date, logo, title, position, location, description }: { date: string, logo: StaticImageData, title: string, position: string, location: string, description: string}) {
    return (
        <div className="grid grid-cols-3 gap-6 py-6 border-b border-zinc-200 dark:border-zinc-800 last:border-0">

            <div className="flex flex-row items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0"/>
                <p className="text-sm tracking-widest uppercase text-muted">{date}</p>
            </div>

            <div className="space-y-1">
                <div className="relative w-[400px] h-[120px]">
                    <Image src={logo} alt={title} fill className="object-contain object-left -ml-6" />
                </div>
                <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
                <h2 className="text-muted">{position}</h2>
                <p className="text-muted">{description}</p>
            </div>

            <div className="text-muted">
                {location}
            </div>
        </div>
    );
}

export default function Experience() {
    return (
        <div className="my-20 space-y-6">
            <h1 className="text-5xl font-semibold tracking-tight">Work Experience</h1>
            <div>
                {experiences.map((experience) => (
                    <ExperienceCard key={experience.position} date={experience.date} logo={experience.logo} title={experience.title} position={experience.position} description={experience.description} location={experience.location} />
                ))}
            </div>
        </div>
    );
}