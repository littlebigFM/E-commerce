// import React from "react";

// const faqs = [
//   {
//     q: "How do I create an account?",
//     a: "Click on Register at the top-right and fill the sign-up form. You can also sign in with Google.",
//   },
//   {
//     q: "How do I track my order?",
//     a: "Go to the Orders page under your profile and select the order to view tracking details.",
//   },
//   {
//     q: "How can I request a refund?",
//     a: "Open the order, choose the item and click Request Refund. Our support team will review it.",
//   },
//   {
//     q: "How do I contact support?",
//     a: "Use the contact form below or email support@example.com for urgent issues.",
//   },
// ];

// const Help = () => {
//   return (
//     <div className="p-4">
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-bold text-[#2A2A2A] dark:text-white">
//           Help & Support
//         </h1>
//         <div>
//           <input
//             placeholder="Search help articles"
//             className="px-3 py-2 border rounded-md w-[260px] bg-white dark:bg-[#1A1A1B]"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2">
//           <div className="bg-white dark:bg-[#1A1A1B] p-4 rounded-[12px] border border-[#E5E7EB]">
//             <h2 className="font-semibold mb-4 text-[#2A2A2A] dark:text-white">
//               Frequently Asked Questions
//             </h2>

//             <div className="flex flex-col gap-3">
//               {faqs.map((item, idx) => (
//                 <details key={idx} className="p-3 border rounded-md">
//                   <summary className="font-semibold cursor-pointer">
//                     {item.q}
//                   </summary>
//                   <p className="mt-2 text-sm text-[#6B7280] dark:text-[#B0B0B0]">
//                     {item.a}
//                   </p>
//                 </details>
//               ))}
//             </div>
//           </div>
//         </div>

//         <aside className="">
//           <div className="bg-white dark:bg-[#1A1A1B] p-4 rounded-[12px] border border-[#E5E7EB]">
//             <h3 className="font-semibold mb-2 text-[#2A2A2A] dark:text-white">
//               Contact Support
//             </h3>
//             <p className="text-sm text-[#6B7280] dark:text-[#B0B0B0] mb-4">
//               Our team is available 24/7. Expect a response within 24 hours.
//             </p>

//             <div className="mb-3">
//               <label className="text-sm font-medium">Your Email</label>
//               <input
//                 className="w-full mt-1 px-3 py-2 border rounded-md bg-white dark:bg-[#111]"
//                 placeholder="you@example.com"
//               />
//             </div>

//             <div className="mb-3">
//               <label className="text-sm font-medium">Message</label>
//               <textarea
//                 className="w-full mt-1 px-3 py-2 border rounded-md bg-white dark:bg-[#111]"
//                 rows={4}
//                 placeholder="How can we help?"
//               />
//             </div>

//             <button className="w-full bg-[#1A71F6] text-white py-2 rounded-md font-bold">
//               Send Message
//             </button>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default Help;

import React from "react";

const Help = () => {
  return <div>Help</div>;
};

export default Help;
