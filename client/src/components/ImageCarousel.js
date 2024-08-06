import React from "react";
import { Carousel } from "react-bootstrap";
import { getURL } from "../api";

function ImageCarousel({ data }) {
  return (
    <section style={{ height: '80vh', overflow: 'hidden' }}> {/* Adjusted height to 80vh */}
      <Carousel style={{ height: '100%' }} interval={5000} wrap={true} indicators={false}>
        {data.images.data.map((item, index) => (
          <Carousel.Item key={item.attributes.hash} style={{ height: '100%' }}> {/* This ensures each item also takes full height */}
            <img
              className="d-block w-100"
              src={`${getURL()}${item.attributes.url}`}
              alt={item.attributes.alternativeText}
              style={{ height: '80vh', objectFit: 'cover' }} /> {/* Adjusted height and added objectFit */}
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