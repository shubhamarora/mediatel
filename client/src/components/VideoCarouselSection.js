import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoCarouselSection = () => {
  const videoItems = [
    { title: 'Title 1', subtitle: 'Subtitle 1', videoUrl: 'https://www.youtube.com/embed/video1' },
    { title: 'Title 2', subtitle: 'Subtitle 2', videoUrl: 'https://www.youtube.com/embed/video2' },
    // Add more items as needed
  ];

  return (
    <section id="video-carousel-section" style={{ background: 'linear-gradient(...)' }}>
      <Carousel>
        {videoItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
              <div style={{ flex: 1 }}>
                <iframe
                  width="560"
                  height="315"
                  src={item.videoUrl}
                  title={`Video ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default VideoCarouselSection;