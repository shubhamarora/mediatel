/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Carousel, Col, Container, Row, Tabs, Tab } from 'react-bootstrap';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
import logo from './assets/logo.png';
// Vendor CSS Files
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';

// Template Main CSS File
import './App.css';
import { formatString } from './utils';

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

const videoItems = [
  { title: 'Title 1', subtitle: 'Subtitle 1', videoUrl: 'https://www.youtube.com/embed/video1' },
  { title: 'Title 2', subtitle: 'Subtitle 2', videoUrl: 'https://www.youtube.com/embed/video2' },
  // Add more items as needed
];

// Add this Header component above your App component or in a separate file and import it into App.js
function Header() {
  return (
    <header id='home' style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Shadow is already applied
      zIndex: 1000,
      padding: '0 10%',
      height: '70px', // Set the height to 60px
    }}>
      <div>
        {/* Logo */}
        <img src={logo} alt="Logo" style={{ height: '50px' }} />
      </div>
      <nav>
        {/* Menu Items */}
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
          <li style={{ textDecoration: 'none' }}><a href="#home" style={{ textDecoration: 'none', color: 'black' }}>Home</a></li>
          <li><a href="#about" style={{ textDecoration: 'none', color: 'black' }}>About</a></li>
          <li><a href="#services" style={{ textDecoration: 'none', color: 'black' }}>Services</a></li>
          <li><a href="#contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

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

function ClientLogos() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  const clientLogos = [
    // Add your client logo URLs here
    { id: 1, url: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/clients/client-8.png', alt: 'Client 1' },
    { id: 2, url: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/clients/client-1.png', alt: 'Client 2' },
    { id: 3, url: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/clients/client-2.png', alt: 'Client 3' },
    { id: 4, url: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/clients/client-5.png', alt: 'Client 4' },
    // Add more as needed
  ];

  return (
    <section ref={ref} id="clients" className={inView ? 'animate__animated animate__backInUp' : ''} style={{ padding: '20px 0', backgroundColor: '#f5f6f8' }}>
      <div className="container">
        {/* <h2 style={{ paddingBottom: '15px' }}>Our Clients</h2> */}
        <div style={{ display: 'flex', overflowX: 'auto', gap: '100px', padding: '10px 0', alignContent: 'center', justifyContent: 'center' }}>
          {clientLogos.map((logo) => (
            <img key={logo.id} src={logo.url} alt={logo.alt} style={{ width: '80px', objectFit: 'contain' }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#0092cb", borderRadius: '50%', right: '-10px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "#0092cb", borderRadius: '50%', left: '-10px' }}
      onClick={onClick}
    />
  );
}

function YouTubeVideoList() {
  const videos = [
    'dQw4w9WgXcQ',
    '3JZ_D3ELwOQ',
    'M7lc1UVf-VE',
    'kffacxfA7G4',
    // Add more video IDs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div style={{ margin: '80px 40px' }}>
      <Slider {...settings}>
        {videos.map((videoId, index) => (
          <div key={index} style={{ margin: '20px 0' }}>
            <iframe
              width="90%"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
}

function AboutUsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  return (
    <section ref={ref} id="about" className={inView ? 'animate__animated animate__fadeIn' : ''} style={{ flex: 1 }}>
      <Container style={{ padding: '80px 0' }}>
        <h2 className='section-title'>About Us</h2>
        <Row>
          <Col md={6} className={inView ? 'animate__animated animate__slideInLeft' : ''} style={{ alignContent: 'stretch', padding: '50px' }}>
            Young, Dynamic, Flexible but most importantly Committed & Knowledgable individuals come together as “Mediatel Communications” to offer services which adds value to your workflows.<br /><br />
            We understand Media and we help you Park, Process, Prepare, Provide, Produce, Pull back & Profit from your content. We partner with leading software firms as their distributors in the regions. Reseller enquiries are welcome!<br /><br />
            Audio, Video, Images & Documents - we help you handle them all. By assisting you with workflows, trainings, audits, processing, delivering, enriching, digitising, enhancing, curating the new & existing content.<br /><br />
            We are the content people!
          </Col>
          <Col md={6} className={inView ? 'animate__animated animate__slideInRight' : ''}>
            <img src={'https://bootstrapmade.com/demo/templates/Techie/assets/img/about.jpg'} alt="About Us" style={{ width: '100%', height: 'auto' }} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function ImageWithTabs({ image, title, tabs, dark, reverse }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  const content = (
    <Tabs defaultActiveKey={formatString(tabs[0].title)} className='mb-3' variant="pills" style={{ paddingTop: '25px', justifyContent: reverse ? 'flex-start' : 'flex-end' }}>
      {tabs.map((tab, index) => (
        <Tab key={index} eventKey={formatString(tab.title)} title={tab.title}>
          <p style={{ paddingTop: '20px', textAlign: 'left', paddingLeft: reverse ? '0px' : '20px' }}>{tab.content}</p>
        </Tab>
      ))}
    </Tabs>
  );
  const imageContent = (
    <>
      <h3 className='subsection-title'>{title}</h3>
      <img src={image} alt="Services" style={{ width: '100%', height: 'auto' }} />
    </>
  );
  return (
    <Row
      ref={ref}
      style={{ backgroundColor: dark ? '#f5f6f8' : 'white', borderRadius: '15px', padding: '80px', marginBottom: '85px' }}
      className={inView ? 'animate__animated animate__fadeIn' : ''}
    >
      <Col md={6} className={inView ? 'animate__animated animate__slideInLeft' : ''}>
        {reverse ? content : imageContent}
      </Col>
      <Col md={6} className={inView ? 'animate__animated animate__slideInRight' : ''} >
        {reverse ? imageContent : content}
      </Col>
    </Row>
  )
}

function ImageWithText({ image, title, text, dark, reverse }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  const content = (
    <>
      <h3 className='subsection-title'>{title}</h3>
      <p style={{ paddingTop: '20px', textAlign: 'left', paddingLeft: reverse ? '0px' : '20px' }}>{text}</p>
    </>
  );
  const imageContent = (
    <img src={image} alt="Services" style={{ width: '100%', height: 'auto' }} />
  );
  return (
    <Row
      ref={ref}
      style={{ backgroundColor: dark ? '#f5f6f8' : 'white', borderRadius: '15px', padding: '80px', marginBottom: '85px' }}
      className={inView ? 'animate__animated animate__fadeIn' : ''}
    >
      <Col md={6} className={inView ? 'animate__animated animate__slideInLeft' : ''}>
        {reverse ? content : imageContent}
      </Col>
      <Col md={6} className={inView ? 'animate__animated animate__slideInRight' : ''} >
        {reverse ? imageContent : content}
      </Col>
    </Row>
  )
}

function ServicesSection() {
  return (
    <section id='services'>
      <Container style={{ padding: '80px 0' }}>
        <h2 className='section-title'>Services</h2>
        <ImageWithTabs
          image='https://bootstrapmade.com/demo/templates/Techie/assets/img/services.jpg'
          title='Software Integration'
          tabs={[
            { title: 'Home', content: 'Home content' },
            { title: 'Profile', content: 'Profile content' },
            { title: 'Contact', content: 'Contact content' },
          ]}
          dark={false}
          reverse={0}
        />
        <ImageWithTabs
          image='https://bootstrapmade.com/demo/templates/Techie/assets/img/services.jpg'
          title='Workflow Automation'
          tabs={[
            { title: 'Home', content: 'Home content' },
            { title: 'Profile', content: 'Profile content' },
            { title: 'Contact', content: 'Contact content' },
          ]}
          dark={true}
          reverse={1} />
        <ImageWithText
          image='https://bootstrapmade.com/demo/templates/Techie/assets/img/services.jpg'
          title='Consulting'
          text='Consulting content'
          dark={false}
          reverse={0} />
      </Container>
    </section >
  );
}

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <ImageCarousel />
      <ClientLogos />
      <YouTubeVideoList />
      <AboutUsSection />
      <ServicesSection />
    </div>
  );
}

export default App;