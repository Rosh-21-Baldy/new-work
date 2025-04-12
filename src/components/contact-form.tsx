"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ContactForm = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    toast.success("Your details has been submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
    setFormState({ fullName: "", email: "", phone: "" });
    
  };

  return (
    <div className="bg-white ">
    <div className=" text-white rounded-lg p-4"style={{backgroundColor:"#ffffff"}}>
          <ToastContainer />

          <div className="d-flex flex-row gap-4">
  <div className="p-0 d-flex flex-column gap-1">
    <h3 className="text-2xl font-bold text-black mb-1 mt-0">
      Drop Us a Message
    </h3>
    <span className="text-base font-medium text-muted">
      For Loan and Partner Query
    </span>
          {/* <p className="text-base text-dark-100 mb-6">
            Fill in your details, and we will call you back shortly.
          </p> */}
         
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-black mb-1 block">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="bg-white-500 border-green-400 text-white placeholder:text-gray-200 rounded-md p-2"
                  value={formState.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-black mb-1 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white-500 border-green-400 text-white placeholder:text-gray-200 rounded-md p-2"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-black mb-1 block">
                  Phone Number
                </Label>
                <div className="flex">
                  <div className="bg-dark border border-green-400 rounded-l-md px-3 flex items-center text-white">
                    +91
                  </div>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-green-white border-green-400 text-white placeholder:text-gray-200 rounded-r-md p-2 w-full"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a 10-digit phone number"
                  />
                </div>  
              </div>
              <div>
              <button
  type="submit"
  className="border-2 border-success-600 text-dark rounded-md py-2 px-4 text-lg font-semibold hover:bg-success transition-all w-full mt-2">
  Submit
</button>

              </div>
              <p className="text-sm text-dark mt-2">
                By clicking "Submit", you agree to our{" "}
                <Link
                  href="/term-cond"
                  className="text-gray-300 underline hover:text-white"
                >
                  Terms & Conditions
                </Link>
                ,{" "}
                <Link
                  href="/privacy-pol"
                  className="text-gray-300 underline hover:text-white"
                >
                  Privacy Policy
                </Link>{" "}
                {" "}
                {/* <Link
                  href="/terms-of-use"
                  className="text-gray-300 underline hover:text-white"
                >
                  Terms of Use
                </Link> */}
              </p>
            </div>
          </form>
        </div>
        <div className="hidden md:block p-3">
          {/* <Image
            src="https://img.freepik.com/premium-vector/hands-holding-clipboard-with-checklist-with-green-check-marks-pen-human-filling-control_625536-2138.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid&w=740"
            alt="Contact us illustration"
            width={550}
            height={400}
            className=" h-auto"
          /> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;