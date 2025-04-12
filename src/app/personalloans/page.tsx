
"use client";
import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function PersonalLoans() {

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
            src="https://img.freepik.com/premium-photo/indian-real-estate-business-concept-showing-3d-model-house-with-keys-paper-currency-notes-calculator-selective-focus_466689-61481.jpg?ga=GA1.1.56492630.1742847583&semt=ais_country_boost&w=740"
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
            <h4 className="fw-bold text-success me-0 mt-3">LOW INTEREST RATES</h4>
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
                  (e.currentTarget.style.backgroundColor = "#588e8a")
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
      <Container className="p-5">
        <h2 className="text-success fw-bold">EMI Calculator</h2>
        <Row>
          <Col md={7}>
            <Form>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Select the required Loan Amount</Form.Label>
                <Form.Range min="30000" max="500000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} />
                <div className="d-flex justify-content-between text-success">
                  <span>₹ 30,000</span>
                  <span className="fw-bold">₹ {loanAmount.toLocaleString('en-IN')}</span>
                  <span>₹ 5,00,000</span>
                </div>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Select the interest rate (p.a)</Form.Label>
                <Form.Range min="12" max="21" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
                <div className="d-flex justify-content-between text-success">
                  <span>12%</span>
                  <span className="fw-bold">{interestRate}%</span>
                  <span>21%</span>
                </div>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Select EMI in Months</Form.Label>
                <Form.Range min="12" max="48" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
                <div className="d-flex justify-content-between text-success">
                  <span>12</span>
                  <span className="fw-bold">{tenure}</span>
                  <span>48</span>
                </div>
              </Form.Group>
            </Form>
          </Col>
          <Col md={5}>
            <Card className="p-4 shadow" style={{ backgroundColor: "#588e8a" }}>
              <h5 className="fw-bold" style={{color:"white"}}>Your monthly Personal Loan EMI</h5>
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



