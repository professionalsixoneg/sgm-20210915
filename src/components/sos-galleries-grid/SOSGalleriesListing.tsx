import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from '../../models/gallery';
import './SOSGalleriesListing.css';

const SOSGalleriesListing: React.FC<{ galleries: Gallery[] }> = ({ galleries }) => {
    return (
        <Container className="sos-galleries-listing-container">
            <Row>
                {galleries.map(gallery => (
                    <Col xs="12" md="6" lg="4">
                        <div className="sos-gallery-tile-container">
                            <Link to={`/${gallery.path}`} className="sos-gallery-tile-link">
                                <div className="sos-gallery-tile-banner">
                                    <img src={gallery.banner} alt={gallery.title} />
                                </div>
                            </Link>
                            <Link to={`/${gallery.path}`} className="sos-gallery-tile-link">
                                <span className={gallery.babylon ? "sos-gallery-tile-photo-button" : "sos-gallery-tile-photo-button-only"}>
                                    Photo Gallery
                                </span>
                            </Link>
                            {
                                gallery.babylon &&
                                <a href={gallery.babylon} className="sos-gallery-tile-link">
                                    <span className="sos-gallery-tile-3d-button">
                                        Explore 3d
                                    </span>
                                </a>
                            }
                        </div>
                    </Col>
                ))}
            </Row>
        </Container >
    );
}

export default SOSGalleriesListing;