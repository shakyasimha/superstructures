"use client";

// import Link from "next/link";
import { montserrat } from "@/app/ui/fonts";

export default function Page() {
    return(
        <footer className={`${montserrat.className} bg-[#22405c] text-[#fff] py-6`}>
            <div className="flex flex-row">
                {/* Company info */}
                <div className="flex flex-col justify-between px-4 py-4 ">
                    <div className="text-xl">Superstructures, Pvt. Ltd.</div>
                </div>
            </div>
        </footer>
    )
}