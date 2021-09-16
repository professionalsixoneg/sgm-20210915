import React from 'react';
import './App.css';
import SOSImageGallery from './components/sos-image-gallery/SOSImageGallery';
import GALLERIES from './data/galleries';

function App() {
  return (
    <div>
      <SOSImageGallery gallery={GALLERIES[1]} />
    </div>
  );
}

export default App;
