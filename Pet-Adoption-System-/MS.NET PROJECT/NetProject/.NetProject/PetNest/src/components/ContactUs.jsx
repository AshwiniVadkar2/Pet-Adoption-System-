import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import React from "react";

const developers = [
  {
    name: "Ankita Dhumal",
    image: "src/assets/Ankita.jpeg", 
    linkedin: "https://www.linkedin.com/in/pallavi-shingote-690205214",
    email: "ankitadhumal219@gmail.com",
    phone: "+91 883-077-4830",
    
  },
  {
    name: "Ashwini Vadkar",
    image: "src/assets/Ashwini_Vadkar.jpeg",
    linkedin: "https://www.linkedin.com/in/pallavi-shingote-690205214",
    email: "ashwinivadkar@gmail.com",
    phone: "+91 969-937-9795",
   
  },
  {
    name: "Pallavi Shingote",
    image: "src/assets/Pallavi.jpeg",
    linkedin: "https://www.linkedin.com/in/pallavi-shingote-690205214",
    email: "pallavi.shingote.d@gmail.com",
    phone: "+91 766-619-5045",
   
  },
];

const cardStyle = {
  borderRadius: '1.2rem',
  backgroundColor: 'var(--card-bg)',
  color: 'var(--text)',
  border: '2px solid var(--card-border)',
  width: '260px',
  height: '410px',
  margin: '0 1.2rem',
  transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
  boxShadow: '0 4px 16px rgba(178,200,186,0.10)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
};

const cardHoverStyle = {
  transform: 'translateY(-10px) scale(1.03)',
  boxShadow: '0 8px 32px rgba(174,236,239,0.18)',
  borderColor: 'var(--accent)',
};

const descStyle = {
  fontSize: '1rem',
  minHeight: '3.2em',
  maxHeight: '4.5em',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
};

function ContactUs() {
  // For hover effect, use React state for hovered card
  const [hovered, setHovered] = React.useState(-1);

  return (
    <Container className="py-4" style={{ background: 'transparent', borderRadius: 0, marginTop: '3.5rem', maxWidth: '1100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2 className="text-center mb-5" style={{ color: 'var(--text)', fontWeight: 700 }}>Meet Our Team</h2>
      <Row className="g-4 justify-content-center align-items-center" style={{ minHeight: '40vh', marginBottom: '2rem', width: '100%' }}>
        {developers.map((dev, index) => (
          <Col key={index} xs={12} md={4} className="d-flex justify-content-center contact-card-col">
            <Card
              className="h-100 shadow-sm contact-card"
              style={hovered === index ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(-1)}
            >
              <div style={{width: '100%', aspectRatio: '1/1', overflow: 'hidden', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem'}}>
                <Card.Img
                  variant="top"
                  src={dev.image}
                  alt={dev.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem' }}  
                />
              </div>
              <Card.Body className="text-center d-flex flex-column justify-content-between">
                <div>
                  <Card.Title style={{ fontWeight: 700 }}>{dev.name}</Card.Title>
                  <Card.Subtitle className="mb-2" style={{ color: 'var(--accent)', fontWeight: 600 }}>{dev.role}</Card.Subtitle>
                  <Card.Text style={descStyle}>{dev.desc}</Card.Text>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <FaPhone style={{ color: '#43a047', marginRight: 8, fontSize: 18, verticalAlign: 'middle' }} />
                    <span style={{ color: '#43a047', fontWeight: 600 }}>{dev.phone}</span>
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <FaEnvelope style={{ color: '#f9a825', marginRight: 8, fontSize: 18, verticalAlign: 'middle' }} />
                    <a href={`mailto:${dev.email}`} className="text-decoration-none" style={{ color: '#f9a825', fontWeight: 600 }}>
                      {dev.email}
                    </a>
                  </div>
                  <Button
                    style={{ background: '#0077b5', color: '#fff', border: 'none', borderRadius: '1.2rem', fontWeight: 600, marginTop: 6, transition: 'background 0.2s' }}
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseOver={e => e.currentTarget.style.background = '#005983'}
                    onMouseOut={e => e.currentTarget.style.background = '#0077b5'}
                  >
                    <FaLinkedin className="me-2" style={{ fontSize: 18, verticalAlign: 'middle' }} />
                    LinkedIn
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* Extra contact info section */}
      <div style={{ marginTop: '2.5rem', background: 'transparent', borderRadius: 0, padding: '1.2rem 0', boxShadow: 'none', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h3 style={{ color: 'var(--accent)', fontWeight: 700, textAlign: 'center', marginBottom: '1rem' }}>Contact & Support</h3>
        <p style={{ color: 'var(--text)', fontSize: '1.1rem', textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          Have questions, feedback, or need help? Our team is here for you! Reach out via email or phone, and we'll respond as soon as possible. We love hearing from our users and are always happy to help you on your pet adoption journey.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
          <div style={{ background: 'var(--accent)', borderRadius: '1rem', padding: '1.2rem 2rem', minWidth: 220, textAlign: 'center', color: 'var(--text)', fontWeight: 600 }}>
            <FaEnvelope style={{ color: '#f9a825', marginRight: 8, fontSize: 20, verticalAlign: 'middle' }} />
            support@FurryFriends.com
          </div>
          <div style={{ background: 'var(--accent)', borderRadius: '1rem', padding: '1.2rem 2rem', minWidth: 220, textAlign: 'center', color: 'var(--text)', fontWeight: 600 }}>
            <FaPhone style={{ color: '#43a047', marginRight: 8, fontSize: 20, verticalAlign: 'middle' }} />
            +91 8766491081
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .contact-card-col {
            max-width: 400px !important;
            flex: 0 0 100% !important;
          }
          .contact-card {
            width: 90vw !important;
            min-width: 220px !important;
            height: auto !important;
          }
        }
      `}</style>
    </Container>
  );
}

export default ContactUs;
