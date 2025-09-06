import { useState } from 'react';
import Footer from '../../../layout/Footer';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import ADashNavbar from '../../../layout/ADashNavbar';
import { Card, CardBody, Form, FormGroup, Label, Input, Button,Row,Col } from 'reactstrap';

const url = 'http://localhost:8081/admin';

const AdminEditProfile = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState(''); // hide
  const [password, setPassword] = useState(''); // hide
  const [Roles, setRoles] = useState(''); // hide
  const [isActive, setIsActive] = useState(''); // hide

  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  console.log(user);
  console.log(sessionStorage.getItem('user'));
  const history = useHistory();

  const EditProfile = () => {
    const body = {
      id: user.id,
      name: name,
      mobileNumber: mobileNumber,
      email: email,
      password: password,
      Roles: Roles,
      isActive: isActive,
    };

    axios.put(`${url}/edit-profile`, body).then((response) => {
      const result = response.data;

      if (result) {
        alert('error');
        history.push('/aeditprofile');
        console.log(result);
        sessionStorage.setItem('user', JSON.stringify({ Id: result.Id }));
      } else {
        alert('success');
        history.push('/admin-dash');
      }
    });
  };

  return (
    <div>
      <div className="container" style={{marginTop:100}}>

      <ADashNavbar />
      </div>
      <div className="container py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <CardBody>
                <h4 className="text-center mb-4">Edit Profile</h4>
                <Form>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                      defaultValue={user.name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="mobileNumber">Mobile Number</Label>
                    <Input
                      type="text"
                      id="mobileNumber"
                      className="form-control"
                      onChange={(e) => setMobileNumber(e.target.value)}
                      defaultValue={user.mobileNumber}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                      defaultValue={user.email}
                    />
                  </FormGroup>
                  <Input
                    type="hidden"
                    onChange={(e) => setId(e.target.value)}
                    defaultValue={user.id}
                  />
                  <Input
                    type="hidden"
                    onChange={(e) => setPassword(e.target.value)}
                    defaultValue={user.password}
                  />
                  <Input
                    type="hidden"
                    onChange={(e) => setIsActive(e.target.value)}
                    defaultValue={user.isActive}
                  />
                  <Input
                    type="hidden"
                    onChange={(e) => setRoles(e.target.value)}
                    defaultValue={user.Roles}
                  />
                  <div className="text-center mt-3">
                    <Button type="submit" color="primary" onClick={EditProfile}>
                      Update
                    </Button>
                    {' '}
                    <Link to="/admin-dash">
                      <Button color="warning">Back</Button>
                    </Link>
                  </div>
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

export default AdminEditProfile;
