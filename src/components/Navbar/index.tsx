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
                            src="/LOG-square.svg"
                            alt="Logo"
                            width={80}
                            height={80}
                        />
                        <span className={`${montserrat.className} font-bold text-[#e8344a] p-4 text-xl`}>
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