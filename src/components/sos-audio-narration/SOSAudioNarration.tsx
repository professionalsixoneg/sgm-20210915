import React from 'react';
import CONFIG from '../../data/config';
import './SOSAudioNarration.css';
import NarrationOverlay from '../narration-overlay/NarrationOverlay';

const SOSAudioNarration: React.FC<{ id: number, narration_audio: string, narration_text: string }> = ({ id, narration_audio, narration_text }) => {
    const [isNarrationDone, setIsNarrationDone] = React.useState(false);
    const [isAudioReady, setIsAudioReady] = React.useState(false);
    const [isNarraionAudioPaused, setIsNarraionAudioPaused] = React.useState(true);
    const audioNarrationRef = React.useRef<HTMLAudioElement>(null);

    const startNarration = () => {
        if (isNarraionAudioPaused) {
            audioNarrationRef.current?.play();
        } else {
            audioNarrationRef.current?.pause();
        }
        setIsNarraionAudioPaused(audioNarrationRef.current?.paused ?? true);
    }

    const audioReady = () => {
        setIsAudioReady(true);
    }


    return (
        <>
            {isAudioReady && isNarraionAudioPaused &&
                <div onClick={startNarration} className="sos-gallery-button sos-audio-narration-button">
                    Audio Narration
                </div>
            }
            {isAudioReady && !isNarraionAudioPaused &&
                <div onClick={startNarration} className="sos-gallery-button sos-audio-narration-button">
                    Pause Narration
                </div>
            }
            <div style={{ display: 'none' }}>
                <audio id={`sos-narration-${id}`} onCanPlay={audioReady} src={narration_audio} autoPlay={false} ref={audioNarrationRef} />
            </div>
            {
                !isNarrationDone &&
                <NarrationOverlay
                    delay={CONFIG.narrationMarqueeAnimationDelay}
                    speed={CONFIG.narrationMarqueeAnimationSpeed}
                    loop={1}
                    onFinish={() => setIsNarrationDone(true)}
                >
                    {narration_text}
                </NarrationOverlay>
            }
        </>
    );
}

export default SOSAudioNarration;