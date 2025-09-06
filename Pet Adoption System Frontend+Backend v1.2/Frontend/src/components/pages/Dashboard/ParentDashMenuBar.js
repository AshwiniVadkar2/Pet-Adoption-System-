
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';
// import './DashMenuBar.css'; // Create this CSS file for any additional custom styling

const DashMenuBar = () => {
  const cardItems = [
   
    {
      path: '/parentviewpets',
      title: 'View Pet Details',
      icon: 'fa-users',
      color: 'secondary',
      image: 'https://cdn-icons-png.flaticon.com/512/10754/10754599.png',
      text: 'View details of all pet available for adoption.'
    },
    {
      path: '/adoptionform',
      title: 'Apply for Adoption',
      icon: 'fa-registered',
      color: 'info',
      image: 'https://cdn-icons-png.flaticon.com/512/8183/8183061.png',
      text: 'Apply for adoption by filling out the required form.'
    },
    {
      path: '/upload-documents',
      title: 'Upload Documents',
      icon: 'fa-upload',
      color: 'success',
      image: 'https://images.icon-icons.com/2063/PNG/512/pet_folder_file_document_page_icon_124627.png',
      text: 'Upload necessary documents for the adoption process.'
    },
    {
      path: '/request-status',
      title: 'View Response Status',
      icon: 'fa-reply-all',
      color: 'secondary',
      image: 'https://cdn-icons-png.flaticon.com/512/2921/2921267.png',
      text: 'Check the status of your adoption request.'
    },
    {
      path: '/viewdocstatus',
      title: 'View Documents Status',
      icon: 'fa-reply-all',
      color: 'success',
      image: 'https://cdn-icons-png.flaticon.com/512/9746/9746243.png',
      text: 'View the status of your uploaded documents.'
    },
    {
      path: '/peditprofile',
      title: 'Update Profile',
      icon: 'fa-cog fa-spin',
      color: 'danger',
      image: 'https://cdn-icons-png.flaticon.com/512/5278/5278646.png',
      text: 'Update your profile information.'
    }
  ];

  return (
    <div className="container">
      <Row style={{marginLeft:50,marginRight:50}}>
        {cardItems.map((item, index) => (
          <Col md="4" className="mb-4" key={index}>
            <Card className="shadow-sm">
              <CardImg top width="100%" src={item.image} alt={item.title} />
              <CardBody>
                <CardTitle tag="h5">
                  <i className={`fa ${item.icon} fa-2x mr-2`} aria-hidden="true"></i>
                  {item.title}
                </CardTitle>
                <CardText>{item.text}</CardText>
                <NavLink to={item.path}>
                  <Button outline color={item.color} className="w-100">
                    {item.title}
                    <br />
                    <i className={`fa ${item.icon} fa-2x`} aria-hidden="true"></i>
                  </Button>
                </NavLink>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DashMenuBar;
