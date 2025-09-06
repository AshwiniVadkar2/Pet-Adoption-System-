import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Footer from '../../../layout/Footer'
import PDashNavbar from '../../../layout/PDashNavbar'

const ParentEditProfile = () => {
  const [name, setName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState('') // hide
  const [password, setPassword] = useState('') // hide
  const [roles, setRoles] = useState('') // hide
  const [isActive, setIsActive] = useState('') // hide

  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
  const history = useHistory()

  const editProfile = () => {
    const body = { id: user.id, name, mobileNumber, email, password, roles, isActive }

    axios.put(`http://localhost:8081/user/edit-profile`, body).then((response) => {
      const result = response.data

      if (result) {
        alert("error")
        history.push('/peditprofile')
        sessionStorage.setItem("user", JSON.stringify({ Id: result.Id }))
      } else {
        alert('success')
        history.push('/parentdash')
      }
    })
  }

  return (
    <>
    <div className="container" style={{marginTop:120}}>
      <PDashNavbar/>
    </div>
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          Edit Profile
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} defaultValue={user.name} />
          </div>
          <div className="mb-3">
            <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
            <input type="text" className="form-control" id="mobileNumber" onChange={(e) => setMobileNumber(e.target.value)} defaultValue={user.mobileNumber} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} defaultValue={user.email} />
          </div>
          <input type="hidden" onChange={(e) => setId(e.target.value)} defaultValue={user.id} />
          <input type="hidden" onChange={(e) => setPassword(e.target.value)} defaultValue={user.password} />
          <input type="hidden" onChange={(e) => setRoles(e.target.value)} defaultValue={user.roles} />
          <input type="hidden" onChange={(e) => setIsActive(e.target.value)} defaultValue={user.isActive} />
          <button type="button" className="btn btn-primary" onClick={editProfile}>Submit</button>
          <Link to="/parentdash" className="btn btn-warning ms-2">Back</Link>
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default ParentEditProfile
