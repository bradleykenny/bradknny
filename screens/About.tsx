import Card from "@/components/Card";
import MapCard from "@/components/MapCard";
import SectionHeader from "@/components/SectionHeader";

import { about } from "@/config/about";

const About = () => {
    return (
        <div className="flex min-h-screen flex-col lg:h-screen" id="about">
            <SectionHeader title="About" />
            <div className="grid flex-1 grid-cols-1 grid-rows-2 gap-6 pb-10 md:grid-cols-2 lg:grid-cols-3">
                <div className="col-span-2">
                    <Card>
                        <div className="h-full w-full bg-gradient-to-br from-slate-500/50 to-slate-500/20 p-4 shadow-xl">
                            <p className="bg-transparent">
                                Some text here explaining who I am and some
                                other words and stuff
                            </p>
                        </div>
                    </Card>
                </div>
                <MapCard />
                <Card>
                    <div></div>
                </Card>
                <div className="col-span-2">
                <Card>
                    <div></div>
                </Card>
                </div>
            </div>
        </div>
    );
};

export default About;
