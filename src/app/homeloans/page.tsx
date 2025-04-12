





"use client";
import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeLoanSection = () => {
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
            src="https://png.pngtree.com/thumb_back/fh260/background/20240602/pngtree-banks-provide-home-loans-and-low-interest-loans-image_15737144.jpg"
            className="img-fluid w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            alt="Home Loan"
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
                Apply for Home Loan
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

      <Container fluid className="py-0 mt-5">
        {" "}
        {/* Use fluid to make it full-width */}
        <Card
          className="p-4 shadow-sm"
          style={{
            backgroundColor: "#f2f5ff",
            borderRadius: "16px",
            width: "100%",
            margin: "0",
          }}
        >
          <Row className="align-items-center">
            {/* Left Text */}
            <Col md={5}>
              <h1 style={{ fontWeight: "bold", color: "dark" }}>
                Prefinn Guarantees You
              </h1>
              <h4 style={{ fontWeight: "bold", color: "#588e8a" }}>
                we offer you the best Home loans
              </h4>
            </Col>

            {/* Right Content */}
            <Col md={7}>
              <Row>
                <Col xs={12} md={4} className="text-center">
                  <p style={{ fontSize: "14px", color: "#6c757d" }}>
                    As high as
                  </p>
                  <h2 style={{ color: "#042E4C", fontWeight: "bold" }}>90%</h2>
                  <p style={{ fontSize: "14px", color: "#6c757d" }}>
                    of Property Value
                  </p>
                </Col>
                <Col xs={12} md={4} className="text-center">
                  <p style={{ fontSize: "14px", color: "#6c757d" }}>
                    As low as
                  </p>
                  <h2 style={{ color: "#042E4C", fontWeight: "bold" }}>
                    8.35%
                  </h2>
                  <p style={{ fontSize: "14px", color: "#6c757d" }}>
                    Interest Rates
                  </p>
                </Col>
                <Col xs={12} md={4} className="text-center">
                  <p style={{ fontSize: "14px", color: "#6c757d" }}>
                    India’s top
                  </p>
                  <h2 style={{ color: "#042E4C", fontWeight: "bold" }}>130+</h2>
                  <p style={{ fontSize: "14px", color: "#6c757d" }}>
                    Financiers
                  </p>
                </Col>
              </Row>
              <p
                style={{ fontSize: "16px", color: "#27543a" }}
                className="mt-3"
              >
                Prefinn ensures you find the right home loan by analyzing offers
                from multiple lenders based on your financial profile and needs.
              </p>
              <p style={{ fontSize: "16px", color: "#27543a" }}>
                Loan amount sanctioned by banks and HFCs varies between 65% to
                80% of the property price, depending on the applicant’s
                financial stability and credit score.
              </p>
            </Col>
          </Row>
        </Card>
      </Container>

      <Container fluid className="py-5 text-center mt-0">
        {" "}
        {/* Use fluid to make it full-width */}
        <h2 style={{ fontWeight: "bold", color: "#27543a " }}>
          PreFinn’s Fast & Secure Home Loan Process
        </h2>
        <Row className="mt-4 no-gutters">
          {" "}
          {/* Use no-gutters to remove padding between columns */}
          <Col xs={12} md={4}>
            <Card
              className="p-3 shadow-sm"
              style={{
                borderRadius: "12px",
                minHeight: "170px",
                width: "100%",
                margin: "0",
                backgroundColor: "#f0f8ff",
              }}
            >
              <h5 style={{ color: "dark", fontWeight: "bold" }}>
                Discover Your Loan Potential Check Eligibility Now!
              </h5>
              <p style={{ fontSize: "14px", color: "#008080" }}>
                Unlock Top Offers – Compare & Save!
              </p>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card
              className="p-3 shadow-sm"
              style={{
                borderRadius: "12px",
                minHeight: "170px",
                width: "100%",
                margin: "0",
                backgroundColor: "#f0f8ff",
              }}
            >
              <h5 style={{ color: "dark", fontWeight: "bold" }}>
                Get Best Offers - Compare & Conquer!
              </h5>
              <p style={{ fontSize: "14px", color: "#008080" }}>
                Prefinn makes it easy to find the best loan offers from top
                lenders.
              </p>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card
              className="p-3 shadow-sm"
              style={{
                borderRadius: "12px",
                minHeight: "170px",
                width: "100%",
                margin: "0",
                backgroundColor: "#f0f8ff",
              }}
            >
              <h5 style={{ color: "dark", fontWeight: "bold" }}>
                Hassle Free, Disbursal Unlock Your Dream Home Now!
              </h5>
              <p style={{ fontSize: "14px", color: "#008080" }}>
              Disbursal made easy, dreams made real
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
              The Prefinn Privileges
            </h2>
            <p className="text-success">Your Future Home Starts with Prefinn!</p>
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
                  <p style={{color:"#008080"}}>{item.text}</p>
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

      <Footer />
    </>
  );
};

export default HomeLoanSection;





































































