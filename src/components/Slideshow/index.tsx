"use client";

import Image from "next/image";
import { useState } from "react";

export default function Slideshow() {
    const [nextImage, setNextImage] = useState(0);

    return (
        <div className="flex flex-grow">
            <Image />
        </div>
    )
}