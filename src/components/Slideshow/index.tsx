"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Slideshow() {
    const images = [
        "1008.jpg",
        "1009.jpg",
        "1010.jpg",
        "1011.jpg"
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(()=>{
        const interval = setInterval(()=>{
           setFade(false);
           
           setTimeout(()=>{
                setCurrentIndex((prev)=> (prev+1) % images.length);
                setFade(true);  // set fade in
           }, 200); // match fade-in-out duration
        }, 3000); // change every 3s

        return ()=>clearInterval(interval);
    }, []);

    return (
        <div className="flex md:my-16 md:mx-auto sm:my-4 sm:mx-4">
            <div className="flex flex-row items-center">
                <div className="transition duration-300 hover:scale-105">
                    <Image 
                        key={images[currentIndex]}
                        src={`/images/${images[currentIndex]}`}
                        width={1280}
                        height={960}
                        alt="auto slideshow"
                        className={`object-cover transition-opacity duration-200 ${fade ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>
            </div>
    
        </div>
    )
}