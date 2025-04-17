import Link from "next/link";
import NavLinks from "@/components/Navbar/nav-links";

export default function Navbar() {
    return(
        <nav className="bg-[#f5efe0] border-gray-200 relative">
            <div>
                {/* For logo and link */}
                <Link key="logo" href="/">
                    <div>
                        {/* Logo goes here */}
                    </div>
                </Link>
                <div>
                    <NavLinks />
                </div>
            </div>
        </nav>
    );
}