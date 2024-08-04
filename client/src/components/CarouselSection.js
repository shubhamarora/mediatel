import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselSection = () => {
  const carouselItems = [
    { image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Title 1', subtitle: 'Subtitle 1' },
    { image: 'https://images.unsplash.com/photo-1494625927555-6ec4433b1571?q=80&w=3548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Title 2', subtitle: 'Subtitle 2' },
    // Add more items as needed
  ];

  return (
    <div style={{ height: '100vh' }}>
      <Carousel style={{ height: '100%' }}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={item.image} alt={`Slide ${index}`} />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;
