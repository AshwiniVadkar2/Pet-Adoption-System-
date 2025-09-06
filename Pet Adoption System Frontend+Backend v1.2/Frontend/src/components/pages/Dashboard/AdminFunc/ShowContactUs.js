import React from 'react';
import { Row, Col, Card, CardBody, Table, Button } from 'reactstrap';
import AdminFunctions from '../../../../Axios/AdminAxios';
import ADashNavbar from '../../../layout/ADashNavbar';
import { NavLink } from 'react-router-dom';
import Footer from '../../../layout/Footer';

class ShowContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactus: []
        };
    }

    componentDidMount() {
        AdminFunctions.getAllContact().then((res) => {
            console.log(res.data);
            this.setState({
                contactus: res.data
            });
        });
    }

    render() {
        return (
            <div>
                <div className="container" style={{marginTop:100}}>

                <ADashNavbar />
                </div>
                <div className="container py-5">
                    <Row className="justify-content-center">
                        <Col md={10}>
                            <Card>
                                <CardBody>
                                    <h4 className="text-center mb-4">Enquiries</h4>
                                    <Table striped hover responsive>
                                        <thead style={{backgroundColor:"#AA336A"}}>
                                            <tr style={{color:"white"}}>
                                                <th scope="col">Sr No</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email Id</th>
                                                <th scope="col">Message</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.contactus.map((contact, index) => (
                                                <tr key={index}>
                                                    <td>{contact.serialId}</td>
                                                    <td>{contact.userName}</td>
                                                    <td>{contact.userEmail}</td>
                                                    <td>{contact.userMessage}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                    <div className="text-center mt-4">
                                        <NavLink exact to="/admin-dash">
                                            <Button color="primary">Back</Button>
                                        </NavLink>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ShowContactUs;
