import axios from 'axios'
import { useState, useEffect } from 'react'
import Footer from '../../../layout/Footer'
import { Link } from 'react-router-dom'
//import AdminFunctions from '../../../../Axios/AdminAxios'

import ADashNavbar from '../../../layout/ADashNavbar'
import PetRow from './PetRow'

const Pets = () => {
 
  const [child, setChild] = useState([])

 
  useEffect(() => {
    console.log(`pet got loaded`)
    getChilds()
  }, [])

 

  const getChilds = () => {
    axios.get("http://localhost:8081/admin/achilddetails").then((response) => {
     // AdminFunctions.getAllChilds().then((response) => {
      const result = response.data
      console.log(child.image)
      console.log(child.childId)
      if (result.status === 'success') {
        setChild(result.data)
        
      } else {
        alert('error while loading list of pets')
      }
    })
  }

  return (
      <>
    <div className='container' style={{marginTop:100}}>
      <ADashNavbar/>
      </div>
      <div className="container">

      <h1 className="page-title">All Pets</h1>

      <table className="table table-striped">
        <thead style={{backgroundColor:"#AA336A"}}>
          <tr style={{color:"white"}}>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>blood</th>
            <th>Color</th>
            <th>Deficiency</th>
            <th>Education</th>
            <th>Gender</th>
            <th>MedicalHistory</th>
            <th>Other</th>
            <th>Status</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {child.map((pet) => {
            return <PetRow pet={pet} />
          })}
          
        
        </tbody>
        <Link to="/admin-dash">
              <a className="btn btn-warning mt-5">Back</a>
            </Link>
      </table>  
            </div>
      <Footer />
    
    </>
  )
}

export default Pets
