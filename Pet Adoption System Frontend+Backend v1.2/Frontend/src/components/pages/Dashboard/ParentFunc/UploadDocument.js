import React, { useState } from 'react';
import axios from 'axios';
import { Row, Col ,Input,Button,CardTitle,FormGroup,Label,CardBody,Card,Container} from 'reactstrap';
import DashMenuBar from '../ParentDashMenuBar';
import PDashNavbar from '../../../layout/PDashNavbar';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../../layout/Footer';

const UploadDocument = () => {
  const [user, setUser] = useState('');
  const [addressProof, setAddressProof] = useState(undefined);
  const [identityProof, setIdentityProof] = useState(undefined);
  const [incomeProof, setIncomeProof] = useState(undefined);
  const [nationalityCertificate, setNationalityCertificate] = useState(undefined);
  const [nonCriminal_certificate, setNonCriminal_certificate] = useState(undefined);

  const [user1, setUser1] = useState(JSON.parse(sessionStorage.getItem('user')));
  console.log(user1);
  const history = useHistory();

  const onFileSelect = (event, setter) => {
    setter(event.target.files[0]);
  };

  const addDocumentToDB = () => {
    if (!addressProof) {
      alert('Select address proof');
    } else if (!identityProof) {
      alert('Select identity proof');
    } else if (!incomeProof) {
      alert('Select income proof');
    } else if (!nationalityCertificate) {
      alert('Select nationality certificate');
    } else if (!nonCriminal_certificate) {
      alert('Select noncriminal certificate');
    } else {
      const data = new FormData();
   
      data.append('addressProof', addressProof);
      data.append('identityProof', identityProof);
      data.append('incomeProof', incomeProof);
      data.append('nationalityCertificate', nationalityCertificate);
      data.append('nonCriminal_certificate', nonCriminal_certificate);
      data.append('user_id', user1.id);

      // const documentmaster=sessionStorage.getItem('user')
      // const temp=JSON.parse(documentmaster)

      sessionStorage.setItem('documentMaster', JSON.stringify(data));
      // send the Child info to the API
      axios.post(`http://localhost:8081/document/adddocument/${user1.id}`, data).then((response) => {
        const result = response.data;

        if (result.status === 'success') {
          console.log("Data uploaded");
          alert('Documents added successfully');
          history.push('/parentdash');
        } else {
          console.log(result.error);
          alert('Error while uploading documents');
        }
      });
    }
  };

  return (
   
    <div>
      <div className="container" style={{ marginTop: 100 }}>
        <PDashNavbar />
      </div>
      <Container className="mt-5">
        <h1 className="page-title text-center mb-4">Upload Document</h1>
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="shadow-lg mb-4">
              <CardBody>
                <CardTitle tag="h5" className="mb-4 fw-bold" >Upload Your Documents</CardTitle>
                
                <FormGroup>
                  <Label for="addressProof" className='fw-bold'>Address Proof</Label>
                  <Input
                    accept="addressProof/*"
                    onChange={(e) => onFileSelect(e, setAddressProof)}
                    type="file"
                    className="form-control"
                    id="addressProof"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="identityProof" className='fw-bold'>Identity Proof</Label>
                  <Input
                    accept="identityProof/*"
                    onChange={(e) => onFileSelect(e, setIdentityProof)}
                    type="file"
                    className="form-control"
                    id="identityProof"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="incomeProof" className='fw-bold'>Income Proof</Label>
                  <Input
                    accept="incomeProof/*"
                    onChange={(e) => onFileSelect(e, setIncomeProof)}
                    type="file"
                    className="form-control"
                    id="incomeProof"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="nationalityCertificate" className='fw-bold'>Nationality Certificate</Label>
                  <Input
                    accept="nationalityCertificate/*"
                    onChange={(e) => onFileSelect(e, setNationalityCertificate)}
                    type="file"
                    className="form-control"
                    id="nationalityCertificate"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="nonCriminalCertificate" className='fw-bold'>Non-Criminal Certificate</Label>
                  <Input
                    accept="nonCriminalCertificate/*"
                    onChange={(e) => onFileSelect(e, setNonCriminal_certificate)}
                    type="file"
                    className="form-control"
                    id="nonCriminalCertificate"
                  />
                </FormGroup>

                <div className="text-center">
                  <Button color="success" onClick={addDocumentToDB}>Submit</Button>{' '}
                  <Link to="/parentdash">
                    <Button color="warning">Back</Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default UploadDocument;
