import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useRef } from 'react';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


const BusinessLoans = () => {
  const loanBenefits = [
    {
      title: "EXPAND YOUR BUSINESS",
      description:
        "You can use a business loan to fuel your growth, whether you're opening a new location, hiring more employees, or investing in new technology.",
      icon: "bi-graph-up-arrow",
    },
    {
      title: "IMPROVE YOUR CASH FLOW",
      description:
        "Cash flow problems can impede your business' operations. A business loan can help bridge gaps in your cash flow, safeguarding your ability to meet your day-to-day expenses.",
      icon: "bi-cash-stack",
    },
    {
      title: "MANAGE INVENTORY",
      description:
        "Having sufficient inventory is crucial for meeting customer demand. Business loans can assist you with financing your inventory purchases, so that you have enough stock to meet customer demand.",
      icon: "bi-box-seam",
    },
    {
      title: "PURCHASE EQUIPMENT",
      description:
        "Need new machinery or equipment to improve your productivity or offer new services? A business loan can help you finance these purchases and enhance your business' capabilities.",
      icon: "bi-tools",
    },
  ];


  const features = [
    {
      title: "Flexible Loan Tenure",
      description: "Flexible and longer repayment options",
      image: "https://cdn-icons-png.flaticon.com/128/9196/9196974.png",
      bgColor: "#D1B4E9",
    },
    {
      title: "Balance Transfer",
      description:
        "Transfer Existing Business Loan at lower EMIs with competitive rates",
      image: "https://cdn-icons-png.flaticon.com/128/3707/3707848.png",
      bgColor: "#bbbe4a", 
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
      bgColor: "#74b146",
    },
  ];
  

  return (
    <div> {/* Wrapped everything inside a single parent <div> */}
      <Navbar />
      <div className="container-fluid p-0 position-relative">
        {/* Banner Image */}
        <div className="position-relative">
          <img
            src="https://img.freepik.com/free-photo/business-people-shaking-hands-finishing-up-meeting_1150-37745.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
            alt="Loan Banner"
            className="img-fluid w-100"
            style={{ height: "auto", display: "block" }}
          />  
          

          {/* Form Container */}
          <div
            className="position-absolute top-50 end-0 translate-middle-y shadow p-4 me-4"
            style={{
              width: "450px",
              background: "#FDFEFE",
              borderRadius: "8px",
              maxHeight: "90%",
              right: "20px",
              overflow: "hidden",
            }}
          >
            <div className="p-4 border-0" style={{ background: "transparent" }}>
              <h3 className="text-center mb-3 mt-0  text-primary">
                Apply for Business Loan
              </h3>
              <form>
                <div className="mb-3">
                  <label>Full Name (as per PAN)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter first name"
                  />
                </div>

                <div className="mb-3">
                  <label>Last Name (as per PAN)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter last name"
                  />
                </div>

                <div className="mb-3">
                  <label>Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>

                <div className="mb-3">
                  <label>Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter mobile number"
                  />
                  <small className="text-muted">
                    OTP will be sent to this number
                  </small>
                </div>
                <div className="mb-3">
                  <label className="mb-1" style={{ whiteSpace: "nowrap" }}>
                    Do you have business registration proof?
                  </label>
                  <select className="form-select">
                    <option>Select an option</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label>How old is your business?</label>
                  <select className="form-select">
                    <option>Select an option</option>
                    <option>Less than 1 year</option>
                    <option>1-3 years</option>
                    <option>More than 3 years</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label>Monthly Sales</label>
                  <select className="form-select">
                    <option>Select an option</option>
                    <option>Less than ₹50,000</option>
                    <option>₹50,000 - ₹2,00,000</option>
                    <option>More than ₹2,00,000</option>
                  </select>
                </div>

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="agreeTerms"
                  />
                  <label className="form-check-label" htmlFor="agreeTerms">
                    I agree to the{" "}
                    <a href="term-cond" className="text-danger">
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a href="privacy-pol" className="text-danger">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button className="btn btn-primary w-100">Apply Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light py-5">
        <div className="container d-flex flex-column flex-lg-row align-items-center">
          <div className="text-center text-lg-start me-lg-5">
            <h1 className="fw-bold">Take your business to great heights</h1>
            <p className="text-muted">Presenting Business Loans By Prefinn</p>
          </div>
          <div className="mt-4 mt-lg-0">
            <img
              src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/personal-banking/businesloans/Business-loan-Web-v2.jpg"
              alt="Businessman on Phone"
              className="img-fluid rounded"
            />
          </div>
        </div>
        <div className="container mt-5">
          <div className="row text-center text-lg-start">
            <div className="col-md-6 col-lg-3 mb-4">
              <i className="bi bi-file-earmark-text fs-1 text-danger"></i>
              <p>
                Collateral-free funding up to ₹1 Cr for self-employed
                individuals and businesses
              </p>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <i className="bi bi-person-check fs-1 text-danger"></i>
              <p>
                Quick funding up to ₹50 lacs based on your current account
                statement
              </p>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <i className="bi bi-calendar-check fs-1 text-danger"></i>
              <p>Loan up to ₹50 lacs based on your GST returns</p>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <i className="bi bi-speedometer fs-1 text-danger"></i>
              <p>Fast and seamless process with minimal documentation</p>
            </div>
          </div>
        </div>
      </div>
    
      <h2 className="fw-bold  mb-6 mt-6 py-2 text-center">Features & Benefits of Business Loan</h2>
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
   
      <Footer />
    </div> 
  );
};

export default BusinessLoans;




















