import Card from "@/components/Card";
import MapCard from "@/components/MapCard";
import { about } from "@/config/about";
import { Caveat } from "next/font/google";
import { cn } from "@/services";

const caveat = Caveat({ weight: "400", subsets: ["latin"] });

const About = () => {
  return (
    <div className="flex h-screen flex-col">
      <h1 className={cn("ml-6 py-8 text-6xl underline", caveat.className)}>
        about
      </h1>
      <div className="mt-12 grid h-screen grid-cols-1 grid-rows-2 gap-6 p-10 md:grid-cols-2 lg:grid-cols-3">
        <MapCard />
      </div>
    </div>
  );
};

export default About;
