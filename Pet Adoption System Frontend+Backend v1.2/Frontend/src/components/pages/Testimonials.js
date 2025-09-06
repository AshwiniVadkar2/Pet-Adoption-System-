// import React from 'react';


// import './Testimonials.css';
// import Navbar from './../layout/Navbar';


// function card({title,imageUrl,body}){
//   return(
//     <div>
//       <Navbar></Navbar>
//       <br/>  
//       <div class="container ">
//   <div class="row">
//     <div class="col order-last">
//     <div className='card-container'>
//           <div className="image-container">
//               <img src="https://theadoptionconsultancy.com/includes/success/data/img/9.jpg"  alt='' />
            
//           </div>
      
//           <div className="card-content"></div>  
//           <div className="card-title">
            
//             <h3> {title}</h3>  
//           </div>
//           <div className="card-body">
//             <p>{body}</p>
//             The level of professionalism that Vastalya provides to potential adoptive parents is unmatched. 
//             Vastalya always offered an honest and transparent answer to any questions I had. 
//             Vastalya is extremely versed in diffusing any uncomfortable situations, all while providing a respectful helping hand along the way.
//             Vastalya was exactly what I needed. 
//             <p>
//                <br></br>             - Amber, MN
//             </p>
                              
//           </div>
//           <div className='btn'>
          
//           </div>
//        </div>
//     </div>
//     <div class="col">
//     <div className='card-container'>
//           <div className="image-container">
//               <img src="https://theadoptionconsultancy.com/includes/testimonials/data/img/Caroline_Kyle.jpg"  alt='' />
            
//           </div>
      
//           <div className="card-content"></div>  
//           <div className="card-title">
            
//             <h3> {title}</h3>  
//           </div>
//           <div className="card-body">
//             <p>{body}</p>
//             The best part of our experience with The Adoption Consultancy was the confidence we gained during the process.
//              We felt like we had an upper hand working with agencies because we already understood the process from start to finish. 
//              It made it way less stressful.
//              <p>
//                <br></br>             - Elliott & Katie, OR
//             </p>
//           </div>
//           <div className='btn'>
          
//           </div>
//        </div>
//     </div>
//     <div class="col order-first">
//     <div className='card-container'>
//           <div className="image-container">
//               <img src="https://theadoptionconsultancy.com/includes/success/data/img/Jared_Heidi.jpg"  alt='' />
            
//           </div>
      
//           <div className="card-content"></div>  
//           <div className="card-title">
            
//             <h3> {title}</h3>  
//           </div>
//           <div className="card-body">
//             <p>{body}</p>
//             We highly recommend working with Vastalya adoption Center when you decide to adopt. 
//             She is very knowledgeable in all things adoption ,This really is necessary when navigating the process. 
//             Signing up with The Adoption Consultancy is the only way to go when moving forward with adoption and we plan to do so again if/when we move forward with adopting a second child.
//             <p>
//                <br></br>             - Sierra & Ben, FL
//             </p>
//           </div>
//           <div className='btn'>
          
//           </div>
//        </div>
//     </div>
//   </div>
// </div>
      
//     </div>
   
//   )


  
// }


// export default card


import React from 'react';
import Navbar from './../layout/Navbar';
import Footer from '../layout/Footer';


function Card({ title, imageUrl, body }) {
  return (
        <>
    <div className='container' style={{marginTop:110}}>
      <Navbar/>
      <div className="container my-5" >
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="card h-100">
              <img src="https://www.petplace.com/pet-adoption/media_1740aa105bbc41052f254093d1112ead04d221c37.jpeg?width=750&format=jpeg&optimize=medium" className="card-img-top" alt="Amber, MN" />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
                <p className="card-text">The level of professionalism that Vastalya provides to potential adoptive parents is unmatched. Vastalya always offered an honest and transparent answer to any questions I had. Vastalya is extremely versed in diffusing any uncomfortable situations, all while providing a respectful helping hand along the way. Vastalya was exactly what I needed.</p>
                <p className="card-text"><small className="text-muted">- Amber, MN</small></p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card h-100">
              <img src="https://www.alburycity.nsw.gov.au/__data/assets/image/0004/197815/golden_retreiver.jpg" className="card-img-top" alt="Elliott & Katie, OR" />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
                <p className="card-text">The best part of our experience with The Adoption Consultancy was the confidence we gained during the process. We felt like we had an upper hand working with agencies because we already understood the process from start to finish. It made it way less stressful.</p>
                <p className="card-text"><small className="text-muted">- Elliott & Katie, OR</small></p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card h-100">
              <img src="https://images.contentstack.io/v3/assets/blt6f84e20c72a89efa/blt1473f8fa02cf305c/6261d1c93348304067e0dc0e/img-requirements-to-adopt-a-pet.jpg" className="card-img-top" alt="Sierra & Ben, FL" />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
                <p className="card-text">We highly recommend working with Vastalya adoption Center when you decide to adopt. She is very knowledgeable in all things adoption. This really is necessary when navigating the process. Signing up with The Adoption Consultancy is the only way to go when moving forward with adoption and we plan to do so again if/when we move forward with adopting a second child.</p>
                <p className="card-text"><small className="text-muted">- Sierra & Ben, FL</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
      </>
  );
}

export default Card;
