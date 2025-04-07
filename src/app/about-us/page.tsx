// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function AboutUs() {
//   return (
//     <div className="container">
//       {/* Header Section */}
//       <header className="text-center my-5">
//         <h1>About Us</h1>
//         <p className="text-primary">Quick. Hassle-Free. Clear. Affordable.</p>
//       </header>

//       {/* About Section */}
//       <section className="text-center mb-5">
//         <p>
//           {/* At Ambak, our mission is to revolutionize the home loan industry by providing unmatched transparency,
//           efficiency, and security to both customers and home loan distributors. */}
//           With Prefinn, experience a fintech revolution that brings transparency, trust, and technology together for a more inclusive and efficient financial ecosystem.
//         </p>
//       </section>
//       <h1 className="text-center">Who we are?</h1>
//       {/* Who We Are Section */}
//       <section className="bg-light p-4 rounded mb-5">
        
//         <p className="text-center text-muted">
//           Prefinn is a pioneering Fintech platform connecting home buyers and distributors 
//           partners across India.
//         </p>
//       </section>

//       <h1 className="text-center">Meet Our Team</h1>
//       {/* Team Section */}
//       <section className="bg-light p-4 rounded mb-5">
//   {/* <h2 className="text-center mb-4">Meet Our Team</h2> */}
//   <div className="container">
//     <div className="row g-4 justify-content-center">
//       {[
//         { 
//           name: "Rajesh Upadhyay", 
//           role: "Founder & CEO", 
//           image: "https://www.prefinn.com/_next/static/media/founder.769f88bb.jpg", 
//           linkedin: "https://www.linkedin.com/in/rajeshupadhyay333/"
//         },
//         { 
//           name: "Archit Singla", 
//           role: "Co-Founder & CEO", 
//           image: "/images/archit-singla.jpg", 
//           linkedin: "https://www.linkedin.com/in/archit-singla"
//         }
//       ].map((person, index) => (
//         <div key={index} className="col-md-4 d-flex">
//           <div className="card border-0 shadow-sm p-4 text-center flex-fill">
//             {/* Image */}
//             <img 
//               src={person.image} 
//               alt={person.name} 
//               className="rounded-circle mb-3 mx-auto" 
//               width="100" 
//               height="100"
//             />
//             {/* Name and Role */}
//             <h5 className="fw-bold">{person.name}</h5>
//             <p className="text-muted">{person.role}</p>
//             {/* LinkedIn Button */}
//             <a 
//               href={person.linkedin} 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="btn btn-primary btn-sm w-100"
//             >
//               View LinkedIn
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
// </div>
//   );
// }











// accurate code ye hai jo bhi change kre 

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/footer'
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import Navbar from '@/components/navbar';
import { FaLinkedin } from 'react-icons/fa';

export default function AboutUs() {
  return (<>
    <Navbar/>
    
    <div className="container">
      {/* Header Section */}
      <header className="text-center my-5">
        <h1 className="text-blue-900">About Us</h1>
        <p className="text-dark">At Prefinn, we focus on supporting institutions by leveraging our experience with financial sector and fostering collaborations to drive financial inclusion through distribution network. We work on large Bank network and data-driven insights for business decisions, offering customizable solutions tailored to each client's unique needs.</p>
      </header>
      
 
      {/* Who We Are Section */}
      <section className="bg-light p-4 rounded mb-5 text-center">
      <h1 className="text-blue-900">Our Vision</h1>
        <p className="text-dark">
        At Prefinn, we aim to be the trusted financial partner for Businesses and Consumers and go-to consultants for fintech companies. We achieve this through our expertise in the BFSI sector, our wide distribution network and our commitment to offer digital lending solutions and exceptional client service.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="bg-white p-4 rounded shadow mb-5 text-center">
      <h1 className="text-blue-900">What We Do?</h1>
        <p>Key features of our platform</p>
        <div className="row g-4 justify-content-center">
          {[ 
            { icon: "⏳", title: "Real-Time Updates", description: "Keep track of your loan application status with transparency." },
            { icon: "💰", title: "Wide Network of Lenders", description: "Access to 50+ financial institutions offering competitive rates." },
            { icon: "🔒", title: "Secure and Efficient Processing", description: "Robust security ensures rapid and safe processing." },
            { icon: "📊", title: "Enhanced Agent Tools", description: "Compare options, manage payouts, and track commissions." },
            { icon: "🙌", title: "Customer-Centric Approach", description: "Saving customers time and money with optimized loan options." }
          ].map((feature, index) => (
            <div key={index} className="col-md-4">
              <div className="card border-0 shadow-sm p-4 text-center hover-effect">
                <div className="fs-2 text-dark">{feature.icon}</div>
                <h5 className="fw-bold text-blue-900">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="bg-light p-4 rounded mb-5 text-center">
        <h1 className="text-blue-900">Meet Our Team</h1>
        <h3>The People Who Simplify Your Finance</h3>
        <div className="row g-4 justify-content-center">
          {[
            // { name: "Rajesh Upadhyay", role: "Founder & CEO", image: "https://www.prefinn.com/_next/static/media/founder.769f88bb.jpg", linkedin: "https://www.linkedin.com/in/rajeshupadhyay333/" },
            { name: "Rajesh Upadhyay", role: "Founder & CEO", image: "https://www.prefinn.com/_next/static/media/founder.769f88bb.jpg", linkedin: "https://www.linkedin.com/in/rajeshupadhyay333/" },
            { name: "Archit Singla", role: "Co-Founder & COO", image: "https://media-hosting.imagekit.io/f8d2b33cebbc466a/Screenshot%202025-03-26%20145305.png?Expires=1837673581&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gY08AEnNHhGSzmOfbRj28XwBqqxPFRyCAExX5FAN7rcrUlmcAUW9BVvp1fIcBWpETt05dciqP5B0lfU5ry49oiFT89UY7keJOvslV7r~n8hMlQ9SePonOMJmU0FOQQ9cwLPyqbD3z8wHlQUyWlXnNNhkFfTZalZrELv06mGLjMr3Ho4nLmOIMq3LYTB1pVn8RCy~~pqTAm6NBhxWK0W7y5VOZ7jsycXSxnA3fuw9XE5SW~laylyfIbkoC9lt88xFUvdoD~CBKBdDnx7ZYKI0HjC5usNgvBQYyI4DutA2TsUldDqapTfqL8o0JwbTvs63j-4IEJtwJ5v-hA3tSNwyTQ__", linkedin: "https://www.linkedin.com/in/archit-singla" }
          ].map((person, index) => (
            <div key={index} className="col-md-4 d-flex">
              <div className="card border-0 shadow-sm p-4 text-center flex-fill hover-effect">
                <img src={person.image} alt={person.name} className="rounded-circle mb-3 mx-auto" width="100" height="100" />
                <h5 className="fw-bold text-blue-900">{person.name}</h5>
                <p className="text-muted">{person.role}</p>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className=" m-auto btn d-flex justify-content-center align-items-center">
               
                  <FaLinkedin />
                  
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Careers Section */}
      <section className="text-center p-4">
        <h2 className="text-blue-900">Careers</h2>
        <p className="text-dark">We're transforming your finance and looking for passionate individuals to join us.</p>
        <p>Email us at <a href="https://webmail.logix.in/?session=f9d8c490c90d969687b99fed91ea214ad3d9446802a44259755d38e6d163e82048aeab4aefc72c24da75f748c6dd30cad3d9446802a44259755d38e6d163e820" className="text-danger fw-bold">@Prefinn.support</a></p>
      </section>
    </div>
    <Footer/>

    </>
  );
}


























































































































































//  change krna h isse bhi

//  {/*Footer section */} 
//  <footer className="bg-white text-dark py-4">
//   <Container>
//     <Row className="gy-4">
//       {/* Company Info */}
//       <Col md={4}>
//         <img src="/prefinn-logo.png" alt="Prefinn Logo" className="mb-3" style={{ width: "150px" }} />
//         <p className="small">
//           Prefinn is a Finance & Fintech Solution firm ventured by experienced banking professionals having significant expertise in the areas of Banking, Digital Lending, Financial Inclusion & Fintech Product & Services.
//         </p>
//         {/* Social Media Icons */}
//         <div className="d-flex gap-3 mt-3 fs-5">
//           <FaFacebookF className="text-dark" />
//           <FaXTwitter className="text-dark" />
//           <FaInstagram className="text-dark" />
//           <FaYoutube className="text-dark" />
//           <FaLinkedinIn className="text-dark" />
//         </div>
//       </Col>

//       {/* Company Links */}
//       <Col md={4}>
//         <h5 className="fw-bold">Company</h5>
//         <ul className="list-unstyled small">
//           <li><a href="#" className="text-dark text-decoration-none">About Prefinn</a></li>
//           <li><a href="#" className="text-dark text-decoration-none">Founders Message</a></li>
//           <li><a href="#" className="text-dark text-decoration-none">Join Our Team</a></li>
//           <li><a href="#" className="text-dark text-decoration-none">Terms & Conditions</a></li>
//           <li><a href="#" className="text-dark text-decoration-none">Privacy Policy</a></li>
//           <li><a href="#" className="text-dark text-decoration-none">Apply for a Loan</a></li>
//           <li><a href="#" className="text-dark text-decoration-none">Become a Partner</a></li>
//         </ul>
//       </Col>

//       {/* Contact Information */}
//       <Col md={4}>
//         <h5 className="fw-bold">Contact Information</h5>
//         <p className="small d-flex align-items-center">
//           <MdCall className="text-success fs-4 me-2" />
//           +91-9650812333
//         </p>
//         <p className="small d-flex align-items-center">
//           <MdEmail className="text-success fs-4 me-2" />
//           support@prefinn.com
//         </p>
//         <p className="small d-flex align-items-center">
//           <MdLocationOn className="text-success fs-4 me-2" />
//           Plot No.77, Sector-37, Gurugram, Haryana-122001
//         </p>
//       </Col>
//     </Row>
//   </Container>

//   {/* Copyright Section */}
//   <div className="bg-dark text-white text-center py-2 mt-4">
//     <small>Copyright © 2025 Prism Business Consultants - All Rights Reserved</small>
//   </div>
// </footer>











{/* <section className="bg-light p-4 rounded mb-5">

  <div className="row text-center">
    {[
     
      { 
        name: "Rajesh Upadhyay", 
        role: "Founder & CEO", 
        image: "https://www.linkedin.com/in/rajeshupadhyay333/overlay/photo/", 
        linkedin: "https://www.linkedin.com/in/rajeshupadhyay333/"
      },
      { 
        name: "Archit Singla", 
        role: "Co-Founder & CEO", 
        image: "https://www.linkedin.com/in/archit-singla/", 
        linkedin: "https://www.linkedin.com/in/archit-singla/"
      },
    ].map((person, index) => (
      <div key={index} className="col-md-4 mb-3">
        <div className="card border-0 shadow-sm p-3">
          <img 
            src={person.image} 
            alt={person.name} 
            className="rounded-circle mb-3" 
            width="120" 
            height="120"
          />
          <h5>{person.name}</h5>
          <p className="text-muted">{person.role}</p>
          <a 
            href={person.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-sm"
          >
            View LinkedIn
          </a>
        </div>
      </div>
    ))}
  </div>
</section> */}

      {/* Team Section
      <section className="bg-light p-4 rounded mb-5">
       
        <div className="row text-center">
          {[
            { name: "Raghuveer Malik", role: "Co-Founder & CEO" },
            { name: "Rameshwar Gupta", role: "Co-Founder & CPTO" },
            { name: "Rashi Garg", role: "Co-Founder & COO" },
          ].map((person, index) => (
            <div key={index} className="col-md-4 mb-3">
              <h5>{person.name}</h5>
              <p className="text-muted">{person.role}</p>
            </div>
          ))}
        </div>
      </section> */}
  