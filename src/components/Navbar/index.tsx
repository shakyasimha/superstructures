import Link from "next/link";
import Image from "next/image";
import NavLinks from "@/components/Navbar/nav-links";

import { montserrat } from "@/app/ui/fonts";

export default function Navbar() {
    return(
        <nav className="bg-[#fafafc] border-gray-200 relative">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* For logo and link */}
                <Link key="logo" href="/">
                    <div className="flex items-center justify-between">
                        {/* Logo goes here */}
                        <Image 
                            src="/LOG-square-red.svg"
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                        <span className={`${montserrat.className} font-bold text-[#b53a57] p-4 text-xl`}>
                            SUPERSTRUCTURES
                        </span>
                    </div>
                </Link>
                <div className="w-full min-[1200px]:w-auto min-[1200px]:flex space-x-6 transition-all duration-300 ease-in-out overflow-hidden">
                    <NavLinks />
                </div>
            </div>
        </nav>
    );
}