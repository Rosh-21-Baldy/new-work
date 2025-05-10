
"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import "../../App.css";
import Footer from '@/components/footer';
import Navbar  from '@/components/navbar';

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
    <>
    <Navbar/>
    <div className="prefinn-container">
      <h1 className='d-flex justify-content-center'> Application Form </h1 >
      <div className="form-wrapper">
        {isSubmitted ? (
          <div className="success-message">✅ Application Submitted Successfully!</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className='d-flex'> Name <p className="text-danger">*</p></label>
              <input {...register("customerName", { required: "Name is required" })} placeholder="Enter full name" />
              {errors.customerName && <span className="error">{errors.customerName.message}</span>}
            </div>

            {/* <div className="form-group">
            <label className='d-flex'>Customer <p className="text-danger">*</p></label>
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
            </div> */}
 <div className="form-group">
              <label className='d-flex'>Contact Number <p className='text-danger'>*</p></label>
              <input {...register("contactNumber", { required: "Contact number is required" })} placeholder="Enter Contact Number" />
              {errors.contactNumber && <span className="error">{errors.contactNumber.message}</span>}
            </div>

            <div className="form-group">
            <label className='d-flex'>Pincode <p className='text-danger'>*</p></label>

              <input {...register("pincode", { required: "Pincode is required" })} placeholder="Enter Pincode" />
              {errors.pincode && <span className="error">{errors.pincode.message}</span>}
            </div>

            {/* <div className="form-group">
              <label>State <p></p></label>
              <input {...register("state", { required: "State is required" })} placeholder="Enter State" />
              {errors.state && <span className="error">{errors.state.message}</span>}
            </div> */}

            <div className="form-group">
              <label>City <p></p></label>
              <input {...register("city", { required: "City is required" })} placeholder="Enter City" />
              {errors.city && <span className="error">{errors.city.message}</span>}
            </div>

           

            <div className="form-group">
              <label className='d-flex'>Email ID <p className='text-danger'>*</p></label>
              <input {...register("email", { required: "Email is required" })} placeholder="Enter Email ID" />
              {errors.email && <span className="error">{errors.email.message}</span>}
            </div>

            <div className="form-group">
            <label className='d-flex'>Monthly Income <p className='text-danger'> *</p></label>
              <input {...register("presentIncome", { required: "Income is required" })} placeholder="Enter Monthly Income" />
              {errors.presentIncome && <span className="error">{errors.presentIncome.message}</span>}
            </div>

            <div className="form-group">
            <label className='d-flex'>Loan Amount Required<p className='text-danger'> *</p></label>
              <input {...register("loanAmount", { required: "Loan amount is required" })} placeholder="Enter Loan Amount" />
              {errors.loanAmount && <span className="error">{errors.loanAmount.message}</span>}
            </div>

            {/* <div className="form-group">
              <label>CIBIL Score (Optional)</label>
              <input {...register("cibilScore")} placeholder="Enter CIBIL Score" />
            </div> */}

            <div className="form-group">
              {/* <label>Current EMI (Optional)</label> */}
              <label className='d-flex'>Current EMI<p className='text-danger'> *</p></label>
              <input {...register("currentEMIs")} placeholder="Enter Current EMI" />
            </div>

            <div className="form-group">
              <label>Product Type <p></p></label>
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
    <Footer/>
    </>
  );
};

export default CustomerRegistrationForm;
