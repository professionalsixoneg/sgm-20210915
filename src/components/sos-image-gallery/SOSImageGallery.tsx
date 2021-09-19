import React from 'react';
import { Link } from 'react-router-dom';
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import CONFIG from '../../data/config';
import Gallery from '../../models/gallery';
import useQuery from '../../utils/useQuery';
import './SOSImageGallery.css';
import SOSAudioNarration from '../sos-audio-narration/SOSAudioNarration';

const SOSImageGallery: React.FC<{ gallery: Gallery }> = ({ gallery }) => {
    const query = useQuery();

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
            <SOSAudioNarration id={gallery.id} narration_audio={gallery.narration_audio} narration_text={gallery.narration_text} />
        </>
    );
}

export default SOSImageGallery;