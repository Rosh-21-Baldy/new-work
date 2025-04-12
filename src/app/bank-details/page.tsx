"use client";
import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import '../../../src/App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BankDetails = () => {
  const [formData, setFormData] = useState({
    accountHolderName: '',
    accountNumber: '',
    bankName: '',
    branch: '',
    ifscCode: '',
    accountType: 'savings',
    termsAccepted: false
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const { accountHolderName, accountNumber, bankName, branch, ifscCode, termsAccepted } = formData;

    if (!accountHolderName || !accountNumber || !bankName || !branch || !ifscCode) {
      toast.error("Please fill in all required fields.");
      return false;
    }

    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifscCode)) {
      toast.error("Please enter a valid IFSC code.");
      return false;
    }

    if (!termsAccepted) {
      toast.error("Please accept the terms and conditions.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log(formData);
    toast.success("Bank details submitted successfully!");
    // You can also reset the form or send data to a backend here
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-5">
        <h2 className="mb-4 d-flex justify-content-center">Bank Details Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Account Holder Name */}
            <div className="col-md-6">
              <label htmlFor="accountHolderName" className="form-label">
                Account Holder Name
              </label>
              <input
                type="text"
                className="form-control"
                id="accountHolderName"
                name="accountHolderName"
                value={formData.accountHolderName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Account Number */}
            <div className="col-md-6">
              <label htmlFor="accountNumber" className="form-label">
                Account Number
              </label>
              <input
                type="number"
                className="form-control"
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                required
              />
            </div>

            {/* Bank Name */}
            <div className="col-md-6">
              <label htmlFor="bankName" className="form-label">
                Bank Name
              </label>
              <input
                type="text"
                className="form-control"
                id="bankName"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Branch */}
            <div className="col-md-6">
              <label htmlFor="branch" className="form-label">
                Branch
              </label>
              <input
                type="text"
                className="form-control"
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
              />
            </div>

            {/* IFSC Code */}
            <div className="col-md-6">
              <label htmlFor="ifscCode" className="form-label">
                IFSC Code
              </label>
              <input
                type="text"
                className="form-control"
                id="ifscCode"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleChange}
                required
              />
            </div>

            {/* Account Type */}
            <div className="col-md-6">
              <label htmlFor="accountType" className="form-label">
                Account Type
              </label>
              <select
                className="form-select"
                id="accountType"
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
              >
                <option value="savings">Savings</option>
                <option value="current">Current</option>
              </select>
            </div>

            {/* Terms and Conditions */}
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="termsAccepted">
                  I confirm that the provided bank details are correct
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-12 d-flex justify-content-center">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
};

export default BankDetails;


