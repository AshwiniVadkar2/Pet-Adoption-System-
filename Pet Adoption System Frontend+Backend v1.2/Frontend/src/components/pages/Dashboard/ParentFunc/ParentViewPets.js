import React from 'react';
import { Row, Col, Container, Table, Button } from 'reactstrap';
import Footer from '../../../layout/Footer';
import ParentFunctions from '../../../../Axios/ParentAxios';
import { NavLink } from 'react-router-dom';
import PDashNavbar from '../../../layout/PDashNavbar';
// import './PViewChilds.css'; // Import the CSS file for custom styles

class ParentViewPets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childdetails: [],
    };
  }

  componentDidMount() {
    ParentFunctions.getAllChilds().then((res) => {
      console.log(res.data);
      this.setState(() => {
        return {
          childdetails: res.data,
        };
      });
    });
  }

  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: 100 }}>
          <PDashNavbar />
        </div>
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col md={12}>
              <h4 className="text-center mb-4">View Pets</h4>
              <Table bordered hover responsive className="table-striped">
                <thead style={{backgroundColor:"#AA336A"}}>
                  <tr style={{color:"white"}}>
                    <th scope="col">Pet Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Blood Group</th>
                    <th scope="col">Color</th>
                    <th scope="col">Breed</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Medical History</th>
                    <th scope="col">Other details</th>
                    <th scope="col">Status</th>
                    <th scope="col">Image</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.childdetails.map((child) => {
                    return (
                      <tr key={child.petId}>
                        <td>{child.petId}</td>
                        <td>{child.name}</td>
                        <td>{child.age}</td>
                        <td>{child.bloodGroup}</td>
                        <td>{child.colourComplexity}</td>
                        <td>{child.education}</td>
                        <td>{child.gender}</td>
                        <td>{child.medicalHistory}</td>
                        <td>{child.other}</td>
                        <td>{child.status}</td>
                        <td>
                          <img
                          width={120}
                          height={100}
                            className="child-image"
                            src={'http://localhost:8081/' + child.image}
                            alt={child.name}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <div className="d-flex justify-content-center mt-4">
                <NavLink className="nav-link" exact to="/parentdash">
                  <Button color="primary" className="mr-2">Back</Button>
                </NavLink>
                <NavLink className="nav-link" exact to="/adoptionform">
                  <Button className="ms-2" color="success">Apply</Button>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default ParentViewPets;

