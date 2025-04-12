// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Menu, Phone } from "lucide-react";
// import { FaPhoneAlt } from "react-icons/fa";
// import OfferBanner from "./offer-banner";
// const Navbar = () => {
//   return (
//     <>
//    <OfferBanner/>
//     <nav
//       className=" py-4 sticky top-0 z-50 shadow-sm"
//       style={{ backgroundColor: "rgb(250, 252, 253)" }}
//       // className=" py-4 sticky top-0 z-50 shadow-sm"
//       // style={{ backgroundColor: "#0000FF " }}
//     >
//       <div className="ambak-container my-4  flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src="https://www.prefinn.com/_next/static/media/logo.96e5ff96.png"
//             alt="Prefinn Logo"
//             width={0}
//             height={0}
//             className="h-12 w-100"
//             priority
//           />
//         </Link>

//         {/* Desktop navigation */}
//         <div className="hidden md:flex items-center space-x-10">
//           <Link
//             href="/about-us"
//             className="text-dark text-fw font-medium text-decoration-none"
//           >
//             About Us
//           </Link>
//           {/* Products dropdown */}
//           <div className="relative group">
//             <button className="flex items-center text-dark text-fw font-medium">
//               Products
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="ml-1 h-4 w-4"
//               >
//                 <path d="m6 9 6 6 6-6" />
//               </svg>
//             </button>
//             <div className="absolute left-0  w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block ">
//               <Link
//                 href="/homeloans"
//                 className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md"
//               >
//                 Home-Loans
//               </Link>
//               <Link
//                 href="/personalloans"
//                 className="block px-4 py-2 text-sm text-dark text-decoration-none hover:bg-gray-100 rounded-md"
//               >
//                 Personal Loan
//               </Link>
//               <Link
//                 href="/businessloans"
//                 className="block px-4 py-2 text-sm text-dark text-decoration-none hover:bg-gray-100 rounded-md"
//               >
//                 Business Loan
//               </Link>
//               <Link
//                 href="/loanagainstproperty"
//                 className="block px-4 py-2 text-sm text-dark text-decoration-none hover:bg-gray-100 rounded-md"
//               >
//                 Loan Against Property
//               </Link>
//               <Link
//                 href="/workingCapitalloans"
//                 className="block px-4 py-2 text-sm text-dark text-decoration-none hover:bg-gray-100 rounded-md"
//               >
//                 Working Capital Loan
//               </Link>
//             </div>
//           </div>

//           {/* Tools dropdown */}
//           <div className="relative group">
//             <button className="flex items-center text-dark text-fw font-medium">
//               Tools
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="ml-1 h-4 w-4"
//               >
//                 <path d="m6 9 6 6 6-6" />
//               </svg>
//             </button>
//             <div className="absolute left-0  w-60 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
//               <Link
//                 href="/emi-calculator"
//                 className="block px-4 py-2 text-sm text-dark text-decoration-none hover:bg-gray-100 rounded-md"
//               >
//                 EMI Calculator
//               </Link>
//               <Link
//                 href="/balance-transfer-calculator"
//                 className="block px-4 py-2 text-sm text-dark text-decoration-none hover:bg-gray-100 rounded-md"
//               >
//                 Balance Transfer Calculator
//               </Link>
//             </div>
//           </div>

//           {/* Partners dropdown */}
//           <div className="relative group">
//             <button className="flex items-center text-dark text-fw font-medium">
//               Partners
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="ml-1 h-4 w-4"
//               >
//                 <path d="m6 9 6 6 6-6" />
//               </svg>
//             </button>
//             <div className="absolute left-0  w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
//               <Link
//                 href="/corporate "
//                 className="block px-4 py-2 text-sm text-dark text-decoration-none hover:bg-gray-100 rounded-md"
//               >
//                Corporate 
//               </Link>
//               <Link
//                 href="/builder"
//                 className="block px-4 py-2 text-sm text-dark text-decoration-none hover:bg-gray-100 rounded-md"
//               >
//                 Builders
//               </Link>
//             </div>
//           </div>

//           {/* Contact Us dropdown */}
//           <div className="relative group">
//             <button className="d-flex align-items-center text-dark text-fw font-medium">
//                Contact Us
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="ml-1 h-4 w-4"
//               >
//                 <path d="m6 9 6 6 6-6" />
//               </svg>
//             </button>
//             <div className="absolute left-0  w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
//               <a
//                 href="tel:+91-9650812333"
//                 className="flex items-center px-4 py-2 text-sm text-dark text-decoration-none hover:bg-gray-100 rounded-md whitespace-nowrap"
//               >
//                 <Phone />
//                 +91-9650812333
//               </a>
//             </div>
//           </div>
//         </div>

//         <div>
//           <Link
//             href="/become-partner"
//             className=" text-dark rounded-md py-2 px-4 text-fw font-medium  text-decoration-none"
//           >
//             Become A Partner
//           </Link>
//         </div>
//         <div>
//           <Link
//             href="/loan-apply"
//             className=" text-dark rounded-md py-2 px-1 text-fw font-medium  text-decoration-none"
//           >
//             Apply For Loan
//           </Link>
//         </div>
//       </div>
//     </nav>
//     </>
//   );
// };

// export default Navbar;









































// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Phone } from "lucide-react";
// import OfferBanner from "./offer-banner";
// import { useEffect } from "react";

// // Ripple hook
// const useRippleEffect = () => {
//   useEffect(() => {
//     const handleRipple = (e: MouseEvent) => {
//       const target = e.currentTarget as HTMLElement;

//       const circle = document.createElement("span");
//       circle.className = "ripple-effect";
//       const rect = target.getBoundingClientRect();
//       circle.style.left = `${e.clientX - rect.left}px`;
//       circle.style.top = `${e.clientY - rect.top}px`;

//       target.appendChild(circle);
//       setTimeout(() => circle.remove(), 600);
//     };

//     const rippleElements = document.querySelectorAll<HTMLElement>(".ripple");
//     rippleElements.forEach((el) => {
//       el.addEventListener("click", handleRipple);
//     });

//     return () => {
//       rippleElements.forEach((el) => {
//         el.removeEventListener("click", handleRipple);
//       });
//     };
//   }, []);
// };

// const Navbar = () => {
//   useRippleEffect();

//   return (
//     <>
//       <OfferBanner />
//       <style jsx global>{`
//         .ripple {
//           position: relative;
//           overflow: hidden;
//         }
//         .ripple-effect {
//           position: absolute;
//           border-radius: 50%;
//           transform: scale(0);
//           animation: ripple-animation 0.9s linear;
//           background-color: rgba(0, 150, 0, 0.4);
//           width: 100px;
//           height: 100px;
//           pointer-events: none;
//           z-index: 9999;
//         }
//         @keyframes ripple-animation {
//           to {
//             transform: scale(4);
//             opacity: 0;
//           }
//         }
//       `}</style>
//       <nav
//         className="py-4 sticky top-0 z-50 shadow-sm"
//         style={{ backgroundColor: "rgb(250, 252, 253)" }}
//       >
//         <div className="ambak-container my-4 flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="flex items-center ripple">
//             <Image
//               src="https://www.prefinn.com/_next/static/media/logo.96e5ff96.png"
//               alt="Prefinn Logo"
//               width={0}
//               height={0}
//               className="h-12 w-100"
//               priority
//             />
//           </Link>

//           {/* Desktop navigation */}
//           <div className="hidden md:flex items-center space-x-12 ">
//             <Link
//               href="/about-us"
//               className="text-dark text-fw font-medium text-decoration-none ripple"
//             >
//               About Us
//             </Link>

//             {/* Products dropdown */}
//             <div className="relative group">
//               <button className="flex items-center text-dark text-fw font-medium ">
//                 Products
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="ml-1 h-4 w-4"
//                 >
//                   <path d="m6 9 6 6 6-6" />
//                 </svg>
//               </button>
//               <div className="absolute left-0 w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
//                 <Link href="/homeloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   Home-Loans
//                 </Link>
//                 <Link href="/personalloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   Personal Loan
//                 </Link>
//                 <Link href="/businessloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   Business Loan
//                 </Link>
//                 <Link href="/loanagainstproperty" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   Loan Against Property
//                 </Link>
//                 <Link href="/workingCapitalloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   Working Capital Loan
//                 </Link>
//               </div>
//             </div>

//             {/* Tools dropdown */}
//             <div className="relative group">
//               <button className="flex items-center text-dark text-fw font-medium">
//                 Tools
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="ml-1 h-4 w-4"
//                 >
//                   <path d="m6 9 6 6 6-6" />
//                 </svg>
//               </button>
//               <div className="absolute left-0 w-60 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
//                 <Link href="/emi-calculator" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   EMI Calculator
//                 </Link>
//                 <Link href="/balance-transfer-calculator" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   Balance Transfer Calculator
//                 </Link>
//               </div>
//             </div>

//             {/* Partners dropdown */}
//             <div className="relative group">
//               <button className="flex items-center text-dark text-fw font-medium">
//                 Partners
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="ml-1 h-4 w-4"
//                 >
//                   <path d="m6 9 6 6 6-6" />
//                 </svg>
//               </button>
//               <div className="absolute left-0 w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
//                 <Link href="/corporate" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   Corporate
//                 </Link>
//                 <Link href="/builder" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
//                   Builders
//                 </Link>
//               </div>
//             </div>

//             {/* Contact Us dropdown */}
//             <div className="relative group">
//               {/* <button className="flex items-center text-dark text-fw font-medium">
//                 Contact Us
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="ml-1 h-4 w-4"
//                 >
//                   <path d="m6 9 6 6 6-6" />
//                 </svg>
//               </button> */}
//               <div className="absolute left-0 w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
//                 <a
//                   href="tel:+91-9650812333"
//                   className="flex items-center px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md whitespace-nowrap ripple"
//                 >
//                   <Phone />
//                   +91-9650812333
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Action buttons */}
//           <div>
//             <Link
//               href="/loan-apply"
//               className="text-dark rounded-md py-2 px-0 text-fw font-medium text-decoration-none ripple "
//             >
//               Apply For Loan
//             </Link>
//           </div>
//           <div>
//             <Link
//               href="/become-partner"
//               className="text-dark rounded-md py-2 px-0  text-fw font-medium text-decoration-none ripple"
//             >
//               Become A Partner
//             </Link>
//           </div>
          
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

































"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import OfferBanner from "./offer-banner";
import { useEffect } from "react";

// Ripple hook
const useRippleEffect = () => {
  useEffect(() => {
    const handleRipple = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;

      const circle = document.createElement("span");
      circle.className = "ripple-effect";
      const rect = target.getBoundingClientRect();
      circle.style.left = `${e.clientX - rect.left}px`;
      circle.style.top = `${e.clientY - rect.top}px`;

      target.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    };

    const rippleElements = document.querySelectorAll<HTMLElement>(".ripple");
    rippleElements.forEach((el) => {
      el.addEventListener("click", handleRipple);
    });

    return () => {
      rippleElements.forEach((el) => {
        el.removeEventListener("click", handleRipple);
      });
    };
  }, []);
};

const Navbar = () => {
  useRippleEffect();

  return (
    <>
      <OfferBanner />
      <style jsx global>{`
        .ripple {
          position: relative;
          overflow: hidden;
        }
        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple-animation 0.9s linear;
          background-color: rgba(0, 150, 0, 0.4);
          width: 100px;
          height: 100px;
          pointer-events: none;
          z-index: 9999;
        }
        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
      <nav
        className="py-4 sticky top-0 z-50 shadow-sm"
        style={{ backgroundColor: "rgb(250, 252, 253)" }}
      >
        <div className="ambak-container my-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center ripple">
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
          <div className="hidden md:flex items-center space-x-12 ">
            <Link
              href="/"
              className="text-dark text-fw font-medium text-decoration-none ripple"
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className="text-dark text-fw font-medium text-decoration-none ripple"
            >
              About Us
            </Link>

            {/* Products dropdown */}
            <div className="relative group">
              <button className="flex items-center text-dark text-fw font-medium ">
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
              <div className="absolute left-0 w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
                <Link href="/homeloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
                  Home-Loans
                </Link>
                <Link href="/personalloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
                  Personal Loan
                </Link>
                <Link href="/businessloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
                  Business Loan
                </Link>
                <Link href="/loanagainstproperty" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
                  Loan Against Property
                </Link>
                <Link href="/workingCapitalloans" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
                  Working Capital Loan
                </Link>
              </div>
            </div>

            {/* Tools dropdown */}
            <div className="relative group">
              <button className="flex items-center text-dark text-fw font-medium">
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
              <div className="absolute left-0 w-60 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
                <Link href="/emi-calculator" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
                  EMI Calculator
                </Link>
                <Link href="/balance-transfer-calculator" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
                  Balance Transfer Calculator
                </Link>
              </div>
            </div>

            {/* Partners dropdown */}
            <div className="relative group">
              <button className="flex items-center text-dark text-fw font-medium">
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
              <div className="absolute left-0 w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
                <Link href="/corporate" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
                  Corporate
                </Link>
                <Link href="/builder" className="block px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md ripple">
                  Builders
                </Link>
              </div>
            </div>

            {/* Contact Us dropdown */}
            <div className="relative group">
              <div className="absolute left-0 w-48 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
                <a
                  href="tel:+91-9650812333"
                  className="flex items-center px-4 py-2 text-sm text-dark hover:bg-gray-100 text-decoration-none rounded-md whitespace-nowrap ripple"
                >
                  <Phone />
                  +91-9650812333
                </a>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div>
            <Link
              href="/loan-apply"
              className="text-dark rounded-md py-2 px-0 text-fw font-medium text-decoration-none ripple "
            >
              Apply For Loan
            </Link>
          </div>
          <div>
            <Link
              href="/become-partner"
              className="text-dark rounded-md py-2 px-0  text-fw font-medium text-decoration-none ripple"
            >
              Become A Partner
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
