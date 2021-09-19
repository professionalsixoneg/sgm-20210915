import React, { useEffect, useState, useRef } from "react";
import "./Marquee.css";

interface MarqueeProps {
    play?: boolean;
    pauseOnHover?: boolean;
    pauseOnClick?: boolean;
    direction?: "left" | "right";
    speed?: number; // calculated as pixels/second
    delay?: number;
    loop?: number;
    onInit?: () => void;
    onFinish?: () => void;
    children?: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({
    play = true,
    pauseOnHover = false,
    pauseOnClick = false,
    direction = "left",
    speed = 20,
    delay = 0,
    loop = 0,
    onInit = () => { },
    onFinish = () => { },
    children,
}: MarqueeProps) => {
    const [containerWidth, setContainerWidth] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const calculateWidth = () => {
        // Find width of container and width of marquee
        if (containerRef.current) {
            setContainerWidth(containerRef.current.getBoundingClientRect().width);
        }

        if (contentRef.current) {
            setContentWidth(contentRef.current.getBoundingClientRect().width);
        }

        if (duration === 0) {
            if (containerWidth > contentWidth) {
                setDuration(containerWidth / speed);
            } else {
                setDuration(contentWidth / speed);
            }
        }

        setIsMounted(true);
    };

    useEffect(() => {
        calculateWidth();
        // Rerender on window resize
        window.addEventListener("resize", calculateWidth);
        return () => {
            window.removeEventListener("resize", calculateWidth);
        };
    });

    useEffect(() => {
        if (isMounted) {
            onInit();
        }
    }, [isMounted, onInit]);

    useEffect(() => {
        // console.log(duration);
        if (duration !== 0) {
            window.setTimeout(onFinish, duration * loop * 1000);
        }
    }, [duration, loop, onFinish]);

    if (!isMounted)
        return null;
    else
        return (
            <div
                style={{
                    ["--pause-on-hover" as string]: pauseOnHover ? "paused" : "running",
                    ["--pause-on-click" as string]: pauseOnClick ? "paused" : "running",
                    ["--play" as string]: play ? "running" : "paused",
                    ["--direction" as string]:
                        direction === "left" ? "normal" : "reverse",
                    ["--duration" as string]: `${duration}s`,
                    ["--delay" as string]: `${delay}s`,
                    ["--iteration-count" as string]: !!loop ? `${loop}` : "infinite",
                    ["--container-width" as string]: `${containerWidth}px`,
                    ["--content-width" as string]: `${contentWidth}px`,
                }}
                className="marquee-container"
                ref={containerRef}
            >
                <div className="marquee-content" ref={contentRef}>
                    {children}
                </div>
            </div>
        );
};

export default Marquee;