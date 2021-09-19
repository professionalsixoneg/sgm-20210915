import React from "react";
import Marquee from "../marquee/Marquee";

import "./NarrationOverlay.css";

interface NarrationOverlayProps {
    style?: React.CSSProperties;
    className?: string;
    id?: string;
    play?: boolean;
    pauseOnHover?: boolean;
    pauseOnClick?: boolean;
    direction?: "left" | "right";
    speed?: number;
    delay?: number;
    loop?: number;
    onInit?: () => void;
    onFinish?: () => void;
    children?: React.ReactNode;
}

const NarrationOverlay: React.FC<NarrationOverlayProps> = ({
    style = {},
    className = "",
    id = "",
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
}: NarrationOverlayProps) => {
    return (
        <div style={style}
            id={id}
            className={className + " narration-overlay"}>
            <Marquee
                play={play}
                pauseOnHover={pauseOnHover}
                pauseOnClick={pauseOnClick}
                direction={direction}
                speed={speed}
                delay={delay}
                loop={loop}
                onInit={onInit}
                onFinish={onFinish}>
                {children}
            </Marquee>
        </div>
    );
}

export default NarrationOverlay;