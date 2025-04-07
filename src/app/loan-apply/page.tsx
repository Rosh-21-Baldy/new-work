






"use client";
import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col, Alert } from "react-bootstrap";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoanEnquiry = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    loanType: "",
    amount: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const [showError, setShowError] = useState(false); // For validation message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Hide error message when user starts filling fields
    if (showError) setShowError(false);
  };

  const handleNextClick = (e) => {
    if (!isFormValid) {
      e.preventDefault(); // Prevent redirection if form is incomplete
      setShowError(true); // Show error message
    }
  };

  // Check if all fields are filled
  const isFormValid = Object.values(formData).every((field) => field.trim() !== "");

  return (
    <>
      <Navbar />
      <Container className="my-5">
        <Row>
          <Col md={6}>
            <h2 className="mb-4">
              Loan <span className="fw-bold text-primary">Form</span>
            </h2>
            {showError && <Alert variant="danger">⚠ Please fill all fields to proceed.</Alert>}
            <Form>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Mobile Number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Loan Type</option>
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Home Loan">Home Loan</option>
                    <option value="Car Loan">Car Loan</option>
                    <option value="Car Loan">Loan Against property Loan</option>
                    <option value="Car Loan">Business Loan</option>
                    <option value="Car Loan">Working Capital Loan</option>



                  </Form.Select>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Pin Code"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>

              <Link href={isFormValid ? "/bank-details" : "#"} passHref>
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={handleNextClick}
                >
                  NEXT
                </Button>
              </Link>
            </Form>
          </Col>

          <Col md={6}>
            <h3 className="mb-4 text-center">
              How to apply for a loan with Prefinn?
            </h3>
            <Row>
              {[
                "Fill out the online Apply Loan form on website and provide your Basic details..Call Prefinn Team or wait for Call Back.",
                "While Discussing with Prefinn Team, select the Bank/NBFC of your Choice for your Loan requirements ",
                "Once Your Loan Application is filed. Have a personal discussion with Bank Loan Manager and finalise the Loan Amount and Terms and conditions.",
                "Meet the Loan Manager in person, sign the original Loan Application file and take Disbursement of Loan Amount in your preferred Bank Account.",
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

      <Footer />
    </>
  );
};

export default LoanEnquiry;














































































































// "use client";
// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import "../../../src/App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const BankDetails = () => {
//   const [formData, setFormData] = useState({
//     accountHolderName: "",
//     accountNumber: "",
//     bankName: "",
//     branch: "",
//     ifscCode: "",
//     accountType: "savings",
//     termsAccepted: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Show success toast message
//     toast.success("Bank details submitted successfully!", {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });

//     console.log(formData);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mt-5 mb-5">
//         <h2 className="mb-4 d-flex justify-content-center">Bank Details Form</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="row g-3">
//             {/* Account Holder Name */}
//             <div className="col-md-6">
//               <label htmlFor="accountHolderName" className="form-label">
//                 Account Holder Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="accountHolderName"
//                 name="accountHolderName"
//                 value={formData.accountHolderName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* Account Number */}
//             <div className="col-md-6">
//               <label htmlFor="accountNumber" className="form-label">
//                 Account Number
//               </label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="accountNumber"
//                 name="accountNumber"
//                 value={formData.accountNumber}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* Bank Name */}
//             <div className="col-md-6">
//               <label htmlFor="bankName" className="form-label">
//                 Bank Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="bankName"
//                 name="bankName"
//                 value={formData.bankName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* Branch */}
//             <div className="col-md-6">
//               <label htmlFor="branch" className="form-label">
//                 Branch
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="branch"
//                 name="branch"
//                 value={formData.branch}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* IFSC Code */}
//             <div className="col-md-6">
//               <label htmlFor="ifscCode" className="form-label">
//                 IFSC Code
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="ifscCode"
//                 name="ifscCode"
//                 value={formData.ifscCode}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* Account Type */}
//             <div className="col-md-6">
//               <label htmlFor="accountType" className="form-label">
//                 Account Type
//               </label>
//               <select
//                 className="form-select"
//                 id="accountType"
//                 name="accountType"
//                 value={formData.accountType}
//                 onChange={handleChange}
//               >
//                 <option value="savings">Savings</option>
//                 <option value="current">Current</option>
//               </select>
//             </div>

//             {/* Terms and Conditions */}
//             <div className="col-12">
//               <div className="form-check">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   id="termsAccepted"
//                   name="termsAccepted"
//                   checked={formData.termsAccepted}
//                   onChange={handleChange}
//                   required
//                 />
//                 <label className="form-check-label" htmlFor="termsAccepted">
//                   I confirm that the provided bank details are correct
//                 </label>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="col-12 d-flex justify-content-center">
//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//       <Footer />
      
//       {/* Toast Container */}
//       <ToastContainer />
//     </>
//   );
// };

// export default BankDetails;
