// 'use client';
// import { useState } from 'react';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'; // Fixed trailing comma
// import Footer from '@/components/footer';
// import Navbar from '@/components/navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function BalanceTransferCalculator() {
//   const [principal, setPrincipal] = useState(2500000);
//   const [existingRate, setExistingRate] = useState(9.03);
//   const [existingTenure, setExistingTenure] = useState(20);
//   const [transferRate, setTransferRate] = useState(8.75);
//   const [transferTenure, setTransferTenure] = useState(20);

//   const calculateEMI = (principal: number, rate: number, tenure: number): number => {
//     const monthlyRate = rate / 1200;
//     const months = tenure * 12;
//     return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
//   };

//   const existingEMI = calculateEMI(principal, existingRate, existingTenure);
//   const proposedEMI = calculateEMI(principal, transferRate, transferTenure);
//   const savings = existingEMI - proposedEMI;
//   const totalSavings = savings * 12 * existingTenure;

//   return (
//     <>
//       <Navbar/>
//       <div className="container p-5 bg-light rounded shadow-sm">
//         <h2 className="text-center">Balance Transfer Calculator</h2>
//         <p className="text-center text-danger fw-bold">Total Savings: ₹{totalSavings.toLocaleString()}</p>
        
//         <div className="mb-3">
//           <label className="form-label">Outstanding Principal</label>
//           <input 
//             type="range" 
//             className="form-range" 
//             min="100000" 
//             max="5000000" 
//             step="10000" 
//             value={principal} 
//             onChange={(e) => setPrincipal(Number(e.target.value))} // Added Number conversion
//           />
//           <p>₹{principal.toLocaleString()}</p>
//         </div>
        
//         {/* Add Number conversion to all other input handlers */}
//         <div className="mb-3">
//           <label className="form-label">Existing Interest Rate (%)</label>
//           <input 
//             type="range" 
//             className="form-range" 
//             min="5" 
//             max="15" 
//             step="0.1" 
//             value={existingRate} 
//             onChange={(e) => setExistingRate(Number(e.target.value))}
//           />
//           <p>{existingRate}%</p>
//         </div>
        
//         <div className="mb-3">
//           <label className="form-label">Existing Tenure (Years)</label>
//           <input 
//             type="range" 
//             className="form-range" 
//             min="5" 
//             max="30" 
//             step="1" 
//             value={existingTenure} 
//             onChange={(e) => setExistingTenure(Number(e.target.value))}
//           />
//           <p>{existingTenure} years</p>
//         </div>
        
//         {/* Repeat Number conversion for transferRate and transferTenure */}
//         {/* ... rest of the component ... */}
//       </div>
//       <Footer/>
//     </>
//   );
// }

























'use client';
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BalanceTransferCalculator() {
  const [principal, setPrincipal] = useState(2500000);
  const [existingRate, setExistingRate] = useState(9.03);
  const [existingTenure, setExistingTenure] = useState(20);
  const [transferRate, setTransferRate] = useState(8.75);
  const [transferTenure, setTransferTenure] = useState(20);

  const calculateEMI = (principal: number, rate: number, tenure: number): number => {
    const monthlyRate = rate / 1200;
    const months = tenure * 12;
    return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  };

  const existingEMI = calculateEMI(principal, existingRate, existingTenure);
  const proposedEMI = calculateEMI(principal, transferRate, transferTenure);
  const savings = existingEMI - proposedEMI;

  return (
    <>
    <Navbar/>
    
    <Container className="py-5" style={{ backgroundColor: '#e6e9f5', borderRadius: '10px' }}>
      <h3 className="mb-4">Existing Loan</h3>
      <Row className="mb-3">
        <Col xs={6}>
          <Form.Label>Outstanding Principal</Form.Label>
          <Form.Range min="100000" max="5000000" step="10000" 
            value={principal} 
            onChange={(e) => setPrincipal(parseInt(e.target.value, 10))} 
          />
        </Col>
        <Col xs={6}>
          <Form.Control type="text" value={`₹${principal.toLocaleString()}`} readOnly />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={6}>
          <Form.Label>Interest Rate (% P.A.)</Form.Label>
          <Form.Range min="5" max="15" step="0.1" 
            value={existingRate} 
            onChange={(e) => setExistingRate(parseFloat(e.target.value))} 
          />
        </Col>
        <Col xs={6}>
          <Form.Control type="text" value={`${existingRate} %`} readOnly />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={6}>
          <Form.Label>Tenure (Years)</Form.Label>
          <Form.Range min="5" max="30" step="1" 
            value={existingTenure} 
            onChange={(e) => setExistingTenure(parseInt(e.target.value, 10))} 
          />
        </Col>
        <Col xs={6}>
          <Form.Control type="text" value={`${existingTenure} years`} readOnly />
        </Col>
      </Row>

      <h3 className="mt-4">Balance Transfer</h3>

      <Row className="mb-3">
        <Col xs={6}>
          <Form.Label>Tenure (Years)</Form.Label>
          <Form.Range min="5" max="30" step="1" 
            value={transferTenure} 
            onChange={(e) => setTransferTenure(parseInt(e.target.value, 10))} 
          />
        </Col>
        <Col xs={6}>
          <Form.Control type="text" value={`${transferTenure} years`} readOnly />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={6}>
          <Form.Label>Interest Rate (% P.A.)</Form.Label>
          <Form.Range min="5" max="15" step="0.1" 
            value={transferRate} 
            onChange={(e) => setTransferRate(parseFloat(e.target.value))} 
          />
        </Col>
        <Col xs={6}>
          <Form.Control type="text" value={`${transferRate} %`} readOnly />
        </Col>
      </Row>

      <h5 className="mt-4">Existing EMI: <span className="text-primary">₹{Math.round(existingEMI).toLocaleString()}</span></h5>
      <h5>Proposed EMI: <span className="text-primary">₹{Math.round(proposedEMI).toLocaleString()}</span></h5>
      <h5>Savings in EMI: <span className="text-success">₹{Math.round(savings).toLocaleString()}</span></h5>
      
    </Container>
    <Container className="p-4 rounded shadow-sm" style={{ backgroundColor: '#f1f3f7' }}>
      <Row className="align-items-center">
        {/* Left Column - Heading & Button */}
        <Col md={5} className="text-md-start text-center">
          <h2 className="fw-bold text-dark">Balance Transfer Calculator</h2>
          <Button variant="outline-dark" className="mt-3">
            Unlock Offers Now <span className="ms-2">→</span>
          </Button>
        </Col>

        {/* Right Column - Description */}
        <Col md={7} className="text-md-start text-center mt-4 mt-md-0">
          <p className="text-muted">
            Use Ambak’s Home Loan Refinance Calculator to find out the savings in EMI, 
            resulting in lower cash outflow towards your home loan.
          </p>
          <h5 className="fw-bold mt-3">How to use the calculator?</h5>
          <ul className="text-muted">
            <li><strong>Existing Loan Principal Outstanding:</strong> Input the principal outstanding of your existing home loan with the other financial institution</li>
            <li><strong>Tenure:</strong> Input the balance loan term of your existing home loan</li>
            <li><strong>Interest Rate (%):</strong> Input the interest rate of your existing home loan</li>
          </ul>
          <p className="text-muted">
            The total cash outflow and your revised EMI of your outstanding home loan 
            will be calculated to assist you to make a fair comparison, in case you make 
            a balance transfer to another Bank. This will help you to get a clear 
            understanding of the total savings on your home loan.
          </p>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
}
