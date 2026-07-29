import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Climbing from "./images/Climbing.jpg"
import Cooking from "./images/Cooking.jpg"
import Drawing from "./images/Drawing.jpg"
import Gym from "./images/Gym.jpg"
import Skiing from "./images/Skiing.jpg"

const hobbies = [
    { name: "Rock Climbing", description: "I probably started climbing before I started walking. I've been scrambling up cliffs as far back as I remember and I still find myself wanting to do it more and more. When I was young my dad would take me to the crags at Wasootch and I'd spend all day racing up and down the rock. Once I was in middle school I took climbing to a more serious level and was on a competitive team for a few years. Eventually I returned to the outdoors and have been attempting bigger and bigger multi-pitches since, such as this photo I took off the Aftonroe climb.", photo: Climbing},
    { name: "Cooking", description: "I fell in love with the art of cooking when I would bake with my mom. As a middle schooler I would watch cooking shows like Hells Kitchen and Master Chef with a passion. I found it so interesting how flavours and techniques could come together so preciesly to create a piece of art on the plate. As I've gotten older (and started having to cook for myself) I've practiced my skills and am always trying to come up with new recipies to experiment with, such as this herb-crusted rack of lamb.", photo: Cooking},
    { name: "Drawing", description: "Back when I took my first course in Anatomy and Physiology, as the over the top student I was for some reason I decided to return to the stone age and write all my notes on paper. This presented with the unique challenge of being able to label anatomical features on the body without professional diagrams. Becuase of this, I decided to attempt to create my own anatomically accurate diagrams on paper. From this experience I really came to love drawing. The precision and attention to detail involved really scratched an itch of mine and I would spend upwards of 6 hours at a time trying to perfect my sketches. Whenever I get a free minute I pick up the pencil and get to work on my next piece.", photo: Drawing},
    { name: "Skiing", description: "Since I couldn't climb in the winter I learned to expel my energy into skiing from a very young age as well. Going up to Panorma over the christmas break brings back fond memories of learning to navigate its slopes. As I've gotten older I try and find any opportunity I can to take to the mountains and get a day of skiing in. I've even gone a step further and trained in avalanche safety to go beyond the resorts and trek to remote spots in the mountains where the best snow can be found. In this photo I am working my way up Quartz Hill.", photo: Skiing},
    { name: "Working Out", description: "I used to hate going to the gym. I felt so sore for days afterwards and it took a long time to see any real progress. However, eventually the soreness got better, the work was paying off, and the accomplishment I felt from completing a hard work out was so rewarding. Since then I've become fascinated with fitness, nutrition, and learning the associations between the muscles in my body with the exercises I perfrom. The gym has allowed me to gain more energy, discipline, and motivation to reach my goals.", photo: Gym},
]

function HobbyCard({ name, description, photo, flip }: { name: string; description: string; photo: StaticImageData, flip: boolean }) {
    return (
        <div className={`flex gap-6 items-center py-8 ${flip ? "flex-row-reverse" : "flex-row"}`}>
            <Image src={photo} alt={name} width={1000} className="rounded-3xl object-cover max-w-xl flex-none"/>
            <div className="flex-1 space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight">
                    {name}
                </h1>
                <p className="text-muted max-w-md">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function About() {
    return (
        <div className="my-20 divide-y divide-zinc-200 dark:divide-zinc-800">
            {hobbies.map((hobby, index) => (
                <HobbyCard key={hobby.name} name={hobby.name}  description={hobby.description} photo={hobby.photo} flip={index % 2 === 0}/>
            ))}
        </div>
    );
}