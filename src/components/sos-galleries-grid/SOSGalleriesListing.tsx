import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from '../../models/gallery';
import './SOSGalleriesListing.css';

const SOSGalleriesListing: React.FC<{ galleries: Gallery[] }> = ({ galleries }) => {
    return (
        <ul>
            {galleries.map(gallery => (
                <Link to={`/${gallery.path}`}>
                    <li><h1>{gallery.title}</h1></li>
                </Link>
            ))}
        </ul>
    );
}

export default SOSGalleriesListing;