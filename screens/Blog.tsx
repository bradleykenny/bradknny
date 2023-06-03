import { cn } from "@/services";
import { faArrowRight, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SectionHeader from "@/components/SectionHeader";

function Blog() {
    return (
        <div className="relative flex h-screen flex-col" id="blog">
            <SectionHeader title="Blog" />
            <div
                className={cn(
                    "relative mb-10 flex flex-1 flex-col gap-4 overflow-hidden border-b-2 border-gray-400/50 p-4"
                )}
            >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                    <div
                        className="group flex w-full cursor-pointer justify-between rounded-xl bg-gradient-to-br from-gray-600/50 to-gray-800/80 px-6 py-4 hover:from-gray-500/50 hover:to-gray-700/80"
                        key={item}
                    >
                        <div>
                            <h1 className="mb-2 text-lg font-bold text-slate-50">
                                Some post explaining some tech concept in a way
                                by me
                            </h1>
                            <p className="text-sm text-slate-300">
                                6th May, 2023
                            </p>
                        </div>
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="h-16 w-16 self-center transition-all group-hover:translate-x-2"
                        />
                    </div>
                ))}
                <div className="absolute flex h-full w-full items-center justify-center rounded-2xl backdrop-blur-sm bg-gray-500/20 -m-4 rounded-b-none">
                    <FontAwesomeIcon
                        icon={faLock}
                        size="xl"
                    />
                    <h2 className={"font-semibold text-2xl ml-4"}>Coming soon</h2>
                </div>
            </div>
        </div>
    );
}

export default Blog;
