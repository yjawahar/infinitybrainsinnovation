import React from 'react';
import './Clients.css';

const clients = [
  'img/logo1.png', 'img/logo2.png', 'img/logo4.png', 'img/logo3.png'
];

const Clients = () => (
  <section id="client-section">
    <h1 className="h-primary center">Our Clients</h1>
    <div id="clients">
      {clients.map((client, index) => (
        <div className="client-item" key={index}>
          <img src={client} alt="Our Client" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
