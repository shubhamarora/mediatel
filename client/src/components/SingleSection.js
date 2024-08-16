import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { getURL } from "../api";
import RichTextRenderer from "./RichTextRenderer";


function SingleSection({ data }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  return (
    <section
      ref={ref}
      id={data?.sectionId}
      className={inView ? 'animate__animated animate__fadeIn' : ''}
      style={{ flex: 1 }}>
      <Container style={{ padding: '80px 0' }}>
        <h2 className='section-title'>{data?.title}</h2>
        <Row>
          <Col md={6} className={inView ? 'animate__animated animate__slideInLeft' : ''} style={{ textAlign: 'left', padding: '50px' }}>
            <RichTextRenderer blocks={data?.descriptio} />
          </Col>
          <Col md={6} className={inView ? 'animate__animated animate__slideInRight' : ''}>
            <img
              src={`${getURL()}${data?.image?.data?.attributes?.url}`}
              alt={data?.image?.data?.attributes?.alternativeText} style={{ width: '100%', height: 'auto' }} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SingleSection;