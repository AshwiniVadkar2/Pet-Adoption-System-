import React from 'react';
import { Row, Col, Table, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PDashNavbar from '../../../layout/PDashNavbar';
import ParentFunctions from '../../../../Axios/ParentAxios';
import Footer from '../../../layout/Footer';

class ViewDocumentsResponseStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enquiries: [],
    };
  }

  componentDidMount() {
    const documentsmaster = sessionStorage.getItem('user');
    const temp = JSON.parse(documentsmaster);
    ParentFunctions.viewDocumentResponse(temp.id).then((res) => {
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
              <h4 className="text-center mb-4">Documents Response Status</h4>
              <div className="table-responsive">
                <Table striped hover className="table-bordered">
                  <thead style={{backgroundColor:"#AA336A"}}>
                    <tr style={{color:"white"}}>
                      <th scope="col">DocId</th>
                      <th scope="col">Address Proof</th>
                      <th scope="col">Identity Proof</th>
                      <th scope="col">Income Proof</th>
                      <th scope="col">Nationality Certificate</th>
                      <th scope="col">NonCriminal Certificate</th>
                      <th scope="col">Response</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.enquiries.map((enq) => {
                      return (
                        <tr key={enq.documentId}>
                          <th scope="row">{enq.documentId}</th>
                          <td>
                            <img height="100" className="img-thumbnail" src={'http://localhost:8081/' + enq.addressProof} alt="Address Proof" />
                          </td>
                          <td>
                            <img height="100" className="img-thumbnail" src={'http://localhost:8081/' + enq.identityProof} alt="Identity Proof" />
                          </td>
                          <td>
                            <img height="100" className="img-thumbnail" src={'http://localhost:8081/' + enq.incomeProof} alt="Income Proof" />
                          </td>
                          <td>
                            <img height="100" className="img-thumbnail" src={'http://localhost:8081/' + enq.nationalityCertificate} alt="Nationality Certificate" />
                          </td>
                          <td>
                            <img height="100" className="img-thumbnail" src={'http://localhost:8081/' + enq.nonCriminal_certificate} alt="NonCriminal Certificate" />
                          </td>
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

export default ViewDocumentsResponseStatus;
