"use client";

import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "./components/Button";
import LinkedInLogo from "./images/LinkedIn_Logo.svg";
import GithubLogo from "./images/Github_Logo.svg";
import MailLogo from "./images/Mail_Logo.svg";
import YoutubeLogo from "./images/Youtube_Logo.svg";
import ProfilePhoto from "./images/Profile_Photo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const icons = [
  { name: "LinkedIn", src: LinkedInLogo, link: "https://www.linkedin.com/in/liam-berry-b09731290/"},
  { name: "Github", src: GithubLogo, link: "https://github.com/LiamfBerry"},
  { name: "Mail", src: MailLogo, link: "mailto:Berryl7@mcmaster.ca"},
  { name: "Youtube", src: YoutubeLogo, link: "http://www.youtube.com/@LiamBerry-jq3tg"},
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2">
      <div className="pt-32 space-y-6">
        <p className="text-sm tracking-widest uppercase text-muted">MECHATRONICS AND BIOMEDICAL ENGINEERING</p>
        <div className="text-6xl md:text-7xl font-semibold tracking-tight">I&apos;M LIAM BERRY</div>
        <p className="text-lg text-muted max-w-md">Passionate about accessible care, the advancement of knowledge, and education.</p>
        <div className="flex gap-4">
          <PrimaryButton onClick={() => router.push("/projects")}>View My Work</PrimaryButton>
          <SecondaryButton onClick={() => router.push("/about")}>Learn More</SecondaryButton>
        </div>
        <div className="flex flex-row gap-4">
          {icons.map((icon) => (
            <Link key={icon.name} href={icon.link} className="opacity-70 hover:opacity-100 transition-opacity">
              <Image src={icon.src} alt={icon.name} width={28} height={28}/>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-start -ml-64 relative">
        <div className="absolute -z-10 bg-accent/20 rounded-full blur-3xl w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        <Image src={ProfilePhoto} alt="Profile Photo" width={800} className="rounded-3xl"/>
      </div>
    </div>
  );
}
