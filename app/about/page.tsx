import Link from "next/link";
import Image from "next/image";

const hobbies = [
    { name: "Hobby name 1", date: "Hobby date", description: "Hobby description", link: "/link", photo: "/photo"},
    { name: "Hobby name 2", date: "Hobby date", description: "Hobby description", link: "/link", photo: "/photo"},
    { name: "Hobby name 3", date: "Hobby date", description: "Hobby description", link: "/link", photo: "/photo"},
    { name: "Hobby name 4", date: "Hobby date", description: "Hobby description", link: "/link", photo: "/photo"},
    { name: "Hobby name 5", date: "Hobby date", description: "Hobby description", link: "/link", photo: "/photo"},
    { name: "Hobby name 6", date: "Hobby date", description: "Hobby description", link: "/link", photo: "/photo"},
]

function HobbyCard({ name, date, description, photo, flip }: { name: string; date: string; description: string; photo: string, flip: boolean }) {
    return (
        <div className={`flex ${flip ? "flex-row-reverse" : "flex-row"}`}>
            <Image src={photo} alt={name} width={1000} height={500} className=""/>
            <div className="flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
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
        </div>
    );
}

export default function About() {
    return (
        
    <   div className="my-20">
            {hobbies.map((hobby, index) => (
                <HobbyCard key={hobby.name} name={hobby.name} date={hobby.date} description={hobby.description} photo={hobby.photo} flip={index % 2 === 0}/>
            ))}
        </div>
    );
}