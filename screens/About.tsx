import Card from "@/components/Card";
import MapCard from "@/components/MapCard";
import SectionHeader from "@/components/SectionHeader";

import { about } from "@/config/about";

const About = () => {
    return (
        <div className="flex min-h-screen lg:h-screen flex-col" id="about">
            <SectionHeader title="About" />
            <div className="grid flex-1 grid-cols-1 grid-rows-2 gap-6 pb-10 md:grid-cols-2 lg:grid-cols-3">
                {/* <MapCard /> */}
                <Card>
                    <div className="h-full w-full bg-gradient-to-br from-slate-500/50 to-slate-500/20 p-4 shadow-xl">
                        <p className="bg-transparent">
                            Some text here explaining who I am and some other
                            words and stuff
                        </p>
                    </div>
                </Card>
                <Card>
                    <div></div>
                </Card>
                <Card>
                    <div></div>
                </Card>
                <Card>
                    <div></div>
                </Card>
                <Card>
                    <div></div>
                </Card>
                <Card>
                    <div></div>
                </Card>
            </div>
        </div>
    );
};

export default About;
