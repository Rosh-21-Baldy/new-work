// "use client";
// import Footer from "@/components/footer";
// import React from "react";
// import { Container, Card, Navbar } from "react-bootstrap";

// const TermCondition = () => {
//   return (
   
    
//     <div className="py-5 bg-light">
//       <Container>
//         <h1 className="mb-4 text-center display-4">Terms and Conditions</h1>
        
//         <Card className="shadow-sm">
//           <Card.Body className="p-4">
//             <section className="mb-5">
//               <p className="lead">
//                 This service is operated by BBC Studios Distribution Limited (we, us or our). 
//                 We are registered in England and Wales under company number 1420028 and have 
//                 our registered office at 1 Television Centre, 101 Wood Lane, London W12 7FA. 
//                 Our VAT number is 333289454.
//               </p>
//             </section>

//             <section className="mb-5">
//               <h2 className="h4 mb-3">Acceptance of Terms</h2>
//               <ol className="mb-4">
//                 <li className="mb-3">
//                   Please read these terms and conditions (the Terms) carefully. By accessing 
//                   and using our website and any content and features therein (including without 
//                   limitation any games, widgets, embeddable media players and RSS feeds) 
//                   (together, our Services), you indicate your acceptance of these Terms...
//                 </li>
//                 <li className="mb-3">
//                   If you do not accept these Terms please do not access and/or use our Services.
//                 </li>
//                 <li>
//                   We may update these Terms at any time. Please review the Terms regularly...
//                 </li>
//               </ol>
//             </section>

//             <section className="mb-5">
//               <h2 className="h4 mb-3">Use of our Services</h2>
//               <ol className="mb-4">
//                 <li className="mb-3">
//                   You agree to use our Services for lawful purposes only and in a way that 
//                   does not infringe the rights of or restrict or inhibit any person’s use...
//                 </li>
//                 <li>
//                   In accessing our Services, you agree that you will only access its contents 
//                   for your own personal and non-commercial use and not for any commercial...
//                 </li>
//               </ol>
//             </section>
//           </Card.Body>
//         </Card>
        
//       </Container>
  
   
//     </div>
  
//   );
 
// };

// export default TermCondition;















"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";
import { Container, Card,  Nav } from "react-bootstrap";
// import OfferBanner from "./offer-banner";

const TermCondition = () => {
  return (
    <>
    {/* <OfferBanner/> */}
      <Navbar/>

      {/* Terms and Conditions Section */}
      <div className="py-5 bg-light">
        <Container>
          <h1 className="mb-4 text-center display-4">Terms and Conditions</h1>

          <Card className="shadow-sm">
            <Card.Body className="p-4">
            <section className="mb-5">
  <p className="lead">
    These Terms and Conditions govern your use of the Prefinn website (
    <a href="https://www.prefinn.com" target="_blank" rel="noopener noreferrer" className="text-danger fw-bold">
      www.prefinn.com
    </a >
    ) and the services provided by Prefinn, a B2B platform connecting partners 
    with loan lead opportunities and financial institutions. By accessing or using our website, 
    you agree to be bound by these terms.
  </p>
</section>


              <section className="mb-5">
                <h2 className="h4 mb-3">Acceptance of Terms</h2>
                <ol className="mb-4">
                  <li className="mb-3">
                    Please read these terms and conditions (the Terms) carefully. By accessing
                    and using our website and any content and features therein (including without
                    limitation any games, widgets, embeddable media players and RSS feeds)
                    (together, our Services), you indicate your acceptance of these Terms...
                  </li>
                  <li className="mb-3">
                    If you do not accept these Terms, please do not access and/or use our Services.
                  </li>
                  <li>
                    We may update these Terms at any time. Please review the Terms regularly...
                  </li>
                </ol>
              </section>

              <section className="mb-5">
                <h2 className="h4 mb-3">Use of our Services</h2>
                <ol className="mb-4">
                  <li className="mb-3">
                    You agree to use our Services for lawful purposes only and in a way that
                    does not infringe the rights of or restrict or inhibit any person’s use...
                  </li>
                  <li>
                    In accessing our Services, you agree that you will only access its contents
                    for your own personal and non-commercial use and not for any commercial...
                  </li>
                </ol>
              </section>
            </Card.Body>
          </Card>
        </Container>
        <Footer/>
      </div>

  
    </>
  );
};

export default TermCondition;
