import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../services/UserServices"; 


export function Navigationbar() {

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token on mount and on token change
  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token); // if token exists, user is logged in
  }, []);

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // Logout logic
      removeToken();
      setIsLoggedIn(false);
      navigate("/signin");
    } else {
      // Sign in redirect
      navigate("/signin");
    }
  };

  return (
    <>
      <Navbar expand="lg" className="shadow-sm py-3 fixed-top" style={{ backgroundColor: 'var(--navy)', color: 'var(--white)', borderBottom: '2px solid var(--gray)' }}>
        <Container>
          <Navbar.Brand
            as={Link}
            to="/admin"
            className="d-flex align-items-center gap-2 fw-bold fs-4"
          >
            <img src={logo} height="100" style={{maxWidth: '130px', width: 'auto', borderRadius: '50%', border: '3px solid var(--orange)', boxShadow: '0 2px 12px rgba(255,107,0,0.10)'}} alt="Logo" className="d-inline-block" />
            <span style={{ color: 'var(--orange)', textShadow: '1px 1px 0 var(--yellow)' }}>Furry Friends</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{ color: 'var(--orange)', fontFamily: 'Quicksand, Segoe UI, Tahoma, Geneva, Verdana, sans-serif', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '0.03em' }}>
              <Nav.Link as={Link} to="/" className="px-3" style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '0.03em', padding: '0.5rem 1.2rem', borderRadius: '1.2rem', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = 'var(--gray)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>Home</Nav.Link>
              <Nav.Link as={Link} to="/pets" className="px-3" style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '0.03em', padding: '0.5rem 1.2rem', borderRadius: '1.2rem', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = 'var(--gray)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>Available Pets</Nav.Link>
              <Nav.Link as={Link} to="/about" className="px-3" style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '0.03em', padding: '0.5rem 1.2rem', borderRadius: '1.2rem', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = 'var(--gray)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="px-3" style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '0.03em', padding: '0.5rem 1.2rem', borderRadius: '1.2rem', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = 'var(--gray)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/my-applications" className="px-3" style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '0.03em', padding: '0.5rem 1.2rem', borderRadius: '1.2rem', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = 'var(--gray)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>My Applications</Nav.Link>
              <Nav.Link as={Link} to="/my-pets" className="px-3" style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '0.03em', padding: '0.5rem 1.2rem', borderRadius: '1.2rem', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = 'var(--gray)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>My Pets</Nav.Link>
              <Button variant="primary" className="ms-3" onClick={handleAuthAction}>
                {isLoggedIn ? "Logout" : "Sign In"}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}


