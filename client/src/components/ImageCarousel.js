import React from "react";
import { Carousel } from "react-bootstrap";

const carouselItems = [
  {
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    logos: ['https://via.placeholder.com/100', 'https://via.placeholder.com/100']
  },
  {
    image: 'https://images.unsplash.com/photo-1494625927555-6ec4433b1571?q=80&w=3548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    logos: ['https://via.placeholder.com/100', 'https://via.placeholder.com/100']
  },
  // Add more items as needed
];

function ImageCarousel() {
  return (
    <section style={{ height: '80vh', overflow: 'hidden' }}> {/* Adjusted height to 80vh */}
      <Carousel style={{ height: '100%' }} interval={5000} wrap={true} indicators={false}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index} style={{ height: '100%' }}> {/* This ensures each item also takes full height */}
            <img className="d-block w-100" src={item.image} alt={`Slide ${index}`} style={{ height: '80vh', objectFit: 'cover' }} /> {/* Adjusted height and added objectFit */}
            {/* <Carousel.Caption style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0, 0, 0, 0.5)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '45px' }}>
                {item.logos.map((logo, logoIndex) => (
                  <img key={logoIndex} src={logo} alt={`Logo ${logoIndex}`} style={{ maxHeight: '100px', maxWidth: '100%' }} />
                ))}
              </div>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default ImageCarousel;