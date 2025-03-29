// "use client";

// import { useForm } from 'react-hook-form';
// import { useState } from 'react';
// import "../../App.css";

// const CustomerRegistrationForm = () => {
//   const { 
//     register, 
//     handleSubmit, 
//     formState: { errors },
//     reset
//   } = useForm();
  
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const onSubmit = (data) => {
//     console.log('Form Data:', data);
//     // Here you would typically send data to your backend API
//     reset();
//     setIsSubmitted(true);
//     setTimeout(() => setIsSubmitted(false), 3000);
//   };

//   return (
//     <div className="prefinn-container">
//       <h1>Prefinn Loan Application</h1>
//       <div className="form-wrapper">
//         {isSubmitted ? (
//           <div className="success-message">
//             ✅ Application Submitted Successfully!
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit(onSubmit)}>
//             {/* Customer Name */}
//             <div className="form-group">
//               <label>Customer Name (Mandatory)</label>
//               <input
//                 {...register('customerName', { required: 'Name is required' })}
//                 placeholder="Enter full name"
//               />
//               {errors.customerName && <span className="error">{errors.customerName.message}</span>}
//             </div>

//             {/* PAN Number */}
//             <div className="form-group">
//               <label>PAN Number (Mandatory)</label>
//               <input
//                 {...register('pan', {
//                   required: 'PAN is required',
//                   pattern: {
//                     value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
//                     message: 'Invalid PAN format (AAAAA1111A)'
//                   }
//                 })}
//                 placeholder="Enter PAN number"
//                 maxLength="10"
//               />
//               {errors.pan && <span className="error">{errors.pan.message}</span>}
//             </div>

//             {/* Occupation */}
//             <div className="form-group">
//               <label>Occupation (Mandatory)</label>
//               <select
//                 {...register('occupation', { required: 'Occupation is required' })}
//               >
//                 <option value="">Select Occupation</option>
//                 <option value="service">Service</option>
//                 <option value="business">Business</option>
//                 <option value="selfEmployed">Self Employed</option>
//               </select>
//               {errors.occupation && <span className="error">{errors.occupation.message}</span>}
//             </div>

//             {/* Present Income */}
//             <div className="form-group">
//               <label>Present Income (₹) (Mandatory)</label>
//               <input
//                 type="number"
//                 {...register('presentIncome', {
//                   required: 'Income is required',
//                   min: { value: 0, message: 'Income cannot be negative' }
//                 })}
//               />
//               {errors.presentIncome && <span className="error">{errors.presentIncome.message}</span>}
//             </div>

//             {/* Address Section */}
//             <div className="address-group">
//               <div className="form-group">
//                 <label>State (Mandatory)</label>
//                 <input
//                   {...register('state', { required: 'State is required' })}
//                   placeholder="Enter state"
//                 />
//                 {errors.state && <span className="error">{errors.state.message}</span>}
//               </div>

//               <div className="form-group">
//                 <label>City (Mandatory)</label>
//                 <input
//                   {...register('city', { required: 'City is required' })}
//                   placeholder="Enter city"
//                 />
//                 {errors.city && <span className="error">{errors.city.message}</span>}
//               </div>

//               <div className="form-group">
//                 <label>Pincode (Mandatory)</label>
//                 <input
//                   type="number"
//                   {...register('pincode', {
//                     required: 'Pincode is required',
//                     pattern: {
//                       value: /^\d{6}$/,
//                       message: 'Invalid pincode (6 digits required)'
//                     }
//                   })}
//                   placeholder="6-digit pincode"
//                 />
//                 {errors.pincode && <span className="error">{errors.pincode.message}</span>}
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className="contact-group">
//               <div className="form-group">
//                 <label>Contact Number (Mandatory)</label>
//                 <input
//                   type="tel"
//                   {...register('contactNumber', {
//                     required: 'Contact number is required',
//                     pattern: {
//                       value: /^\d{10}$/,
//                       message: 'Invalid phone number (10 digits required)'
//                     }
//                   })}
//                   placeholder="10-digit mobile number"
//                 />
//                 {errors.contactNumber && <span className="error">{errors.contactNumber.message}</span>}
//               </div>

//               <div className="form-group">
//                 <label>Email ID (Mandatory)</label>
//                 <input
//                   type="email"
//                   {...register('email', {
//                     required: 'Email is required',
//                     pattern: {
//                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                       message: 'Invalid email address'
//                     }
//                   })}
//                   placeholder="Enter valid email"
//                 />
//                 {errors.email && <span className="error">{errors.email.message}</span>}
//               </div>
//             </div>

//             {/* Loan Details */}
//             <div className="loan-details">
//               <div className="form-group">
//                 <label>Product Type (Mandatory)</label>
//                 <select
//                   {...register('productType', { required: 'Product type is required' })}
//                 >
//                   <option value="">Select Loan Type</option>
//                   <option value="HL">Home Loan (HL)</option>
//                   <option value="PL">Personal Loan (PL)</option>
//                   <option value="LAP">Loan Against Property (LAP)</option>
//                   <option value="BL">Business Loan</option>
//                 </select>
//                 {errors.productType && <span className="error">{errors.productType.message}</span>}
//               </div>

//               <div className="form-group">
//                 <label>Loan Amount Required (₹) (Mandatory)</label>
//                 <input
//                   type="number"
//                   {...register('loanAmount', {
//                     required: 'Loan amount is required',
//                     min: { value: 10000, message: 'Minimum ₹10,000 required' }
//                   })}
//                 />
//                 {errors.loanAmount && <span className="error">{errors.loanAmount.message}</span>}
//               </div>
//             </div>

//             {/* Optional Fields */}
//             <div className="optional-fields">
//               <div className="form-group">
//                 <label>CIBIL Score (if available)</label>
//                 <input
//                   type="number"
//                   {...register('cibilScore', {
//                     min: { value: 300, message: 'Minimum 300' },
//                     max: { value: 900, message: 'Maximum 900' }
//                   })}
//                   placeholder="300-900"
//                 />
//                 {errors.cibilScore && <span className="error">{errors.cibilScore.message}</span>}
//               </div>

//               <div className="form-group">
//                 <label>Current EMIs (₹) (if any)</label>
//                 <input
//                   type="number"
//                   {...register('currentEMIs', {
//                     min: { value: 0, message: 'Cannot be negative' }
//                   })}
//                 />
//                 {errors.currentEMIs && <span className="error">{errors.currentEMIs.message}</span>}
//               </div>
//             </div>

//             <button type="submit" className="submit-btn">
//               Submit Application
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomerRegistrationForm;




// "use client";

// import { useForm, SubmitHandler } from "react-hook-form";
// import { useState } from "react";
// import "../../App.css";

// // Define the form data structure
// interface FormData {
//   customerName: string;
//   pan: string;
//   occupation: string;
//   presentIncome: number;
//   state: string;
//   city: string;
//   pincode: string;
//   contactNumber: string;
//   email: string;
//   productType: string;
//   loanAmount: number;
//   cibilScore?: number;
//   currentEMIs?: number;
// }

// const CustomerRegistrationForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<FormData>();

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     console.log("Form Data:", data);
//     reset();
//     setIsSubmitted(true);
//     setTimeout(() => setIsSubmitted(false), 3000);
//   };

//   return (
//     <div className="prefinn-container">
//       <h1>Prefinn Loan Application</h1>
//       <div className="form-wrapper">
//         {isSubmitted ? (
//           <div className="success-message">✅ Application Submitted Successfully!</div>
//         ) : (
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="form-group">
//               <label>Customer Name (Mandatory)</label>
//               <input {...register("customerName", { required: "Name is required" })} placeholder="Enter full name" />
//               {errors.customerName && <span className="error">{errors.customerName.message}</span>}
//             </div>

//             <div className="form-group">
//               <label>PAN Number (Mandatory)</label>
//               <input
//                 {...register("pan", {
//                   required: "PAN is required",
//                   pattern: {
//                     value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
//                     message: "Invalid PAN format (AAAAA1111A)",
//                   },
//                 })}
//                 placeholder="Enter PAN number"
//                 maxLength={10}
//               />
//               {errors.pan && <span className="error">{errors.pan.message}</span>}
//             </div>

//             <div className="form-group">
//               <label>Occupation (Mandatory)</label>
//               <select {...register("occupation", { required: "Occupation is required" })}>
//                 <option value="">Select Occupation</option>
//                 <option value="service">Service</option>
//                 <option value="business">Business</option>
//                 <option value="selfEmployed">Self Employed</option>
//               </select>
//               {errors.occupation && <span className="error">{errors.occupation.message}</span>}
//             </div>

//             <button type="submit" className="submit-btn">Submit Application</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomerRegistrationForm;






"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import "../../App.css";

// Define the form data structure
interface FormData {
  customerName: string;
  aadhaar: string;
  occupation: string;
  presentIncome: number;
  state: string;
  city: string;
  pincode: string;
  contactNumber: string;
  email: string;
  productType: string;
  loanAmount: number;
  cibilScore?: number;
  currentEMIs?: number;
}

const CustomerRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
    reset();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="prefinn-container">
      <h1>Prefinn Loan Application</h1>
      <div className="form-wrapper">
        {isSubmitted ? (
          <div className="success-message">✅ Application Submitted Successfully!</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Customer Name (Mandatory)</label>
              <input {...register("customerName", { required: "Name is required" })} placeholder="Enter full name" />
              {errors.customerName && <span className="error">{errors.customerName.message}</span>}
            </div>

            <div className="form-group">
              <label>Aadhaar Card Number (Mandatory)</label>
              <input
                {...register("aadhaar", {
                  required: "Aadhaar is required",
                  pattern: {
                    value: /^[0-9]{12}$/,
                    message: "Invalid Aadhaar number (12 digits required)",
                  },
                })}
                placeholder="Enter Aadhaar number"
                maxLength={12}
              />
              {errors.aadhaar && <span className="error">{errors.aadhaar.message}</span>}
            </div>

            <div className="form-group">
              <label>Pincode (Mandatory)</label>
              <input {...register("pincode", { required: "Pincode is required" })} placeholder="Enter Pincode" />
              {errors.pincode && <span className="error">{errors.pincode.message}</span>}
            </div>

            <div className="form-group">
              <label>State (Mandatory)</label>
              <input {...register("state", { required: "State is required" })} placeholder="Enter State" />
              {errors.state && <span className="error">{errors.state.message}</span>}
            </div>

            <div className="form-group">
              <label>City (Mandatory)</label>
              <input {...register("city", { required: "City is required" })} placeholder="Enter City" />
              {errors.city && <span className="error">{errors.city.message}</span>}
            </div>

            <div className="form-group">
              <label>Contact Number (Mandatory)</label>
              <input {...register("contactNumber", { required: "Contact number is required" })} placeholder="Enter Contact Number" />
              {errors.contactNumber && <span className="error">{errors.contactNumber.message}</span>}
            </div>

            <div className="form-group">
              <label>Email ID (Mandatory)</label>
              <input {...register("email", { required: "Email is required" })} placeholder="Enter Email ID" />
              {errors.email && <span className="error">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label>Monthly Income (Mandatory)</label>
              <input {...register("presentIncome", { required: "Income is required" })} placeholder="Enter Monthly Income" />
              {errors.presentIncome && <span className="error">{errors.presentIncome.message}</span>}
            </div>

            <div className="form-group">
              <label>Loan Amount Required (Mandatory)</label>
              <input {...register("loanAmount", { required: "Loan amount is required" })} placeholder="Enter Loan Amount" />
              {errors.loanAmount && <span className="error">{errors.loanAmount.message}</span>}
            </div>

            <div className="form-group">
              <label>CIBIL Score (Optional)</label>
              <input {...register("cibilScore")} placeholder="Enter CIBIL Score" />
            </div>

            <div className="form-group">
              <label>Current EMI (Optional)</label>
              <input {...register("currentEMIs")} placeholder="Enter Current EMI" />
            </div>

            <div className="form-group">
              <label>Product Type (Mandatory)</label>
              <select {...register("productType", { required: "Product type is required" })}>
                <option value="">Select Loan Type</option>
                <option value="HL">Home Loan (HL)</option>
                <option value="PL">Personal Loan (PL)</option>
                <option value="BL">Business Loan (BL)</option>
                <option value="CL">Car Loan (CL)</option>
                <option value="LAP">Loan Against Property (LAP)</option>
              </select>
              {errors.productType && <span className="error">{errors.productType.message}</span>}
            </div>

            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CustomerRegistrationForm;
