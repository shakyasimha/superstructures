"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
                    className={`flex items-center px-3 py-2 text-[#b53a57] hover:text-[#264564] ${
                    pathname === link.href
                        ? 'border-b-2 border-[#b53a57] font-bold'
                        : 'border-b-2 border-transparent'
                    } transition-all duration-300 ease-in-out`}
                    aria-current={pathname === link.href ? 'page' : undefined}
                >
                    <p className="hidden md:block">{link.name}</p>
                </Link>
                </li>
            ))}
        </ul>
    )
}