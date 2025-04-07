








"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Tab, Tabs, Col } from "react-bootstrap";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Table from "react-bootstrap/Table";

const features = [
  {
    icon: "🏠",
    title: "Collateral",
    description:
      "A Mortgage Loan Against Property requires you to pledge a residential or commercial property as collateral, offering security to your lender.",
  },
  {
    icon: "📅",
    title: "Tenure",
    description:
      "Loans against property typically have a repayment period of 10-30 years, allowing for manageable monthly payments.",
  },
  {
    icon: "💰",
    title: "Interest Rates",
    description:
      "You can choose between fixed rates, which ensure predictable monthly payments, or floating rates, which fluctuate with market conditions.",
  },
  {
    icon: "📉",
    title: "Loan Amount",
    description:
      "The amount of a Mortgage Loan Against Property depends on the property's market value and repayment capacity. Lenders typically offer 60-70% of the property value as a loan amount.",
  },
  {
    icon: "🔄",
    title: "Flexible Repayment Options",
    description:
      "Features like part prepayment, balance transfer, and customized plans for self-employed borrowers make Mortgage Loans adaptable to diverse financial needs.",
  },
];

const faqs = [
  {
    question: "Do I need to pay a fee to avail of a Loan Against Property?",
    answer:
      "Yes, there are processing charges and prepayment penalties depending on the loan agreement.",
  },
  {
    question: "What is a Mortgage Loan tenure?",
    answer:
      "The tenure of a mortgage loan usually ranges from 5 to 30 years, depending on the financial institution.",
  },
  {
    question: "How can one repay the Mortgage Loan ahead of schedule?",
    answer:
      "You can repay your Mortgage Loan by making additional or lump sum payments to reduce your outstanding balance. However, some banks may charge a prepayment penalty. It’s essential to check the prepayment policy before making extra payments.",
    highlight: true,
  },
  {
    question: "Do you need to provide collateral or security for a Mortgage Loan?",
    answer: "Yes, a mortgage loan requires property as collateral.",
  },
  {
    question: "Can I get an overdraft against my property?",
    answer: "Some banks provide overdraft facilities based on your mortgage loan.",
  },
];

const LoanAgainstProp = () => {
  return (
    <>
      <Navbar />

      {/* Loan Against Property Section */}
      <Container className="mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className="fw-bold text-dark">Know More About</h5>
            <h2 className="fw-bold text-primary">LOAN AGAINST PROPERTY</h2>
            <p className="text-secondary">
              Let your assets take care of your financial needs
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-shortage-affordable-housing-illustration_23-2150801661.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid"
              alt="Loan Against Property"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </Container>

      {/* Tabs Section */}
      <Container className="mt-4">
        <Tabs defaultActiveKey="features" id="loan-tabs" className="mb-3">
          <Tab eventKey="features" title="FEATURES">
            <ul>
              <li>★ Maximum repayment tenure up to 180 months</li>
              <li>★ EMI Starting at Rs.1268/- per Lakh</li>
              <li>★ Holiday/Moratorium period up to 6 months</li>
              <li>★ Takeover/Balance Transfer facility with additional Loan amount</li>
              <li>★ Reducible Overdraft facility up to Rs.1500.00 lacs is available</li>
            </ul>
          </Tab>
          <Tab eventKey="eligibility" title="ELIGIBILITY">
            <ul>
              <li>★ Resident Indian/NRI/PIO are eligible</li>
              <li>★ Individuals: Salaried/Self-employed/Professionals</li>
              <li>★ Holiday/Moratorium period up to 6 months</li>
              <li>★ Regular and confirmed Employees / individuals with high net worth Professionals, self-employed and people engaged in trade, commerce and business, engaged in business / profession for a minimum period of 3 years.</li>
              <li>★ Individuals in permanent service - Max. 60 years or Retirement age whichever is earlier.</li>
            </ul>
          </Tab>
        </Tabs>
      </Container>

      {/* Features Section */}
      <Container className="text-center my-5">
        <h2 className="fw-bold">Features of Loan Against Property</h2>
        <div className="row mt-4">
          {features.map((feature, index) => (
            <Col key={index} md={2} sm={12} className="text-center mx-auto">
              <div className="p-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#B0184A",
                  }}
                >
                  <span style={{ fontSize: "32px", color: "white" }}>
                    {feature.icon}
                  </span>
                </div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  {feature.description}
                </p>
              </div>
            </Col>
          ))}
        </div>
      </Container>



      {/*interest rate section */}

      <Container className="mt-5">
//       <h3 className="fw-bold text-center">Eligibility criteria for Mortgage Loan</h3>
//       <Table bordered className="mt-3">
//         <thead>
//           <tr style={{ backgroundColor: "#8A0C3C", color: "white" }}>
//             <th style={{color:"blue"}}>Category</th>
//             <th style={{color:"blue"}}>Loan Against Property Eligibility Criteria</th>
//             <th style={{color:"blue"}}>Age Requirement</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Salaried Individuals</td>
//             <td>Must be in permanent government or reputed company service</td>
//             <td>24 to superannuation</td>
//           </tr>
//           <tr>
//             <td>Self-Employed</td>
//             <td>Must file Income Tax Returns</td>
//             <td>24 to 65 at loan maturity</td>
//           </tr>
//           <tr>
//             <td>Self-Employed Professionals</td>
//             <td>Includes doctors, engineers, CAs, etc.</td>
//             <td>24 to 65 at loan maturity</td>
//           </tr>
//           <tr>
//             <td>Lease Rental Discounting</td>
//             <td>Resident Individuals (Funding for ready commercial property will be based on rental value or property value)</td>
//             <td></td>
//           </tr>
//         </tbody>
//       </Table>
//     </Container>

<Container className="my-5">
//       <h3 className="text-center fw-bold">Fees and charges</h3>
//       <Table bordered>
//         <thead>
//           <tr style={{ backgroundColor: "#8A0C3C", color: "white" }}>
//             <th>Charge Type</th>
//             <th>Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Processing Charges</td>
//             <td>
//               Up to 1% of the loan amount or ₹10,000 (whichever is higher) + GST.
//               Upfront fee of ₹5000 + GST
//             </td>
//           </tr>
//           <tr>
//             <td>Part Prepayment Charges</td>
//             <td>3% on excess beyond 25% repayment in a quarter</td>
//           </tr>
//           <tr>
//             <td>Foreclosure Charges</td>
//             <td>3% for business use</td>
//           </tr>
//           <tr>
//             <td>Other Charges</td>
//             <td>
//               Cheque Bounce, Stamp Duty, Duplicate Statement, Photocopy Issuance,
//               Credit Report, CERSAI, Equitable Mortgage
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </Container>

      {/* FAQs Section */}
      <Container className="my-5">
        <h3 className="text-center fw-bold">Frequently Asked Questions (FAQs)</h3>
        <div className="mt-4">
          {faqs.map((faq, index) => (
            <div key={index} className="p-3 mb-3 border rounded">
              <h5 className={`fw-bold mb-2 ${faq.highlight ? "text-dark" : ""}`}>
                {index + 1}. {faq.question}
              </h5>
              <p className="text-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default LoanAgainstProp;
