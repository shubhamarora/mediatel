import React from "react";
import { useInView } from "react-intersection-observer";
import { formatString } from "../utils";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";


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

function MultiSection() {
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

export default MultiSection;