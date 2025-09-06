
import React from 'react';
import NavBar from '../layout/Navbar';
import Footer from '../layout/Footer';

const AboutUs = () => {
    return (
<>
        <div className='container' style={{marginTop:100}}>
            <NavBar />
            <div className="container my-5">
                <div className="about-section text-center mb-5">
                    <h1>About Us</h1>
                    <p className='text-justify'>Pet Adoption System:  'Home of Love', and was founded in 2020 to provide support for children. We are a 2-year-old organization that supports the adoption community in Pune, MH and provided support to over 1000 children.
                    We are more than an NGO, we are a strong and passionate family, united in the belief that no one should stand alone. Many of our staff first came to us as beneficiaries to use our services. We understand that resilience - the desire to survive - is an extraordinary force. A sense of belonging and compassion can nurture even the most destitute and fragile people to not just survive, but to thrive in life.We stand as family..!!
                    We welcome everyone with an open heart and without prejudice.</p>
                  
                     
                   
                    
                </div>

                <div className="text-center mb-5">
                    <h2>Our Team</h2>
                </div>

                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center">
                            <img className="card-img-top rounded-circle mx-auto d-block mt-3" src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png" alt=""  width="50" height="auto" />
                            <div className="card-body">
                                <h5 className="card-title">Student Name: </h5>
                                <p className="card-text">Institute Name: </p>
                                <p>Position: </p>
                                <p>Email Id: </p>
                                <a href="mailto:" className="btn btn-primary">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center">
                            <img className="card-img-top rounded-circle mx-auto d-block mt-3" src="https://www.w3schools.com/howto/img_avatar2.png" alt=""  width="50" height="auto" />
                            <div className="card-body">
                            <h5 className="card-title">Student Name: </h5>
                                <p className="card-text">Institute Name: </p>
                                <p>Position: </p>
                                <p>Email Id: </p>
                                <a href="mailto:" className="btn btn-primary">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center">
                            <img className="card-img-top rounded-circle mx-auto d-block mt-3" src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png" alt=""  width="50" height="auto" />
                            <div className="card-body">
                            <h5 className="card-title">Student Name: </h5>
                                <p className="card-text">Institute Name: </p>
                                <p>Position: </p>
                                <p>Email Id: </p>
                                <a href="mailto:" className="btn btn-primary">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center">
                            <img className="card-img-top rounded-circle mx-auto d-block mt-3" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" width="50" height="auto" />
                            <div className="card-body">
                            <h5 className="card-title">Student Name: </h5>
                                <p className="card-text">Institute Name: </p>
                                <p>Position: </p>
                                <p>Email Id: </p>
                                <a href="mailto:" className="btn btn-primary">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer />
            </>
    );
}

export default AboutUs;
