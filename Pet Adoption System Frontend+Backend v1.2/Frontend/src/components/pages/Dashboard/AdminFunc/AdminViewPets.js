import React from 'react'
import { Row, Col, Table, Button } from 'reactstrap'
import AdminFunctions from '../../../../Axios/AdminAxios'

import { NavLink } from 'react-router-dom'
import ADashNavbar from '../../../layout/ADashNavbar'

class AdminViewPets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      childdetails: []
    }
  }

  componentDidMount() {
    AdminFunctions.getAllChilds().then((res) => {
      console.log(res.data)
      this.setState({
        childdetails: res.data
      })
    })
  }

  render() {
    return (
      <>
          <ADashNavbar/>
        <div className="container mt-5">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="text-center mb-0">View Pets</h4>
            </div>
            <div className="card-body">
              <Table bordered hover responsive>
                <thead className="thead-dark">
                  <tr>
                    <th>Pet Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Blood Group</th>
                    <th>Colour Complexity</th>
                    <th>Deficiency</th>
                    <th>Breed</th>
                    <th>Gender</th>
                    <th>Medical History</th>
                    <th>Other</th>
                    <th>Status</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.childdetails.map((child) => (
                    <tr key={child.petId}>
                      <td>{child.petId}</td>
                      <td>{child.name}</td>
                      <td>{child.age}</td>
                      <td>{child.bloodGroup}</td>
                      <td>{child.colourComplexity}</td>
                      <td>{child.deficiency}</td>
                      <td>{child.education}</td>
                      <td>{child.gender}</td>
                      <td>{child.medicalHistory}</td>
                      <td>{child.other}</td>
                      <td>{child.status}</td>
                      <td>
                        <img
                          src={'http://localhost:8081/' + child.image}
                          alt={child.name}
                          height="100"
                          className="img-thumbnail"
                        />
                      </td>
                      <td className="d-flex justify-content-around">
                        <NavLink to="/editpetprofile">
                          <Button color="primary">
                            <i className="fa fa-cog"></i> Update
                          </Button>
                        </NavLink>
                        <NavLink to="/admin-dash">
                          <Button color="danger">
                            <i className="fa fa-trash-o"></i> Delete
                          </Button>
                        </NavLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <NavLink to="/admin-dash">
                <Button color="primary" className="btn-block mt-5" style={{ maxWidth: 100 }}>
                  Back
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AdminViewPets
