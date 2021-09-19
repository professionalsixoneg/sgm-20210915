import React from 'react';
import SOSGalleryRouter from './components/sos-gallery-router/SOSGalleryRouter';
import GALLERIES from './data/galleries';
import './App.css';

function App() {
  return (
    <div id="sos-gallery-router-wrapper">
      <SOSGalleryRouter galleries={GALLERIES} />
    </div>
  );
}

export default App;
