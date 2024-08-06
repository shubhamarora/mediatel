/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

// Vendor CSS Files
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';

// Template Main CSS File
import './App.css';
import getPageContent from './api';
import MultiSection from './components/MultiSection';
import SingleSection from './components/SingleSection';
import YouTubeVideoList from './components/YoutubeVideoList';
import Header from './components/Header';
import LogosList from './components/LogosList';
import ImageCarousel from './components/ImageCarousel';

function App() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // Add your custom JavaScript here
    getPageContent().then((data) => {
      setSections(data.data.attributes.sections);
    });
  }, []);

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      {sections.map((section, index) => {
        switch (section.__component) {
          case 'main.menu-items':
            return <Header key={index} data={section} />;
          case 'main.image-carousel':
            return <ImageCarousel key={index} data={section} />;
          case 'main.logo-list':
            return <LogosList key={index} data={section} />;
          case 'main.video-list':
            return <YouTubeVideoList key={index} data={section} />;
          case 'main.single-section':
            return <SingleSection key={index} data={section} />;
          case 'main.multi-section':
            return <MultiSection key={index} data={section} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

export default App;