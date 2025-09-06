import React from 'react';
import DashNavbar from '../../layout/ADashNavbar';
import Footer from '../../layout/Footer';
import { Card, CardTitle, CardGroup, CardBody, Row, Col } from 'reactstrap';
import DashMenuBar from './AdminDashMenuBar';
import AdminFunctions from '../../../Axios/AdminAxios';
// import './AdminDash.css'; // Create this CSS file for additional styling

class AdminDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalrequest: '',
      totalchild: '',
      totalparent: '',
    };
  }

  componentDidMount() {
    AdminFunctions.getCountRequest().then((res) => {
      this.setState({ totalrequest: res.data });
    });

    AdminFunctions.getCountChild().then((res) => {
      this.setState({ totalchild: JSON.stringify(res.data.data) });
    });

    AdminFunctions.getCountParent().then((res) => {
      this.setState({ totalparent: JSON.stringify(res.data.data) });
    });
  }

  render() {
    return (
      <>
      <div className='container' style={{marginTop:50}}>
        <DashNavbar />
        <div className="py-5">
        <h1 style={{marginLeft:30}}>Admin Dashboard</h1>
        <Row className="mt-5" style={{marginLeft:10,marginRight:10}}>
            <Col md={4} className="mb-4">
              <Card body inverse color="primary" className="text-center">
                <CardBody>
                  <p>
                    <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                  </p>
                  <CardTitle tag="h5">{this.state.totalrequest}</CardTitle>
                  <CardTitle tag="h5">Total Adoption Form Request</CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card body inverse color="primary" className="text-center">
                <CardBody>
                  <p>
                    <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                  </p>
                  <CardTitle tag="h5">{this.state.totalchild}</CardTitle>
                  <CardTitle tag="h5">Total Pets</CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card body inverse color="primary" className="text-center">
                <CardBody>
                  <p>
                    <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                  </p>
                  <CardTitle tag="h5">{this.state.totalparent}</CardTitle>
                  <CardTitle tag="h5">Total Parent Registered</CardTitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
        
          <Row>
            <Col md={12}>
              <DashMenuBar />
            </Col>
          </Row>
          
        </div>
      </div>
        <Footer />
        </>
    );
  }
}

export default AdminDash;

