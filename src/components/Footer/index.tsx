"use client";

// import Link from "next/link";
import { montserrat } from "@/app/ui/fonts";
import Link from "next/link";

export default function Page() {
    return(
        <footer className={`${montserrat.className} bg-[#22405c] text-[#fff] py-6`}>
            <div className="flex flex-row">
                {/* Company info */}
                <div className="flex flex-col justify-between px-4 py-4 ">
                    <div className="text-2xl">Superstructures, Pvt. Ltd.</div>
                    
                    <Link 
                        key="location"
                        href="https://maps.app.goo.gl/ETaB1HxrvrUxeT4y8"
                        className="text-base hover:text-[#ddd] transition duration-200"
                    >
                        Krishna Galli, Lalitpur-11, Bagmati, Nepal
                    </Link>
                    
                    <Link
                        key="email"
                        href="mailto:superstructures@gmail.com"
                        className="text-base hover:text-[#ddd] transition duration-200"
                    > 
                        superstructures@gmail.com
                    </Link>
                </div>
            </div>
        </footer>
    )
}