// "use client";

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import Image from "next/image";
// import Link from "next/link";

// const ContactForm = () => {
//   const [formState, setFormState] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormState((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // In a real application, we would send this data to a server
//     console.log("Form submitted:", formState);
//     // Reset form
//     setFormState({ fullName: "", email: "", phone: "" });
//     alert("Thanks for reaching out! We'll get back to you soon.");
//   };

//   return (
//     <div className="bg-primary text-white rounded-lg py-8 px-6 md:p-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Get in touch with us.</h3>
//           <p className="text-sm text-gray-300 mb-6">
//             Drop in your details and we will call you back to address all your
//             questions.
//           </p>
//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="fullName" className="text-white mb-1 block">
//                   Full Name
//                 </Label>
//                 <Input
//                   id="fullName"
//                   name="fullName"
//                   type="text"
//                   placeholder="Firstname Lastname"
//                   className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
//                   value={formState.fullName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="email" className="text-white mb-1 block">
//                   Email Address
//                 </Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="name@domain.com"
//                   className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
//                   value={formState.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="phone" className="text-white mb-1 block">
//                   Phone Number
//                 </Label>
//                 <div className="flex">
//                   <div className="bg-white/10 border border-white/20 rounded-l-md px-3 flex items-center text-white">
//                     +91
//                   </div>
//                   <Input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     placeholder="Phone Number"
//                     className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-l-none"
//                     value={formState.phone}
//                     onChange={handleChange}
//                     required
//                     pattern="[0-9]{10}"
//                     title="Please enter a 10-digit phone number"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   className="bg-secondary text-white rounded-md py-2 px-4 text-sm font-medium hover:bg-secondary/90 transition-all w-full mt-2"
//                 >
//                   Submit
//                 </button>
//               </div>
//               <p className="text-xs text-gray-400 mt-2">
//                 By clicking on "Submit", you agree to our{" "}
//                 <Link
//                   href="/terms-and-conditions"
//                   className="text-gray-300 underline hover:text-white"
//                 >
//                   Terms And Conditions
//                 </Link>
//                 ,{" "}
//                 <Link
//                   href="/privacy-policy"
//                   className="text-gray-300 underline hover:text-white"
//                 >
//                   Privacy policy
//                 </Link>{" "}
//                 and{" "}
//                 <Link
//                   href="/terms-of-use"
//                   className="text-gray-300 underline hover:text-white"
//                 >
//                   Terms of Use
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//         <div className="hidden md:block">
//           <Image
//             src="https://ext.same-assets.com/3568832262/1258535687.png"
//             alt="Contact us illustration"
//             width={300}
//             height={300}
//             className="w-full h-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;



"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

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
    setFormState({ fullName: "", email: "", phone: "" });
    alert("Form has been submitted! We will revert you soon.");
  };

  return (
    <div className="bg-green-600 text-white rounded-lg py-8 px-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-black">
            Get in Touch with Us
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
                  className="bg-green-500 border-green-400 text-white placeholder:text-gray-200 rounded-md p-2"
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
                  className="bg-green-500 border-green-400 text-white placeholder:text-gray-200 rounded-md p-2"
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
                  <div className="bg-green-500 border border-green-400 rounded-l-md px-3 flex items-center text-white">
                    +91
                  </div>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-green-500 border-green-400 text-white placeholder:text-gray-200 rounded-r-md p-2 w-full"
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
                  className="bg-green-700 text-white rounded-md py-2 px-4 text-lg font-semibold hover:bg-white-800 transition-all w-full mt-2"
                >
                  Submit
                </button>
              </div>
              <p className="text-sm text-gray-100 mt-2">
                By clicking "Submit", you agree to our{" "}
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-300 underline hover:text-white"
                >
                  Terms & Conditions
                </Link>
                ,{" "}
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 underline hover:text-white"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/terms-of-use"
                  className="text-gray-300 underline hover:text-white"
                >
                  Terms of Use
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="hidden md:block">
          <Image
            src="https://img.freepik.com/free-vector/thank-you-concept-illustration_114360-13427.jpg?t=st=1743018912~exp=1743022512~hmac=29c768b68108722b5522760feffbcc83e1885bcf961dc667870bde2fd104bacb&w=1380"
            alt="Contact us illustration"
            width={600}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;





