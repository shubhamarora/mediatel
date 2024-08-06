import React from "react";
import { useInView } from "react-intersection-observer";
import { getURL } from "../api";

function LogosList({ data }) {

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <section ref={ref} id="clients" className={inView ? 'animate__animated animate__backInUp' : ''} style={{ padding: '20px 0', backgroundColor: '#f5f6f8' }}>
      <div className="container">
        <div style={{ display: 'flex', overflowX: 'auto', gap: '100px', padding: '10px 0', alignContent: 'center', justifyContent: 'center' }}>
          {data.images.data.map((logo) => (
            <img
              key={logo.attributes.hash}
              src={`${getURL()}${logo.attributes.url}`}
              alt={logo.attributes.alternativeText}
              style={{ width: '80px', objectFit: 'contain' }} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogosList;