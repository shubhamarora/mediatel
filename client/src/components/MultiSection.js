import React from "react";
import { useInView } from "react-intersection-observer";
import { formatString } from "../utils";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { getURL } from "../api";
import RichTextRenderer from "./RichTextRenderer";


function ImageWithTabs({ image, title, tabs, dark, reverse, sectionId }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  const content = (
    <Tabs defaultActiveKey={formatString(tabs[0].title)} className='mb-3' variant="pills" style={{ paddingTop: '25px', justifyContent: reverse ? 'flex-start' : 'flex-end' }}>
      {tabs.map((tab, index) => (
        <Tab key={index} eventKey={formatString(tab.title)} title={tab.title}>
          <div style={{ paddingTop: '20px', textAlign: 'left', paddingLeft: reverse ? '0px' : '20px' }}>
            <RichTextRenderer blocks={tab.descriptio} />
          </div>
        </Tab>
      ))}
    </Tabs>
  );
  const imageContent = (
    <>
      <h3 className='subsection-title'>{title}</h3>
      <img src={image} alt="Services" className="section-image" />
    </>
  );
  return (
    <Row
      id={sectionId}
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

function ImageWithText({ image, title, description, dark, reverse, sectionId }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  const content = (
    <>
      <h3 className='subsection-title'>{title}</h3>
      <div style={{ paddingTop: '20px', textAlign: 'left', paddingLeft: reverse ? '0px' : '20px' }}>
        <RichTextRenderer blocks={description} />
      </div>
    </>
  );
  const imageContent = (
    <img src={image} alt="Services" className="section-image" />
  );
  return (
    <Row
      id={sectionId}
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

function MultiSection({ data }) {
  return (
    <section id={data.sectionId}>
      <Container style={{ padding: '80px 0' }}>
        <h2 className='section-title'>{data.title}</h2>
        {data?.items?.map((item, index) => {
          if (item.tabs && Array.isArray(item.tabs) && item.tabs.length > 0) {
            return (
              <ImageWithTabs
                key={index}
                sectionId={item.sectionId}
                image={`${getURL()}${item?.image?.data?.attributes?.url}`}
                title={item.title}
                tabs={item.tabs}
                dark={index % 2}
                reverse={index % 2}
              />
            )
          } else {
            return (
              <ImageWithText
                key={index}
                sectionId={item.sectionId}
                image={`${getURL()}${item?.image?.data?.attributes?.url}`}
                title={item.title}
                description={item.descriptio}
                dark={index % 2}
                reverse={index % 2}
              />
            )
          }
        })}
      </Container>
    </section >
  );
}

export default MultiSection;