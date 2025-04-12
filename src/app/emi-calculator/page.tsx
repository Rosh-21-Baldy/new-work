// 'use client';
// import { useState } from 'react';
// import { Container, Row, Col, Form } from 'react-bootstrap';
// import Footer from '@/components/footer';
// import Navbar from '@/components/navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function EMICalculator() {
//   const [loanAmount, setLoanAmount] = useState(200000);
//   const [interestRate, setInterestRate] = useState(10.5);
//   const [tenure, setTenure] = useState(36);

//   const calculateEMI = () => {
//     const monthlyRate = interestRate / 12 / 100;
//     return (
//       (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
//       (Math.pow(1 + monthlyRate, tenure) - 1)
//     );
//   };

//   const emi = Number.isFinite(calculateEMI()) ? Number(calculateEMI().toFixed(0)) : 0;
//   const totalAmountPaid = emi * tenure;
//   const totalInterest = totalAmountPaid - loanAmount;
//   const principalPercent = ((loanAmount / totalAmountPaid) * 100).toFixed(0);
//   const interestPercent = (100 - Number(principalPercent)).toFixed(0);

//   return (
//     <>
//       <Navbar />
//       <Container fluid className="py-5" style={{ background: '#f9f9f9' }}>
//         <Container>
//         <h2 className="fw-bold text-dark mb-3 d-flex align-items-center gap-3">
//             <span style={{ color: '#2d1b56' }}>Loan Calculator</span>
           
//           </h2>
         
//           <p className="text-secondary" style={{ maxWidth: '600px' }}>
//             Use this calculator to check how much EMI you will pay monthly along with total interest.
//           </p>

//           <Row className="mt-5">
//             {/* Left Column - Form */}
//             <Col md={6} lg={4} className="bg-white p-4 rounded shadow-sm ">
//               <Form.Group className="mb-4">
//                 <Form.Label><strong>Loan Amount</strong></Form.Label>
//                 <div className="d-flex mb-2">
//                   <span className="input-group-text">₹</span>
//                   <Form.Control type="text" value={loanAmount.toLocaleString()} readOnly />
//                 </div>
//                 <Form.Range min={10000} max={5000000} step={1000} value={loanAmount} onChange={(e:any) => setLoanAmount(Number(e.target.value))} />
//               </Form.Group>

//               <Form.Group className="mb-4">
//                 <Form.Label><strong>Interest Rate (%)</strong></Form.Label>
//                 <div className="d-flex mb-2">
//                   <span className="input-group-text">%</span>
//                   <Form.Control type="text" value={interestRate} readOnly />
//                 </div>
//                 <Form.Range min={5} max={20} step={0.1} value={interestRate} onChange={(e:any) => setInterestRate(Number(e.target.value))} />
//               </Form.Group>

//               <Form.Group className="mb-4">
//                 <Form.Label><strong>Tenure (Months)</strong></Form.Label>
//                 <div className="d-flex mb-2">
//                   <span className="input-group-text">Months</span>
//                   <Form.Control type="text" value={tenure} readOnly />
//                 </div>
//                 <Form.Range min={6} max={240} step={1} value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
//               </Form.Group>
//             </Col>

//             {/* Middle Column - EMI Result */}
//             <Col md={6} lg={4} className="bg-white p-4 rounded shadow-sm mt-4 mt-md-0">
//               <h5 className="text-success fw-bold mb-3">Your EMI Details</h5>
//               <p className="mb-1">Monthly EMI</p>
//               <h4 className="fw-bold">₹{emi.toLocaleString()}</h4>
//               <hr />
//               <p className="mb-1">Total Interest Payable</p>
//               <h5>₹{totalInterest.toLocaleString()}</h5>
//               <hr />
//               <p className="mb-1">Total Payment (Principal + Interest)</p>
//               <h5>₹{totalAmountPaid.toLocaleString()}</h5>
//             </Col>

//             {/* Right Column - Circular Chart */}
//             <Col md={12} lg={4} className="bg-white p-4 rounded shadow-sm text-center mt-4 mt-lg-0">
//               <svg width="150" height="150" viewBox="0 0 36 36" className="mx-auto">
//                 <path d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831 a 15.9155 15.9155 0 1 1 0 -31.831" fill="none" stroke="#94c57d" strokeWidth="3.8" />
//                 <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#2d1b56" strokeWidth="3.8" strokeDasharray={`${principalPercent}, ${interestPercent}`} />
//                 {/* <text x="18" y="20.35" textAnchor="middle" fill="#2d1b56" fontSize="0.5rem">principal</text> */}
//                 <text x="18" y="23.35" textAnchor="middle" fill="#2d1b56" fontSize="0.35rem">₹{loanAmount.toLocaleString()}</text>
//               </svg>
//               <div className="mt-3 d-flex justify-content-center gap-3">
//                 <div className="d-flex align-items-center">
//                   <span className="me-1" style={{ background: '#2d1b56', width: '12px', height: '12px', display: 'inline-block' }}></span>
//                   <small>Principal</small>
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <span className="me-1" style={{ background: '#94c57d', width: '12px', height: '12px', display: 'inline-block' }}></span>
//                   <small>Interest</small>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//       <Footer />
//     </>
//   );
// }





























'use client';
import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(36);

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    return (
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1)
    );
  };

  const emi = Number.isFinite(calculateEMI()) ? Number(calculateEMI().toFixed(0)) : 0;
  const totalAmountPaid = emi * tenure;
  const totalInterest = totalAmountPaid - loanAmount;
  const principalPercent = ((loanAmount / totalAmountPaid) * 100).toFixed(0);
  const interestPercent = (100 - Number(principalPercent)).toFixed(0);

  return (
    <>
      <Navbar />
      <Container fluid className="py-5" style={{ background: '#f9f9f9' }}>
        <Container>
          <h2 className="fw-bold text-dark mb-3 d-flex align-items-center gap-3">
            <span style={{ color: '#2d1b56' }}>Loan Calculator</span>
            <img src="/loan-icon.png" alt="Loan Icon" style={{ width: '40px', height: '40px' }} />
          </h2>
          <p className="text-secondary mb-4" style={{ maxWidth: '600px' }}>
            Use this calculator to check how much EMI you will pay monthly along with total interest.
          </p>

          <Row className="gy-4 gx-5">
            {/* Left Column - Form */}
            <Col md={6} lg={4} className="bg-white p-4 rounded shadow-sm h-100">
              <Form.Group className="mb-4">
                <Form.Label><strong>Loan Amount</strong></Form.Label>
                <div className="d-flex mb-2">
                  <span className="input-group-text">₹</span>
                  <Form.Control type="text" value={loanAmount.toLocaleString()} readOnly />
                </div>
                <Form.Range min={10000} max={5000000} step={1000} value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label><strong>Interest Rate (%)</strong></Form.Label>
                <div className="d-flex mb-2">
                  <span className="input-group-text">%</span>
                  <Form.Control type="text" value={interestRate} readOnly />
                </div>
                <Form.Range min={5} max={20} step={0.1} value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label><strong>Tenure (Months)</strong></Form.Label>
                <div className="d-flex mb-2">
                  <span className="input-group-text">Months</span>
                  <Form.Control type="text" value={tenure} readOnly />
                </div>
                <Form.Range min={6} max={240} step={1} value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
              </Form.Group>
            </Col>

            {/* Middle Column - EMI Result */}
            <Col md={6} lg={4} className="bg-white p-4 rounded shadow-sm h-100">
              <h5 className="text-success fw-bold mb-3">Your EMI Details</h5>
              <p className="mb-1">Monthly EMI</p>
              <h4 className="fw-bold">₹{emi.toLocaleString()}</h4>
              <hr />
              <p className="mb-1">Total Interest Payable</p>
              <h5>₹{totalInterest.toLocaleString()}</h5>
              <hr />
              <p className="mb-1">Total Payment (Principal + Interest)</p>
              <h5>₹{totalAmountPaid.toLocaleString()}</h5>
            </Col>

            {/* Right Column - Circular Chart */}
            <Col md={12} lg={4} className="bg-white p-4 rounded shadow-sm text-center h-100">
              <svg width="150" height="150" viewBox="0 0 36 36" className="mx-auto">
                <path d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831 a 15.9155 15.9155 0 1 1 0 -31.831" fill="none" stroke="#94c57d" strokeWidth="3.8" />
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#2d1b56" strokeWidth="3.8" strokeDasharray={`${principalPercent}, ${interestPercent}`} />
                <text x="18" y="20.35" textAnchor="middle" fill="#2d1b56" fontSize="0.5rem">Principal</text>
                <text x="18" y="23.35" textAnchor="middle" fill="#2d1b56" fontSize="0.35rem">₹{loanAmount.toLocaleString()}</text>
              </svg>
              <div className="mt-3 d-flex justify-content-center gap-3">
                <div className="d-flex align-items-center">
                  <span className="me-1" style={{ background: '#2d1b56', width: '12px', height: '12px', display: 'inline-block' }}></span>
                  <small>Principal</small>
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-1" style={{ background: '#94c57d', width: '12px', height: '12px', display: 'inline-block' }}></span>
                  <small>Interest</small>
                </div>
              </div>
            </Col>
          </Row>

          {/* Services Section */}
          <div className="mt-5">
            <h3 className="fw-bold" style={{ color: '#2d1b56' }}>Our Services</h3>
            <p className="text-secondary" style={{ maxWidth: '700px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio sem, tempor egestas libero at, fermentum posuere quam. Vestibulum dapibus vulputate sapien. Donec pulvinar libero at ex tristique commodo.
            </p>
            <Row className="mt-4 g-4">
              {['Home Loan', 'Car Loan', 'Personal Loan', 'Gold Loan', 'Education Loan', 'Credit Card Issue'].map((service, index) => (
                <Col key={index} md={4}>
                  <div className="bg-light p-4 text-center rounded h-100">
                    <img src={`/icons/service-${index + 1}.png`} alt={service} style={{ width: '40px', height: '40px' }} className="mb-3" />
                    <h6 className="fw-bold bg-secondary text-white d-inline-block px-3 py-1 rounded small">{service}</h6>
                    <p className="text-muted mt-2" style={{ fontSize: '0.9rem' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas odio sem, tempor egestas libero at, fermentum posuere quam.
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>

        </Container>
      </Container>
      <Footer />
    </>
  );
}
