// "use client";
// import React from 'react';
// import { usePathname } from "next/navigation";
// import logo from "./../../assets/img/logo.png";
// import Image from "next/image";
// import Link from "next/link";
// import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
// import { GrOverview , GrArticle,GrHistory ,GrBookmark } from "react-icons/gr";
// import { TfiWrite } from "react-icons/tfi";
// import { IoHomeOutline,IoSettingsOutline } from "react-icons/io5";
// import { CgProfile } from "react-icons/cg";
// const page = () => {
//     const pathname = usePathname();
//     const navs = [
//         {
//           path: "/dashboard",
//           route: "Overview",
//           icon:GrOverview
//         },
//         {
//           path: "/dashboard/articles",
//           route: "Articles",
//           icon:GrArticle
//         },{
//           path:"/dashboard/History",
//           route:"History",
//           icon:GrHistory 
//         },{
//           path:"/dashboard/bookmarks",
//           route:"Bookmarks",
//           icon:GrBookmark
//         },
//         {
//           path: "/dashboard/write",
//           route: "Write",
//           icon:TfiWrite
//         },
//         {
//           path: "/",
//           route: "Home",
//           icon:IoHomeOutline
//         },
//       ];
//     return (
//         <div>
//             <aside className="h-screen">
//               <nav className="h-full flex flex-col bg-white border-r shadow-sm">
//                 <div className="p-4 pb-2 flex justify-between items-center">
//                 <Image
//           src={logo}
//           alt="Logo"
//           width={100}
//           height={100}
//           className="w-32"
//         />
//         <button className="p-1.5 rounded-lg bg-gray-50  hover:bg-gray-100">
//             Click
//         </button>
//                 </div>
//                <ul className='flex-1 px-3'>
//                {navs.map((nav, idx) => (
//             <Link
//               key={idx}
//               className={ `${
//                 pathname === `${nav.path}`
//                   ? ""
//                   : ""
//               }`}
//               href={nav.path}
//             >
//               <h1 className='flex items-center text-base gap-2'>   {React.createElement(nav.icon)}
//               {nav.route}</h1>
//             </Link>
//           ))}
//                 </ul> 
//                <div className="border-t flex p-3">
//                <Image
//           src={logo}
//           alt="Logo"
//           width={100}
//           height={100}
//           className="w-10 h-10 rounded-md"
//         />
//         <div className={`
//          flex justify-between items-center w-52 ml-3
//         `}>
//             <div className='lending-4'>
//                 <h4 className='font-semibold'>
//                   jhon Doe
//                 </h4>
//                 <span className='text-xs text-gray-600'>
//                     jon@gmail.com
//                 </span>
//             </div>
//             <IoSettingsOutline size={26}/>
//         </div>
//                 </div> 
//               </nav>
//             </aside>
//         </div>
//     );
// };

// export default page;