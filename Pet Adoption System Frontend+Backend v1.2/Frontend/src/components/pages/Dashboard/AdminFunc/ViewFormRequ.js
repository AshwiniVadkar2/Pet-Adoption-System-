import React from 'react'

import { Row, Col } from 'reactstrap'
import Footer from '../../../layout/Footer'
import ADashNavbar from '../../../layout/ADashNavbar'
import { Link } from 'react-router-dom'
import AdminFunctions from '../../../../Axios/AdminAxios'

class ViewFormRequ extends React.Component {
  constructor(props){
    super(props)

    this.state={
      enquiry:[],response:''
    }

  }

  componentDidMount(){
    
    AdminFunctions.getAllFormRequest().then((res)=>{
   
      

    this.setState(()=>{
      return {
        enquiry:res.data
      }
    })

    })
}

saveform(enq){

  enq.response=this.state.response
  console.log("Enq Object  = "+enq.response)
  console.log("Enq is  = "+enq.formNo)

  AdminFunctions.setFormResponse(
    {
      id:enq.formNo,
      response:enq.response,
     }
  
  ).then((res)=>{

    console.log(res.data)

  })
 
  this.setState(()=>{
    return {
      response:''
  }
  })
  this.props.history.push('/admin-dash')

}
  render(){
  
  return (
    <div>
      <div className="container" style={{marginTop:100}}>

      <ADashNavbar />
      </div>
      <div className="py-5" style={{marginLeft:20,marginRight:20}}>
        <Row> 
          <Col md={12}>
            <h4 className="text-center">View Pet Adoption Form Request</h4>           
            <table              
              className="table table-striped table-hover">
              <thead style={{backgroundColor:"#AA336A"}}>
                <tr style={{color:"white"}}>
                  <th scope="col">F.No</th>
                  <th scope="col" colSpan="1">
                  Gender
                  </th>
                  {/* <th scope="col" colSpan="1">
                  Spouse Gender
                  </th> */}
                  <th scope="col" colSpan="1">
                  S.Name
                  </th>
                  <th scope="col" colSpan="1">
                  Pet name
                  </th>
                  <th scope="col" colSpan="2">
                  Reason
                  </th>
                  {/* <th scope="col" colSpan="1">
                  Nationality
                  </th> */}
                  {/* <th scope="col" colSpan="1">
                  Qualification
                  </th> */}
                  <th scope="col" colSpan="1">
                  Occupation
                  </th>
                  <th scope="col" colSpan="1">
                  Company
                  </th>
                  <th scope="col" colSpan="1">
                  Income
                  </th>
                  <th scope="col" colSpan="1">
                  PanNo
                  </th>
                  <th scope="col" colSpan="2">
                  Address
                  </th>
                  <th scope="col" colSpan="1">
                  pet Id
                  </th>
                  <th scope="col" colSpan="1">
                  Response
                  </th>
                  <th scope="col" colSpan="1">
                  Reply
                  </th>
      
                </tr>
              </thead>
              <tbody>
                  {this.state.enquiry.map((enq)=>{
                    return(
                    <tr style={{ height: 100 }}>
                  <th scope="row">{enq.formNo}</th>
                  <td colSpan="1">{enq.applicantGender}</td>
                  {/* <td colSpan="1">{enq.spouseGender}</td> */}
                  <td colSpan="1">{enq.spouseName}</td>
                  <td colSpan="1">{enq.biologicalChildren}</td>
                  <td colSpan="2">{enq.adoptionReason}</td>
                  {/* <td colSpan="1">{enq.nationality}</td> */}
                  {/* <td colSpan="1">{enq.qualification}</td> */}
                  <td colSpan="1">{enq.occupation}</td>
                  <td colSpan="1">{enq.companyDetails}</td>
                  <td colSpan="1">{enq.annualIncome}</td>
                  <td colSpan="1">{enq.pancard}</td>
                  <td colSpan="2">{enq.permanentAddress}</td>
                  <td colSpan="1">{enq.petId}</td>
                  <td colSpan="1">
                    <input
                      name="response"
                      className="form-control rounded-0"
                      style={{ height: 100 }}
                      type="text"
                      onChange={(e) => {
                       this.setState(()=>{
                         console.log("Inside On Change = "+e.target.value)
                         return {
                           response:e.target.value
                         }
                       })
                      }}></input>
                      
                  </td>

                  <td colSpan="1">
                    {' '}
                    <button
                      type="button"
                      rel="tooltip"
                      className="btn btn-success btn-round btn-just-icon btn-sm"
                      data-original-title=""
                      title=""
                      onClick={() => {
                        this.saveform(enq)
                      }}>
                      Save
                    </button>
                  </td>
                </tr>
                    )
                  })}
                
                
              </tbody>
            </table>
            <div className="col-1">
            <Link to="/admin-dash">
              <a className="btn btn-warning">Back</a>
            </Link></div>
          </Col>
        </Row>
      </div>  <Footer />
    </div>
  )
  }
}

export default ViewFormRequ
