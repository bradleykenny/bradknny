/* eslint-disable @next/next/no-img-element */
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createRef, useEffect, useState } from "react";

import Card from "@/components/Card";

const ScrollingPictureCard = () => {
    const images = [
        "/icons/javascript.png",
        "/icons/nodejs.png",
        "/icons/expo.png",
        "/icons/react.png",
        "/icons/typescript.png",
        "/icons/java.png",
    ];

    const containerRef = createRef<HTMLDivElement>();

    const [imageOffset, setImageOffset] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const containerBoundary =
                containerRef.current?.getBoundingClientRect();
            const containerWidth = containerBoundary?.width || 0;

            if (imageOffset > containerWidth) {
                setImageOffset(0);
            } else {
                setImageOffset((prevState) => prevState + 50);
            }
        }, 500);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [imageOffset, containerRef]);

    return (
        <Card>
            <div
                className="group relative h-full w-full bg-gradient-to-br from-slate-500/50 to-slate-500/20 p-4 shadow-xl"
                ref={containerRef}
            >
                {images.map((image, idx) => (
                    <img
                        src={image}
                        key={image}
                        alt=""
                        className="absolute right-6 top-12 w-48 rounded-2xl drop-shadow-xl saturate-0 transition-all duration-500 ease-linear group-hover:saturate-100"
                        style={{
                            left: imageOffset,
                            marginLeft: `${idx * 15}rem`,
                        }}
                    />
                ))}
                <h1 className="text-md absolute bottom-4 left-4 cursor-default rounded-full bg-gradient-to-br from-green-500 to-green-700 px-4 py-2">
                    <FontAwesomeIcon icon={faCode} className="mr-2" />
                    Technologies
                </h1>
            </div>
        </Card>
    );
};

export default ScrollingPictureCard;
