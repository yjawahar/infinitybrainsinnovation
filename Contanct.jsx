import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contact">
    <h1 className="h-primary center">Contact Us</h1>
    <div id="contact-box">
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" name="phone" id="phone" placeholder="Enter your phone" />
        </div>
</form>
</div>
</section>
)