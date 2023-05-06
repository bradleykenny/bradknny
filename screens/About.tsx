import MapCard from "@/components/MapCard";
import SectionHeader from "@/components/SectionHeader";

import { about } from "@/config/about";

const About = () => {
    return (
        <div className="flex h-screen flex-col" id="about">
            <SectionHeader title="About" />
            <div className="mt-12 grid h-screen grid-cols-1 grid-rows-2 gap-6 p-10 md:grid-cols-2 lg:grid-cols-3">
                <MapCard />
            </div>
        </div>
    );
};

export default About;
