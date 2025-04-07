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
    <div className="bg-white-300 text-white rounded-lg py-8 px-6 md:p-8">
          <ToastContainer />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-1  text-black">
          Drop Us a Message
          </h3>
          <p className="text-base text-dark-100 mb-6">
            Fill in your details, and we will call you back shortly.
          </p>
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
                  <div className="bg-blue-500 border border-green-400 rounded-l-md px-3 flex items-center text-white">
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
                  className="bg-blue-700 text-white rounded-md py-2 px-4 text-lg font-semibold hover:bg-white-800 transition-all w-full mt-2"
                >
                  Submit
                </button>
              </div>
              <p className="text-sm text-danger mt-2">
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
        <div className="hidden md:block">
          <Image
            src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4917.jpg?t=st=1743567549~exp=1743571149~hmac=87e4cefcddc0d974aefbfc2b8898c76e27011dbc08faf0a6258a3fd64092e9db&w=826"
            alt="Contact us illustration"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;