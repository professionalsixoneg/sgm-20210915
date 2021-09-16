import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from '../../models/gallery';
import SOSGalleriesListing from '../sos-galleries-grid/SOSGalleriesListing';
import SOSImageGallery from '../sos-image-gallery/SOSImageGallery';
import './SOSGalleryRouter.css';

const SOSGalleryRouter: React.FC<{ galleries: Gallery[] }> = ({ galleries }) => {
    return (
        <Router>
            <Switch>
                {galleries.map(gallery => (
                    <Route path={`/${gallery.path}`}>
                        <SOSImageGallery gallery={gallery} />
                    </Route>
                ))}
                <Route path="/">
                    <SOSGalleriesListing galleries={galleries} />
                </Route>
            </Switch>
        </Router>
    );
}

export default SOSGalleryRouter;