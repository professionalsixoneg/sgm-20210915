import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Gallery from '../../models/gallery';
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
                    <ul>
                        {galleries.map(gallery => (
                            <Link to={`/${gallery.path}`}>
                                <li><h1>{gallery.title}</h1></li>
                            </Link>
                        ))}
                    </ul>
                </Route>
            </Switch>
        </Router>
    );
}

export default SOSGalleryRouter;