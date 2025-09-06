import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ background: 'var(--footer-bg)', color: 'var(--footer-text)', paddingTop: '2rem', borderTop: '4px solid var(--footer-accent)', marginTop: 'auto' }}>
      <Container>
        <Row className="mb-3">
          <Col md={4} className="mb-3">
            <h5 style={{ color: 'var(--footer-accent)', fontWeight: 700 }}>Furry Friends</h5>
            <p style={{ color: 'var(--footer-text)' }}>
              Connecting paws with homes. Adopt love, share joy.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h6 style={{ fontWeight: 600 }}>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/my-pets" className="footer-link">My Pets</Link></li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h6 style={{ fontWeight: 600 }}>Contact Us</h6>
            <p className="mb-1" style={{ color: 'var(--footer-text)' }}>Email: support@Furry Friends.com</p>
            <p className="mb-1" style={{ color: 'var(--footer-text)' }}>Phone: +91 8766491081</p>
            <p style={{ color: 'var(--footer-text)' }}>Location: Mumbai, India</p>
          </Col>
        </Row>

        <Row className="pt-3 border-top">
          <Col className="text-center small" style={{ color: 'var(--footer-text)' }}>
            © {new Date().getFullYear()} Furry Friends. All rights reserved.
          </Col>
        </Row>
      </Container>
      <style>{`
        .footer-link {
          color: var(--footer-text);
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: var(--footer-accent);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
