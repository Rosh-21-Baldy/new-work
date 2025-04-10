"use client";

import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className=" py-4 sticky top-0 z-50 shadow-sm"
      style={{ backgroundColor: " #0A2D4D" }}
    >
      <div className="ambak-container flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://www.prefinn.com/_next/static/media/logo.96e5ff96.png"
            alt="Prefinn Logo"
            width={0}
            height={0}
            className="h-12 w-100"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/about-us"
            className="text-white text-sm font-medium text-decoration-none"
          >
            About Us
          </Link>
          {/* Products dropdown */}
          <div className="relative group">
            <button className="flex items-center text-white text-sm font-medium">
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute left-0  w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block ">
              <Link
                href="/home-loans"
                className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md"
              >
                Home-Loans
              </Link>
              <Link
                href="/Loan-Against"
                className="block px-4 py-2 text-sm text-dark text-decoration-none hover:bg-gray-100 rounded-md"
              >
                Loan Against Property
              </Link>
            </div>
          </div>

          {/* Tools dropdown */}
          <div className="relative group">
            <button className="flex items-center text-white text-sm font-medium">
              Tools
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute left-0  w-60 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
              <Link
                href="/emi-calculator"
                className="block px-4 py-2 text-sm text-dark text-decoration-none hover:bg-gray-100 rounded-md"
              >
                EMI Calculator
              </Link>
              <Link
                href="/balance-transfer-calculator"
                className="block px-4 py-2 text-sm text-dark text-decoration-none hover:bg-gray-100 rounded-md"
              >
                Balance Transfer Calculator
              </Link>
            </div>
          </div>

          {/* Partners dropdown */}
          <div className="relative group">
            <button className="flex items-center text-white text-sm font-medium">
              Partners
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute left-0  w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
              <Link
                href="/co-operate"
                className="block px-4 py-2 text-sm text-dark text-decoration-none hover:bg-gray-100 rounded-md"
              >
                Co-operate
              </Link>
              <Link
                href="/builder"
                className="block px-4 py-2 text-sm text-dark text-decoration-none hover:bg-gray-100 rounded-md"
              >
                Builders
              </Link>
            </div>
          </div>

          {/* Contact Us dropdown */}
          <div className="relative group">
            <button className="d-flex align-items-center text-white text-sm font-medium">
              <FaPhoneAlt /> &nbsp; Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div className="absolute left-0  w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
              <a
                href="tel:+91-9650812333"
                className="flex items-center px-4 py-2 text-sm text-dark text-decoration-none hover:bg-gray-100 rounded-md whitespace-nowrap"
              >
                <Phone />
                +91-9650812333
              </a>
            </div>
          </div>
        </div>

        <div>
          <Link
            href="/become-partner"
            className=" text-white rounded-md py-2 px-4 text-sm font-medium  text-decoration-none"
          >
            Become A Partner
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;