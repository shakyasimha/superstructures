"use client";

// import Link from "next/link";
import { montserrat } from "@/app/ui/fonts";

export default function Page() {
    return(
        <>
            <p className={`${montserrat.className}`}> This is a footer </p>
        </>
    )
}