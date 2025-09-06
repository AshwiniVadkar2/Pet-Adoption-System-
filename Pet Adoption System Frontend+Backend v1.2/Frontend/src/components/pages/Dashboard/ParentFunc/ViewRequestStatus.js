import React from 'react';
import { Row, Col, Table, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PDashNavbar from '../../../layout/PDashNavbar';
import Footer from '../../../layout/Footer';
import ParentFunctions from '../../../../Axios/ParentAxios';

class ViewRequestStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enquiries: [],
    };
  }

  componentDidMount() {
    const adoptionform = sessionStorage.getItem('user');
    const temp = JSON.parse(adoptionform);

    ParentFunctions.viewResponse(temp.id).then((res) => {
      console.log(res.data);
      this.setState(() => {
        return {
          enquiries: res.data.data,
        };
      });
    });

    console.log(this.state.enquiries);
  }

  render() {
    return (
      <div>
        <div className="container" style={{marginTop:100}}>

        <PDashNavbar />
        </div>
        <div className="container py-5">
          <Row>
            <Col md={12}>
              <h4 className="text-center mb-4">Response Status</h4>
              <div className="table-responsive">
                <Table striped hover className="table-bordered">
                  <thead style={{backgroundColor:"#AA336A"}}>
                    <tr style={{color:"white"}}>
                      <th scope="col">Form No.</th>
                      <th scope="col">Applicant Gender</th>
                      
                      <th scope="col">Spouse Name</th>
                      <th scope="col">Biological Children</th>
                      <th scope="col">Adoption Reason</th>
                      
                     
                      <th scope="col">Occupation</th>
                      <th scope="col">Company Details</th>
                      <th scope="col">Income</th>
                      <th scope="col">PanNo</th>
                      <th scope="col">Address</th>
                      {/* <th scope="col">Pet Id</th> */}
                      <th scope="col">Response</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.enquiries.map((enq) => {
                      return (
                        <tr key={enq.formNo}>
                          <td>{enq.formNo}</td>
                          <td>{enq.applicantGender}</td>
                          
                          <td>{enq.spouseName}</td>
                          <td>{enq.biologicalChildren}</td>
                          <td>{enq.adoptionReason}</td>
                          
                          <td>{enq.occupation}</td>
                          <td>{enq.companyDetails}</td>
                          <td>{enq.annualIncome}</td>
                          <td>{enq.pancard}</td>
                          <td>{enq.permanentAddress}</td>
                          {/* <td>{enq.petId}</td> */}
                          <td style={{backgroundColor: enq.response? "#90EE90" : "#FFD700" }}>{enq.response ? enq.response : 'Not Yet Responded By Admin'}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-center mt-4">
            <NavLink to="/parentdash">
              <Button color="primary">Back</Button>
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ViewRequestStatus;

