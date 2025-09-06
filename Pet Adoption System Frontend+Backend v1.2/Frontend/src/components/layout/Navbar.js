import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
import img2 from "../../images/img2.png"
const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-md  fixed-top navbar" style={{backgroundColor:"#AA336A" }}>
      <div className="container-fluid">
      <a className="navbar" href="/">
      <img src={"https://cdn-icons-png.flaticon.com/128/1076/1076877.png"} alt="" height="60" />
        </a>
        <a className="navbar-brand text-light" href="/">
        FurEver Pet Adoption System
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/" style={{ color: 'white' }}>
                <h6 >Home</h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/testimonial" style={{ color: 'white' }}>
              <h6>Testimonials</h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/donate" style={{ color: 'white' }}>
              <h6>Donate</h6>
              </NavLink>
            </li>
              <li className="nav-item">
              <NavLink className="nav-link" exact to="/about-us" style={{ color: 'white' }}>
                <h6>AboutUs</h6>
              </NavLink>
            </li>
            </ul>
            </div>
            <div className="container-fluid">
            <ul className="navbar-nav mr-auto justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/register">
                <Button >
                  Register
                </Button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/login">
                <Button >
                  Log-In
                </Button>
              </NavLink>
            </li>         
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
