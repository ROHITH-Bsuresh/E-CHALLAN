import React from 'react';
import '../styles/About.css';
import companyLogo from '../assets/e-challan.jpg'; // Make sure to add your image in the assets folder

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <img src={companyLogo} alt="Company Logo" className="about-image" />
        <p>
          Welcome to our Challan System. We are dedicated to providing a seamless and efficient way for
          managing parking challans. Our system is designed with the user in mind, ensuring that you can
          generate and manage challans with ease.
        </p>
        <p>
          Our team is committed to enhancing your experience by offering a reliable and user-friendly
          platform. If you have any questions or need assistance, feel free to reach out to us.
        </p>
      </div>
      
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p><strong>Mobile Number:</strong> +91 123 456 7890</p>
        <p><strong>Landline Number:</strong> +91 123 456 7891</p>
        <div className="social-media">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
