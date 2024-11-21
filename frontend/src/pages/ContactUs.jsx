import React from "react";

export default function ContactUs() {
  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textAlign: "center",
  };

  const subtitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
  };

  const contactInfoStyle = {
    marginBottom: "2rem",
  };

  const infoStyle = {
    marginTop: "0.5rem",
  };

  const mapContainerStyle = {
    marginBottom: "2rem",
  };

  const mapStyle = {
    width: "100%",
    height: "450px",
    border: 0,
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Contact Us</h1>
      <div style={contactInfoStyle}>
        <h2 style={subtitleStyle}>Our Contact Information</h2>
        <p style={infoStyle}>
          <strong>Email:</strong> contact@organization.com
        </p>
        <p style={infoStyle}>
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p style={infoStyle}>
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
      </div>
      <div style={mapContainerStyle}>
        <h2 style={subtitleStyle}>Our Location</h2>
        <div style={mapStyle}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14877.18396367203!2d81.3651828!3d21.2201082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2923ef5eda8379%3A0x1bb2e1c69797f845!2sSaras%20Vidhyalaya%20english%20hindi%20medium!5e0!3m2!1sen!2sin!4v1732211636202!5m2!1sen!2sin" 
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}