import Link from "next/link"
import Image from "next/image";

const leadership = [
    {date: "date", link: "/leadership/leadership_experience", title: "title1", org: "organization", description: "description", photo: "/photo"},
    {date: "date", link: "/link", title: "title2", org: "organization", description: "description", photo: "/photo"},
    {date: "date", link: "/link", title: "title3", org: "organization", description: "description", photo: "/photo"},
    {date: "date", link: "/link", title: "title4", org: "organization", description: "description", photo: "/photo"},
    {date: "date", link: "/link", title: "title5", org: "organization", description: "description", photo: "/photo"},
]

function LeadershipCard({ date, link, title, org, description, photo, id }: { date: string; link: string; title: string; org: string; description: string; photo: string; id: string }) {
    return (
        <Link href={link} className="border-1 pl-4">
            <div className="pb-4">{id}</div>
            <h1>{title}</h1>
            <h2>{org}</h2>
            <h2 className="underline underline-offset-16">{date}</h2>
            <p className="py-4">{description}</p>
            <Image src={photo} alt={title} width={200} height={100} />
        </Link>
    );
}

export default function Leadership() {
    return (
        <div className="grid grid-rows-2">
            <div className="grid grid-cols-2">
                <div className="text-4xl">Leadership Experience</div>
                <div className="text-4xl">Photo Goes Here</div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {leadership.map((leader, index) => (
                    <LeadershipCard key={leader.title} id={`0${index + 1}`} title={leader.title} date={leader.date} link={leader.link} org={leader.org} description={leader.description} photo={leader.photo}/>
                ))}
            </div>
        </div>
    );
}