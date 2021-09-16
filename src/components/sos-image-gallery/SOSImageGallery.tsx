import React from 'react';
import { Link } from 'react-router-dom';
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from '../../models/gallery';
import './SOSImageGallery.css';

const SOSImageGallery: React.FC<{ gallery: Gallery }> = ({ gallery }) => {
    return (
        <>
            <Link to="/">
                <div className="sos-back-to-lobby-button btn btn-light">
                    Back to Lobby
                </div>
            </Link>
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
        </>
    );
}

export default SOSImageGallery;