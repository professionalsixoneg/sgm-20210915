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
    const audioNarrationRef = React.useRef<HTMLAudioElement>(null);
    const audioNarrationButtonRef = React.useRef<HTMLDivElement>(null);
    const query = useQuery();

    const startNarration = () => {
        audioNarrationRef.current?.play();
        if (audioNarrationButtonRef.current) {
            audioNarrationButtonRef.current.style.display = 'none';
        }
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
            <div ref={audioNarrationButtonRef} onClick={startNarration} className="sos-gallery-button sos-audio-narration-button">
                Audio Narration
            </div>
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
                <audio id={`sos-narration-${gallery.id}`} src={gallery.narration_audio} autoPlay={false} ref={audioNarrationRef} />
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