import React from 'react';
import SOSGalleryRouter from './components/sos-gallery-router/SOSGalleryRouter';
import GALLERIES from './data/galleries';
import './App.css';

function App() {
  return <SOSGalleryRouter galleries={GALLERIES} />;
}

export default App;
