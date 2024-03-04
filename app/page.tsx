import Hero from "@/component/shared/Hero";
import HomePageHero from "@/component/shared/HomePageHero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="sm:pl-64 md:pl-40">
        <div className="flex gap-5 px-16">
          <Image alt="logo" width={42} height={42} src="/logoimage.png" />
          <h1 className="text-center text-2xl font-bold"> Bhagavad Gita </h1>
        </div>
        
        <HomePageHero />
        <Hero />
      </div>
    </main>
  );
}
