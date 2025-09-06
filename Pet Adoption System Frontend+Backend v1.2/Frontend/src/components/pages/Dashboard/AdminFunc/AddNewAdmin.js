import React from 'react';
import Footer from '../../../layout/Footer';
import { Row, Col, Card, CardBody, Form, FormGroup, Input, Button } from 'reactstrap';
import DashNavbar from '../../../layout/ADashNavbar';
import UserFunctions from '../../../../Axios/UserAxios';
import { useHistory } from 'react-router-dom';

const AddNewAdmin = () => {
    const history = useHistory();

    const onRegister = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const mobile = e.target.elements.mobile.value;
        const password = e.target.elements.password.value;

        if (name.length === 0) {
            alert('Enter name');
        } else if (email.length === 0) {
            alert('Enter email');
        } else if (mobile.length === 0) {
            alert('Enter mobile');
        } else if (password.length === 0) {
            alert('Enter password');
        } else if (e.target.elements.confirm_password.value.length === 0) {
            alert('Enter password again');
        } else if (password !== e.target.elements.confirm_password.value) {
            alert('Enter correct password');
        } else {
            const register = {
                name: name,
                mobileNumber: mobile,
                email: email,
                password: password,
            };

            UserFunctions.registerAdmin(register).then((res) => {
                history.push('/admin-dash');
            });
        }
    };

    return (
        <div>
          <div className="container" style={{marginTop:100}}>

            <DashNavbar />
          </div>
            <div className="py-5">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card>
                            <CardBody>
                                <h4 className="text-center">Add New Admin</h4>
                                <br />
                                <Form onSubmit={onRegister}>
                                    <FormGroup>
                                      <label htmlFor="FullName">Full Name</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-user"></i>
                                                </span>
                                            </div>
                                            <Input
                                                name="name"
                                                placeholder="Full name"
                                                type="text"
                                            />
                                        </div>
                                    </FormGroup>

                                    <FormGroup>
                                    <label htmlFor="email">Email</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-envelope"></i>
                                                </span>
                                            </div>
                                            <Input
                                                name="email"
                                                placeholder="Email address"
                                                type="email"
                                            />
                                        </div>
                                    </FormGroup>

                                    <FormGroup>
                                    <label htmlFor="mobileNumber">Mobile Number</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-phone"></i>
                                                </span>
                                            </div>
                                            <Input
                                                name="mobile"
                                                placeholder="Mobile number"
                                                type="text"
                                            />
                                        </div>
                                    </FormGroup>

                                    <FormGroup>
                                    <label htmlFor="password">Password</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-lock"></i>
                                                </span>
                                            </div>
                                            <Input
                                                name="password"
                                                placeholder="Create password"
                                                type="password"
                                            />
                                        </div>
                                    </FormGroup>

                                    <FormGroup>
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-lock"></i>
                                                </span>
                                            </div>
                                            <Input
                                                name="confirm_password"
                                                placeholder="Confirm password"
                                                type="password"
                                            />
                                        </div>
                                    </FormGroup>

                                    <Button type="submit" color="primary" block>
                                        Create Account
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    );
};

export default AddNewAdmin;
