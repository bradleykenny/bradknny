/* eslint-disable @next/next/no-img-element */
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "@/components/Card";

import { images } from "@/config/scrolling-pictures-card";

const ScrollingPictureCard = () => {
    return (
        <Card>
            <div className="group relative h-full w-full bg-gradient-to-br from-slate-500/50 to-slate-500/20 p-4 shadow-xl">
                <div className="relative mt-6 flex">
                    <div className="flex min-w-full flex-shrink-0 animate-scroll-infinite items-center justify-around">
                        {images.map((image) => (
                            <div key={image.title} className="relative">
                                <img
                                    src={image.link}
                                    alt=""
                                    className="mr-24 h-48 rounded-2xl opacity-70 drop-shadow-xl saturate-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:saturate-100"
                                />
                                <div className="absolute -left-4 bottom-6 rounded bg-slate-300 px-2 py-1 opacity-0 shadow transition-all duration-500 ease-in-out group-hover:opacity-100">
                                    <p className="text-slate-800">
                                        {image.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className="flex min-w-full flex-shrink-0 animate-scroll-infinite items-center justify-around"
                        aria-hidden="true"
                    >
                        {images.map((image) => (
                            <div key={image.title} className="relative">
                                <img
                                    src={image.link}
                                    alt=""
                                    className="mr-24 h-48 rounded-2xl opacity-70 drop-shadow-xl saturate-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:saturate-100"
                                />
                                <div className="absolute -left-4 bottom-6 rounded bg-slate-300 px-2 py-1 opacity-0 shadow transition-all duration-500 ease-in-out group-hover:opacity-100">
                                    <p className="text-slate-800">
                                        {image.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <h1 className="text-md absolute bottom-4 left-4 cursor-default rounded-full bg-gradient-to-br from-green-500 to-green-700 px-4 py-2">
                    <FontAwesomeIcon icon={faCode} className="mr-2" />
                    Technologies
                </h1>
            </div>
        </Card>
    );
};

export default ScrollingPictureCard;
