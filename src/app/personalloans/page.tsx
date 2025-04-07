// "use client";
// import React, { useState } from 'react';
// import { Container, Row, Col, Button,  Form, ListGroup,Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from '@/components/footer';
// import Navbar from '@/components/navbar';

// const personalloans= () => {
//   // EMI Calculator State
//   const [loanAmount, setLoanAmount] = useState<number>(500000);
//   const [tenure, setTenure] = useState<number>(24);
//   const [interestRate, setInterestRate] = useState<number>(11.25);

//   // EMI Calculation Formula
//   const calculateEMI = (P: number, r: number, n: number): number => {
//     const monthlyRate = r / (12 * 100);
//     return (P * monthlyRate * Math.pow(1 + monthlyRate, n)) / 
//            (Math.pow(1 + monthlyRate, n) - 1);
//   };

//   const emi = calculateEMI(loanAmount, interestRate, tenure);
//   const totalPayment = emi * tenure;
//   const totalInterest = totalPayment - loanAmount;

//   // Loan Features Data
//   const loanFeatures = [
//     { icon: '💰', title: 'Loan Amount', value: 'Up to ₹40 Lakhs' },
//     { icon: '📅', title: 'Loan Tenure', value: '12 to 84 months' },
//     { icon: '📉', title: 'Interest Rate', value: 'Starting from 11.25% p.a.' },
//     { icon: '📄', title: 'Processing Fees', value: 'Up to 2% + GST' },
//   ];
 
//   return (
//     <>
//     <Navbar/>
    
//     <Container fluid className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
//       <Row>
//         {/* Left Side Panel */}
//         <Col md={3} className="text-white p-4" style={{ backgroundColor: "#f9a826" }}>
//           <h4 className="fw-bold">DO IT YOURSELF WITH OUR</h4>
//           <h2 className="fw-bold">100% DIGITAL PROCESS</h2>
//           <ul className="list-unstyled mt-4">
//             <li>✔ INPUT YOUR DETAILS</li>
//             <li>✔ BEST OFFERS FOR YOU</li>
//             <li>✔ GET MONEY IN YOUR ACCOUNT</li>
//           </ul>
//         </Col>

//         {/* Center Image Section */}
//         <Col md={5} className="text-center d-flex flex-column align-items-center justify-content-center">
//           <img src={loanImage} alt="Loan Offer" className="img-fluid" />
//           <h4 className="fw-bold text-danger mt-3">LOW INTEREST RATES</h4>
//         </Col>

//         {/* Right Side Form */}
//         <Col md={4}>
//           <Card className="p-4 shadow-sm" style={{ backgroundColor: "#f5e1c9" }}>
//             <h5 className="fw-bold">Get an Instant Personal Loan Apply Now!</h5>
//             <Form>
//               <Form.Group className="mt-3">
//                 <Form.Label>PAN Number</Form.Label>
//                 <Form.Control type="text" placeholder="Enter your PAN Number" />
//               </Form.Group>
//               <Form.Group className="mt-3">
//                 <Form.Label>Mobile Number</Form.Label>
//                 <Form.Control type="text" placeholder="Enter Your Aadhaar Linked Mobile Number" />
//               </Form.Group>
//               <Form.Check
//                 className="mt-3"
//                 type="checkbox"
//                 label="I accept the Terms & Conditions and Privacy Policy."
//               />
//               <Form.Check
//                 className="mt-2"
//                 type="checkbox"
//                 label="I confirm that I am a major and a resident of India."
//               />
//               <Button variant="danger" className="w-100 mt-3">
//                 NEXT
//               </Button>
//             </Form>
//           </Card>
//         </Col>
//       </Row>
//     </Container>

     
//       <Container className='py-5'>
//         <Row className="g-4">
//           {loanFeatures.map((feature, index) => (
//             <Col md={3} key={index}>
//               <div className="text-center p-4 bg-white rounded shadow-sm">
//                 <div className="fs-1 mb-2">{feature.icon}</div>
//                 <h5>{feature.title}</h5>
//                 <p className="text-muted mb-0">{feature.value}</p>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>

   
//       <Container className="py-5">
//         <h2 className="text-center mb-5">Personal Loan EMI Calculator</h2>
//         <Row>
//           <Col md={6}>
//             <Form>
//               <Form.Group className="mb-4">
//                 <Form.Label>Loan Amount (₹)</Form.Label>
//                 <Form.Range 
//                   min={100000} 
//                   max={4000000} 
//                   step={50000}
//                   value={loanAmount}
//                   onChange={(e) => setLoanAmount(Number(e.target.value))}
//                 />
//                 <div className="fw-bold">₹{loanAmount.toLocaleString()}</div>
//               </Form.Group>

//               <Form.Group className="mb-4">
//                 <Form.Label>Tenure (months)</Form.Label>
//                 <Form.Range
//                   min={12}
//                   max={84}
//                   value={tenure}
//                   onChange={(e) => setTenure(Number(e.target.value))}
//                 />
//                 <div className="fw-bold">{tenure} Months</div>
//               </Form.Group>

//               <Form.Group className="mb-4">
//                 <Form.Label>Interest Rate (%)</Form.Label>
//                 <Form.Range
//                   min={11.25}
//                   max={25}
//                   step={0.25}
//                   value={interestRate}
//                   onChange={(e) => setInterestRate(Number(e.target.value))}
//                 />
//                 <div className="fw-bold">{interestRate}%</div>
//               </Form.Group>
//             </Form>
//           </Col>

//           <Col md={6} className="bg-white p-4 rounded">
//             <h4 className="mb-4">EMI Breakdown</h4>
//             <ListGroup>
//               <ListGroup.Item>
//                 Monthly EMI: ₹{emi.toFixed(2).toLocaleString()}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 Total Interest: ₹{totalInterest.toFixed(2).toLocaleString()}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 Total Payment: ₹{totalPayment.toFixed(2).toLocaleString()}
//               </ListGroup.Item>
//             </ListGroup>
//           </Col>
//         </Row>
//       </Container>
//       <Container className="my-5">
//       <Row>
        
//         <Col md={6}>
        
//           <Card className="shadow-sm border-0" style={{ backgroundColor: '#f2f2f2' }}>
//             <Card.Header className="text-white fw-bold" style={{ backgroundColor: '#9c1345', padding: '15px' }}>
//               Personal Loan Eligibility
//             </Card.Header>
//             <Card.Body>
//               <ul>
//                 <li>Salaried Employees
//                   <ul>
//                     <li>Salaried doctors</li>
//                     <li>Employees of public and private limited companies</li>
//                     <li>Government sector employees including Public Sector Undertaking, Central and Local bodies</li>
//                   </ul>
//                 </li>
//                 <li>Minimum age of 21 years</li>
//                 <li>Maximum age of 60 years at the time of maturity of the Personal Loan</li>
                
//               </ul>
//             </Card.Body>
//           </Card>
//         </Col>

        
//         <Col md={6}>
//           <Card className="shadow-sm border-0" style={{ backgroundColor: '#f2f2f2' }}>
//             <Card.Header className="text-white fw-bold" style={{ backgroundColor: '#9c1345', padding: '15px' }}>
//               Documents required for Personal Loan
//             </Card.Header>
//             <Card.Body>
//               <ul>
//                 <li>Last 3 Months Bank Statements</li>
//                 <li>3 latest Salary Slips with the latest Form 16</li>
//                 <li>KYC documents: <strong>(any one from the list mentioned below)</strong>
//                   <ul>
//                     <li>Passport</li>
//                     <li>Driving license</li>
//                     <li>PAN Card</li>
//                     <li>Aadhaar Card with date of birth</li>
//                     <li>Voters Id</li>
//                   </ul>
//                 </li>
//               </ul>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
    
//   <Footer/>
//   </>
//   );
// };


// export default personalloans;














// "use client";
// import React, { useState } from 'react';
// import { Container, Row, Col, Button, Form,Table, ListGroup, Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from '@/components/footer';
// import Navbar from '@/components/navbar';
// // import loanImage from '@/assets/loan-image.png'; // Ensure this path is correct

// const PersonalLoans = () => {
//   // EMI Calculator State
//   const [loanAmount, setLoanAmount] = useState(500000);
//   const [tenure, setTenure] = useState(24);
//   const [interestRate, setInterestRate] = useState(11.25);

//   // EMI Calculation Formula
//   const calculateEMI = (P: number, r: number, n: number): number => {
//     const monthlyRate = r / (12 * 100);
//     return (P * monthlyRate * Math.pow(1 + monthlyRate, n)) / 
//            (Math.pow(1 + monthlyRate, n) - 1);
//   };
  
 

//   const emi = calculateEMI(loanAmount, interestRate, tenure);
//   const totalPayment = emi * tenure;
//   const totalInterest = totalPayment - loanAmount;

//   // Loan Features Data
//   const loanFeatures = [
//     { icon: '💰', title: 'Loan Amount', value: 'Up to ₹40 Lakhs' },
//     { icon: '📅', title: 'Loan Tenure', value: '12 to 84 months' },
//     { icon: '📉', title: 'Interest Rate', value: 'Starting from 11.25% p.a.' },
//     { icon: '📄', title: 'Processing Fees', value: 'Up to 2% + GST' },
//   ];

  

//   return (
//     <>
//       <Navbar/>
      
//       <Container fluid className="p-4" style={{ backgroundColor: "#FEFEFE" }}>
//         <Row>
//           {/* Left Side Panel */}
          
//           <Col md={3}>
//           <Card className="text-white p-4" style={{ backgroundColor: "#f1c40f" }}>
//             <h4 className="fw-bold">DO IT YOURSELF WITH OUR</h4>
//             <h2 className="fw-bold">100% DIGITAL PROCESS</h2>
//             <ul className="list-unstyled mt-4">
//               <li>✔ INPUT YOUR DETAILS</li>
//               <li>✔ BEST OFFERS FOR YOU</li>
//               <li>✔ GET MONEY IN YOUR ACCOUNT</li>
//             </ul>
//           </Card>
//         </Col>

//           {/* Center Image Section */}
//           <Col md={5} className="text-center d-flex flex-column align-items-center justify-content-center">
//           <img src="https://img.freepik.com/free-photo/excited-ceo-corporate-man-manager-pointing-aside-promo-text-showing-left-banner-smiling-amazed-standing-white-background_176420-53107.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid" alt="Loan Offer" className="img-fluid" />
//           {/* <img src="https://img.freepik.com/free-photo/man-presenting-something_1368-3697.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid" alt="Loan Offer" className="img-fluid" /> */}
//             <h4 className="fw-bold text-danger mt-3">LOW INTEREST RATES</h4>
//           </Col>

//           {/* Right Side Form */}
//           <Col md={4}>
//             <Card className="p-4 shadow-sm" style={{ backgroundColor: "#f1c40f" }}>
//               <h5 className="fw-bold">Apply for Personal Loan</h5>
//               <Form>
//                 <Form.Group className="mt-3">
//                 <Form.Label>
//     PAN Number <span className="text-danger fw-bold">*</span>
//   </Form.Label>
//                   <Form.Control type="text" placeholder="Enter your PAN Number" />
//                 </Form.Group>
//                 <Form.Group className="mt-3">
//                 <Form.Label>
//     MOBILE Number <span className="text-danger fw-bold">*</span>
//   </Form.Label>
                
//                   <Form.Control type="text" placeholder="Enter Your Aadhaar Linked Mobile Number" />
//                 </Form.Group>
//                 <Form.Check 
//   className="mt-3" 
//   type="checkbox" 
//   label={
//     <>
//       I accept the{' '}
//       <a href="/term-cond" target="_blank" rel="noopener noreferrer" className="text-danger">
//         Terms & Conditions
//       </a>{' '}
//       and{' '}
//       <a href="/privacy-pol" target="_blank" rel="noopener noreferrer" className="text-danger">
//         Privacy Policy
//       </a>.
//     </>
//   } 
// />
//                 <Button variant="danger" className="w-100 mt-3">SUBMIT</Button>
//               </Form>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//       <Container className="p-5">
//       <h2 className="text-danger fw-bold">EMI Calculator</h2>
//       <Row>
//         <Col md={7}>
//           <Form>
//             <Form.Group className="mb-4">
//               <Form.Label className="fw-bold">Select the required Loan Amount</Form.Label>
//               <Form.Range min="30000" max="500000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} />
//               <div className="d-flex justify-content-between text-danger">
//                 <span>₹ 30,000</span>
//                 <span className="fw-bold">₹ {loanAmount.toLocaleString()}</span>
//                 <span>₹ 5,00,000</span>
//               </div>
//             </Form.Group>
//             <Form.Group className="mb-4">
//               <Form.Label className="fw-bold">Select the interest rate (p.a)</Form.Label>
//               <Form.Range min="12" max="21" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
//               <div className="d-flex justify-content-between text-danger">
//                 <span>12%</span>
//                 <span className="fw-bold">{interestRate}%</span>
//                 <span>21%</span>
//               </div>
//             </Form.Group>
//             <Form.Group className="mb-4">
//               <Form.Label className="fw-bold">Select EMI in Months</Form.Label>
//               <Form.Range min="12" max="48" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
//               <div className="d-flex justify-content-between text-danger">
//                 <span>12</span>
//                 <span className="fw-bold">{tenure}</span>
//                 <span>48</span>
//               </div>
//             </Form.Group>
//           </Form>
//         </Col>
//         <Col md={5}>
//           <Card className="p-4 shadow" style={{ backgroundColor: "#f1c40f" }}>
//             <h5 className="fw-bold">Your ideal monthly Personal Loan EMI</h5>
//             <div className="mt-3">
//               <p><strong>Principal amount:</strong> <span className="text-danger fw-bold">₹ {loanAmount.toLocaleString()}</span></p>
//               <p><strong>Interest amount:</strong> <span className="text-danger fw-bold">₹ {totalInterest.toFixed(0)}</span></p>
//               <p><strong>Total amount payable:</strong> <span className="text-danger fw-bold">₹ {totalPayment.toFixed(0)}</span></p>
//               <p><strong>Tenure (Months):</strong> <span className="fw-bold">{tenure}</span></p>
//               <h4 className="text-danger fw-bold">Monthly EMI: ₹ {emi.toFixed(0)}</h4>
//             </div>
//           </Card>
//         </Col>
//       </Row>
     
      
//     </Container>
//     <Container className="my-5">
//       <h2 className="mb-4 d-flex justify-content-center fw-bold" style={{color:'#f1c40f '}}>MCLR Rates</h2>
      
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th style={{color:'red'}}>Fixed Rate Loan</th>
//             <th style={{color:'red'}}>1 Yr MCLR</th>
//             <th style={{color:'red'}}>Spread over 1 Yr MCLR</th>
//             <th style={{color:'red'}}>Effective ROI</th>
//             <th style={{color:'red'}}>Reset</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Personal Loan</td>
//             <td>9.40%</td>
//             <td>1.7% to 12.6%</td>
//             <td>11.25% to 22%</td>
//             <td>No Reset</td>
//           </tr>
//         </tbody>
//       </Table>

   
//     </Container>
//       <Footer/>
//     </>
//   );
// };

// export default PersonalLoans;

















// home loan content page which is same 






















"use client";
import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function  PersonalLoans (){
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    otp: "",
    pan: "",
    pincode: "",
    agree: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    otp: "",
    pan: "",
    pincode: "",
    agree: "",
  });

  // Validation patterns
  const patterns = {
    name: /^[a-zA-Z ]{3,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mobile: /^[0-9]{10}$/,
    otp: /^[0-9]{6}$/,
    pan: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    pincode: /^[0-9]{6}$/,
  };

  const validateField = (name: string, value: string | boolean) => {
    let error = "";

    if (typeof value === "string" && !value.trim()) {
      error = "This field is required";
    } else {
      switch (name) {
        case "name":
          if (!patterns.name.test(String(value)))
            error = "Minimum 3 characters required";
          break;
        case "email":
          if (!patterns.email.test(String(value)))
            error = "Invalid email format";
          break;
        case "mobile":
          if (!patterns.mobile.test(String(value)))
            error = "Invalid mobile number";
          break;
        case "otp":
          if (!patterns.otp.test(String(value))) error = "6-digit OTP required";
          break;
        case "pan":
          if (!patterns.pan.test(String(value)))
            error = "Invalid PAN format (e.g. ABCDE1234F)";
          break;
        case "pincode":
          if (!patterns.pincode.test(String(value)))
            error = "6-digit pincode required";
          break;
        case "agree":
          if (!value) error = "You must agree to terms";
          break;
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "pan" ? value.toUpperCase() : val,
    }));

    if (errors[name as keyof typeof errors]) validateField(name, val);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;

    Object.entries(formData).forEach(([name, value]) => {
      isValid = validateField(name, value) && isValid;
    });

    if (isValid) {
      console.log("Form submitted:", formData);
      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        otp: "",
        pan: "",
        pincode: "",
        agree: false,
      });
    }
  };

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What documents are required for a home loan?",
      answer:
        "The required property documents for a home loan can vary depending on the purpose of the loan. For instance, the documentation needed to purchase a new house might differ from what’s required for constructing a home. For a detailed list of documents required for a home loan, it’s best to consult with your lender.",
    },
    {
      question: "Which bank offers the best home loan?",
      answer:
        "The best home loan depends on various factors like interest rates, processing fees, and customer service. Compare multiple banks and financial institutions to find the most suitable option.",
    },
    {
      question: "Can I get a home loan for the full property value?",
      answer:
        "Most lenders finance up to 80-90% of the property value. You may need to arrange the remaining amount as a down payment.",
    },
    {
      question: "What is the maximum home loan I can get?",
      answer:
        "The maximum loan amount depends on factors like your income, credit score, repayment capacity, and the lender's policies.",
      
    },
  ];

  
  const PersonalLoans = () => {
    // EMI Calculator State
    const [loanAmount, setLoanAmount] = useState(500000);
    const [tenure, setTenure] = useState(24);
    const [interestRate, setInterestRate] = useState(11.25);
  
    // EMI Calculation Formula
    const calculateEMI = (P: number, r: number, n: number): number => {
      const monthlyRate = r / (12 * 100);
      return (P * monthlyRate * Math.pow(1 + monthlyRate, n)) / 
             (Math.pow(1 + monthlyRate, n) - 1);
    };
    
   
  
    const emi = calculateEMI(loanAmount, interestRate, tenure);
    const totalPayment = emi * tenure;
    const totalInterest = totalPayment - loanAmount;
  return(
    <>
    <div>chor bazar</div>
      <Navbar />
      <>
        {/* Your main JSX */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
        />
      </>
      <div
        className="container-fluid p-0"
        style={{ fontFamily: "Arial, sans-serif", position: "relative" }}
      >
        {/* Banner Section */}
        <div className="position-relative">
          {/* Background Image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLrLYoBwFtQMcBqHUETmc7pWWD5ZbCrnH7Lg&s"
            className="img-fluid w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            alt="personal Loan"
          />

          {/* Form Container */}
          <div
            className="position-absolute "
            style={{
              top: "20px", // ⬅ Adjust top spacing here
              right: "20px",
              width: "100%",
              maxWidth: "550px",
              maxHeight: "calc(100vh - 100px)", // ⬅ Ensures it fits in screen with space
              overflowY: "hidden",
              background: "#FDFEFE",
              borderRadius: "20px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="border-0" style={{ background: "transparent" }}>
              <h5 className="text-center text-danger mb-1">
                Apply for Personal Loan
              </h5>

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-2">
                  <label className="form-label small ">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className={`form-control form-control-sm ${
                      errors.name && "is-invalid"
                    }`}
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-2">
                  <label className="form-label small">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control form-control-sm ${
                      errors.email && "is-invalid"
                    }`}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Mobile */}
                <div className="mb-2">
                  <label className="form-label small">
                    Mobile Number <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">+91</span>
                    <input
                      type="tel"
                      name="mobile"
                      className={`form-control form-control-sm ${
                        errors.mobile && "is-invalid"
                      }`}
                      placeholder="Enter your mobile number"
                      value={formData.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={10}
                      required
                    />
                  </div>
                  {errors.mobile && (
                    <div className="invalid-feedback d-block">
                      {errors.mobile}
                    </div>
                  )}
                </div>

                {/* OTP */}
                <div className="mb-2">
                  <label className="form-label small">
                    OTP <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="otp"
                    className={`form-control form-control-sm ${
                      errors.otp && "is-invalid"
                    }`}
                    placeholder="Enter OTP"
                    value={formData.otp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={6}
                    required
                  />
                  {errors.otp && (
                    <div className="invalid-feedback d-block">{errors.otp}</div>
                  )}
                </div>

                {/* PAN Card */}
                <div className="mb-2">
                  <label className="form-label small">
                    PAN Card Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="pan"
                    className={`form-control form-control-sm ${
                      errors.pan && "is-invalid"
                    }`}
                    placeholder="Enter PAN card number"
                    value={formData.pan}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={10}
                    required
                  />
                  {errors.pan && (
                    <div className="invalid-feedback">{errors.pan}</div>
                  )}
                </div>

                {/* Pincode */}
                <div className="mb-2">
                  <label className="form-label small">
                    Enter Pincode <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    className={`form-control form-control-sm ${
                      errors.pincode && "is-invalid"
                    }`}
                    placeholder="Enter pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={6}
                    required
                  />
                  {errors.pincode && (
                    <div className="invalid-feedback">{errors.pincode}</div>
                  )}
                </div>

                {/* Agree Checkbox */}
                <div className="mb-2 form-check">
                  <input
                    type="checkbox"
                    name="agree"
                    className={`form-check-input ${
                      errors.agree && "is-invalid"
                    }`}
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label">
                    I agree to the{" "}
                    <a
                      href="/term-cond"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-danger"
                    >
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy-pol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-danger"
                    >
                      Privacy Policy
                    </a>
                  </label>
                  {errors.agree && (
                    <div className="invalid-feedback d-block">
                      {errors.agree}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="text-center mt-auto">
                  <button
                    type="submit"
                    className="bg-danger text-white px-2 py-1 rounded border-0"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Container fluid className="p-4" style={{ backgroundColor: "#FEFEFE" }}>
        <Row>
          {/* Left Side Panel */}
          
          <Col md={4}>
          <Card className="text-white p-4" style={{ backgroundColor: "#588e8a" }}>
            <h4 className="fw-bold text-black">No Hassle, No Delay</h4>
            <h2 className="fw-bold">100% SIMPLE PROCESS</h2>
            <ul className="list-unstyled mt-10">
              <li>✔ PROVIDE YOUR BASIC INFORMATION </li>
              <li>✔ PICK THE BEST OFFER FOR YOU</li>
              <li>✔ RECEIVE YOUR LOAN WITHOUT THE WAIT </li>
            </ul>
          </Card>
        </Col>

          {/* Center Image Section */}
          <Col md={4} className="text-center d-flex flex-column align-items-center justify-content-center">
          <img src="https://img.freepik.com/free-photo/excited-ceo-corporate-man-manager-pointing-aside-promo-text-showing-left-banner-smiling-amazed-standing-white-background_176420-53107.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid" alt="Loan Offer" className="img-fluid" />
          {/* <img src="https://img.freepik.com/free-photo/man-presenting-something_1368-3697.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid" alt="Loan Offer" className="img-fluid" /> */}
            <h4 className="fw-bold text-dark me-0 mt-3">LOW INTEREST RATES</h4>
          </Col>

          {/* Right Side Form */}
          <Col md={4}>
          <Card className="text-white p-4" style={{ backgroundColor: "#588e8a" }}>
            <h4 className="fw-bold text-black">Fast & Easy</h4>
            <h2 className="fw-sm-bold">Empower Yourself with Our Smart Solution</h2>
            <ul className="list-unstyled mt-4">
              <li>✔ SUBMIT DETAILS SECURELY </li>
              <li>✔ GET FUNDS TRANSFERRED QUICKLY</li>
              <li>✔ GET MONEY IN YOUR ACCOUNT</li>
            </ul>
          </Card>
        </Col>
        </Row>
      </Container>

      <Container fluid className="py-5 text-center mt-0">
        {" "}
        {/* Use fluid to make it full-width */}
        <h2 style={{ fontWeight: "bold", color: "#27543a " }}>
        Fast Approvals, Safe Process That’s the Prefinn Promise
        </h2>
        <Row className="mt-4 no-gutters">
          {" "}
          {/* Use no-gutters to remove padding between columns */}
          <Col xs={12} md={4}>  
            <Card
              className="p-3 shadow-sm"
              style={{
                borderRadius: "25px",
                minHeight: "120px",
                width: "100%",
                margin: "0",
                backgroundColor: "#f0f8ff",
              }}
            >
              <h5 style={{ color: "dark", fontWeight: "bold" }}>
              Get Instant Approval
              </h5> 
              <p style={{ fontSize: "14px", color: "#008080" }}>
              Quick Decisions, Faster Access to Funds
              Receive loan approval in real time .
              </p>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card
              className="p-3 shadow-sm"
              style={{
                borderRadius: "25px",
                minHeight: "120px",
                width: "100%",
                margin: "0",
                backgroundColor: "#f0f8ff",
              }}
            >
              <h5 style={{ color: "dark", fontWeight: "bold" }}>
              Your Ideal Personal Loan Starts Here
              </h5>
              <p style={{ fontSize: "14px", color: "#008080" }}>
              From low interest rates to fast approvals ,Prefinn brings it all together lenders.
              </p>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card
              className="p-3 shadow-sm"
              style={{
                borderRadius: "25px",
                minHeight: "120px",
                width: "100%",
                margin: "0",
                backgroundColor: "#f0f8ff",
              }}
            >
              <h5 style={{ color: "dark", fontWeight: "bold" }}>
              Fast Funds, No Fuss – Make It Happen Now
              </h5>
              <p style={{ fontSize: "14px", color: "#008080" }}>
              Personal loans designed to match your life and your pace.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="py-5 mt-0"
        style={{ backgroundColor: "#f2f5ff", borderRadius: "0" }}
      >
        {" "}
        {/* Use fluid to make it full-width */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold" style={{ color: "#27543a " }}>
            The Prefinn Promise
            </h2>
            <p className="text-muted">Smart Secure Personal Loans</p>
          </Col>
        </Row>
        <Row className="justify-content-center no-gutters">
          {" "}
          {/* Use no-gutters to remove padding between columns */}
          {[
            {
              title: "No More Delays, Get Your Loans Quick",
              text: "Our hassle-free home loan process makes getting approved a breeze.",
            },
            {
              title: "Expert & Dedicated Help At Every Step",
              text: "Your trusted team, from start to dream with your dedicated loan advisor.",
            },
            {
              title: "Low Interest Rates, Big Savings",
              text: "Get personalized home loan matches from top lenders to fit your needs.",
            },
            {
              title: "Honest Loans, No Surprises",
              text: "What you see is what you get. No hidden charges.",
            },
          ].map((item, index) => (
            <Col xs={12} sm={6} md={3} className="mb-0" key={index}>
              {" "}
              {/* Set mb-0 to remove bottom margin */}
              <Card
                className="p-3 border-0 shadow-sm text-center"
                style={{
                  transition: "background-color 0.3s ease-in-out",
                  cursor: "pointer",
                  minHeight: "200px",
                  borderRadius: "25px",
                  width: "100%",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f0f8ff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#588e8a")
                }
              >
                <Card.Body>
                  <h5>{item.title}</h5>
                  <p className="text-muted">{item.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="text-center mt-4">
          <Col></Col>
        </Row>
      </Container>
      

      <Container fluid className="py-5 mt-0">
        {" "}
        {/* Full-width container */}
        <h2 className="text-center mb-4 fw-bold ">FAQs</h2>
        {faqs.map((faq, index) => (
          <Card
            key={index}
            className="mb-3 border-0 shadow-sm"
            style={{
              transition: "all 0.3s ease-in-out",
              borderRadius: "10px",
              overflow: "hidden", // Ensures rounded corners are respected
            }}
          >
            <Card.Header
              className={`d-flex justify-content-between align-items-center p-3 ${
                openIndex === index ? "bg-light" : "bg-light"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => toggleCard(index)}
            >
              <h6 className="mb-0 fw-bold">
                {index + 1}. {faq.question}
              </h6>
              <Button variant="light" className="rounded-circle shadow-sm">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </Button>
            </Card.Header>
            {openIndex === index && (
              <Card.Body className="px-3">
                <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                  {faq.answer}
                </p>
              </Card.Body>
            )}
          </Card>
        ))}
      </Container>
      <Container className="p-5">
      <h2 className="text-danger fw-bold">EMI Calculator</h2>
      <Row>
        <Col md={7}>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Select the required Loan Amount</Form.Label>
              <Form.Range min="30000" max="500000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} />
              <div className="d-flex justify-content-between text-danger">
                <span>₹ 30,000</span>
                <span className="fw-bold">₹ {loanAmount.toLocaleString()}</span>
                <span>₹ 5,00,000</span>
              </div>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Select the interest rate (p.a)</Form.Label>
              <Form.Range min="12" max="21" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
              <div className="d-flex justify-content-between text-danger">
                <span>12%</span>
                <span className="fw-bold">{interestRate}%</span>
                <span>21%</span>
              </div>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="fw-bold">Select EMI in Months</Form.Label>
              <Form.Range min="12" max="48" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
              <div className="d-flex justify-content-between text-danger">
                <span>12</span>
                <span className="fw-bold">{tenure}</span>
                <span>48</span>
              </div>
            </Form.Group>
          </Form>
        </Col>
        <Col md={5}>
          <Card className="p-4 shadow" style={{ backgroundColor: "#f1c40f" }}>
            <h5 className="fw-bold">Your ideal monthly Personal Loan EMI</h5>
            <div className="mt-3">
              <p><strong>Principal amount:</strong> <span className="text-danger fw-bold">₹ {loanAmount.toLocaleString()}</span></p>
              <p><strong>Interest amount:</strong> <span className="text-danger fw-bold">₹ {totalInterest.toFixed(0)}</span></p>
              <p><strong>Total amount payable:</strong> <span className="text-danger fw-bold">₹ {totalPayment.toFixed(0)}</span></p>
              <p><strong>Tenure (Months):</strong> <span className="fw-bold">{tenure}</span></p>
              <h4 className="text-danger fw-bold">Monthly EMI: ₹ {emi.toFixed(0)}</h4>
            </div>
          </Card>
        </Col>
      </Row>
     
      
    </Container>
      <Footer />
    </>
  );
};
}


