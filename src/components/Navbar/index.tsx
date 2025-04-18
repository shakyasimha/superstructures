import Link from "next/link";
import NavLinks from "@/components/Navbar/nav-links";

export default function Navbar() {
    return(
        <nav className="bg-[#fafafc] border-gray-200 relative">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* For logo and link */}
                <Link key="logo" href="/">
                    <div>
                        {/* Logo goes here */}
                    </div>
                </Link>
                <div className="w-full min-[1200px]:w-auto min-[1200px]:flex space-x-3 transition-all duration-300 ease-in-out overflow-hidden">
                    <NavLinks />
                </div>
            </div>
        </nav>
    );
}