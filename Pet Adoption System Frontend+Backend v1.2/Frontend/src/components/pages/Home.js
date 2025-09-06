import React from 'react';
import img1 from "../../images/img1.png"
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { Row, Col } from 'reactstrap'

const Home = () => {
  return (
    <main>
   
      <Navbar />
       {/* main Homepage Image */}
       <Row className='mt-5'>
       <div className="container mt-5" >
                    <img src={img1}
                        alt="HomeImage" className="index-image" width="100%"/>
                    
                    </div>
                
                </Row> 
                <Footer />
   </main >
   
  );
  
};

export default Home;
