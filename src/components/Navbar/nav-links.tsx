import Link from "next/link";

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

export default function NavLinks() {
    return (
        <>
        {links.map((link) => {
            return (
                <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center text-[#e8344a] hover:text-[#264564] transition-colors"
                >
                    <p className="hidden md:block">{link.name}</p>
                </Link>
            )
        })}
        </>
    )
}