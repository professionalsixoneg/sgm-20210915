import React from 'react';
import { Link } from 'react-router-dom';
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import CONFIG from '../../data/config';
import Gallery from '../../models/gallery';
import useQuery from '../../utils/useQuery';
import './SOSImageGallery.css';
import NarrationOverlay from '../narration-overlay/NarrationOverlay';

const SOSImageGallery: React.FC<{ gallery: Gallery }> = ({ gallery }) => {
    const [isNarrationDone, setIsNarrationDone] = React.useState(false);
    const [isAudioReady, setIsAudioReady] = React.useState(false);
    const [isNarraionAudioPaused, setIsNarraionAudioPaused] = React.useState(true);
    const audioNarrationRef = React.useRef<HTMLAudioElement>(null);
    const query = useQuery();

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

    const getLobbyLink = () => {
        const sourceQueryParameterValue = query.get(CONFIG.sourceQueryParameterName);

        if (sourceQueryParameterValue && sourceQueryParameterValue in CONFIG.sourceQueryParameterValuesToLobbyLinks) {
            return CONFIG.sourceQueryParameterValuesToLobbyLinks[sourceQueryParameterValue];
        }
        return CONFIG.defaultLobbyLink;
    }

    const isExternal = (link: string): boolean => {
        return !link.startsWith("/");
    }

    return (
        <>
            {(() => {
                const link = getLobbyLink();
                if (isExternal(link))
                    return (
                        <a href={link}>
                            <div className="sos-gallery-button sos-back-to-lobby-button">
                                Back to Galleries
                            </div>
                        </a>
                    );
                else
                    return (
                        <Link to={link}>
                            <div className="sos-gallery-button sos-back-to-lobby-button">
                                Back to Galleries
                            </div>
                        </Link>
                    );
            })()}
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
            <div className="sos-gallery-container">
                <ReactImageGallery
                    items={gallery.images.map<ReactImageGalleryItem>(img => {
                        return {
                            original: img,
                            thumbnail: img,
                        }
                    })}
                />
            </div>
            <div style={{ display: 'none' }}>
                <audio id={`sos-narration-${gallery.id}`} onCanPlay={audioReady} src={gallery.narration_audio} autoPlay={false} ref={audioNarrationRef} />
            </div>
            {
                !isNarrationDone &&
                <NarrationOverlay
                    delay={CONFIG.narrationMarqueeAnimationDelay}
                    speed={CONFIG.narrationMarqueeAnimationSpeed}
                    loop={1}
                    onFinish={() => setIsNarrationDone(true)}
                >
                    {gallery.narration_text}
                </NarrationOverlay>
            }
        </>
    );
}

export default SOSImageGallery;