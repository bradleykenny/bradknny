import { MouseEvent, createRef, useState } from "react";

import Card from "@/components/Card";

const HoverGlowCard = () => {
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [opacity, setOpacity] = useState(0);

    const containerRef = createRef<HTMLDivElement>();
    const hoverRef = createRef<HTMLDivElement>();

    const updatePosition = (event: MouseEvent<HTMLDivElement>) => {
        const containerBoundary = containerRef.current?.getBoundingClientRect();
        const hoverBoundary = hoverRef.current?.getBoundingClientRect();

        const containerTop = containerBoundary?.top || 0;
        const containerLeft = containerBoundary?.left || 0;
        const hoverHeight = hoverBoundary?.height || 0;
        const hoverWidth = hoverBoundary?.width || 0;

        setTop(event.clientY - (containerTop + hoverHeight / 2));
        setLeft(event.clientX - (containerLeft + hoverWidth / 2));
    };

    const handleEnter = () => {
        setOpacity(0.7);
    };

    const handleLeave = () => {
        setOpacity(0);
    };

    return (
        <Card>
            <div
                className="relative h-full w-full bg-gradient-to-br from-slate-500/50 to-slate-500/20 p-4 shadow-xl"
                ref={containerRef}
                onMouseMove={updatePosition}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            >
                <p className="bg-transparent">
                    Some text here explaining who I am and some other words and
                    stuff
                </p>
                <div
                    className="absolute left-20 top-20 h-40 w-40 bg-slate-400 blur-3xl rounded-full"
                    style={{
                        top,
                        left,
                        opacity
                    }}
                    ref={hoverRef}
                ></div>
            </div>
        </Card>
    );
};

export default HoverGlowCard;
