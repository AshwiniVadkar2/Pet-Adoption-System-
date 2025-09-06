import React from 'react';
import NavBar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Donate = () => {
  return (
    <>
    <div className='container' style={{marginTop:100}}>
      <NavBar />
      <div className="container my-5">
        <div className="about-section text-center mt-5 mb-5">
          
        </div>
        
        <div className="mb-5 text-center mt-5">
        <h1>Bank Information</h1>
          <h2>Send a Cheque</h2>
          <p>Please make cheques payable to 'Pet Adoption Center' and post to:<br />
            Child Adoption Center, Survey No 16,<br />
            SaiRaj Nagar, Beed by pass road, Aurangabad, Maharashtra 431005</p>
        </div>
        
        <div className="mb-5 text-center">
          <h2>Bank Transfer</h2>
          <p>Please instruct your bank to deposit funds to our HDFC account and follow the simple instructions to obtain a tax exemption certificate below:</p>
        </div>

        <div className="d-flex justify-content-center mb-5">
          <div className="card text-center w-75">
            <div className="card-body">
              <p className="card-text">
                For deposits being made in ₹ INR.<br />
                All Indian deposits qualify for 80G tax exemption.<br /><br />
                <strong>Bank Name:</strong> HDFC<br /><br />
                <strong>Branch:</strong> SaiRaj Nagar, Beed by pass road, Aurangabad, Maharashtra 431005<br /><br />
                <strong>Name of Charity:</strong> Pet Adoption Center<br /><br />
                <strong>Account Number:</strong>  8787563737282- Savings<br /><br />
                <strong>IFSC code:</strong> HDFC0000188<br /><br />
                <strong>MICR number:</strong> 41424340001
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2>Need Help?</h2>
          <p>Need help with your donation? Email us at petadoptionsystem.com</p>
        </div>
      </div>
    </div>
      <Footer />
      </>
  );
}

export default Donate;
