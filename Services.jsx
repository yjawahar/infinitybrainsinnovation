import React from 'react';
import './Services.css';

const services = [
  { id: 1, title: 'Food Catering', img: 'img/1.png', description: 'Lorem ipsum...' },
  { id: 2, title: 'Bulk Ordering', img: 'img/2.png', description: 'Lorem ipsum...' },
  { id: 3, title: 'Food Ordering', img: 'img/3.png', description: 'Lorem ipsum...' }
];

const Services = () => (
  <section id="services-container">
    <h1 className="h-primary center">Our Services</h1>
    <div id="services">
      {services.map(service => (
        <div className="box" key={service.id}>
          <img src={service.img} alt={service.title} />
          <h2 className="h-secondary center">{service.title}</h2>
          <p className="center">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
