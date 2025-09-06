import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Container, Card, CardBody, CardTitle, CardText, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Footer from '../../../layout/Footer';
import ParentFunctions from '../../../../Axios/ParentAxios';
import PDashNavbar from '../../../layout/PDashNavbar';
// import './AdoptionForm.css'; // Import the CSS file for additional custom styling

const AdoptionForm = () => {
  const [user, setUser] = useState('');
  const [user1, setUser1] = useState(JSON.parse(sessionStorage.getItem('user')));
  const history = useHistory();

  const onAdoption = (e) => {
    e.preventDefault();
    const adoptionReason = e.target.elements.adoptionReason.value;
    const annualIncome = e.target.elements.annualIncome.value;
    const applicantGender = e.target.elements.applicantGender.value;
    const biologicalChildren = e.target.elements.biologicalChildren.value;
    const childId = e.target.elements.childId.value;
    const companyDetails = e.target.elements.companyDetails.value;
    const nationality = e.target.elements.nationality.value;
    const occupation = e.target.elements.occupation.value;
    const pancard = e.target.elements.pancard.value;
    const permanentAddress = e.target.elements.permanentAddress.value;
    const qualification = e.target.elements.qualification.value;
    const spouseGender = e.target.elements.spouseGender.value;
    const spouseName = e.target.elements.spouseName.value;

    if (!applicantGender || !spouseGender || !spouseName || !biologicalChildren || !adoptionReason || !nationality || !qualification || !occupation || !companyDetails || !annualIncome || !pancard || !permanentAddress || !childId) {
      alert('Please fill in all fields');
    } else {
      const addAdoptionForm = {
        adoptionReason,
        annualIncome,
        applicantGender,
        biologicalChildren,
        childId,
        companyDetails,
        nationality,
        occupation,
        pancard,
        permanentAddress,
        qualification,
        spouseGender,
        spouseName,
        user_id: user1.id,
      };

      ParentFunctions.addoptionForm(addAdoptionForm).then((res) => {
        history.push('/parentdash');
      });
    }
  };

  return (
    <div>
      <div className="container" style={{marginTop:110}}>

      <PDashNavbar />
      </div>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg">
              <CardBody>
                <div className="card-header text-center bg-info text-white">
                <h3>Add Pet Adoption Details</h3>
                </div>
                <Form onSubmit={onAdoption}>
                <FormGroup>
                    <Label for="spouseName" className='fw-bold'>Enter Spouse Name</Label>
                    <Input type="text" id="spouseName" name="spouseName" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="spouseGender" className='fw-bold'>Select Spouse Gender</Label>
                    <Input type="select" name="spouseGender" id="spouseGender">
                      <option>Male</option>
                      <option>Female</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="applicantGender" className='fw-bold'>Select Applicant Gender</Label>
                    <Input type="select" name="applicantGender" id="applicantGender">
                      <option>Male</option>
                      <option>Female</option>
                    </Input>
                  </FormGroup>
                 
                  <FormGroup>
                    <Label for="biologicalChildren" className='fw-bold'>Enter Biological Children</Label>
                    <Input type="text" id="biologicalChildren" name="biologicalChildren" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="adoptionReason" className='fw-bold'>Enter Adoption Reason</Label>
                    <Input type="text" id="adoptionReason" name="adoptionReason" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="nationality" className='fw-bold'>Enter Nationality</Label>
                    <Input type="text" id="nationality" name="nationality" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="qualification" className='fw-bold'>Enter Qualification</Label>
                    <Input type="text" id="qualification" name="qualification" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="occupation" className='fw-bold'>Enter Occupation</Label>
                    <Input type="text" id="occupation" name="occupation" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="companyDetails" className='fw-bold'>Enter Company Details</Label>
                    <Input type="text" id="companyDetails" name="companyDetails" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="annualIncome" className='fw-bold'>Enter Annual Income</Label>
                    <Input type="text" id="annualIncome" name="annualIncome" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="pancard" className='fw-bold'>Enter Pancard No.</Label>
                    <Input type="text" id="pancard" name="pancard" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="permanentAddress" className='fw-bold'>Enter Permanent Address</Label>
                    <Input type="text" id="permanentAddress" name="permanentAddress" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="childId" className='fw-bold'>Enter Pet Id</Label>
                    <Input type="text" id="childId" name="childId" />
                  </FormGroup>
                  <Button type="submit" color="primary" className="w-100">Submit</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AdoptionForm;
