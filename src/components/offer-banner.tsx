"use client";
import ".././App.css"
import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";
import { FaPhone ,FaFacebook, FaInstagram, FaYoutube, FaLinkedin , FaTwitter , FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const OfferBanner = () => {
  return (
    <div className="row bg-primary text-white py-2 text-center top-bar ">
      <div className="col-8 d-flex gap-4"> 
   
         <div className="d-flex align-items-center gap-2">
              <div className="icon-circle">
                <FaPhone />
              </div>
              <span> +91-9650812333</span>
            </div>

            {/* Email */}
            <div className="d-flex align-items-center gap-2">
              <div className="icon-circle">
                <FaEnvelope />
              </div>
              <span> support@prefinn.com</span>
            </div>

            {/* Location */}
            <div className="d-flex align-items-center gap-2 ">
              <div className="icon-circle">
                <FaMapMarkerAlt />
              </div>
              <span>Plot No.77, Sector-37, Gurugram, Haryana-122001</span>
            </div>

       
      </div> 
      <div className="col-4 d-flex gap-3 align-items-center justify-content-end"> 
     Follow us on : <FaFacebook className="social-icon"/> <FaTwitter className="social-icon"/> <FaLinkedin className="social-icon"/> <FaInstagram className="social-icon"/> <FaYoutube className="social-icon"/>
      </div>
    </div>
  );
};

export default OfferBanner;
