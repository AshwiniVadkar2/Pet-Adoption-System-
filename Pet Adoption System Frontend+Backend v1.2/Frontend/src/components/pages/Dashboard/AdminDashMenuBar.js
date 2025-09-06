import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';
// import './DashMenuBar.css'; // Create this CSS file for any additional custom styling

const DashMenuBar = () => {
  return (
    <div className="container mt-5">
      <Row>
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://cdn-icons-png.flaticon.com/512/141/141783.png" alt="Add New pet" />
            <CardBody>
              <CardTitle tag="h5">Add New Pet</CardTitle>
              <CardText>Add details of a new pet available for adoption.</CardText>
              <NavLink to="/addpetdetails">
                <Button color="info">
                  Add New Pet
                  <br />
                  <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                </Button>
              </NavLink>
            </CardBody>
          </Card>
        </Col>
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="View Child Details" />
            <CardBody>
              <CardTitle tag="h5">View Pet Details</CardTitle>
              <CardText>View details of all pet available for adoption.</CardText>
              <NavLink to="/adminviewpets">
                <Button color="secondary">
                  View Pet Details
                  <br />
                  <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                </Button>
              </NavLink>
            </CardBody>
          </Card>
        </Col>
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://cdn-icons-png.flaticon.com/512/3790/3790757.png" alt="View Adoption Form Request" />
            <CardBody>
              <CardTitle tag="h5">View Adoption Form Request</CardTitle>
              <CardText>View requests for adoption forms.</CardText>
              <NavLink to="/view-form-request">
                <Button color="info">
                  View Adoption Form Request
                  <br />
                  <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                </Button>
              </NavLink>
            </CardBody>
          </Card>
        </Col>
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://cdn-icons-png.flaticon.com/512/3636/3636273.png" alt="View Adoption Document" />
            <CardBody>
              <CardTitle tag="h5">View Adoption Document</CardTitle>
              <CardText>View documents related to adoptions.</CardText>
              <NavLink to="/view-document-request">
                <Button color="secondary">
                  View Adoption Document
                  <br />
                  <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                </Button>
              </NavLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://cdn-icons-png.flaticon.com/512/5325/5325339.png" alt="Add New Admin" />
            <CardBody>
              <CardTitle tag="h5">Add New Admin</CardTitle>
              <CardText>Add details of a new admin user.</CardText>
              <NavLink to="/add-new-admin">
                <Button color="info">
                  Add New Admin
                  <br />
                  <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                </Button>
              </NavLink>
            </CardBody>
          </Card>
        </Col>
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://cdn-icons-png.flaticon.com/512/1642/1642263.png" alt="View Enquiries" />
            <CardBody>
              <CardTitle tag="h5">View Enquiries</CardTitle>
              <CardText>View all inquiries to adoptions.</CardText>
              <NavLink to="/show-contacts">
                <Button color="secondary">
                  View Enquiries
                  <br />
                  <i className="fa fa-volume-control-phone fa-2x"></i>
                </Button>
              </NavLink>
            </CardBody>
          </Card>
        </Col>
        <Col md="3" className="mb-4">
          <Card>
            <CardImg top width="100%" src="https://cdn-icons-png.flaticon.com/512/5278/5278646.png" alt="Update Profile" />
            <CardBody>
              <CardTitle tag="h5">Update Profile</CardTitle>
              <CardText>Update your admin profile.</CardText>
              <NavLink to="/aeditprofile">
                <Button color="danger">
                  Update Profile
                  <br />
                  <i className="fa fa-cog fa-spin fa-2x fa-fw"></i>
                </Button>
              </NavLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashMenuBar;
