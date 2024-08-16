import React from "react";
import { Container, Col, Row } from 'react-bootstrap';

export const Contact = () => {
  return (
    <section id='contact'>
      <Container style={{ padding: '80px 0' }}>
        <h2 className='section-title'>Contact</h2>
        <Row style={{ padding: '80px 0' }}>
          <Col md={5} style={{ textAlign: 'left' }}>
            <div className='info-wrap'>
              <div className="info-item">
                <i className="bi bi-geo-alt"></i>
                <div>
                  <h6 style={{ fontWeight: 800 }}>Location:</h6>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
              <div className="info-item">
                <i className="bi bi-envelope"></i>
                <div>
                  <h6 style={{ fontWeight: 800 }}>Email:</h6>
                  <p>abc@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <i className="bi bi-phone"></i>
                <div>
                  <h6 style={{ fontWeight: 800 }}>Call:</h6>
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className='info-wrap'>
              <h5 style={{ textTransform: 'uppercase', paddingBottom: '10px' }}>Locate us</h5>
              <iframe
                title="locate us map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.686123496625!2d-73.9878536845975!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598c3e2bfe9b%3A0x1b3e1f9f6f3e1f8e!2sEmpire%20State%20Building!5e0!3m2!1sen!2sin!4v1627995261600!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
};