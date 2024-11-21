import React from 'react';

const footerStyles = {
  footer: {
    backgroundColor: 'var(--navbar-background-color)',
    color: 'var(--text-color)',
    padding: '20px 0',
    textAlign: 'center',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  footerSection: {
    flex: 1,
    margin: '10px',
    minWidth: '200px',
    transition: 'transform 0.3s ease-in-out',
  },
  footerSectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  footerSectionText: {
    fontSize: '1rem',
    margin: '5px 0',
  },
  footerSectionList: {
    listStyle: 'none',
    padding: 0,
  },
  footerSectionListItem: {
    fontSize: '1rem',
    margin: '5px 0',
  },
  footerSectionLink: {
    color: 'var(--text-color)',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  footerSectionLinkHover: {
    color: 'var(--button-background-color)',
  },
  footerBottom: {
    marginTop: '20px',
    fontSize: '0.9rem',
    animation: 'fadeIn 2s ease-in-out',
  },
};

const Footer = () => {
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.footerContent}>
        <div style={footerStyles.footerSection}>
          <h2 style={footerStyles.footerSectionTitle}>About Us</h2>
          <p style={footerStyles.footerSectionText}>
            We are an e-learning platform dedicated to providing high-quality education to students all over the world.
          </p>
        </div>
        <div style={footerStyles.footerSection}>
          <h2 style={footerStyles.footerSectionTitle}>Quick Links</h2>
          <ul style={footerStyles.footerSectionList}>
            <li style={footerStyles.footerSectionListItem}>
              <a href="/courses" style={footerStyles.footerSectionLink}>Courses</a>
            </li>
            <li style={footerStyles.footerSectionListItem}>
              <a href="/about" style={footerStyles.footerSectionLink}>About</a>
            </li>
            <li style={footerStyles.footerSectionListItem}>
              <a href="/contact" style={footerStyles.footerSectionLink}>Contact</a>
            </li>
            <li style={footerStyles.footerSectionListItem}>
              <a href="/faq" style={footerStyles.footerSectionLink}>FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <div style={footerStyles.footerBottom}>
        &copy; {new Date().getFullYear()} Saras E-Learning. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;