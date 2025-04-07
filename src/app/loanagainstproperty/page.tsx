// "use client";
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Tab, Tabs, Col } from "react-bootstrap";
// import Footer from "@/components/footer";
// import Navbar from "@/components/navbar";
// import Table from "react-bootstrap/Table";

// const features = [
//   {
//     icon: "🏠",
//     title: "Collateral",
//     description:
//       "A Mortgage Loan Against Property requires you to pledge a residential or commercial property as collateral, offering security to your lender.",
//   },
//   {
//     icon: "📅",
//     title: "Tenure",
//     description:
//       "Loans against property typically have a repayment period of 10-30 years, allowing for manageable monthly payments.",
//   },
//   {
//     icon: "💰",
//     title: "Interest Rates",  
//     description:
//       "You can choose between fixed rates, which ensure predictable monthly payments, or floating rates, which fluctuate with market conditions.",
//   },
//   {
//     icon: "📉",
//     title: "Loan Amount",
//     description:
//       "The amount of a Mortgage Loan Against Property depends on the property's market value and repayment capacity. Lenders typically offer 60-70% of the property value as a loan amount.",
//   },
//   {
//     icon: "🔄",
//     title: "Flexible Repayment Options",
//     description:
//       "Features like part prepayment, balance transfer, and customized plans for self-employed borrowers make Mortgage Loans adaptable to diverse financial needs.",
//   },
// ];

// const faqs = [
//   {
//     question: "Do I need to pay a fee to avail of a Loan Against Property?",
//     answer:
//       "Yes, there are processing charges and prepayment penalties depending on the loan agreement.",
//   },
//   {
//     question: "What is a Mortgage Loan tenure?",
//     answer:
//       "The tenure of a mortgage loan usually ranges from 5 to 30 years, depending on the financial institution.",
//   },
//   {
//     question: "How can one repay the Mortgage Loan ahead of schedule?",
//     answer:
//       "You can repay your Mortgage Loan by making additional or lump sum payments to reduce your outstanding balance. However, some banks may charge a prepayment penalty. It’s essential to check the prepayment policy before making extra payments.",
//     highlight: true,
//   },
//   {
//     question:
//       "Do you need to provide collateral or security for a Mortgage Loan?",
//     answer: "Yes, a mortgage loan requires property as collateral.",
//   },
//   {
//     question: "Can I get an overdraft against my property?",
//     answer:
//       "Some banks provide overdraft facilities based on your mortgage loan.",
//   },
// ];

// const LoanAgainstProp = () => {
//   return (
//     <>
//       <Navbar/>

//       <div className="container-fluid p-0" style={{ fontFamily: "Arial, sans-serif" }}>
//       {/* Banner Section */}
//        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-top p-4" style={{ background: "#FDFEFE" }}>
//          <div className="text-center text-lg-start p-4">
//          <img
//             src="https://campaigns.icicibank.com/hl/loanAgainstProperty/main/dist/img/lap_banner_desktop.png " // Replace with actual image URL
//             alt="Smiling Woman"
//             width="1200" 
//             height="800"
//              className="img-fluid d-flex flex-column flex-md-row gap-10 mt-4 "
//            />
         
//          </div>
//         <div>
           
//               <div className="container mt-2">
//          <div className="card p-4 shadow" style={{ background: "#FDFEFE" }}>
//            <h3 className="text-center text-danger">Apply now to get an online sanction</h3>
//            <form>
//            <div className="mb-3">
//                <label className="form-label">Name</label>
//                <input type="text" className="form-control" placeholder="Enter your full name" required />
//              </div>
//              <div className="mb-3">
//                <label className="form-label">Email</label>
//                <input type="email" className="form-control" placeholder="Enter your email" required />
//              </div>
//             <div className="mb-3">
//               <label className="form-label">Mobile Number</label>
//                <input type="tel" className="form-control" placeholder="Enter your mobile number" required />
//              </div>
//              <div className="mb-3">
//                <label className="form-label">OTP</label>
//                <input type="text" className="form-control" placeholder="Enter OTP" required />
//            </div>
//              <div className="mb-3">
//                <label className="form-label">PAN Card Number</label>
//               <input type="text" className="form-control" placeholder="Enter PAN card number" required />
//              </div>
//              <div className="mb-3">
//                <label className="form-label">Enter Pincode</label>
//                <input type="text" className="form-control" placeholder="Enter pincode" required />
//              </div>
//              <div className="mb-3">
//                <input type="checkbox" required /> I agree to the Terms & Conditions
//              </div>
//              <button className="btn btn-danger w-100">Apply Now</button>
//            </form>
//          </div>
//        </div>
//         </div>
//        </div>
//     </div>
    
       

//       {/* Tabs Section */}
//       <Container className="mt-4">
//         <Tabs defaultActiveKey="features" id="loan-tabs" className="mb-3">
//           <Tab eventKey="features" title="FEATURES">
//             <ul>
//               <li>★ Maximum repayment tenure up to 180 months</li>
//               <li>★ EMI Starting at Rs.1268/- per Lakh</li>
//               <li>★ Holiday/Moratorium period up to 6 months</li>
//               <li>
//                 ★ Takeover/Balance Transfer facility with additional Loan amount
//               </li>
//               <li>
//                 ★ Reducible Overdraft facility up to Rs.1500.00 lacs is
//                 available
//               </li>
//             </ul>
//           </Tab>
//           <Tab eventKey="eligibility" title="ELIGIBILITY">
//             <ul>
//               <li>★ Resident Indian/NRI/PIO are eligible</li>
//               <li>★ Individuals: Salaried/Self-employed/Professionals</li>
//               <li>★ Holiday/Moratorium period up to 6 months</li>
//               <li>
//                 ★ Regular and confirmed Employees / individuals with high net
//                 worth Professionals, self-employed and people engaged in trade,
//                 commerce and business, engaged in business / profession for a
//                 minimum period of 3 years.
//               </li>
//               <li>
//                 ★ Individuals in permanent service - Max. 60 years or Retirement
//                 age whichever is earlier.
//               </li>
//             </ul>
//           </Tab>
//         </Tabs>
//       </Container>

//       {/* Features Section */}
//       <Container className="text-center my-5">
//         <h2 className="fw-bold">Features of Loan Against Property</h2>
//         <div className="row mt-4">
//           {features.map((feature, index) => (
//             <Col key={index} md={2} sm={12} className="text-center mx-auto">
//               <div className="p-3">
//                 <div
//                   className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
//                   style={{
//                     width: "80px",
//                     height: "80px",
//                     backgroundColor: "#B0184A",
//                   }}
//                 >
//                   <span style={{ fontSize: "32px", color: "white" }}>
//                     {feature.icon}
//                   </span>
//                 </div>
//                 <h5 className="fw-bold">{feature.title}</h5>
//                 <p className="text-muted" style={{ fontSize: "14px" }}>
//                   {feature.description}
//                 </p>
//               </div>
//             </Col>
//           ))}
//         </div>
//       </Container>

//       {/*interest rate section */}

//       <Container className="mt-5">
//         <h3 className="fw-bold text-center">
//           Eligibility criteria for Mortgage Loan
//         </h3>
//         <Table bordered className="mt-3">
//           <thead>
//             <tr style={{ backgroundColor: "#8A0C3C", color: "white" }}>
//               <th style={{ color: "blue" }}>Category</th>
//               <th style={{ color: "blue" }}>
//                 Loan Against Property Eligibility Criteria
//               </th>
//               <th style={{ color: "blue" }}>Age Requirement</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Salaried Individuals</td>
//               <td>
//                 Must be in permanent government or reputed company service
//               </td>
//               <td>24 to superannuation</td>
//             </tr>
//             <tr>
              
//               <td>Self-Employed</td>
//               <td>Must file Income Tax Returns</td>
//               <td>24 to 65 at loan maturity</td>
//             </tr>
//             <tr>
//               <td>Self-Employed Professionals</td>
//               <td>Includes doctors, engineers, CAs, etc.</td>
//               <td>24 to 65 at loan maturity</td>
//             </tr>
//             <tr>
              
//               <td>Lease Rental Discounting</td>
//               <td>
//                 Resident Individuals (Funding for ready commercial property will
//                 be based on rental value or property value)
//               </td>
//               <td></td>
//             </tr>
//           </tbody>
//         </Table>
//       </Container>

//       <Container className="my-5">
//         <h3 className="text-center fw-bold">Fees and charges</h3>
//         <Table bordered>
//           <thead>
//             <tr style={{ backgroundColor: "#8A0C3C", color: "white" }}>
//               <th style={{color:"blue"}}>Charge Type</th>
//               <th style={{color:"blue"}}>Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Processing Charges</td>
//               <td>
//                 Up to 1% of the loan amount or ₹10,000 (whichever is higher) +
//                 GST.
//               </td>
//             </tr>
//             <tr>
//               <td>Part Prepayment Charges</td>
//               <td>3% on excess beyond 25% repayment in a quarter</td>
//             </tr>
//             <tr>
//               <td>Foreclosure Charges</td>
//               <td>3% for business use</td>
//             </tr>
//             <tr>
//               <td>Other Charges</td>
//               <td>
//                 Cheque Bounce, Stamp Duty, Duplicate Statement, Photocopy
//                 Issuance, Credit Report, CERSAI, Equitable Mortgage
//               </td>
//             </tr>
//           </tbody>
//         </Table>
//       </Container>

//       {/* FAQs Section */}
//       <Container className="my-5">
//         <h3 className="text-center fw-bold">
//           Frequently Asked Questions (FAQs)
//         </h3>
//         <div className="mt-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="p-3 mb-3 border rounded">
//               <h5
//                 className={`fw-bold mb-2 ${faq.highlight ? "text-dark" : ""}`}
//               >
//                 {index + 1}. {faq.question}
//               </h5>
//               <p className="text-muted">{faq.answer}</p>
//             </div>
//           ))}
//         </div>
//       </Container>

//       <Footer/>
//     </>
//   );
// };

// export default LoanAgainstProp;




































// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const LoanApplication = () => {
//   return (
//     <div className="container-fluid p-0" style={{ fontFamily: "Arial, sans-serif" }}>
//       {/* Banner Section */}
//       <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between p-4" style={{ background: "#FDFEFE" }}>
//         {/* Left Content */}
//         <div className="text-center text-lg-start p-4">
//           <h1 style={{ color: "#B0184A", fontWeight: "bold" }}>
//             Let us help you write <br />
//             <span style={{ color: "#9C131A" }}>the next chapter of your life!</span>
//           </h1>
//           <div className="d-flex flex-column flex-md-row gap-3 mt-4">
//             <div className="text-center">
//               <img src="/icons/documents.png" alt="Minimal documentation" width="50" />
//               <p>Minimal documentation</p>
//             </div>
//             <div className="text-center">
//               <img src="/icons/money.png" alt="Simplified disbursement" width="50" />
//               <p>Simplified disbursement</p>
//             </div>
//             <div className="text-center">
//               <img src="/icons/projects.png" alt="Approved projects" width="50" />
//               <p>Vast database of approved projects</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Content - Form */}
//         <div className="container mt-2" style={{ maxWidth: "400px" }}>
//           <div className="card p-4 shadow">
//             <h3 className="text-center text-danger">Apply now to get an online sanction</h3>
//             <form>
//               <div className="mb-3">
//                 <label className="form-label">Name</label>
//                 <input type="text" className="form-control" placeholder="Enter your full name" required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Email</label>
//                 <input type="email" className="form-control" placeholder="Enter your email" required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Mobile Number</label>
//                 <input type="tel" className="form-control" placeholder="Enter your mobile number" required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">OTP</label>
//                 <input type="text" className="form-control" placeholder="Enter OTP" required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">PAN Card Number</label>
//                 <input type="text" className="form-control" placeholder="Enter PAN card number" required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Enter Pincode</label>
//                 <input type="text" className="form-control" placeholder="Enter pincode" required />
//               </div>
//               <div className="mb-3">
//                 <input type="checkbox" required /> I agree to the Terms & Conditions
//               </div>
//               <button className="btn btn-danger w-100">Apply Now</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoanApplication;













































































// "use client";
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Tab, Tabs, Col, Row, Form, Button, Card, Table } from "react-bootstrap";
// import { Doughnut } from "react-chartjs-2";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// // import { Doughnut } from "react-chartjs-2";

// // Register required elements
// ChartJS.register(ArcElement, Tooltip, Legend);


// const LoanAgainstProp = () => {
//   const [loanAmount, setLoanAmount] = useState(40000000);
//   const [interestRate, setInterestRate] = useState(9);
//   const [tenure, setTenure] = useState(10);

//   // EMI Calculation Formula
//   const calculateEMI = (P:number, R:number, N:number) => {  
//     const monthlyRate = R / 1200;
//     const months = N * 12;
//     return (P * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
//   };

//   const emi = calculateEMI(loanAmount, interestRate, tenure);
//   const totalPayment = emi * tenure * 12;
//   const interestPayable = totalPayment - loanAmount;

//   // Chart Data
//   const chartData = {
//     labels: ["Principal Amount", "Interest Payable"],
//     datasets: [
//       {
//         data: [loanAmount, interestPayable],
//         backgroundColor: ["#D9531E", "#F8E7DD"],
//         borderWidth: 0,
//       },
//     ],
//   };

//   return (
//     <>
//       <Navbar />

//       {/* Banner Section */}
//       <Container fluid className="p-0">
//         <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center p-0 " style={{ background: "#FDFEFE" }}>
//         <img
//   src="https://campaigns.icicibank.com/hl/loanAgainstProperty/main/dist/img/lap_banner_desktop.png"
//   alt="Loan Banner"
//   className="img-fluid"
//   // style={{ maxWidth: "100%", height: "auto" }} // This should be separate from className
// />

//         </div>
//       </Container>

//       {/* Loan Application Form */}
//       <Container className="mt-4">
//         <Card className="p-4 shadow">
//           <h3 className="text-center text-danger">Apply now for an Online Sanction</h3>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Name</Form.Label>
//               <Form.Control type="text" placeholder="Enter your full name" required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" placeholder="Enter your email" required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Mobile Number</Form.Label>
//               <Form.Control type="tel" placeholder="Enter your mobile number" required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>OTP</Form.Label>
//               <Form.Control type="text" placeholder="Enter OTP" required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>PAN Card Number</Form.Label>
//               <Form.Control type="text" placeholder="Enter PAN card number" required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Enter Pincode</Form.Label>
//               <Form.Control type="text" placeholder="Enter pincode" required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Check type="checkbox" label="I agree to the Terms & Conditions" required />
//             </Form.Group>
//             <Button className="btn btn-danger w-100">Apply Now</Button>
//           </Form>
//         </Card>
//       </Container>

//       {/* LAP Calculator */}
//       <Container className="py-5">
//         <Row className="justify-content-center">
//           <Col lg={5} className="pe-lg-5">
//             <h3 className="fw-bold text-danger">LAP Calculator</h3>
//             <Form.Group className="my-3">
//               <Form.Label>Loan Amount</Form.Label>
//               <Form.Control type="text" value={`₹ ${loanAmount.toLocaleString()}`} readOnly className="mb-2" />
//               <Form.Range min="100000" max="100000000" step="100000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} />
//             </Form.Group>
//             <Form.Group className="my-3">
//               <Form.Label>Interest Rate</Form.Label>
//               <Form.Control type="text" value={`${interestRate}%`} readOnly className="mb-2" />
//               <Form.Range min="1" max="20" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
//             </Form.Group>
//             <Form.Group className="my-3">
//               <Form.Label>Tenure (Years)</Form.Label>
//               <Form.Control type="text" value={`${tenure} years`} readOnly className="mb-2" />
//               <Form.Range min="1" max="15" step="1" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
//             </Form.Group>
//           </Col>

//           <Col lg={6}>
//             <Card className="p-4 shadow-sm" style={{ background: "#F8E7DD", borderRadius: "10px" }}>
//               <Row>
//                 <Col md={6}><Doughnut data={chartData} options={{ cutout: "75%" }} /></Col>
//                 <Col md={6} className="d-flex flex-column justify-content-center">
//                   <p className="fw-bold text-danger">Principal Amount: ₹ {loanAmount.toLocaleString()}</p>
//                   <p className="fw-bold text-danger">Interest Payable: ₹ {interestPayable.toLocaleString()}</p>
//                   <p className="fw-bold text-danger">Total Payment: ₹ {totalPayment.toLocaleString()}</p>
//                 </Col>
//               </Row>
//               <Button variant="outline-primary" className="w-100 my-3">
//                 Monthly EMI: ₹{emi.toLocaleString(undefined, { maximumFractionDigits: 0 })}
//               </Button>
//               <Button variant="danger" className="w-100">Calculate</Button>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       <Footer />
//     </>
//   );
// };

// export default LoanAgainstProp;












"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
 import Footer from "@/components/footer";
import {
  Container,
  Tab,
  Tabs,
  Col,
  Row,
  Form,
  Button,
  Card,
  Table,
} from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
 
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// Register required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const LoanAgainstProp = () => {
  const [loanAmount, setLoanAmount] = useState(40000000);
  const [interestRate, setInterestRate] = useState(9);
  const [tenure, setTenure] = useState(10);

  // EMI Calculation Formula
  const calculateEMI = (P: number, R: number, N: number) => {
    const monthlyRate = R / 1200;
    const months = N * 12;
    return (P * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  };

  const emi = calculateEMI(loanAmount, interestRate, tenure);
  const totalPayment = emi * tenure * 12;
  const interestPayable = totalPayment - loanAmount;

  // Chart Data
  const chartData = {
    labels: ["Principal Amount", "Interest Payable"],
    datasets: [
      {
        data: [loanAmount, interestPayable],
        backgroundColor: ["#D9531E", "#F8E7DD"],
        borderWidth: 0,
      },
    ],
  };


  

  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <Container fluid className="position-relative p-0">
        {/* Banner Image */}
        <div className="position-relative">
          <img
            src="https://img.freepik.com/premium-photo/home-piggy-security-concept-insurance-real-estate-protecting-gesture-man-house_512283-75.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
            alt="Loan Banner"
            className="img-fluid w-100"
            style={{ height: "550px", objectFit: "cover" }}
          />
        </div>

        {/* Loan Application Form */}
        <div
          className="position-absolute top-50 end-0 translate-middle-y"
          style={{
            width: "400px", // Compact width
            background: "transparent",
            padding: "15px",
            borderRadius: "10px",
            right: "15%",
            maxHeight: "500px", // Ensures form height does not exceed banner
            // overflowY: "auto",
          }}
        >
          <Card className="p-2 shadow">
            <h6 className="text-center text-danger mb-2">Apply Now For Quick Loan Processing</h6>
            <Form>
              <Form.Group className="mb-1">
                <Form.Label className="small">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  required
                  size="sm"
                />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Label className="small">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                  size="sm"
                />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Label className="small">Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Mobile"
                  required
                  size="sm"
                />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Label className="small">OTP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter OTP"
                  required
                  size="sm"
                />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Label className="small">PAN Card Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="PAN Number"
                  required
                  size="sm"
                />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Label className="small">Pincode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Pincode"
                  required
                  size="sm"
                />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Check
                  type="checkbox"
                  label="I agree to the Terms & Conditions"
                  required
                />
              </Form.Group>
              <Button className="btn btn-danger w-100 btn-sm">Apply Now</Button>
            </Form>
          </Card>
        </div>
      </Container>

      {/* LAP Calculator */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={5} className="pe-lg-5">
            <h3 className="fw-bold text-danger">LAP Calculator</h3>
            <Form.Group className="my-3">
              <Form.Label>Loan Amount</Form.Label>
              <Form.Control
                type="text"
                value={`₹ ${loanAmount.toLocaleString()}`}
                readOnly
                className="mb-2"
              />
              <Form.Range
                min="100000"
                max="100000000"
                step="100000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Interest Rate</Form.Label>
              <Form.Control
                type="text"
                value={`${interestRate}%`}
                readOnly
                className="mb-2"
              />
              <Form.Range
                min="1"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label>Tenure (Years)</Form.Label>
              <Form.Control
                type="text"
                value={`${tenure} years`}
                readOnly
                className="mb-2"
              />
              <Form.Range
                min="1"
                max="15"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
              />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Card
              className="p-4 shadow-sm"
              style={{ background: "#F8E7DD", borderRadius: "10px" }}
            >
              <Row>
                <Col md={6}>
                  <Doughnut data={chartData} options={{ cutout: "75%" }} />
                </Col>
                <Col
                  md={6}
                  className="d-flex flex-column justify-content-center"
                >
                  <p className="fw-bold text-danger">
                    Principal Amount: ₹ {loanAmount.toLocaleString()}
                  </p>
                  <p className="fw-bold text-danger">
                    Interest Payable: ₹ {interestPayable.toLocaleString()}
                  </p>
                  <p className="fw-bold text-danger">
                    Total Payment: ₹ {totalPayment.toLocaleString()}
                  </p>
                </Col>
              </Row>
              <Button variant="outline-primary" className="w-100 my-3">
                Monthly EMI: ₹
                {emi.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </Button>
              <Button variant="danger" className="w-100">
                Calculate
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};


export default LoanAgainstProp;
