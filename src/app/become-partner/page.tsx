// "use client";
// import React, { useState } from "react";
// import { Form, Button, Card, Container, Row, Col, Alert } from "react-bootstrap";
// import Footer from "@/components/footer";
// import Navbar from "@/components/navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Link from "next/link";

// const LoanEnquiry = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     loanType: "",
//     amount: "",
//     city: "",
//     state: "",
//     pinCode: "",
//   });

//   const [showError, setShowError] = useState(false); // For validation message

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Hide error message when user starts filling fields
//     if (showError) setShowError(false);
//   };

//   const handleNextClick = (e) => {
//     if (!isFormValid) {
//       e.preventDefault(); // Prevent redirection if form is incomplete
//       setShowError(true); // Show error message
//     }
//   };

//   // Check if all fields are filled
//   const isFormValid = Object.values(formData).every((field) => field.trim() !== "");

//   return (
//     <>
//       <Navbar />
//       <Container className="my-5">
//         <Row>
//           <Col md={6}>
//             <h2 className="mb-4">
//               Register as Channel <span className="fw-bold text-primary">Partner</span>
//             </h2>
//             {showError && <Alert variant="danger">⚠ Please fill all fields to proceed.</Alert>}
//             <Form>
//               <Row>
//                 <Col md={6} className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Full Name"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Col>
//                 <Col md={6} className="mb-3">
//                   <Form.Control
//                     type="email"
//                     placeholder="Email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Col>
//                 <Col md={6} className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Mobile Number"
//                     name="mobile"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Col>
//                 <Col md={6} className="mb-3">
//                   <Form.Select
//                     name="loanType"
//                     value={formData.loanType}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="">Loan Type</option>
//                     <option value="Personal Loan">Personal Loan</option>
//                     <option value="Home Loan">Home Loan</option>
//                     <option value="Car Loan">Car Loan</option>
//                   </Form.Select>
//                 </Col>
//                 <Col md={6} className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Amount"
//                     name="amount"
//                     value={formData.amount}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Col>
//                 <Col md={6} className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="City"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Col>
//                 <Col md={6} className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="State"
//                     name="state"
//                     value={formData.state}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Col>
//                 <Col md={6} className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Pin Code"
//                     name="pinCode"
//                     value={formData.pinCode}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Col>
//               </Row>

//               <Link href={isFormValid ? "/bank-details" : "#"} passHref>
//                 <Button
//                   variant="primary"
//                   className="w-100"
//                   onClick={handleNextClick}
//                 >
//                   NEXT
//                 </Button>
//               </Link>
//             </Form>
//           </Col>

//           <Col md={6}>
//             <h3 className="mb-4 text-center">
//               How to apply for a loan with Prefinn?
//             </h3>
//             <Row>
//               {[
//                 "Fill out the online Apply Loan form on website and provide your Basic details..Call Prefinn Team or wait for Call Back.",
//                 "While Discussing with Prefinn Team, select the Bank/NBFC of your Choice for your Loan requirements and provide the required ",
//                 "Once Your Loan Application is filed. Have a personal discussion with Bank Loan Manager and finalise the Loan Amount and Terms and conditions.",
//                 "Meet the Loan Manager in person, sign the original Loan Application file and take Disbursement of Loan Amount in your preferred Bank Account.",
//               ].map((text, index) => (
//                 <Col md={6} key={index} className="mb-3">
//                   <Card className="text-center p-3" style={{ minHeight: "200px" }}>
//                     <Card.Body>
//                       <div className="fs-4 fw-bold text-primary mb-2">{index + 1}</div>
//                       <Card.Text>{text}</Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               ))}
//             </Row>
//           </Col>
//         </Row>
//       </Container>

//       <Footer />
//     </>
//   );
// };

// export default LoanEnquiry;





































"use client";
import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col, Modal } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const LoanEnquiry = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };
  

  return (
    <>
      <Navbar />
      <Container className="my-5">
        <Row>
          {/* Left Side - Loan Enquiry Form */}
          <Col md={6}>
            <h2 className="mb-4">
              Register As Channel <span className="fw-bold text-primary">Partner</span>
            </h2>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control type="text" placeholder="Full Name" required />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control type="email" placeholder="Email" required />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control type="text" placeholder="Mobile Number" required />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Select required>
                    <option value="">Select Loan Type</option>
                    <option>Personal Loan</option>
                    <option>Home Loan</option>
                    <option>Car Loan</option>
                  </Form.Select>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control type="number" placeholder="Amount" required />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control type="text" placeholder="City" required />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control type="text" placeholder="State" required />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control type="text" placeholder="Pin Code" required />
                </Col>
              </Row>
              <Button variant="primary" className="w-100" type="submit">
                SEND NOW
              </Button>
            </Form>
          </Col>

          {/* Right Side - Loan Process Steps */}
          <Col md={6}>
            <h3 className="mb-4 text-center">How to apply for a loan with Prefinn?</h3>
            <Row>
              {[
                "Fill out the online Apply Loan form on website and provide your basic details. Call Prefinn Team or wait for a callback.",
                "While discussing with Prefinn Team, select the Bank/NBFC of your choice for loan requirements and provide the required documents to our Loan Executive.",
                "Once your loan application is filed, have a personal discussion with the Bank Loan Manager and finalize the Loan Amount and Terms & Conditions.",
                "Meet the Loan Manager in person, sign the original Loan Application file, and take disbursement of the loan amount in your preferred Bank Account.",
              ].map((text, index) => (
                <Col md={6} key={index} className="mb-3">
                  <Card className="text-center p-3" style={{ minHeight: "200px" }}>
                    <Card.Body>
                      <div className="fs-4 fw-bold text-primary mb-2">{index + 1}</div>
                      <Card.Text>{text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your loan enquiry has been submitted successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  );
};

export default LoanEnquiry;











