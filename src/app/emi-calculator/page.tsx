'use client';
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card,  } from 'react-bootstrap';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaFrown, FaSmile } from 'react-icons/fa';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.4);
  const [tenure, setTenure] = useState(20);

  // EMI Calculation Formula
  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;
    return (
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    );
  };

  const emi = Number.isFinite(calculateEMI()) ? Number(calculateEMI().toFixed(0)) : 0;
  const totalAmountPaid = emi * tenure * 12;
  const totalInterest = totalAmountPaid - loanAmount;

  return (
    <>
      <Navbar />
      <Container className="p-4 bg-light rounded">
        <h2 className="text-center">EMI Calculator</h2>
        <h4 className="text-center text-danger">₹{emi.toLocaleString()}</h4>
        
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Required Loan Amount</Form.Label>
              <Form.Range min={100000} max={10000000} step={50000} value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} />
              <Form.Control type="text" value={`₹${loanAmount.toLocaleString()}`} readOnly />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Interest Rate (% P.A.)</Form.Label>
              <Form.Range min={5} max={15} step={0.1} value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
              <Form.Control type="text" value={`${interestRate}%`} readOnly />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Tenure (Years)</Form.Label>
              <Form.Range min={1} max={30} step={1} value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
              <Form.Control type="text" value={`${tenure} Years`} readOnly />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Card className="p-3 shadow-sm">
              <h5>Principal Amount: <strong>₹{loanAmount.toLocaleString()}</strong></h5>
              <h5>Interest Amount: <strong>₹{totalInterest.toLocaleString()}</strong></h5>
              <h5>Total Amount Paid: <strong>₹{totalAmountPaid.toLocaleString()}</strong></h5>
            </Card>
          </Col>
        </Row>

        {/* <div className="text-center mt-3">
          <Button variant="primary" className="me-2">Apply Now</Button>
          <Button variant="outline-secondary">Contact Us</Button>
        </div> */}
      </Container>

      <Container className="p-10 rounded shadow-sm" style={{ backgroundColor: '#f1f3f7' }}>
      <Row className="align-items-center">
        {/* Left Column - Title & Button */}
        <Col md={8} className="text-md-start text-center">
          <h2 className="fw-bold text-dark d-flex justify-content-center">Loan EMI Calculator</h2>
          {/* <Button variant="outline-dark" className="mt-3">
            Unlock Offers Now <span className="ms-2">→</span>
          </Button> */}
        </Col>

        {/* Right Column - Description */}
        <Col md={7} className="text-md-start text-center mt-4 mt-md-0 mb-4 ">
          <p className="text-muted">
            An EMI Calculator is your gateway to understanding the world of Equated 
            Monthly Instalments (EMIs) and making informed decisions about your home 
            loan journey! Whether you're a first-time homebuyer or just looking to 
            refine your financial planning, an EMI calculator is an easy-access financial 
            tool that can do complex calculations in a few milliseconds.
          </p>
          <p className="text-muted">
            Before we move on, let's understand what EMI is. Think of it as your monthly 
            payment to the bank / lender, covering the principal amount borrowed and the 
            interest accrued. It's like paying rent to gradually own your dream home. 
            Read more on our blog <a href="#" className="text-primary">"How is EMI calculated? Tips to optimize your EMI amount."</a>
          </p>
          <p className="text-muted">
            With our EMI calculator, you can input the loan amount, interest rate, tenure, 
            and voila! It magically calculates your monthly EMI, giving you a clear picture 
            of what to expect. Understanding the factors influencing your EMI is also essential, 
            as that can help you orchestrate better outcomes. Your credit score, income stability, 
            and existing debts all play a role in determining your final EMI amount. For example, 
            a higher credit score and stable income indicate a lower risk profile for the lender, 
            potentially leading to better interest rates for you.
          </p>
          <p className="fw-bold">
            And here's a pro tip: <span className="fw-normal text-muted">
            Regularly reviewing your EMI strategy can pay off in the long run. Consider making 
            part-prepayments or refinancing if interest rates drop. It's all about staying 
            flexible and proactive.
            </span>
          </p>
          <p className="text-muted">
            So, whether you're crunching numbers or dreaming about your future home, our 
            EMI calculator guides you every step of the way. Let's turn those dreams into reality.
          </p>
        </Col>
      </Row>
      
      </Container>
      <Footer />
    </>
  );
}
