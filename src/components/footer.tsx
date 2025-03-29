// import Link from "next/link";
// import Image from "next/image";
// import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-white">
//       <div className="ambak-container py-10">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
//           {/* Logo and Social Links */}
//           <div className="col-span-1 md:col-span-1">
//             <Link href="/" className="inline-block mb-6">
//               <Image
//                 src="https://ext.same-assets.com/3568832262/1877044040.svg"
//                 alt="Ambak Logo"
//                 width={100}
//                 height={35}
//                 className="h-8 w-auto"
//                 priority
//               />
//             </Link>
//             <div className="flex space-x-3">
//               <a
//                 href="https://www.facebook.com/AmbakOfficial/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors"
//                 aria-label="Ambak Facebook"
//               >
//                 <Facebook className="h-4 w-4" />
//               </a>
//               <a
//                 href="https://www.instagram.com/ambakofficial"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors"
//                 aria-label="Ambak Instagram"
//               >
//                 <Instagram className="h-4 w-4" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/ambakofficial"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors"
//                 aria-label="Ambak LinkedIn"
//               >
//                 <Linkedin className="h-4 w-4" />
//               </a>
//               <a
//                 href="https://www.youtube.com/@Ambakofficial"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors"
//                 aria-label="Ambak Youtube"
//               >
//                 <Youtube className="h-4 w-4" />
//               </a>
//             </div>
//           </div>

//           {/* Product Links */}
//           <div className="col-span-1">
//             <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
//               Product
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/home-loans"
//                   className="text-gray-300 hover:text-white transition-colors text-sm"
//                 >
//                   Home Loans
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/loan-against-property"
//                   className="text-gray-300 hover:text-white transition-colors text-sm"
//                 >
//                   Loan Against Property
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Tools Links */}
//           <div className="col-span-1">
//             <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
//               Tools
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/emi-calculator"
//                   className="text-gray-300 hover:text-white transition-colors text-sm"
//                 >
//                   EMI Calculator
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/balance-transfer-calculator"
//                   className="text-gray-300 hover:text-white transition-colors text-sm"
//                 >
//                   Balance Transfer Calculator
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div className="col-span-1">
//             <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
//               Quick Links
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/"
//                   className="text-gray-300 hover:text-white transition-colors text-sm"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/blog"
//                   className="text-gray-300 hover:text-white transition-colors text-sm"
//                 >
//                   Blogs
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Others Links */}
//           <div className="col-span-1">
//             <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
//               Others
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/terms-and-conditions"
//                   className="text-gray-300 hover:text-white transition-colors text-sm"
//                 >
//                   Terms & Conditions
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/terms-of-use"
//                   className="text-gray-300 hover:text-white transition-colors text-sm"
//                 >
//                   Terms of Use
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/privacy-policy"
//                   className="text-gray-300 hover:text-white transition-colors text-sm"
//                 >
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/contact-us"
//                   className="text-gray-300 hover:text-white transition-colors text-sm"
//                 >
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Mobile Apps */}
//         <div className="mt-10 pt-8 border-t border-white/20">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
//             <div>
//               <p className="text-sm text-gray-300 mb-3 sm:mb-0">
//                 Apps from Ambak
//               </p>
//             </div>
//             <div className="flex space-x-3">
//               <a
//                 href="https://play.google.com/store/apps/details?id=com.ambak.saathi"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Image
//                   src="https://ext.same-assets.com/488712481/2718458333.png"
//                   alt="Google Play"
//                   width={120}
//                   height={40}
//                   className="h-8 w-auto"
//                 />
//               </a>
//               <a
//                 href="https://apps.apple.com/in/app/ambak-saathi/id6474469003"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Image
//                   src="https://ext.same-assets.com/488712481/1258535687.png"
//                   alt="App Store"
//                   width={120}
//                   height={40}
//                   className="h-8 w-auto"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="mt-8 text-center sm:text-left">
//           <p className="text-xs text-gray-400">
//             Copyright © 2025 TENB FINTECH PRIVATE LIMITED All rights reserved
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




















// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

// export default function Footer() {
//   return (
//     <footer className="bg-white text-dark py-4">
//       <Container>
//         <Row className="gy-4">
//           {/* Company Info */}
//           <Col md={4}>
//             <img src="/prefinn-logo.png" alt="Prefinn Logo" className="mb-3" style={{ width: "150px" }} />
//             <p className="small">
//               Prefinn is a Finance & Fintech Solution firm ventured by experienced banking professionals having significant expertise in the areas of Banking, Digital Lending, Financial Inclusion & Fintech Product & Services.
//             </p>
//             {/* Social Media Icons */}
//             <div className="d-flex gap-3 mt-3 fs-5">
//               <FaFacebookF className="text-dark" />
//               <FaXTwitter className="text-dark" />
//               <FaInstagram className="text-dark" />
//               <FaYoutube className="text-dark" />
//               <FaLinkedinIn className="text-dark" />
//             </div>
//           </Col>

//           {/* Company Links */}
//           <Col md={4}>
//             <h5 className="fw-bold">Company</h5>
//             <ul className="list-unstyled small">
//               <li><a href="#" className="text-dark text-decoration-none">About Prefinn</a></li>
//               <li><a href="#" className="text-dark text-decoration-none">Founders Message</a></li>
//               <li><a href="#" className="text-dark text-decoration-none">Join Our Team</a></li>
//               <li><a href="#" className="text-dark text-decoration-none">Terms & Conditions</a></li>
//               <li><a href="#" className="text-dark text-decoration-none">Privacy Policy</a></li>
//               <li><a href="#" className="text-dark text-decoration-none">Apply for a Loan</a></li>
//               <li><a href="#" className="text-dark text-decoration-none">Become a Partner</a></li>
//             </ul>
//           </Col>

//           {/* Contact Information */}
//           <Col md={4}>
//             <h5 className="fw-bold">Contact Information</h5>
//             <p className="small d-flex align-items-center">
//               <MdCall className="text-success fs-4 me-2" />
//               +91-9650812333
//             </p>
//             <p className="small d-flex align-items-center">
//               <MdEmail className="text-success fs-4 me-2" />
//               support@prefinn.com
//             </p>
//             <p className="small d-flex align-items-center">
//               <MdLocationOn className="text-success fs-4 me-2" />
//               Plot No.77, Sector-37, Gurugram, Haryana-122001
//             </p>
//           </Col>
//         </Row>
//       </Container>

//       {/* Copyright Section */}
//       <div className="bg-dark text-white text-center py-2 mt-4">
//         <small>Copyright © 2025 Prism Business Consultants - All Rights Reserved</small>
//       </div>
//     </footer>
//   );
// }











import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-light text-dark py-20" style={{backgroundColor : " #0A2D4D" , }}>
      <Container>
        <Row className="gy-4">
          {/* Company Info */}
          <Col md={4}>
            <img src="https://www.prefinn.com/_next/static/media/logo.96e5ff96.png" alt="Prefinn Logo" className="mb-3" style={{ width: "180px" }} />
            <p className="Large text-dark-800">
              Prefinn is a Finance & Fintech Solution firm ventured by experienced banking professionals with expertise in Banking, Digital Lending, Financial Inclusion, and Fintech Products & Services.
            </p>
            {/* Social Media Icons */}
            <div className="d-flex gap-5 mt-4 fs-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="text-primary" />
  </a>

  <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
    <FaXTwitter className="text-dark" />
  </a>
  <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-danger" />
  </a>
  <a href="https://www.linkedin.com/company/prefinn/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn className="text-primary" />
  </a>
  {/* <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
    <FaXTwitter className="text-primary" />
  </a> */}
  
            </div>
          </Col>

          {/* Company Links */}
          <Col md={4}>
            <h5 className="fw-bold text-blue-900 "> Our Company</h5>
            <ol className="list-unstyled large">
              <li><a href="#" className="text-dark text-decoration-none">About Prefinn</a></li>
              {/* <li><a href="#" className="text-dark text-decoration-none">Founders Message</a></li> */}
              {/* <li><a href="#" className="text-dark text-decoration-none">Join Our Team</a></li> */}
             <li><a href="#" className="text-dark text-decoration-none">Terms & Conditions</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Apply for a Loan</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Become a Partner</a></li>
            </ol>
          </Col>

          {/* Contact Information */}
          <Col md={4}>
            <h5 className="fw-bold text-blue-900">Contact Information</h5>
            <p className="small d-flex align-items-center">
              <MdCall className="text-dark fs-4 me-2 " />
              <span className="text-dark">+91-9650812333</span>
            </p>
            <p className="small d-flex align-items-center">
              <MdEmail className="text-dark fs-4 me-2" />
              <span className="text-dark">support@prefinn.com</span>
            </p>
            <p className="small d-flex align-items-center">
              <MdLocationOn className="text-dark fs-4 me-2" />
              <span className="text-dark">Plot No.77, Sector-37, Gurugram, Haryana-122001</span>
            </p>
            
          </Col>
        </Row>
      </Container>

      {/* Copyright Section */}
      <div className=" text-white text-center py-3 mt-6" style={{backgroundColor : " #0A2D4D" , }}>
        <small>Copyright © 2025 PreFinn Fintech Solutions - All Rights Reserved</small>
      </div>
    </footer>
  );
}






