import Card from "@/components/Card";
import HoverGlowCard from "@/components/HoverGlowCard";
import MapCard from "@/components/MapCard";
import ScrollingPictureCard from "@/components/ScrollingPictureCard";
import SectionHeader from "@/components/SectionHeader";

import { about } from "@/config/about";

const About = () => {
    return (
        <div className="flex min-h-screen flex-col" id="about">
            <SectionHeader title="About" />
            <div className="grid flex-1 grid-cols-1 grid-rows-2 gap-6 pb-10 md:grid-cols-2 lg:grid-cols-3">
                <div className="col-span-2">
                    <HoverGlowCard />
                </div>
                <MapCard />
                <div className="col-span-3">
                    <ScrollingPictureCard />
                </div>
            </div>
        </div>
    );
};

export default About;
