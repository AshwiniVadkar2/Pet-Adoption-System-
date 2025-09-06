import React from 'react';
import '../../registration.css'; // Ensure you have custom styles if needed
import Navbar from '../layout/Navbar';
import UserFunctions from '../../Axios/UserAxios';
import { useHistory } from 'react-router-dom';
import Footer from '../layout/Footer';

const Parent = () => {
  const history = useHistory();

  const onRegister = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const mobile = e.target.elements.mobile.value;
    const password = e.target.elements.password.value;

    // Basic form data validation
    if (!name.trim()) {
      alert('Please enter your name');
      return;
    }
    if (!email.trim()) {
      alert('Please enter your email');
      return;
    }
    if (!mobile.trim()) {
      alert('Please enter your mobile number');
      return;
    }
    if (!password.trim()) {
      alert('Please enter your password');
      return;
    }

    const add = {
      name: name,
      mobileNumber: mobile,
      email: email,
      password: password,
    };

    UserFunctions.registerParent(add).then((res) => {
      history.push('/login');
    });
  };

  return (
    <>
    <div className='container' style={{marginTop:110}}>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card bg-light">
              <article className="card-body">
                <h4 className="card-title mt-3 text-center">Create User Account</h4>
                <p className="text-center">Get started with your account</p>
                <form onSubmit={onRegister}>
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control"
                      name="name"
                      />
                  </div><br />

                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E-mail Address"
                      name="email"
                    />
                  </div><br />

                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-phone"></i>
                      </span>
                    </div>
                    <select className="custom-select" style={{ maxWidth: 80 }}>
                      <option selected="">+91</option>
                    </select>
                    <input
                      className="form-control"
                      name="mobile"
                      placeholder="Mobile Number"
                      type="text"
                      />
                  </div><br />

                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your Password"
                      name="password"
                      />
                  </div><br />

                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Your Password"
                      name="confirm_password"
                      />
                  </div><br />

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      Create Account
                    </button>
                  </div>
                  <p className="text-center">
                    Have an account? <a href="/login">Log In</a>
                  </p>
                </form>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
                      </>
  );
};

export default Parent;
