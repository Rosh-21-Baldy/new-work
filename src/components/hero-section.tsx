// "use client"; // ✅ Makes it a Client Component

// import Image from "next/image";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const HeroSection = () => {
//   return (
//     <div className="bg-white py-10 md:py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Left Section: Welcome Message */}
//           <div>
//             <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
//               Welcome to <span className="text-green-700">Prefinn!</span>
              
//             </h1>
//             <h3><span className="text-green-700"> Your Trusted Lending Partner</span>
//               <span className="text-green-700"></span>{" "}
//               <span> </span>
//               </h3>
//             <p className="text-lg text-gray-700 mb-6">
//             Prefinn offers Integrated Lending Solution Platform to B2B Businesses, Channel Partners and end consumers.
//             </p>
//             <ul className="text-lg text-gray-700 space-y-2">
//               <li>➡ Banking Products</li>
//               <li>➡ Digital Lending</li>
//               {/* <li>➡ Business Loan</li> */}
//               {/* <li>➡ Home Loan</li> */}
//             </ul>
//             <p className="text-lg text-gray-700 mt-6">
//               Our firm aims to bridge the gap between traditional financial
//               institutions and innovative fintech solutions, thereby enhancing
//               operational efficiency and profitability for its clients.
//             </p>
//           </div>

//           {/* Right Section: Image + Play Button */}
//           <div className="relative flex justify-center">
//             {/* Image */}
//             <Image
//               src="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1194.jpg?t=st=1742884844~exp=1742888444~hmac=1f6e60c1b0e05569c059615e56bef633ffcbc5535565b0ad2306bead8319440a&w=826"
//               alt="Fintech Dashboard"
//               width={600}
//               height={350}
//               className="rounded-lg border-4 border-yellow-400"
//               priority
//             />
            
//           </div>
//         </div>

//         <div className="d-flex justify-space-between align-items-start"> 
//     {/* Left Section */}
//     <div className="mt-16 col-5" style={{ flexGrow: 1 }}>
//         <h2 className="text-3xl font-bold mb-5">
//              <span className="text-green-600 d-flex justify-content-center"> Our Key Services</span>
//         </h2>
//         <div className="space-y-4">
            
//             <details className="bg-gray-100 p-4 rounded-lg cursor-pointer">
//                 <summary className="text-lg font-semibold">Loan Distribution</summary>
//                 <p className="text-gray-600 mt-2">
//                     We offer multiple Loan Products to Individuals and Corporate customers through our large network of Independent Business Owners (IBOs) & 130+ Partner Banks and NBFCs.
//                 </p>
//             </details>

//             <details className="bg-gray-100 p-4 rounded-lg cursor-pointer">
//                 <summary className="text-lg font-semibold">Our Loan Products</summary>
//                 <p className="text-gray-600 mt-2">
//                     We offer multiple Loan Products to Individuals and Corporate customers through our large network of Independent Business Owners (IBOs) through our 130+ Partner Banks, NBFCs, and Fintechs.
//                 </p>
//                 <ul className="mt-2 list-disc pl-5 text-gray-600">
//                     <li>🏠 Home Loans</li>
//                     <li>💰 Personal Loans</li>
//                     <li>🏢 Business Loans</li>
//                     <li>🏡 Loan Against Property</li>
//                     <li>🏦 Working Capital Loans</li>
                    
//                 </ul>
//             </details>

            
//         </div>

//         <p className="mt-6 text-gray-700">
//             Let us partner with you to create a sustainable and profitable financial ecosystem.
//         </p>
//     </div>

//     {/* Right Section (Fixed Size) */}
//     <div className="col-6 mt-16" style={{ maxWidth: "500px", flexShrink: 0 }}>
       
//     </div>
// </div>

//         </div>
     
//       </div>

//   );
// };

// export default HeroSection;


















"use client";

import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    <div className="bg-white py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section: Welcome Message */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Welcome to <span className="text-green-700">Prefinn!</span>
            </h1>
            <h3>
              <span className="text-green-700"> Your Trusted Lending Partner</span>
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Prefinn offers Integrated Lending Solution Platform to B2B Businesses, Channel Partners and end consumers.
            </p>
            <ul className="text-lg text-gray-700 space-y-2">
              <li>➡ Banking Products</li>
              <li>➡ Digital Lending</li>
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              Our firm aims to bridge the gap between traditional financial institutions and innovative fintech solutions, thereby enhancing operational efficiency and profitability for its clients.
            </p>
          </div>

          {/* Right Section: Image + Play Button */}
          <div className="relative flex justify-center">
            {/* Image */}
            <Image
              src="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1194.jpg?t=st=1742884844~exp=1742888444~hmac=1f6e60c1b0e05569c059615e56bef633ffcbc5535565b0ad2306bead8319440a&w=826"
              alt="Fintech Dashboard"
              width={600}
              height={350}
              className="rounded-lg border-4 border-yellow-400"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start mt-0"> 
  {/* Left Section with Image */}
  
  <div className="relative w-full md:w-5/12">
  
    <div className="relative z-10 mt-16"> {/* Ensure text is above the image */}
      <h2 className="text-3xl font-bold mb-5">
        <span className="text-green-600"> Our Key Services</span>
      </h2>
      <div className="space-y-4">
        <details className="bg-gray-100 p-4 rounded-lg cursor-pointer">
          <summary className="text-lg font-semibold">Loan Distribution</summary>
          <p className="text-gray-600 mt-2">
            We offer multiple Loan Products to Individuals and Corporate customers through our large network of Independent Business Owners (IBOs) & 130+ Partner Banks and NBFCs.
          </p>
        </details>

        <details className="bg-gray-100 p-4 rounded-lg cursor-pointer">
          <summary className="text-lg font-semibold">Our Loan Products</summary>
          <p className="text-gray-600 mt-2">
            We offer multiple Loan Products to Individuals and Corporate customers through our large network of Independent Business Owners (IBOs) through our 130+ Partner Banks, NBFCs, and Fintechs.
          </p>
          <ul className="mt-2 list-disc pl-5 text-gray-600">
            <li>🏠 Home Loans</li>
            <li>💰 Personal Loans</li>
            <li>🏢 Business Loans</li>
            <li>🏡 Loan Against Property</li>
            <li>🏦 Working Capital Loans</li>
          </ul>
        </details>
      </div>

      <p className="mt-6 text-gray-700">
        Let us partner with you to create a sustainable and profitable financial ecosystem.
      </p>
    </div>
  </div>

  {/* Right Section (Fixed Size) */}
  <div className="mt-16 w-full md:w-6/12" style={{ maxWidth: "500px" }}>
    {/* Additional content can be added here if needed */}
  </div>
</div>

          {/* Right Section (Fixed Size) */}
          <div className="mt-16 w-full md:w-6/12" style={{ maxWidth: "500px" }}>
            {/* Additional content can be added here if needed */}
          </div>
        </div>
      </div>
    // </div>
  );
};

export default HeroSection;