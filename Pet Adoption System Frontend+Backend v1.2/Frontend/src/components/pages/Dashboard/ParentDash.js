import React from 'react'
import Footer from '../../layout/Footer'
import DashMenuBar from './ParentDashMenuBar'
import { Row, Col } from 'reactstrap'

import PDashNavbar from '../../layout/PDashNavbar'

class ParentDash extends React.Component {

  render(){
  return (
    <div>
      <div className="container" style={{marginTop:100}}>
      <h1>Parent Dashboard</h1>
      <PDashNavbar /> 
      </div>
      <div className="py-5">
        <Row>
          <Col md={12}>
            <DashMenuBar />
          </Col>
          

        </Row>
      </div><Footer />
    </div>
  )
 }
}

export default ParentDash
