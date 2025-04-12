// "use client";
// import React from "react";
// const workingCapitalloans = () => {
//     return (
//       <div>
//         <h1>Home Loans</h1>
//         <p>Details about home loans...</p>
//         <h2>hlo</h2>
//       </div>
//     );
//   };
  
// export default workingCapitalloans;










"use client";
import React, { useState,useEffect } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function workingCapitalloans() {

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
      question: " What can I use a personal loan for?",
      answer:
        "A personal loan can be used for almost any type of expense ranging from big ticket appliance purchases and home renovations to luxury vacations and debt consolidation. Some other cases where personal loans may be useful include payment to unexpected medical bills, investment in business, fixing your car, down payment of new house and much more.",
    },
    {
      question: "Is there a minimum personal loan amount that I need to borrow?",
      answer:
        "Yes. Though the exact amount of the minimum personal loan amount varies from one lending institution to another, most lenders have set their minimum personal loan principal amount at Rs. 30,000",
    },
    {
      question: "What is the tenure of a personal loan?",
      answer:
        "Personal loans feature tenure of 1 year to 5 years or 12 to 60 months. In rare cases, shorter or longer personal loan tenures may be allowed by the borrower on a case by case basis.",
    },
    {
      question: "How to repay the personal loan?",
      answer:
        "The loan can be repaid in the form of Equated Monthly Installment (EMI) via post-dated cheques   drawn in favour of the bank or by releasing a mandate allowing payment through the Electronic Clearing Services (ECS) system.",

    },
    {
      question: "What are the key documents required when applying for a personal loan?",
      answer:
        <ul>
          <li>
            Income proof (Salary Slip for salaried/recent acknowledged ITR for self-employed)
          </li>
          <li>
          Address Proof Documents
          </li>
          <li>
          Identity Proof Documents and others
          </li>
          <li>
          Certified copies of degree/license (in case of self-employed professional) and others as per the lender’s criteria.
          </li>
        </ul>

    }
  ];
  const [loanAmount, setLoanAmount] = useState(30000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(12);

  const [emi, setEmi] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure;

    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const total = emiValue * months;
    const interest = total - principal;

    setEmi(emiValue);
    setTotalPayment(total);
    setTotalInterest(interest);
  }, [loanAmount, interestRate, tenure]);


  const features = [
    {
      title: "Flexible Loan Tenure",
      description: "Flexible and longer repayment options",
      image: "https://cdn-icons-png.flaticon.com/128/9196/9196974.png",
      bgColor: "#459fa6",
    },
    {
      title: "Balance Transfer",
      description:
        "Transfer Existing Business Loan at lower EMIs with competitive rates",
      image: "https://cdn-icons-png.flaticon.com/128/3707/3707848.png",
      bgColor: "#459fa6", 
    },
    {
      title: "Business Loan in Seconds",
      description:
        "Online and Instant loan disbursal for Banks existing current account holders",
      image: "https://cdn-icons-png.flaticon.com/128/9172/9172420.png",
      bgColor: "#459fa6 ",
    },
    {
      title: "No Collateral & Guarantor",
      description: "The business loan is collateral-free and requires no guarantor",
      image: "https://cdn-icons-png.flaticon.com/128/17480/17480230.png",
      bgColor: "#459fa6",
    },
  ];
  const documents = [
    "PAN Card",
    "Aadhar Card",
    "Bank Statement",
    "Registration Proof",
  
  ];
  return (
    <>
     
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
            src="https://img.freepik.com/premium-photo/india-accounting-concept-showing-accountant-working-income-tax-forms-budget-planning-with-currency-notes-calculator-house-car-3d-models_466689-12354.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
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
              overflowY: "scroll",
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
                Apply for Working Capital Loan
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
                    className={`form-control form-control-sm ${errors.name && "is-invalid"
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
                    className={`form-control form-control-sm ${errors.email && "is-invalid"
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
                      className={`form-control form-control-sm ${errors.mobile && "is-invalid"
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
                    className={`form-control form-control-sm ${errors.otp && "is-invalid"
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
                    className={`form-control form-control-sm ${errors.pan && "is-invalid"
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
                    className={`form-control form-control-sm ${errors.pincode && "is-invalid"
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
                    className={`form-check-input ${errors.agree && "is-invalid"
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

   

         

          {/* Center Image Section */}
           <h2 className="fw-bold text-dark me-0 mt-3 d-flex justify-content-center">Keeping Indian Businesses Running Smoothly
           </h2>
  
{/* Left Side Form */}
      
<Container fluid className="p-4" style={{ backgroundColor: "#FEFEFE" }}>
        <Row>
        <Col md={4}>
            <Card className="text-white p-4" style={{ backgroundColor: "#459fa6  " }}>
              <h4 className="fw-bold text-black">Working Capital Support</h4>
              <h2 className="fw-sm-bold">Keep Your Business Running Without a Hitch</h2>
              <ul className="list-unstyled mt-4">
                <li>✔ Quick Access to Funds for Daily Operations</li>
                <li>✔ Flexible Repayment Options</li>
                <li>✔ Flexible Repayment Options</li>
              </ul> 
            </Card>
          </Col>
           {/* Bottom Side Form */}
           <Col md={4}>
            <Card className="text-white p-4" style={{ backgroundColor: "#459fa6 " }}>
              <h4 className="fw-bold text-black">Working Capital Made Easy</h4>
              <h2 className="fw-sm-bold"> Instant Access  Funds for Smooth Business Operations</h2>
              <ul className="list-unstyled mt-4">
                <li>✔ Effortless Online Application </li>
                <li>✔ Expert Support Throughout the Process</li>
                <li>✔ Customized Solutions </li>
              </ul>
            </Card>
          </Col>
          {/*#459fa6*/}
          {/* Right Side Form */}
          <Col md={4}>
            <Card className="text-white p-4" style={{ backgroundColor: "#459fa6 " }}>
              <h4 className="fw-bold text-black">Prefinn</h4>
              <h2 className="fw-sm-bold">Access Working Capital Instantly for Smooth Functioning </h2>
              <ul className="list-unstyled mt-4">
                <li>✔ Fast & Flexible Funding for Daily Business Needs </li>
                <li>✔ Designed for Growth-Focused Entrepreneurs</li>
                
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
      
      <div className="container-fluid bg-light mb-6 py-5">
        <div className="container d-flex flex-column flex-lg-row align-items-center">
          <div className="text-center text-lg-start me-lg-5">
            <h1 className="fw-bold">Keep Your Business Moving, Always</h1>
            <p  style={{color:"#459fa6"}}>Presenting Working Capital Loans by Prefinn</p>
          </div>
          <div className="mt-4 mt-lg-0">
            <img
              src="https://media.gettyimages.com/id/1472542723/photo/female-client-handshaking-with-a-bank-teller-at-bank-counter-stock-photo.jpg?s=612x612&w=0&k=20&c=B39GwnEQ83cSFMxJJm7JHIU50Trgh7KF_6eQl6H8lt8="
              alt="Businessman on Phone"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <div className="container mt-5">
          <div className="row text-center text-lg-start">
            <div className="col-md-6 col-lg-3 mb-4">
              <i className="bi bi-file-earmark-text fs-1 text-danger"></i>
              <p style={{color:"#"}}>
              💸Prefinn offers flexible working capital loans without the need for any collateral, empowering both self-employed individuals 
              </p>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 ">
              <i className="bi bi-person-check fs-1 text-danger"></i>
              <p style={{color:"#"}}>
              📊Speedy Approvals. Zero Collateral.
              Funding Up to ₹50 Lakhs Using Only Your Bank Statement
              </p>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <i className="bi bi-calendar-check fs-1 text-danger"></i>
              <p style={{color:"#"}}>💼 Get Up to ₹50 Lakhs in Working Capital
              Powered by Your GST Filing History—No Collateral Needed</p>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <i className="bi bi-speedometer fs-1 text-danger"></i>
              <p style={{color:"#"}}>⚙️ Fast & Seamless Process
              Minimal Documentation, Maximum Convenience for Working Capital Loans</p>
            </div>
          </div>
        </div>
      </div>
      <Container
        fluid
        className="py-5 mt-0"
        style={{ backgroundColor: "#f2f5ff", borderRadius: "0" }}
      >
      <h2 className="fw-bold  mb-6 mt-6 py-0 text-center">Features & Benefits of Business Loan</h2>
      <div className="row g-3">
        {features.map((feature, index) => (
          <div className="col-12 col-md-6 col-lg-3  mb-6 mt-6 py-2 d-flex align-items-stretch" key={index}>
            <div
              className="card p-4 shadow-sm border-0 w-80"
              style={{
                backgroundColor: feature.bgColor,
                borderRadius: "12px",
                height: "auto",
                width: "100%",
              }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="img-fluid mx-auto mb-1"
                style={{ borderRadius: "50%", maxWidth: "80px", height: "auto" }}
              />
              <h5 className="fw-bold">{feature.title}</h5>
              <p className="text-muted">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      </Container>
      <Container
        fluid
        className="py-17 mt-0"
        style={{ backgroundColor: "#f2f5ff", borderRadius: "0" }}
      >
        {" "}
        {/* Use fluid to make it full-width */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold" style={{ color: "#000000 " }}>
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
              title: "No More Waiting, Get Your Personal Loan Fast",
              text: "Our quick and easy process gets you the funds when you need them most.",
            },
            {
              title: "Loan Experts Who Care",
              text: "Count on expert support and a dedicated advisor to simplify your personal loan journey.",
            },
            {
              title: "Customized Loans, Professional Service",
              text: "Get matched with reputable lenders offering low-interest personal loans tailored for you.",
            },
            {
              title: "Smart Financing Here",
              text: "Benefit from low rates, flexible tenures, and loan offers.personalized to your financial profile.",
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
                  (e.currentTarget.style.backgroundColor = "#459fa6")
                }
              >
                <Card.Body>
                  <h5>{item.title}</h5>
                  <p style={{color:"#588e8a"}}>{item.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="text-center mt-4">
          <Col></Col>
        </Row>
      </Container>
      <Container className="p-5" >
  <h2 className="text-dark fw-bold">Business Loan EMI Calculator</h2>
  <Row>
    <Col md={7}>
      <Form>
        <Form.Group className="mb-4">
          <Form.Label className="fw-bold">Select the required Loan Amount</Form.Label>
          <Form.Range
            min="200000"
            max="7500000"
            step="100000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="flex-grow-1 me-2"
          />
          <div className="d-flex justify-content-between text-muted px-1">
            <span>2L</span>
            <span>16L</span>
            <span>31L</span>
            <span>45L</span>
            <span>60L</span>
            <span>75L</span>
          </div>
        </Form.Group>

        <Form.Group className="mb-4">
  <Form.Label className="fw-bold">Interest Rate (p.a)</Form.Label>
  <div className="d-flex justify-content-between align-items-center">
    <Form.Range
      min="12"
      max="21"
      step="1"
      value={interestRate}
      onChange={(e) => setInterestRate(Number(e.target.value))}
      className="flex-grow-1 me-2"
    />
    <span className="fw-bold">{interestRate}%</span>
  </div>
  <div className="d-flex justify-content-between text-muted px-1 mt-1">
    <span>12%</span>
    <span>14%</span>
    <span>16%</span>
    <span>18%</span>
    <span>20%</span>
    <span>22%</span>
  </div>
</Form.Group>


            <Form.Group className="mb-4">
  <Form.Label className="fw-bold">Tenure (in months)</Form.Label>
  <div className="d-flex justify-content-between align-items-center">
    <Form.Range
      min="12"
      max="96"
      step="1"
      value={tenure}
      onChange={(e) => setTenure(Number(e.target.value))}
      className="flex-grow-1 me-2"
    />
    <span className="fw-bold">{tenure}</span>
  </div>
  <div className="d-flex justify-content-between text-muted px-1 mt-1">
    <span>12</span>
    <span>29</span>
    <span>46</span>
    <span>62</span>
    <span>79</span>
    <span>96</span>
  </div>
</Form.Group>
          </Form>
        </Col>

        <Col xs={12} md={5} className="p-0">  {/* Full width on small screens */}
  <Card className="p-4 shadow h-100" style={{ backgroundColor: "#459fa6", width: '100%' }}> {/* Ensure full width */}
    <h5 className="fw-bold text-white">Your Business Loan EMI</h5>
    <div className="mt-3">
      <p><strong>Principal amount:</strong> <span className="text-dark fw-bold">₹ {loanAmount.toLocaleString()}</span></p>
      <p><strong>Interest amount:</strong> <span className="text-dark fw-bold">₹ {totalInterest.toFixed(0)}</span></p>
      <p><strong>Total amount payable:</strong> <span className="text-dark fw-bold">₹ {totalPayment.toFixed(0)}</span></p>
      <p><strong>Tenure (Months):</strong> <span className="fw-bold">{tenure}</span></p>
      <h4 className="text-white fw-bold">Monthly EMI: ₹ {emi.toFixed(0)}</h4>
    </div>
  </Card>
</Col>
      </Row>
    </Container>
    <Container className="my-1">
      
      <div
        style={{
         
        }}
      />
      <Container className="my-5">
      <Card className="p-4 shadow-lg">
        <h3 className="fw-bold mb-4" style={{ color: "#00000" }}>
          Documents we require
        </h3>
        <div
          style={{
            height: "3px",
            width: "30px",
            marginBottom: "25px",
          }}
        />

        <Row className="align-items-center">
          {/* Image Section - Left Side */}
          <Col md={5} className="text-center mb-4 mb-md-0">
            <img
              src="https://img.freepik.com/premium-photo/man-giving-thumbs-up-sign-that-says-thumbs-up_488478-171.jpg?ga=GA1.1.56492630.1742847583&semt=ais_country_boost&w=740"
              alt="Loan Offer"
              className="img-fluid"
              style={{ borderRadius: "10px", maxWidth: "100%" }}
            />
          </Col>

          {/* Document Cards Section - Right Side */}
          <Col md={7}>
            <Row className="g-3">
              {documents.map((doc, index) => (
                <Col key={index} xs={6} md="auto">
                  <Card
                    className="text-center shadow-sm"
                    style={{
                      padding: "15px 20px",
                      borderRadius: "10px",
                      minWidth: "160px",
                    }}
                  >
                    {doc}
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Card>
    </Container>
    
    </Container>
      <Container fluid className="py-5 mt-0">
        {" "}
        {/* Full-width container */}
        <h2 className="text-center mb-4 fw-bold ">FAQs</h2>
        {faqs.map((faq, index) => (
          <Card
            key={index}
            className="mb-3 border-4 shadow-sm"
            style={{
              transition: "all 0.3s ease-in-out",
              borderRadius: "10px",
              overflow: "hidden", // Ensures rounded corners are respected
            }}
          >
            <Card.Header
              className={`d-flex justify-content-between align-items-center p-3 ${openIndex === index ? "bg-light" : "bg-light"
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
     
      <Footer />
    </>
  );
};















