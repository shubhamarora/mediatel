import React from "react";
import { useInView } from "react-intersection-observer";

function LogosList() {
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

export default LogosList;