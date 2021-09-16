import React from 'react';
import ReactImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from '../../models/gallery';
import './SOSImageGallery.css';

const SOSImageGallery: React.FC<{ gallery: Gallery }> = ({ gallery }) => {
    return (
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
    );
}

export default SOSImageGallery;