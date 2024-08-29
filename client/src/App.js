/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap'

// Vendor CSS Files
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Template Main CSS File
import './App.css';
import getPageContent from './api';
import MultiSection from './components/MultiSection';
import SingleSection from './components/SingleSection';
import YouTubeVideoList from './components/YoutubeVideoList';
import Header from './components/Header';
import LogosList from './components/LogosList';
import ImageCarousel from './components/ImageCarousel';
import { Contact } from './components/contact';

function App() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add your custom JavaScript here
    getPageContent().then((data) => {
      setSections(data.data.attributes.sections);
    }).finally(() => { setLoading(false) });
  }, []);

  if (loading) {
    return <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Spinner animation="grow" />
    </div>
  }

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
      <Contact />
      <footer style={{ backgroundColor: '#f5f6f8', padding: '20px 0', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} Mediatel Communications Pvt. Ltd. All rights reserved.</p>
      </footer>
    </div >
  );
}

export default App;