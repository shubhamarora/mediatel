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
                  <p>NRI Greens, Vrindavan, U.P 281121, India</p>
                </div>
              </div>
              <div className="info-item">
                <i className="bi bi-envelope"></i>
                <div>
                  <h6 style={{ fontWeight: 800 }}>Email:</h6>
                  <p>sales@mediatelcommunication.com</p>
                </div>
              </div>
              <div className="info-item">
                <i className="bi bi-linkedin"></i>
                <div>
                  <h6 style={{ fontWeight: 800 }}>LinkedIn:</h6>
                  <a href="https://linkedin.com/company/contentification" style={{ color: "black" }} target="_blank" rel="noreferrer" >@Contentification</a>
                </div>
              </div>
              <div className="info-item">
                <i className="bi bi-youtube"></i>
                <div>
                  <h6 style={{ fontWeight: 800 }}>YouTube:</h6>
                  <a href="https://www.youtube.com/@contentification" style={{ color: "black" }} target="_blank" rel="noreferrer">YT@Contentification</a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className='info-wrap'>
              <h5 style={{ textTransform: 'uppercase', paddingBottom: '10px' }}>Locate us</h5>
              <iframe
                title="locate us map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14146.217802754454!2d77.6711404!3d27.576335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736e173716d0e3%3A0x9b49094602cf89c6!2sSHRI%20RADHA%20NRI%20GREENS!5e0!3m2!1sen!2sin!4v1724207370813!5m2!1sen!2sin"
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