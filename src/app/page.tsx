// import Image from "next/image";
import Slideshow from "@/components/Slideshow";

export default function Home() {
  // const name: string = "Superstructures";

  return (
    <div className="w-full h-full flex flex-col flex-grow">
        <Slideshow />
        
        <div className="flex flex-col items-center m-auto">
          Superstructures Inc
        </div>
    </div>
  );
}
