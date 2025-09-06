import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';


const ADashNavbar = () => {
  const history = useHistory();

  const onLogout = () => {
    sessionStorage.removeItem('user');
    history.push('/');
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: '#AA336A' }}>
      <div className="container">
        <a className="navbar-brand" href="/admin-dash">
          <img src="https://cdn-icons-png.flaticon.com/128/1076/1076877.png" alt="Logo" height="60" className="d-inline-block align-top" />
          <span className="ml-2">FurEver Pet Adoption System</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/admin-dash">
                <Button color="light" className="mr-2">
                  Admin Dashboard
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
  );
};

export default ADashNavbar;

