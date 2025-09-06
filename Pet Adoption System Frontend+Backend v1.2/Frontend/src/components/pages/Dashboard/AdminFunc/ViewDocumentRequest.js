import React from 'react';
import Footer from '../../../layout/Footer';
import { Row, Col, Table, Button, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ADashNavbar from '../../../layout/ADashNavbar';
import AdminFunctions from '../../../../Axios/AdminAxios';

class ViewDocumentRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enquiry: [],
      responses: {}
    };
  }

  componentDidMount() {
    AdminFunctions.getAllDocumentRequest().then((res) => {
      this.setState({
        enquiry: res.data.data
      });
    });
  }

  handleResponseChange = (documentId, value) => {
    this.setState((prevState) => ({
      responses: {
        ...prevState.responses,
        [documentId]: value
      }
    }));
  };

  saveForm = (enq) => {
    const response = this.state.responses[enq.documentId];

    AdminFunctions.setDocumentResponse({
      id: enq.documentId,
      response: response,
    }).then((res) => {
      console.log(res.data);
    });

    this.setState((prevState) => ({
      responses: {
        ...prevState.responses,
        [enq.documentId]: ''
      }
    }));
    this.props.history.push('/admin-dash');
  };

  render() {
    return (
      <div>
        <div className="container" style={{marginTop:100}}>

        <ADashNavbar />
        </div>
        <div className="container mt-5">
          <h4 className="text-center mb-4">View Document Requests</h4>
          <Table responsive striped hover>
            <thead style={{backgroundColor:"#AA336A"}}>
              <tr style={{color:"white"}}>
                <th scope="col">DocId</th>
                <th scope="col">Address Proof</th>
                <th scope="col">Identity Proof</th>
                <th scope="col">Income Proof</th>
                <th scope="col">Nationality</th>
                <th scope="col">Non-Criminal</th>
                <th scope="col">Response</th>
                <th scope="col">Reply</th>
              </tr>
            </thead>
            <tbody>
              {this.state.enquiry.map((enq) => (
                <tr key={enq.documentId}>
                  <th scope="row">{enq.documentId}</th>
                  <td><img height="100" className="img-thumbnail" src={'http://localhost:8081/' + enq.addressProof} alt="Address Proof" /></td>
                  <td><img height="100" className="img-thumbnail" src={'http://localhost:8081/' + enq.identityProof} alt="Identity Proof" /></td>
                  <td><img height="100" className="img-thumbnail" src={'http://localhost:8081/' + enq.incomeProof} alt="Income Proof" /></td>
                  <td><img height="100" className="img-thumbnail" src={'http://localhost:8081/' + enq.nationalityCertificate} alt="Nationality Certificate" /></td>
                  <td><img height="100" className="img-thumbnail" src={'http://localhost:8081/' + enq.nonCriminal_certificate} alt="Non-Criminal Certificate" /></td>
                  <td>
                    <Input
                      type="text"
                      name="response"
                      className="rounded-0"
                      value={this.state.responses[enq.documentId] || ''}
                      onChange={(e) => this.handleResponseChange(enq.documentId, e.target.value)}
                    />
                  </td>
                  <td>
                    <Button
                      color="success"
                      onClick={() => this.saveForm(enq)}
                    >
                      Save
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <NavLink className="nav-link" exact to="/admin-dash">
            <Button color="primary" className="btn-block mt-3" style={{ maxWidth: 100 }}>Back</Button>
          </NavLink>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ViewDocumentRequest;
