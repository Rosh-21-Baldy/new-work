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
        
       
//       </div>
//       <Footer/>
//     </>
//   );
// }































'use client'; // Ensure it's a client component

import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Navbar from '@/components/navbar'; // Ensure these are client components
import Footer from '@/components/footer';
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
  const totalSavings = savings * 12 * existingTenure;

  return (
    <>
      <Navbar /> {/* Ensure this is a client component */}
      <Container className="p-5 bg-light rounded shadow-sm">
        <h2 className="text-center">Balance Transfer Calculator</h2>
        <p className="text-center text-danger fw-bold">
          Total Savings: ₹{totalSavings.toLocaleString()}
        </p>

        {/* Loan Amount */}
        <Form.Group className="mb-3">
          <Form.Label>Outstanding Principal</Form.Label>
          <Form.Range 
            min="100000" max="5000000" step="10000"
            value={principal} onChange={(e) => setPrincipal(Number(e.target.value))}
          />
          <p>₹{principal.toLocaleString()}</p>
        </Form.Group>

        {/* Existing Interest Rate */}
        <Form.Group className="mb-3">
          <Form.Label>Existing Interest Rate (%)</Form.Label>
          <Form.Range 
            min="5" max="15" step="0.1"
            value={existingRate} onChange={(e) => setExistingRate(Number(e.target.value))}
          />
          <p>{existingRate}%</p>
        </Form.Group>

        {/* Existing Tenure */}
        <Form.Group className="mb-3">
          <Form.Label>Existing Tenure (Years)</Form.Label>
          <Form.Range 
            min="5" max="30" step="1"
            value={existingTenure} onChange={(e) => setExistingTenure(Number(e.target.value))}
          />
          <p>{existingTenure} years</p>
        </Form.Group>
      </Container>
      <Footer /> {/* Ensure this is a client component */}
    </>
  );
}












