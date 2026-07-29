import Link from "next/link"
import Image from "next/image";

const leadership = [
    {date: "September 2026 - Present", link: "/link", title: "Medical First Responder Volunteer", org: "St. John's Ambulance", description: "description", photo: "/photo"},
    {date: "September 2026 - Present", link: "/link", title: "Ibiomed Ambassador", org: "Ibiomed Society", description: "description", photo: "/photo"},
    {date: "May 2026 - Present", link: "/leadership/leadership_experience", title: "MED-T Co-President", org: "McMaster Medical Engineering Design Team", description: "description", photo: "/photo"},
    {date: "May 2024 - April 2026", link: "/link", title: "MedSprint Director", org: "McMaster Medical Engineering Design Team", description: "description", photo: "/photo"},
    {date: "May 2024 - April 2025", link: "/link", title: "IEEE EMBS Co-Chair", org: "McMaster IEEE Student Branch", description: "description", photo: "/photo"},
]

function LeadershipCard({ date, link, title, org, description, photo, id }: { date: string; link: string; title: string; org: string; description: string; photo: string; id: string }) {
    return (
        <Link href={link} className="rounded-3xl border border-zinc-200 dark:border-zinc-800 p-4 hover:border-accent transition-colors space-y-2">
            <div className="text-xs tracking-widest uppercase text-muted">{id}</div>
            <Image src={photo} alt={title} width={200} height={100} className="rounded-2xl object-cover w-full"/>
            <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
            <h2 className="text-muted">{org}</h2>
            <h2 className="text-sm tracking-widest uppercase text-accent">{date}</h2>
            <p className="text-muted">{description}</p>
        </Link>
    );
}

export default function Leadership() {
    return (
        <div className="my-20 space-y-12">
            <div className="grid grid-cols-2 items-center gap-6">
                <div className="text-5xl font-semibold tracking-tight">Leadership Experience</div>
                <div className="text-muted">Photo Goes Here</div>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {leadership.map((leader, index) => (
                    <LeadershipCard key={leader.title} id={`0${index + 1}`} title={leader.title} date={leader.date} link={leader.link} org={leader.org} description={leader.description} photo={leader.photo}/>
                ))}
            </div>
        </div>
    );
}