"use client";
import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function PartnerEnquiry() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [email, setEmail] = useState("");


  // Function to toggle FAQs
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index? null : index);
  };
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <div
        className="text-center text-dark py-5"
        style={{
          background:
            "url('https://burst.shopifycdn.com/photos/business-meeting-over-coffee.jpg?width=1000&format=pjpg&exif=0&iptc=0') center/cover",
        }}
      >
        <h1 className="fw-bold text-dark">Partner Enquiry</h1>
      </div>

      {/* Form Section */}
      <Container className="mt-7">
        <h2 className="text-center fw-bold">
          Become a <span className="text-primary">Partner</span>
        </h2>

        <Form className="mt-4">
          <Row className="g-3">
            {/* First Row */}
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Full Name"
                className="rounded-pill"
              />
            </Col>
            <Col md={4}>
              <Form.Control
                type="email"
                placeholder="Email"
                className="rounded-pill"
              />
            </Col>
            <Col md={4}>
              <Form.Control
                type="tel"
                placeholder="Mobile Number"
                className="rounded-pill"
              />
            </Col>

            {/* Second Row */}
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="City"
                className="rounded-pill"
              />
            </Col>
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="State"
                className="rounded-pill"
              />
            </Col>
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Profession"
                className="rounded-pill"
              />
            </Col>

            {/* Submit Button */}
            <Col md={12} className="text-center mt-3">
              <Button variant="primary" className="rounded-pill px-4">
                SEND NOW
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

      <Container className="mt-10">
        <h2 className="fw-bold">Loan Partners FAQ</h2>
        <p className="text-blue-900">
          Answers to common questions about Loan Requirements.
        </p>
        <Row>
          <Col md={6}>
            <Card className="mb-5 shadow-sm">
              <Card.Header
                onClick={() => toggleFAQ(1)}
                className="fw-bold cursor-pointer"
              >
                1. Who can partner with Prefinn?
              </Card.Header>
              {openFAQ === 1 && (
                <Card.Body>
                 <li>Anyone from loan agents, ex-bankers, financial analysts, Insurance agents, mutual fund agents, chartered accountants, builders, or professionals from any other field can become an Independent Business Owner by partnering with Prefinn.</li>
                </Card.Body>
              )}
            </Card>
            <Card className="mb-5 shadow-sm">
              <Card.Header
                onClick={() => toggleFAQ(2)}
                className="fw-bold cursor-pointer"
              >
                2. Is there any charge for joining as a partner with Prefinn?
              </Card.Header>
              {openFAQ === 2 && (
                <Card.Body>
                  <li>No, joining Prefinn as a partner is completely free of charge.</li>
                </Card.Body>
              )}
            </Card>

            {/* FAQ Item 3 */}
            <Card className="mb-5 shadow-sm">
              <Card.Header
                onClick={() => toggleFAQ(3)}
                className="fw-bold cursor-pointer"
              >
                3. How to become a partner with Prefinn?
              </Card.Header>
              {openFAQ === 3 && (
                <Card.Body>
                 <li> Visit the Prefinn website and click on the ‘Become a Partner’ option.</li>
                 <li> Complete the registration form by fillng in your details and submitting it.</li>
                 <li> A member of the Prefinn support team will contact you to guide you through the next steps and arrange a meeting.</li>
                 <li> During the meeting, a Prefinn Manager will explain the lead generation process and provide you with all the necessary information</li>
                 <li> Once you understand and are comfortable with the processes, an agreement will be signed between you and Prefinn.</li>
                </Card.Body>
              )}
            </Card>
          </Col>
          <Col md={6}>
            {/* FAQ Item 4 */}
            <Card className="mb-5 shadow-sm">
              <Card.Header onClick={() => toggleFAQ(4)} className="fw-bold cursor-pointer">
                4. What documents are required for becoming a partner?
              </Card.Header>
              {openFAQ === 4 && <Card.Body><li>Basic KYC documents such as PAN, Aadhar, and bank details are required for verification.</li></Card.Body>}
            </Card>

            {/* FAQ Item 5 */}
            <Card className="mb-5 shadow-sm">
              <Card.Header onClick={() => toggleFAQ(5)} className="fw-bold cursor-pointer">
                5. How do partners earn with Prefinn?
              </Card.Header>
              {openFAQ === 5 && <Card.Body><li>Partners earn commissions for every successful loan they facilitate through Prefinn.</li></Card.Body>}
            </Card>

            {/* FAQ Item 6 */}
            <Card className="mb-5 shadow-sm">
              <Card.Header onClick={() => toggleFAQ(6)} className="fw-bold cursor-pointer">
                6. What support does Prefinn provide to its partners?
              </Card.Header>
              {openFAQ === 6 && <Card.Body><li>Comprehensive Training: We provide detailed training sessions to help you understand our products, processes, and the market.</li>
              <li>Marketing Support: You can get leads, marketing materials, and strategies from Prefinn to promote your services effectively</li>
              <li>Timely Payouts: We ensure that you receive your commissions on time, providing a smooth and transparent payout process</li>
              <li>By partnering with Prefinn, you get all the support you need to grow and succeed as a partner.</li>
              </Card.Body>}
            </Card>
          </Col>
        </Row>
      </Container>

      
      <Footer/>
    </>
  );
}

export default PartnerEnquiry;





// "use client";
// import React, { useState } from "react";
// import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
// import { FaPaperPlane } from "react-icons/fa";
// import Footer from "@/components/footer";
// import Navbar from "@/components/navbar";
// import "bootstrap/dist/css/bootstrap.min.css";

// function PartnerEnquiry() {
//   const [openFAQ, setOpenFAQ] = useState<number | null>(null);
//   const [email, setEmail] = useState("");

//   // Function to toggle FAQs
//   const toggleFAQ = (index: number) => {
//     setOpenFAQ(openFAQ === index ? null : index);
//   };

//   return (
//     <>
//       <Navbar />
//       {/* Banner Section */}
//       <div
//         className="text-center text-dark py-5"
//         style={{
//           background:
//             "url('https://media.tacdn.com/media/attractions-splice-spp-674x446/09/1f/f7/af.jpg') center/cover",
//         }}
//       >
//         <h1 className="fw-bold text-white">Partner Enquiry</h1>
//       </div>

//       {/* Form Section */}
//       <Container className="mt-7">
//         <h2 className="text-center fw-bold">
//           Become a <span className="text-primary">Partner</span>
//         </h2>

//         <Form className="mt-4">
//           <Row className="g-3">
//             {/* First Row */}
//             <Col md={4}>
//               <Form.Control type="text" placeholder="Full Name" className="rounded-pill" />
//             </Col>
//             <Col md={4}>
//               <Form.Control type="email" placeholder="Email" className="rounded-pill" />
//             </Col>
//             <Col md={4}>
//               <Form.Control type="tel" placeholder="Mobile Number" className="rounded-pill" />
//             </Col>

//             {/* Second Row */}
//             <Col md={4}>
//               <Form.Control type="text" placeholder="City" className="rounded-pill" />
//             </Col>
//             <Col md={4}>
//               <Form.Control type="text" placeholder="State" className="rounded-pill" />
//             </Col>
//             <Col md={4}>
//               <Form.Control type="text" placeholder="Profession" className="rounded-pill" />
//             </Col>

//             {/* Submit Button */}
//             <Col md={12} className="text-center mt-3">
//               <Button variant="primary" className="rounded-pill px-4">
//                 SEND NOW
//               </Button>
//             </Col>
//           </Row>
//         </Form>
//       </Container>

//       <Container className="mt-5">
//         <h2 className="fw-bold">Loan Partners FAQ</h2>
//         <p className="text-muted">Answers to common questions about Loan Requirements.</p>
//         <Row>
//           {[...Array(6)].map((_, index) => (
//             <Col md={6} key={index}>
//               <Card className="mb-2 shadow-sm">
//                 <Card.Header onClick={() => toggleFAQ(index + 1)} className="fw-bold cursor-pointer">
//                   {index + 1}. Sample FAQ Question {index + 1}
//                 </Card.Header>
//                 {openFAQ === index + 1 && <Card.Body>Sample answer for question {index + 1}.</Card.Body>}
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       <Footer />
//     </>
//   );
// }

// export default PartnerEnquiry;

