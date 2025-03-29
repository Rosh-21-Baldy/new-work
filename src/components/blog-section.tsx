// import Link from "next/link";

// const BLOG_POSTS = [
//   {
//     id: 1,
//     category: "NEWS AND INSIGHTS",
//     title: "The Future of Home Finance in India | Th...",
//     excerpt:
//       "The future of home finance in India appears promising, with...",
//     link: "/blog/the-future-of-home-finance-in-india",
//   },
//   {
//     id: 2,
//     category: "GUIDELINES",
//     title: "How is EMI Calculated? Tips to Optimise ...",
//     excerpt:
//       "The journey to homeownership is a monumental pursuit, often...",
//     link: "/blog/how-is-emi-calculated-tips-to-optimise-your-emi-amount",
//   },
//   {
//     id: 3,
//     category: "HOME LOANS",
//     title: "Understanding Home Loans Eligibility: A ...",
//     excerpt:
//       "Owning a home is a cherished dream for many Indians, and a ...",
//     link: "/blog/understanding-home-loans-eligibility-a-comprehensive-guide",
//   },
//   {
//     id: 4,
//     category: "GUIDELINES",
//     title: "Understanding RBI's Home Loan Guideline...",
//     excerpt:
//       "As the country's central banking institution, the Reserve B...",
//     link: "/blog/understanding-rbis-home-loan-guidelines-a-comprehensive-overview",
//   },
// ];

// const BlogSection = () => {
//   return (
//     <div className="bg-ambak-bg py-16">
//       <div className="ambak-container">
//         <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
//           Blogs
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {BLOG_POSTS.map((post) => (
//             <Link
//               key={post.id}
//               href={post.link}
//               className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
//             >
//               <div className="p-5">
//                 <p className="text-xs font-medium text-secondary uppercase mb-1">
//                   {post.category}
//                 </p>
//                 <h3 className="text-primary font-semibold mb-2">{post.title}</h3>
//                 <p className="text-muted-foreground text-sm">{post.excerpt}</p>
//               </div>
//             </Link>
//           ))}
//         </div>

//         <div className="flex justify-center mt-10">
//           <div className="flex space-x-4">
//             <Link
//               href="/blog"
//               className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors"
//             >
//               Speak To An Expert
//             </Link>
//             <Link
//               href="/offer"
//               className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
//             >
//               Start Now →
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogSection;
