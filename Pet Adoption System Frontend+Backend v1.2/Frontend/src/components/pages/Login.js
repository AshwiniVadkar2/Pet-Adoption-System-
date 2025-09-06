import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../login.css'; // Ensure you have custom styles if needed
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import UserFunctions from '../../Axios/UserAxios';

const Login = () => {
  const history = useHistory();

  const onLogin = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const emailandpass = {
      email: email,
      password: password,
    };

    UserFunctions.login(emailandpass).then((res) => {
      console.log(res.data);
      sessionStorage.setItem('user', JSON.stringify(res.data));
      if (res.data.role === 'ADMIN') {
        alert('Login Successfully');
        history.push('/admin-dash');
      } else if (res.data.role === 'PARENT') {
        alert('Login Successfully');
        history.push('/parentdash');
      } else {
        alert('Please enter valid Email or Password');
      }
    });
  };

  return (
                      <>
    <div className='container' style={{marginTop:110}}>
      <Navbar />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header text-center bg-info text-white">
                <h3>Login</h3>
              </div>
              <div className="card-body">
                <form id="login-form" className="form" onSubmit={onLogin}>
                  <div className="form-group">
                    <label htmlFor="email" className="text-info">
                      Email Address:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                    />
                  </div>
                  <div className="form-group form-check">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label htmlFor="remember-me" className="form-check-label text-info">
                      Remember me
                    </label>
                  </div>
                  <div className="form-group text-center">
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      value="Login"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
      </>
  );
};

export default Login;

