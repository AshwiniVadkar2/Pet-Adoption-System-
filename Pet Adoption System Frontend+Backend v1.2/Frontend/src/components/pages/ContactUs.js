
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../layout/Footer'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import PDashNavbar from '../layout/PDashNavbar'

const ContactUs = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userMessage, setUserMessage] = useState('')
  const history = useHistory()

  const send = () => {
    if (userName.length === 0) {
      alert('Enter UserName')
    } else if (userEmail.length === 0) {
      alert('Enter Email')
    } else if (userMessage.length === 0) {
      alert('Enter Message')
    } else {
      const body = { userName, userEmail, userMessage }

      axios.post(`http://localhost:8081/contactUs/add`, body).then(response => {
        const result = response.data
        if (result.status === 'success') {
          alert('Successfully sent message')
        } else {
          alert('Error while sending message')
        }
      })
    }
  }

  return (
    <>
    <div className="container" style={{marginTop:100}}>
        <PDashNavbar/>
    </div>
    <div className="container mt-5">
      <div className="card mb-4">
        <div className="card-body bg-info">
          <h3 className="card-title text-center">Contact Us Page</h3>
          
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title"><i className="fas fa-map-marker-alt"></i> Address</h4>
              <p className="card-text">Plot no 16, Sairaj Nagar , Beed by pass road,Aurangabad, Maharashtra</p>
              <h4 className="card-title"><i className="fas fa-phone-alt"></i> Phone</h4>
              <p className="card-text">+91 8007592194</p>
              <p className="card-text">+91 9284926333</p>
              <h4 className="card-title"><i className="fas fa-envelope"></i> Email</h4>
              <p className="card-text">petadoption@gmail.com</p>
              <p className="card-text">petadoption@gmail.com</p>
              <p className="card-text">petadoption@gmail.com</p>
              <p className="card-text">petadoption@gmail.com</p>
              
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">Send us a Enquiry</h4>
              <p className="card-text">
                If you have any work from us or any types of queries related to our portal, you can send us a Enquiry from here. It's our pleasure to help you.
              </p>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Enter your name" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Enter your email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="4" placeholder="Enter your message" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} required></textarea>
                </div>
                <div className="d-grid gap-2">
                  <button type="button" className="btn btn-success" onClick={send}>Send</button>
                  <NavLink className="btn btn-primary" to="/parentdash">Back</NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
      <Footer />
    </>
  )
}

export default ContactUs
