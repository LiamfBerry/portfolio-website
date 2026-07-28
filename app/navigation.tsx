"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "./images/Portfolio_Logo.svg"
import { usePathname } from "next/navigation";

const pages = [
    {title: "Home", link: "/"},
    {title: "About", link: "/about"},
    {title: "Projects", link: "/projects"},
    {title: "Experience", link: "/experience"},
    {title: "Leadership", link: "/leadership"},
    {title: "Contact", link: "/contact"},
]

function Page({ title, link }: {title: string; link: string}) {
    const isActive = usePathname() === link;
    return (
        <div>
            <Link href={link}>{title}</Link>
            <div className={`border-b-2 pb-5 transition-transform duration-500 ${isActive ? "scale-x-100" : "scale-x-0"}`}></div>
        </div>
    );
}

export default function NavigationBar() {
    return (
        <div className="p-12 grid grid-cols-3 items-center sticky top-0 z-50">
            <Link href="./" className="justify-self-start">
                <Image src={logo} alt="Portfolio Logo" width={100} height={100} />
            </Link>
            <ul className="flex justify-self-center gap-32 text-xl">
                {pages.map((page) => (
                    <Page key={page.title} title={page.title} link={page.link} />
                ))}
            </ul> 
        </div>
    );
}