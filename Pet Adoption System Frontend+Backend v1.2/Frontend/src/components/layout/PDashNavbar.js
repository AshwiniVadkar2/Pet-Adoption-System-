import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'


const PDashNavbar = () => {

  const onLogout=()=>{
    sessionStorage.removeItem('user')
  }
  return (
    <nav className="navbar navbar-expand-md  fixed-top  navbar" style={{backgroundColor:"#AA336A" }}>
      <a className="navbar" href="/parentdash">
      <img src="https://cdn-icons-png.flaticon.com/512/107/107777.png" alt="" height="60" style={{marginLeft:10}} />
        </a>
      <div className="container">
      <a className="navbar-brand text-light" href="/parentdash">
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
        <div className="collapse navbar-collapse" style={{ marginLeft: 500 }}>
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav mr-auto justify-content-end">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/contact-us">
                <Button color="light">
                  Send Enquiry
                </Button>
              </NavLink>
              </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/parentdash">
                <Button color="light">
                  Parent Dashboard
                </Button>
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                <Button color="light" onClick={onLogout}>
                  Logout
                </Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default PDashNavbar
