import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px 0' }}>
      
      <p style={{ margin: '10px 0', fontSize: '0.8em' }}>© {new Date().getFullYear()} PersonaNet. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
