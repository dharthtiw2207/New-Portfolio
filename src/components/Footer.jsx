import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>
      Designed &amp; Built by{' '}
      <span className="footer-name">Siddhartha Tiwari</span>
      {' '}· {new Date().getFullYear()} · All rights reserved.
    </p>
    <p className="footer-sub">Made with ❤️ using React.js</p>
  </footer>
);

export default Footer;
