import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Col,Form, FormGroup, Label, Input } from 'reactstrap'
import Footer from '../../../layout/Footer'
import DashNavbar from '../../../layout/ADashNavbar';


const Addpet = () => {
  
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')
  const [colourComplexity, setColourComplexity] = useState('')
  const [deficiency, setDeficiency] = useState('')
  const [education, setEducation] = useState('')
  const [gender, setGender] = useState('')
  const [medicalHistory, setMedicalHistory] = useState('')
  const [other, setOther] = useState('')
  const [status, setStatus] = useState('')
  const [user, setUser] = useState('')
  const [image, setImage] = useState(undefined)

  const [user1, setUser1] = useState(JSON.parse(sessionStorage.getItem('user')))
  console.log(user1)
  const history = useHistory()

  const onFileSelect = (event) => {
    setImage(event.target.files[0])
  }

  
  const addChildToDB = () => {
    if (name.length === 0) {
      alert('enter name')
    } else if (age.length === 0) {
      alert('enter age')
    } else if (bloodGroup.length === 0) {
      alert('enter bloodGroup')
    } else if (colourComplexity.length === 0) {
      alert('enter colourcomplexity')
    } else if (deficiency.length === 0) {
      alert('enter deficiency')
    } else if (education.length === 0) {
      alert('enter education')
    } else if (gender.length === 0) {
      alert('enter gender')
    } else if (medicalHistory.length === 0) {
      alert('enter medicalHistory')
    } else if (status.length === 0) {
      alert('enter status')
    } else if (other.length === 0) {
      alert('enter other')
    } else if (!image) {
      alert('select image File')
    } else {
      const data = new FormData()
      data.append('name', name)
      data.append('age', age)
      data.append('bloodGroup', bloodGroup)
      data.append('colourComplexity', colourComplexity)
      data.append('deficiency', deficiency)
      data.append('education', education)
      data.append('gender', gender)
      data.append('medicalHistory', medicalHistory)
      data.append('other', other)
      data.append('status', status)
      data.append('user_id', user1.id)
      data.append('image', image)
     
      sessionStorage.setItem('child', JSON.stringify(data.data));
      // send the Child info to the API
      axios.post('http://localhost:8081/admin' + '/addchild', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('successfully added new pet to the list')
          console.log(user1.id)
          history.push('/admin-dash')
        } else {
          console.log(result.error)
          alert('error while adding the pet to the list')
        }
      })
    }
  }

  return (
    
    <>
  <div className="container" style={{marginTop:120}}>
    <DashNavbar />
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="card shadow-lg">
          <div className="card-header bg-primary text-white">
            <h1 className="page-title text-center b mb-0">Add Pet</h1>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="childImage" className="form-label fw-bold">Pet Image</label>
              <input
                accept="image/*"
                onChange={onFileSelect}
                type="file"
                className="form-control"
                id="childImage"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="gender" className="form-label fw-bold">Gender</label>
              <select
                onChange={(e) => setGender(e.target.value)}
                className="form-select"
                id="gender"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">Pet Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label fw-bold">Age</label>
              <input
                onChange={(e) => setAge(e.target.value)}
                type="text"
                className="form-control"
                id="age"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="bloodGroup" className="form-label fw-bold">Pet Blood Group</label>
              <input
                onChange={(e) => setBloodGroup(e.target.value)}
                type="text"
                className="form-control"
                id="bloodGroup"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="colourComplexity" className="form-label fw-bold">Pet Colour Complexity</label>
              <input
                onChange={(e) => setColourComplexity(e.target.value)}
                type="text"
                className="form-control"
                id="colourComplexity"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="deficiency" className="form-label fw-bold">Pet Deficiency</label>
              <input
                onChange={(e) => setDeficiency(e.target.value)}
                type="text"
                className="form-control"
                id="deficiency"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="education" className="form-label fw-bold">Breed</label>
              <input
                onChange={(e) => setEducation(e.target.value)}
                type="text"
                className="form-control"
                id="education"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="medicalHistory" className="form-label fw-bold">Medical History</label>
              <input
                onChange={(e) => setMedicalHistory(e.target.value)}
                type="text"
                className="form-control"
                id="medicalHistory"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="other" className="form-label fw-bold">Other details</label>
              <input
                onChange={(e) => setOther(e.target.value)}
                type="text"
                className="form-control"
                id="other"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="status" className="form-label fw-bold">Status</label>
              <input
                onChange={(e) => setStatus(e.target.value)}
                type="text"
                className="form-control"
                id="status"
              />
            </div>

            <input
              onChange={(e) => setUser(e.target.value)}
              type="hidden"
              className="form-control"
            />

            <div className="d-flex justify-content-between">
              <button onClick={addChildToDB} className="btn btn-success">
                Submit
              </button>
              <Link to="/admin-dash" className="btn btn-warning">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</>

  )
}

export default Addpet
