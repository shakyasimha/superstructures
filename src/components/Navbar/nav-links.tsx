"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { montserrat } from "@/app/ui/fonts";

// Navbar links are here
const links = [
    { 
        name: 'Home', 
        href: '/'
    },
    {
        name: 'About Us',
        href: '/about'
    },
    {
        name: 'Projects',
        href: '/projects'
    },
    {
        name: 'Our Team',
        href: '/team'
    },
    {
        name: 'Contact Us',
        href: '/contact'
    },
]

interface NavLinksProps {
    className?: string;
}

export default function NavLinks({ className }: NavLinksProps) {
    const pathname = usePathname(); // Get current route 

    return (
        <ul className={`flex space-x-4 ${montserrat.className} ${className}`}>
            {links.map((link) => (
                <li key={link.name}>
                <Link
                    href={link.href}
                    className={clsx(
                        "flex items-center px-3 py-2 text-[#264564] hover:border-b-2 hover:text-[#b53a57] hover:border-[#b53a57] transition-all duration-200 ease-in-out", // default link style
                            {
                                "border-b-2 text-[#b53a57] border-[#b53a57] font-bold transition-all duration-300 ease-in-out": pathname === link.href, /// active link style</li>
                            }
                    )}
                >
                    <p className="hidden md:block">{link.name}</p>
                </Link>
                </li>
            ))}
        </ul>
    )
}