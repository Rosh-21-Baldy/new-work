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
        question: "What Do Mortgage Lenders Consider?",
        answer:
<ol>
  
 <h6>
 Lenders favor borrowers with a consistent and reliable income. If your income is unstable or speculative, obtaining a loan against property may be more challenging,
 </h6>
  <h6>
   Younger borrowers are often preferred, as earning potential typically decreases with age. Financial institutions are more likely to lend to individuals who are early in their careers rather than those nearing retirement
  </h6>
  <h6>
  Salaried individuals generally have a predictable income, unlike business owners or self-employed individuals whose earnings can fluctuate with market conditions. Because of this risk, lenders often prefer salaried over non-salaried applicants.
  </h6>
  
</ol>

      },
      {
        question: "How Can a Loan Against Property Be Used?",
        answer:
        <ol>
  
        <h6>
         In India, a loan against property can help you grow your business, purchase machinery, maintain cash flow, or fund new projects.
        </h6>
         <h6>
         LAP loans allow you to consolidate multiple smaller, high-interest loans into a single, more affordable loan with a longer tenure.
         </h6>
         <h6>
         LRD enables you to use rental income as collateral to secure a LAP loan from Ambak. Rental income is used to pay off EMIs, allowing you to invest in new properties and benefit from tax deductions.
         </h6>
         <h6>
         Use a LAP to acquire new commercial property, expand your business, increase revenue, and pay off your loan.
         </h6>
         
       </ol>
      },
      {
        question: "When Should You Take a Loan Against Property for Your Business?",
        answer:
        <ol>
  
        <h6>
        Adequate funding is essential for maintaining and expanding inventory, which is crucial for meeting customer demand. A mortgage loan can provide the necessary financial support..
        </h6>
         <h6>
         Replacing or repairing old machinery, or investing in the latest equipment, requires significant capital. A property loan can help you manage production efficiently and reduce risks associated with outdated equipment.
         </h6>
         <h6>
         Unsold inventory or delayed payments from customers can strain your cash flow. A LAP loan can ensure smooth operations and cover essential expenses such as rent, staff salaries, and utilities.
         </h6>
         
       </ol>
      },
      {
        question: " How can I enhance my eligibility?",
        answer:
      
          <ol>
          <h6>
          You can boost your eligibility by including additional income sources such as rent, dividends, agricultural income, bonuses, or monthly incentives. Additionally, including a co-applicant’s income can also improve your eligibility,
            </h6>
           </ol>
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
              Loans Against Property Simplified by PreFinn
            </h3>
            {/* <h1>
              <span style={{ color: "#f56a28", fontWeight: "bold" }}>Easy, Fast,</span>{" "}
              <span style={{ color: "#4a3db4", fontWeight: "bold" }}>and Reliable</span>
            </h1> */}
            <p style={{ color: "#6c757d", fontSize: "18px" }}>
            Finance Your Dreams with Loans against Your Property
            </p>
            {/* <Button variant="warning" style={{ backgroundColor: "#f56a28", border: "none", padding: "12px 24px", borderRadius: "8px" }}>
              Get Started Now ➜
            </Button> */}
          </Col>
  
          {/* Right Image */}
          <Col md={6} className="text-center">
            <img src="https://img.freepik.com/free-vector/urban-design-buildings_24877-61560.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid" alt="Home Loans" className="img-fluid" style={{ maxWidth: "90%" }} />
          </Col>
        </Row>
      </Container>

      <Container className="py-5 mt-5">
      <Card className="p-4 shadow-sm" style={{ backgroundColor: "#f2f5ff", borderRadius: "16px" }}>
        <Row className="align-items-center">
          {/* Left Text */}
          <Col md={5}>
            <h2 style={{ fontWeight: "bold", color: "#800000" }}>Your Property into Capital with a Loan Against Propert</h2>
            {/* <Button variant="outline-dark" className="mt-3 px-4 py-2">
              Unlock Offers Now →
            </Button> */}
          </Col>

          {/* Right Content */}
          <Col md={7}>
            {/* <Row>
              <Col md={4} className="text-center">
                <p style={{ fontSize: "14px", color: "#6c757d" }}>As high as</p>
                <h2 style={{ color: "#f56a28", fontWeight: "bold" }}>90%</h2>
                <p style={{ fontSize: "14px", color: "#6c757d" }}>of Property Value</p>
              </Col>
              <Col md={4} className="text-center">
                <p style={{ fontSize: "14px", color: "#6c757d" }}>As low as</p>
                <h2 style={{ color: "#f56a28", fontWeight: "bold" }}>8.10%</h2>
                <p style={{ fontSize: "14px", color: "#6c757d" }}>Interest Rates</p>
              </Col>
              <Col md={4} className="text-center">
                <p style={{ fontSize: "14px", color: "#6c757d" }}>India’s top</p>
                <h2 style={{ color: "#f56a28", fontWeight: "bold" }}>50+</h2>
                <p style={{ fontSize: "14px", color: "#6c757d" }}>Financiers</p>
              </Col>
            </Row> */}
            <p style={{ fontSize: "16px", color: "#6c757d" }} className="mt-3">
            Looking for a way to meet your financial needs without selling your property? A Loan Against Property (LAP) is the perfect solution. LAP allows you to leverage the value of your residential, commercial, or industrial property to access substantial funds for personal or business purposes. With flexible tenures of up to 20 years and loan amounts up to 85% of your property’s market value, LAP is a cost-effective, secured loan option that helps you retain ownership while fulfilling your financial goals
            </p>
            <p style={{ fontSize: "16px", color: "#6c757d" }}>
            Additionally, many lenders offer Lease Rental Discounting (LRD), providing even more flexibility by allowing you to pledge rental receipts from tenants. Whether you’re expanding your business or managing personal finances, LAP offers competitive interest rates and a reliable way to unlock the potential of your property.
            </p>
          </Col>
        </Row>
      </Card>
    </Container>

    <Container className="py-5 text-center mt-5">
      <h2 style={{ fontWeight: "bold", color: "#121212" }}>Why Loan Against Property ?</h2>

      <Row className="mt-4">
        <Col md={4}>
          <Card className="p-3 shadow-sm" style={{ borderRadius: "12px" , minHeight: "170px"  }}>
            <h5 style={{ color: "#f56a28", fontWeight: "bold" }}>Lower Interest Rates</h5>
            <p style={{ fontSize: "14px", color: "#6c757d" }}>
            Enjoy lower interest rates compared to unsecured loans, reducing your overall borrowing costs.
            </p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3 shadow-sm" style={{ borderRadius: "12px" , minHeight: "170px"  }}>
            <h5 style={{ color: "#f56a28", fontWeight: "bold" }}>Flexible Use Of Funds</h5>
            <p style={{ fontSize: "14px", color: "#6c757d" }}>
            Use the loan for any purpose, from business expansion to personal expenses.
            </p>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3 shadow-sm" style={{ borderRadius: "12px" , minHeight: "170px"  }}>
            <h5 style={{ color: "#f56a28", fontWeight: "bold" }}>Longer Repayment Tenure</h5>
            <p style={{ fontSize: "14px", color: "#6c757d" }}>
            Benefit from extended repayment periods, easing the burden of monthly EMIs .
            </p>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={4}>
          <Card className="p-3 shadow-sm" style={{ borderRadius: "12px" , minHeight: "170px"  }}>
            <h5 style={{ color: "#f56a28", fontWeight: "bold" }}>Lower Interest Rates</h5>
            <p style={{ fontSize: "14px", color: "#6c757d" }}>
            Enjoy lower interest rates compared to unsecured loans, reducing your overall borrowing costs.
            </p>
          </Card>
        </Col>
        </Row>

      {/* <div className="mt-4">
        <Button variant="primary" className="px-4 py-2" style={{ backgroundColor: "#4a3db4", borderRadius: "8px" }}>
          Compare Offers ➜
        </Button>
        <Button variant="outline-dark" className="ms-3 px-4 py-2">
          Get A Call Back
        </Button>
      </div> */}
    </Container>

    {/* <Container className="py-5 text-center mt-5" style={{ backgroundColor: "#E6E9FA", borderRadius: "15px" }}>
      <h2 className="mb-4">Unlock Exclusive Home Loan Offers Instantly With Our Lending Partners</h2>
      
      <Row className="justify-content-center">
        {[...banks, ...(expanded ? moreBanks : [])].map((bank, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-3">
            <Card className="p-2 shadow-sm" style={{ borderRadius: "10px", cursor: "pointer" }}>
              <img src={bank.logo} alt={bank.name} style={{ width: "100%", height: "40px", objectFit: "contain" }} />
            </Card>
          </Col>
        ))}
      </Row>

      <Button 
        variant="primary" 
        className="mt-3" 
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less ➜" : "View More Banks ➜"}
      </Button>

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

      <div className="mt-4">
        <Button variant="primary" className="me-3">View Loan Offers ➜</Button>
        <Button variant="outline-dark">Speak To An Expert</Button>
      </div>
    </Container> */}

    {/* <Container className="py-5 mt-5" style={{ backgroundColor: "#1f3a41", borderRadius: "15px" }}>
      <Row className="align-items-center">
        <Col lg={7} className="text-white px-5">
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
        </Col>

        <Col lg={5} className="text-center">
          <img
            src="https://your-image-url.com/contact-illustration.png"
            alt="Contact Illustration"
            style={{ width: "90%", maxWidth: "400px" }}
          />
        </Col>
      </Row>
    </Container> */}

    {/* <Container  className="py-5 mt-5" style={{ backgroundColor: "#E8E5F1", borderRadius: "15px" }}>
      <Row className="text-center mb-4">
        <Col>
          <h2 className="fw-bold" style={{ color: "#2D2D2D" }}>The Ambak Advantage</h2>
          <p className="text-muted">The key to your dream home awaits!</p>
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
          <Button className="px-4 py-2 text-white fw-bold" style={{backgroundColor: "#f56a28"}}>
            Get Started ➜
          </Button>
        </Col>
      </Row>
    </Container> */}

    <Container  className="py-5 mt-5" style={{ backgroundColor: "#F2F2F2", borderRadius: "15px" }}>
      <Row className="justify-content-center">
        {/* Left Image Section (Fixed at the Top) */}

        <Col md={4} className="d-flex flex-column align-items-center" 
          style={{ position: "sticky", top: "0", height: "100vh", paddingTop: "20px" }}>
      <h2 className="fw-bold mb-4 " style={{ fontSize: "1.5rem", color: "#2D2D2D" }}> Benefits of Loan Against Property</h2>

          <img 
            src="https://img.freepik.com/free-vector/house-searching-concept-illustration_114360-27761.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid" // Replace with actual image
            alt="Home Loans"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>

        {/* Right Content Section (Scrollable) */}
        <Col md={6} style={{ maxHeight: "80vh", overflowY: "scroll" , scrollbarWidth: "none", msOverflowStyle: "none" }}>

          {[
            { title: "Mortgage Loan Amount", text: "You can receive a loan ranging from INR 20 lakh to INR 7.5 crore, determined by the market value of your property and your eligibility.." },
            { title: "LTV Ratio", text: "The Loan-to-Value (LTV) Ratio can be as high as 85% of your property’s value, offering ample funds to meet your goals and allowing for a larger loan amount based on your property’s worth.." },
            { title: "Flexible Tenure", text: "With a repayment tenure of up to 15 years, you can comfortably manage your EMIs without any difficulty.." },
            { title: "Low Interest Rate", text: "Benefit from competitive interest rates with Prefinn’s Property Loan, ensuring affordability and cost-effective financing." },
            { title: "Hassle-Free Documentation", text: "Prefinn’s Property Loan streamlines the application process with hassle-free documentation, making it convenient for you.." },
            { title: "Easy Repayment, Longer Tenure:", text: "Enjoy flexible repayment options and an extended loan term with Prefinn’s Property Loan, making it easier to manage your finances." },
            // { title: "Step-Up Loan", text: "Offers lower EMIs in the initial years, with the flexibility to increase payments over time. This loan is particularly suitable for young professionals early in their careers." },

          ].map((item, index) => (
            <div key={index} className="mb-3">
              <h6 >{item.title}</h6>
              <p className="text-muted" style={{ fontSize: "0.9rem" }}>{item.text}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>

    {/* <Container  className="py-5 mt-5" style={{ backgroundColor: "#F2F2F2", borderRadius: "15px" }}>
      <Row className="justify-content-center"> */}
        {/* Left Section (Sticky Image & Heading) */}
        {/* <Col md={4} className="d-flex flex-column align-items-center"
          style={{ position: "sticky", top: "0", height: "100vh", paddingTop: "2px" }}>
          <h2 className="fw-bold text-center" style={{ fontSize: "1.4rem", color: "#2D2D2D" }}>
            Enhance your chances of securing a home loan by following these tips.
          </h2>
          <img
            src="https://static.ambak.com/partner/1725902160592.svg" // Replace with actual image
            alt="Home Loan Tips"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "1000px" }}
          />
        </Col> */}

        {/* Right Content Section (Scrollable with Invisible Scrollbar) */}
        {/* <Col md={6} style={{ maxHeight: "80vh", overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none" }}>
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
        </Col> */}
      {/* </Row>
    </Container> */}

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