"use client";
import React , {useState} from "react";
import { Container, Row, Col, Button  , Card , Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const HomeLoanSection = () => {
    const [expanded, setExpanded] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    const banks = [
        { name: "Axis Bank", logo: "https://your-image-link.com/axis.png" },
        { name: "HDFC Bank", logo: "https://your-image-link.com/hdfc.png" },
        { name: "ICICI Bank", logo: "https://your-image-link.com/icici.png" },
        { name: "Bank of Baroda", logo: "https://your-image-link.com/bob.png" },
        { name: "Yes Bank", logo: "https://your-image-link.com/yes.png" },
        { name: "PNB", logo: "https://your-image-link.com/pnb.png" },
        { name: "Tata Capital", logo: "https://your-image-link.com/tata.png" },
        { name: "Bajaj Finserv", logo: "https://your-image-link.com/bajaj.png" },
        { name: "L&T Finance", logo: "https://your-image-link.com/lt.png" },
        { name: "IDFC First Bank", logo: "https://your-image-link.com/idfc.png" },
        { name: "Aditya Birla Capital", logo: "https://your-image-link.com/aditya.png" },
        { name: "FedBank", logo: "https://your-image-link.com/fedbank.png" },
        { name: "ICICI Home Finance", logo: "https://your-image-link.com/icici-home.png" },
      ];
      
      const moreBanks = [
        { name: "Kotak Bank", logo: "https://your-image-link.com/kotak.png" },
        { name: "Shivalik Bank", logo: "https://your-image-link.com/shivalik.png" },
        { name: "Easy Home Finance", logo: "https://your-image-link.com/easy.png" },
        { name: "Piramal Finance", logo: "https://your-image-link.com/piramal.png" },
        { name: "Indiabulls", logo: "https://your-image-link.com/indiabulls.png" },
        { name: "Chola", logo: "https://your-image-link.com/chola.png" },
        { name: "Godrej Finance", logo: "https://your-image-link.com/godrej.png" },
        { name: "Deutsche Bank", logo: "https://your-image-link.com/deutsche.png" },
        { name: "Fedfina", logo: "https://your-image-link.com/fedfina.png" },
        { name: "DMI Finance", logo: "https://your-image-link.com/dmi.png" },
        { name: "Bank of Maharashtra", logo: "https://your-image-link.com/maharashtra.png" },
        { name: "IIFL Home Loan", logo: "https://your-image-link.com/iifl.png" },
        { name: "Union Bank", logo: "https://your-image-link.com/union.png" },
      ];
      const faqs = [
      {
        question: " What documents are required for a home loan?",
        answer:
          "The required property documents for a home loan can vary depending on the purpose of the loan. For instance, the documentation needed to purchase a new house might differ from what’s required for constructing a home. For a detailed list of documents required for a home loan, it’s best to consult with your lender..",
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

      const toggleCard = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    return (
        <>
<Navbar/>
      <Container className="py-5">
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6}>
            <h3 style={{ color: "#4a3db4", fontWeight: "bold" }}>
              Home Loans Simplified by PreFinn
            </h3>
            <h1>
              <span style={{ color: "#800080", fontWeight: "bold" }}>Easy, Fast,</span>{" "}
              <span style={{ color: "#4a3db4", fontWeight: "bold" }}>and Reliable</span>
            </h1>
            <p style={{ color: "#6c757d", fontSize: "18px" }}>
            Secure your dream home with the lowest interest rates, personalized advice with Prefinn Team .
            </p>
            {/* <Button variant="warning" style={{ backgroundColor: "#f56a28", border: "none", padding: "12px 24px", borderRadius: "8px" }}>
              Get Started Now ➜
            </Button> */}
          </Col>
  
          {/* Right Image */}
          <Col md={6} className="text-center">
            <img src="https://img.freepik.com/free-vector/snow-covered-house-with-christmas-light-string_1308-90877.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid" alt="Home Loans" className="img-fluid" style={{ maxWidth: "90%" }} />
          </Col>
        </Row>
      </Container>

      <Container className="py-5 mt-5">
      <Card className="p-4 shadow-sm" style={{ backgroundColor: "#f2f5ff", borderRadius: "16px" }}>
        <Row className="align-items-center">
          {/* Left Text */}
          <Col md={5}>
            <h2 style={{ fontWeight: "bold", color: "#808080" }}>Prefinn Guarantee You</h2>
            {/* <Button variant="outline-dark" className="mt-3 px-4 py-2">
              Unlock Offers Now →
            </Button> */}
          </Col>

          {/* Right Content */}
          <Col md={7}>
            <Row>
              <Col md={4} className="text-center">
                <p style={{ fontSize: "14px", color: "#6c757d" }}>As high as</p>
                <h2 style={{ color: "#042E4C", fontWeight: "bold" }}>60%</h2>
                <p style={{ fontSize: "14px", color: "#6c757d" }}>of Property Value</p>
              </Col>
              <Col md={4} className="text-center">
                <p style={{ fontSize: "14px", color: "#6c757d" }}>As low as</p>
                <h2 style={{ color: "#042E4C", fontWeight: "bold" }}>8.5%</h2>
                <p style={{ fontSize: "14px", color: "#6c757d" }}>Interest Rates</p>
              </Col>
              <Col md={4} className="text-center">
                <p style={{ fontSize: "14px", color: "#6c757d" }}>India’s top</p>
                <h2 style={{ color: "#042E4C", fontWeight: "bold" }}>130+</h2>
                <p style={{ fontSize: "14px", color: "#6c757d" }}>Financiers</p>
              </Col>
            </Row>
            <p style={{ fontSize: "16px", color: "#6c757d" }} className="mt-3">
              At Prefinn, we assist you in comparing housing loan interest rates and other features
              from leading banks and Housing Finance Companies.
               {/* enabling you to apply online
              for the best option based on your credit profile. */}
            </p>
            <p style={{ fontSize: "16px", color: "#6c757d" }}>
            Banks and HFCs provide home loans covering 65% to 80% of the property's value, based on the applicant's creditworthiness.
            </p>
          </Col>
        </Row>
      </Card>
    </Container>

    <Container className="py-5 text-center mt-5">
      <h2 style={{ fontWeight: "bold", color: "#121212" }}>PreFinn’s Fast & Secure Home Loan Process</h2>

      <Row className="mt-4">
        <Col md={4}>
          <Card className="p-3 shadow-sm" style={{ borderRadius: "12px" , minHeight: "170px"  }}>
            <h5 style={{ color: "#800080", fontWeight: "bold" }}>Check Eligibility - Know Your Power!</h5>
            <p style={{ fontSize: "14px", color: "#6c757d" }}>
              Unlock your home buying potential .
            </p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3 shadow-sm" style={{ borderRadius: "12px" , minHeight: "170px"  }}>
            <h5 style={{ color: "#800080", fontWeight: "bold" }}>Get Best Offers - Compare & Conquer!</h5>
            <p style={{ fontSize: "14px", color: "#6c757d" }}>
              Prefinn finds best rates from top lenders for you .
            </p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3 shadow-sm" style={{ borderRadius: "12px" , minHeight: "170px"  }}>
            <h5 style={{ color: "#800080", fontWeight: "bold" }}>Get Disbursal - Keys in Hand, Stress Gone!</h5>
            <p style={{ fontSize: "14px", color: "#6c757d" }}>
              We handle the maze, you celebrate the milestone.
            </p>
          </Card>
        </Col>
      </Row>
{/* 
      <div className="mt-4">
        <Button variant="primary" className="px-4 py-2" style={{ backgroundColor: "#4a3db4", borderRadius: "8px" }}>
          Compare Offers ➜
        </Button>
        <Button variant="outline-dark" className="ms-3 px-4 py-2">
          Get A Call Back
        </Button>
      </div> */}
    </Container>

    <Container className="py-5 text-center mt-5" style={{ backgroundColor: "#E6E9FA", borderRadius: "15px" }}>
      {/* <h2 className="mb-4">Unlock Exclusive Home Loan Offers Instantly With Our Lending Partners</h2> */}
      
      {/* <Row className="justify-content-center">
        {[...banks, ...(expanded ? moreBanks : [])].map((bank, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-3">
            <Card className="p-2 shadow-sm" style={{ borderRadius: "10px", cursor: "pointer" }}>
              <img src={bank.logo} alt={bank.name} style={{ width: "100%", height: "40px", objectFit: "contain" }} />
            </Card>
          </Col>
        ))}
      </Row> */}

      {/* <Button 
        variant="primary" 
        className="mt-3" 
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less ➜" : "View More Banks ➜"}
      </Button> */}

      <Row className="mt-5 text-center">
        <Col md={3}>
          <h5>Proven Expertise</h5>
          <h2 className="text-primary">5,000+</h2>
          <p>Loan applications processed nationwide</p>
        </Col>
        <Col md={3}>
          <h5>Leading Loan Specialists</h5>
          <h2 className="text-primary">1,000+</h2>
          <p>Experienced loan partners across India</p>
        </Col>
        <Col md={3}>
          <h5>Committed to You</h5>
          <h2 className="text-primary">1,000+</h2>
          <p>Happy homeowners across India</p>
        </Col>
        <Col md={3}>
          <h5>Preferred by Top Lenders</h5>
          <h2 className="text-primary">50+</h2>
          <p>Collaboration with leading institutions</p>
        </Col>
      </Row>

      {/* <div className="mt-4">
        <Button variant="primary" className="me-3">View Loan Offers ➜</Button>
        <Button variant="outline-dark">Speak To An Expert</Button>
      </div> */}
    </Container>
{/* 
    <Container className="py-5 mt-5" style={{ backgroundColor: "#1f3a41", borderRadius: "15px" }}>
      <Row className="align-items-center"> */}
        {/* <Col lg={7} className="text-white px-5">
          <h2 style={{ color: "#ff7b47", fontWeight: "bold" }}>Get in touch with us.</h2>
          <p>Drop in your details and we will call you back to address all your questions.</p>
          
          <Form>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Firstname Lastname" />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="name@domain.com" />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="+91 Phone Number" />
                </Form.Group>
              </Col>
            </Row>

            <Button  className="px-4 py-2 text-white fw-bold" style={{backgroundColor : "#f56a28"}}>
              Submit ➜
            </Button>

            <p className="mt-3 text-white">
              By clicking on "Submit", you agree to our{" "}
              <a href="#" style={{ color: "#ff7b47", textDecoration: "none" }}>Terms And Conditions</a>,{" "}
              <a href="#" style={{ color: "#ff7b47", textDecoration: "none" }}>Privacy Policy</a> and{" "}
              <a href="#" style={{ color: "#ff7b47", textDecoration: "none" }}>Terms of Use</a>.
            </p>
          </Form>
        </Col> */}

        {/* <Col lg={5} className="text-center">
          <img
            src="https://your-image-url.com/contact-illustration.png"
            alt="Contact Illustration"
            style={{ width: "90%", maxWidth: "400px" }}
          />
        </Col> */}
      {/* </Row>
    </Container> */}

    <Container  className="py-5 mt-5" style={{ backgroundColor: "#E8E5F1", borderRadius: "15px" }}>
      <Row className="text-center mb-4">
        <Col>
          <h2 className="fw-bold" style={{ color: "#800080" }}>The Prefinn Privileges</h2>
          <p className="text-muted">your dream home awaits!</p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        {[
          { title: "No More Delays, Get Your Loans Quick", text: "Our hassle-free home loan process makes getting approved a breeze." },
          { title: "Expert & Dedicated Help At Every Step", text: "Your trusted team, from start to dream with your dedicated loan advisor." },
          { title: "Low Interest Rates, Big Savings", text: "Get personalized home loan matches from top lenders to fit your needs." },
          { title: "Honest Loans, No Surprises", text: "What you see is what you get. No hidden charges." }
        ].map((item, index) => (
          <Col md={3} className="mb-4" key={index}>
            <Card 
              className="p-3 border-0 shadow-sm text-center"
              style={{
                transition: "background-color 0.3s ease-in-out",
                cursor: "pointer",
                minHeight : "200px",
                borderRadius : "25px"
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#DED8ED"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "white"}
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
        <Col>
          {/* <Button className="px-4 py-2 text-white fw-bold" style={{backgroundColor: "#f56a28"}}>
            Get Started ➜
          </Button> */}
        </Col>
      </Row>
    </Container>

    <Container  className="py-5 mt-5" style={{ backgroundColor: "#F2F2F2", borderRadius: "15px" }}>
      <Row className="justify-content-center">
        {/* Left Image Section (Fixed at the Top) */}

        <Col md={4} className="d-flex flex-column align-items-center" 
          style={{ position: "sticky", top: "0", height: "100vh", paddingTop: "20px" }}>
      <h2 className="fw-bold mb-4 " style={{ fontSize: "1.5rem", color: "#2D2D2D" }}>Types of Home Loans</h2>

          <img 
            src= "https://img.freepik.com/free-vector/credit-score-flat-background-with-male-character-holding-coin-surrounded-by-round-compositions-financial-icons-vector-illustration_1284-83829.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid"
            alt="Home Loans"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>

        {/* Right Content Section (Scrollable) */}
        <Col md={6} style={{ maxHeight: "80vh", overflowY: "scroll" , scrollbarWidth: "none", msOverflowStyle: "none" }}>

          {[
            { title: "Home Purchase Loan", text: "Tailored for purchasing ready-to-move-in properties, under-construction homes, or pre-owned properties. Supports buying a plot with an option to build within a set timeframe." },
            { title: "Composite Loan", text: "Ideal for buying a plot and constructing a house. Initial loan covers plot purchase, with future payments aligned with construction stages." },
            { title: "Home Construction Loan", text: "Designed for building a new house. Loan disbursements are made in phases, matching construction progress." },
            { title: "Home Renovation Loan", text: "Covers costs associated with renovating or improving an existing home. Interest rates are generally similar to standard home loans." },
            { title: "Home Extension Loan", text: "For those looking to expand their existing home by adding extra rooms or floors. Helps finance such extensions without financial burden." },
            { title: "Bridge Loan", text: "A short-term loan designed for individuals planning to purchase a new home with the proceeds from selling their current property. Interest Saver Loan: A home loan overdraft that links to the borrower’s bank account. Any extra funds deposited beyond the EMI are treated as prepayments, reducing the overall interest." },
            { title: "Step-Up Loan", text: "Offers lower EMIs in the initial years, with the flexibility to increase payments over time. This loan is particularly suitable for young professionals early in their careers." },

          ].map((item, index) => (
            <div key={index} className="mb-3">
              <h6 >{item.title}</h6>
              <p className="text-muted" style={{ fontSize: "0.9rem" }}>{item.text}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>

    <Container  className="py-5 mt-5" style={{ backgroundColor: "#F2F2F2", borderRadius: "15px" }}>
      <Row className="justify-content-center">
        {/* Left Section (Sticky Image & Heading) */}
        <Col md={4} className="d-flex flex-column align-items-center"
          style={{ position: "sticky", top: "0", height: "100vh", paddingTop: "2px" }}>
          <h2 className="fw-bold text-center" style={{ fontSize: "1.4rem", color: "#2D2D2D" }}>
            Enhance your chances of securing a home loan by following these tips.
          </h2>
          <img
            src="https://img.freepik.com/free-vector/xaillustration-businessman-celebrating-success-by-raising-his-hands_10045-817.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid" // Replace with actual image
            alt="Home Loan Tips"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "400px" }}
          />
        </Col>

        {/* Right Content Section (Scrollable with Invisible Scrollbar) */}
        <Col md={6} style={{ maxHeight: "80vh", overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {[
            "Maintain a credit score of at least 750: Ensure timely payments and low credit utilization to reflect your creditworthiness.",
            "Increase your income: Boost your repayment capacity by securing a higher-paying job, freelancing, or starting a side business.",
            "Add a financially contributing family member as a co-applicant: This can increase your combined eligibility.",
            "Reduce your debt: Lower your debt-to-income (DTI) ratio by paying off existing debts like Credit Card bills and Personal Loans.",
            "Choose a lower Loan-to-Value (LTV) ratio: A lower LTV ratio decreases the loan amount, improving your chances of approval.",
            "Save for a down payment: A larger down payment reduces the loan amount needed and lowers the lender's risk.",
            "Compare home loan offers from multiple banks and HFCs: Find the best deal that suits your financial situation.",
            "Keep your total EMIs, including the new home loan EMI, within 55-60% of your net salary: Ensure your overall debt burden is manageable.",
            "Maintain a stable employment record: A consistent job history enhances your reliability in the eyes of lenders.",
            "Avoid late payments: Timely payments protect your credit score and improve loan eligibility."
          ].map((tip, index) => (
            <p key={index} className="text-muted py-2" style={{ fontSize: "1rem", marginBottom: "10px" }}>
              • {tip}
            </p>
          ))}
        </Col>
      </Row>
    </Container>

    <Container className="py-5 mt-5">
      <h2 className="text-center mb-4 fw-bold">FAQs</h2>
      {faqs.map((faq, index) => (
        <Card
          key={index}
          className="mb-3 border-0 shadow-sm"
          style={{
            transition: "all 0.3s ease-in-out",
            borderRadius: "10px",
          }}
        >
          <Card.Header
            className={`d-flex justify-content-between align-items-center p-3 ${
              openIndex === index ? "bg-white" : "bg-light"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => toggleCard(index)}
          >
            <h6 className="mb-0 fw-bold">{index + 1}. {faq.question}</h6>
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

<Footer/>
      </>
    );
  };
  
  export default HomeLoanSection;


























































































