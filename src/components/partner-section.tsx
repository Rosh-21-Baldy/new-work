// import Image from "next/image";
// import Link from "next/link";
// import { Separator } from "@/components/ui/separator";

// const PartnerSection = () => {
//   return (
//     <div className="bg-white py-10">
//       <div className="ambak-container">
//         <div className="text-center mb-8">
//           <h2 className="text-xl md:text-2xl font-semibold text-primary">
//             Ambak hai <span className="text-secondary">Property Dealer</span> ka
//             bharosa
//           </h2>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
//           <div className="bg-ambak-light rounded-lg p-6 text-center">
//             <h3 className="text-sm text-muted-foreground mb-2">
//               We Are Experienced
//             </h3>
//             <p className="text-xl md:text-2xl font-bold text-primary mb-1">
//               5,000+
//             </p>
//             <p className="text-xs text-muted-foreground">
//               Loan applications processed across Bharat
//             </p>
//           </div>

//           <div className="bg-ambak-light rounded-lg p-6 text-center">
//             <h3 className="text-sm text-muted-foreground mb-2">
//               Your Bank Trusts Us
//             </h3>
//             <p className="text-xl md:text-2xl font-bold text-primary mb-1">
//               50+
//             </p>
//             <p className="text-xs text-muted-foreground">
//               Top financiers in Bharat work with us
//             </p>
//           </div>

//           <div className="bg-ambak-light rounded-lg p-6 text-center">
//             <h3 className="text-sm text-muted-foreground mb-2">
//               We Are Experts
//             </h3>
//             <p className="text-xl md:text-2xl font-bold text-primary mb-1">
//               1,000+
//             </p>
//             <p className="text-xs text-muted-foreground">
//               Expert loan partners across Bharat
//             </p>
//           </div>

//           <div className="bg-ambak-light rounded-lg p-6 text-center">
//             <h3 className="text-sm text-muted-foreground mb-2">
//               And We're Focused On You
//             </h3>
//             <p className="text-xl md:text-2xl font-bold text-primary mb-1">
//               1,000+
//             </p>
//             <p className="text-xs text-muted-foreground">
//               Satisfied new home owners across the country
//             </p>
//           </div>
//         </div>

//         <div className="mb-8">
//           <div className="flex flex-wrap justify-center gap-4 md:gap-8">
//             <Link href="/loan/axis-bank-home-loan" className="opacity-80 hover:opacity-100 transition-opacity">
//               <Image
//                 src="https://ext.same-assets.com/488712481/849522504.png"
//                 alt="Axis Bank"
//                 width={100}
//                 height={40}
//                 className="h-8 w-auto"
//               />
//             </Link>
//             <Link href="/loan/icici-bank-home-loans" className="opacity-80 hover:opacity-100 transition-opacity">
//               <Image
//                 src="https://ext.same-assets.com/488712481/849522504.png"
//                 alt="ICICI Bank"
//                 width={100}
//                 height={40}
//                 className="h-8 w-auto"
//               />
//             </Link>
//             <Link href="/loan/bank-of-baroda-home-loan" className="opacity-80 hover:opacity-100 transition-opacity">
//               <Image
//                 src="https://ext.same-assets.com/488712481/849522504.png"
//                 alt="Bank of Baroda"
//                 width={100}
//                 height={40}
//                 className="h-8 w-auto"
//               />
//             </Link>
//             <Link href="/loan/pnb-home-loan" className="opacity-80 hover:opacity-100 transition-opacity">
//               <Image
//                 src="https://ext.same-assets.com/488712481/849522504.png"
//                 alt="PNB Bank"
//                 width={100}
//                 height={40}
//                 className="h-8 w-auto"
//               />
//             </Link>
//             <div className="opacity-80 hover:opacity-100 transition-opacity">
//               <Image
//                 src="https://ext.same-assets.com/488712481/849522504.png"
//                 alt="Tata Capital"
//                 width={100}
//                 height={40}
//                 className="h-8 w-auto"
//               />
//             </div>
//             <Link href="/loan/bajaj-home-loan" className="opacity-80 hover:opacity-100 transition-opacity">
//               <Image
//                 src="https://ext.same-assets.com/488712481/849522504.png"
//                 alt="Bajaj Finance"
//                 width={100}
//                 height={40}
//                 className="h-8 w-auto"
//               />
//             </Link>
//           </div>
//         </div>

//         <div className="text-center">
//           <Link
//             href="/loan/banks"
//             className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary/5 transition-colors"
//           >
//             View All Banks
//           </Link>
//         </div>

//         <Separator className="my-10" />
//       </div>
//     </div>
//   );
// };

// export default PartnerSection;

"use client";

import { GiPiggyBank } from "react-icons/gi";
import { CiBank } from "react-icons/ci";
import { TbBuildingBank } from "react-icons/tb";
import { FaHouseLaptop } from "react-icons/fa6";
import { GiDecapitation } from "react-icons/gi";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Separator } from "@/components/ui/separator";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
const PartnerSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  ("");

  const loanProducts = [
    {
      title: "Home Loans",
      link: "homeloans",
      description:
        "Prefinn helps clients assess their home financing needs by partnering with experienced consultants.",
      icon: <CiBank />,
      image:
        "https://img.freepik.com/premium-photo/focused-indian-young-couple-accounting-calculating-bills-discussing-planning-budget-together-using-online-banking-services-calculator-checking-finances_466689-9010.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid",
    },
    
    {
      title: "Personal Loans",
      link: "personalloans",
      description:
        "Prefinn offers Personal Loans, including unsecured loans and overdraft facilities.",
      icon: <GiPiggyBank />,
      image:
        "https://img.freepik.com/premium-photo/indian-couple-with-piggy-bank-standing-isolated-white-background_466689-40470.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid",
    },
    {
      title: "Business Loans",
      link: "businessloans",

      description:
        "Prefinn offers Business Loan services to help businesses assess their short-term financing needs.",
      icon: <TbBuildingBank />,
      image:
        "https://img.freepik.com/free-photo/happy-businessman-with-green-arrow_329181-9118.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid",
    },
    {
      title: "Loan Against Property (LAP)",
      link: "loanagainstproperty",

      description:
        "Prefinn’s finance experts help secure a Loan Against Property (LAP) from top banks.",
      icon: <FaHouseLaptop />,
      image:
        "https://img.freepik.com/premium-photo/happy-lady-with-house-toy-indian-notes_658385-1124.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid",
    },
    {
      title: "Working Capital Loans",
      link: "workingCapitalloans",

      description:
        "Expert financial solutions to maintain smooth business operations.",
      icon: <GiDecapitation />,
      image:
        "https://img.freepik.com/premium-photo/confident-businessman-portrait_220507-11781.jpg?ga=GA1.1.56492630.1742847583&semt=ais_hybrid",
    },
  ];

  const banks = [
    {
      name: "SBI",
      link: "/loan/sbi-home-loan",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/159px-State_Bank_of_India_logo.svg.png?20180321064323",
    },
    {
      name: "Axis",
      link: "/loan/axis-bank-home-loan",
      logo: "https://www.logo.wine/a/logo/Axis_Bank/Axis_Bank-Logo.wine.svg",
    },
    {
      name: "ICICI Loans",
      link: "/loan/icici-bank-home-loans",
      logo: "https://d28wu8o6itv89t.cloudfront.net/images/ICICIBankhomeloanspng-1594804385746.png",
    },
    {
      name: "Aditya Birla Capital",
      link: "/loan/aditya-birla-home-loan",
      logo: "https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/logo.webp?extension=webp",
    },
    {
      name: "Bajaj Finserv",
      link: "/loan/bajaj-home-loan",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-bajaj-finserv-logo-icon-download-in-svg-png-gif-file-formats--indian-company-companies-pack-logos-icons-2249165.png?f=webp",
    },
    {
      name: "Motilal Oswal Home Loans",
      link: "/loan/motilal-oswal-home-loan",
      logo: "https://www.motilaloswal.com/media_15c0fcdc4deef99d8a791fee00d99b2066c8eb40a.svg?width=750&format=svg&optimize=medium",
    },
    {
      name: "L&T Finance",
      link: "/loan/l&t-finance-home-loan",
      logo: "https://www.ltfs.com/images/default-source/logo/ltf-logo-b-w.png?sfvrsn=58168c51_2",
    },
    {
      name: "IIFL",
      link: "/loan/iifl-home-loan",
      logo: "https://storage.googleapis.com/iifl-storage/files/images/logos/iifl-finance.svg",
    },

    {
      name: "BOI (Bank of India)",
      link: "/loan/boi-home-loan",
      logo: "https://bankofindia.co.in/o/boi-global-theme/images/boi/logos/boi_en_US_logo.png",
    },
    {
      name: "HSBC",
      link: "/loan/hsbc-home-loan",
      logo: "https://www.hsbc.co.in/content/dam/hsbc/in/images/01_HSBC_MASTERBRAND_LOGO_RGB.svg",
    },
    {
      name: "Kotak Mahindra",
      link: "/loan/kotak-mahindra-home-loan",
      logo: "https://www.logoshape.com/wp-content/uploads/2024/08/kotak-mahindra-bank-logo-vector_logoshape.png",
    },
    {
      name: "HDFC",
      link: "/loan/hdfc-home-loan",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/434px-HDFC_Bank_Logo.svg.png?20110306040211",
    },
    {
      name: "Bank of Baroda",
      link: "/loan/bank-of-baroda-home-loan",
      logo: "https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/icons/bob-logo.svg",
    },
    {
      name: "Hero Fincorp",
      link: "/loan/hero-fincorp-home-loan",
      logo: "https://hfcl-website-cms.s3.ap-south-1.amazonaws.com/logo_dc3ab7afd1.webp",
    },
  ];
  return (
    <div className="bg-white py-1">
      <Container>
        <div className="text-center mt-5">
          <h2 className="fw-semibold">
            Our <span className="text-success">Loan Products</span>
          </h2>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          {loanProducts.map((product, index) => (
            <a 
            key={index} 
            href={product.link} 
            style={{ textDecoration: "none" }}
          >
            <Card
              key={index}
              className="text-center p-4 shadow-sm loan-card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                width: "210px", // Fixed width
                height: "280px", // Fixed height
                background: hoveredIndex === index ? `url(${product.image})` : "#fff",
                color: hoveredIndex === index ? "#fff" : "#000",
                transition: "all 0.3s ease-in-out",
                position: "relative",
                overflow: "hidden",
                flex: "0 0 auto", // Ensures cards don't shrink
              }}
            >
              {/* Show title, description, and icon when NOT hovered */}
              {hoveredIndex !== index && (
                <>
                  <div className="fs-1 d-flex justify-content-center">
                    {product.icon}
                  </div>
                  <h5 className="fw-bold">{product.title}</h5>
                  <p>{product.description}</p>
                </>
              )}

              {/* Show background image & Learn More button on hover */}
              {hoveredIndex == index && (
                <>
                  <div className="fs-1">{product.icon}</div>
                  <div
                     className="loan-hover-image"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${product.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 1,
                      zIndex: 1,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "15px", // Adjust distance from the bottom
                      left: "50%",
                      transform: "translateX(-50%)", // Center horizontally
                      zIndex: 2,
                    }}
                  >
                    {/* <a
                      href={`/${product.link}`}
                      className="btn btn-outline-light btn-sm"
                    >
                      Apply Now
                    </a> */}


                  </div>
                </>
              )}
            </Card>
            </a>
          ))}
        </div>

        {/* Separator */}
        <Separator className="my-10" />

        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="fw-semibold text-success">
            Our Success <span className="text-success">Stories</span>
          </h2>
        </div>

        {/* Statistics Section */}
        <Row className="mb-9">
          {[
            { icon: "⭐", value: "32+", text: "Happy Customers" },
            { icon: "💰", value: "23cr", text: "Loan Disbursed" },
            { icon: "🏦", value: "130+", text: "Finance Partners" },
            { icon: "🔗", value: "70+", text: "Distribution Partners" },
          ].map((item, index) => (
            <Col key={index} xs={6} md={3} className="mb-3">
              <Card className="text-center shadow-sm p-3">
                <div className="fs-3">{item.icon}</div>
                <h4 className="fw-bold text-primary">{item.value}</h4>
                <p className="text-muted">{item.text}</p>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Bank Logos Section */}
        <Marquee speed={50} gradient={false}>
          {banks.map((bank, index) => (
            <a
              key={index}
              href={bank.link}
              className="d-inline-block mx-3 opacity-75 hover-opacity-100 transition-opacity"
            >
              <Image
                src={bank.logo}
                alt={bank.name}
                width={100}
                height={40}
                className="img-fluid"
              />
            </a>
          ))}
        </Marquee>
      </Container>
    </div>
  );
};

export default PartnerSection;
