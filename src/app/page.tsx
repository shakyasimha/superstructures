// import Image from "next/image";
import Slideshow from "@/components/Slideshow";

export default function Home() {
  // const name: string = "Superstructures";

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        Superstructures Homepage

        <Slideshow />
    </div>
  );
}
