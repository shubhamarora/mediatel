import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";


function SingleSection() {
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

export default SingleSection;