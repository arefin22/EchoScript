"use client";
import React, { useState } from 'react';
import { usePathname } from "next/navigation";
import logo from "./../../../assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import { GrOverview , GrArticle,GrHistory ,GrBookmark } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { IoHomeOutline,IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaArrowCircleLeft } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { useAuth } from '@/context/authContext';
import { FaUsers } from "react-icons/fa6";
const DashNavbar = () => {
  const pathname = usePathname();
  const {user} =useAuth();
   const [open, setOpen] = useState(true)
  const navs = [
    {
      path: "/dashboard",
      route: "Overview",
      icon: GrOverview,
    },
    {
      path: "/dashboard/articles",
      route: "Articles",
      icon: GrArticle,
    },
    {
      path: "/dashboard/users",
      route: "Users",
      icon: FaUsers,
    },
    {
      path: "/dashboard/History",
      route: "History",
      icon: GrHistory,
    },
    {
      path: "/dashboard/bookmarks",
      route: "Bookmarks",
      icon: GrBookmark,
    },

    {
      path: "/dashboard/write",
      route: "Write",
      icon: TfiWrite,
    },
    {
      path: "/",
      route: "Home",
      icon: IoHomeOutline,
    },
    {
      path: "/dashboard/profile",
      route: "My Profile",
      icon: CgProfile,
      spacing: true,
    },
    {
      path: "/setting",
      route: "Setting",
      icon: IoSettingsOutline,
    },
  ];
  const navItem = [
    
  ];
  return (
    <PrivateRoute>
    <div>
    <div className="block md:hidden">
      <div className="flex flex-col gap-3 items-center justify-center p-16 bg-white w-full">
        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={100}
          className="w-96"
        />
        <h2 className="lg:text-2xl md:text-xl text-base text-center font-thin">
          Empowering Voices, Enriching Minds.
        </h2>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full mt-4 bg-white md:w-auto"
        />
      </div>
      <div className="navbar text-white bg-[#282C32]">
        <div className="container mx-auto">
          <div className="navbar-start items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-[#282C32] rounded-box w-52"
              >
                {navs.map((item, idx) => (
                  <Link key={idx} href={item.path}>
                    <li className="mr-5 py-2">{item.route}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 hidden -mt-6 items-center justify-start lg:flex">
              
            </div>
          </div>
          <div className="navbar-end">
            <div className="flex flex-row items-center justify-end gap-2">
            <ul className="menu menu-horizontal px-1">
                {navItem.map((item, idx) => (
                  <Link key={idx} href={item.path}>
                    <li className="mr-5">{item.route}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div className='hidden md:block fixed'>

     <diV className={`bg-black h-screen p-5 pt-8 rounded-full ${open ? 'w-24': 'w-24 '} duration-300 relative `}>
            <FaArrowCircleLeft size={25}  className={`bg-white text-gray-600 rounded-full absolute -right-3 top-9
            border border-gray-600 cursor-pointer
            ${!open && 'rotate-180'}`} /> 
            <div className='inline-flex ml-2 text-white'>
             <MdArticle className=' text-4xl rounded cursor-pointer block float-left ' />
             <h1 className={` origin-left text-2xl font-medium ${!open && 'scale-0'} duration-300`}>
             EchoScript
             </h1>
            </div> 
            <ul className="ml-2 ">
            <>
            {navs.map((nav, idx) => (
              <Link  key={idx}
               href={nav.path}
              
              >
              <li onClick={()=> setOpen(!open)} className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2  hover:bg-slate-400 rounded-md ${nav.spacing?'mt-9':'mt-2'} ${
                pathname === `${nav.path}`
                  ? "bg-black rounded-md w-32"
                  : ""
              }`  }>
               <span className ="text-2xl block float-left ">
                {React.createElement(nav.icon)}
                </span>
               <span className={`text-base font-medium flex-1 ${!open && 'scale-0'} duration-300`}>{nav.route} </span>
              </li>
              </Link>
            ))}
            </>
            
            </ul>  

      </diV>







      
     {/* <div className=" w-64 border-r-2 border-black min-h-screen  flex md:flex-col    ">
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="Logo" className="w-48 mx-auto mt-2" />
            <p className=" text-black text-center text-[10px]">
              Empowering Voices, Enriching Minds.
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-6 mt-5  mx-12 text-black text-[16px] ">
          {navs.map((nav, idx) => (
            <Link
              key={idx}
              className={ `${
                pathname === `${nav.path}`
                  ? "border border-black w-40 rounded-xl px-1 py-1"
                  : ""
              }`}
              href={nav.path}
            >
              <h1 className='flex items-center text-base gap-2'>   {React.createElement(nav.icon)}
              {nav.route}</h1>
            </Link>
          ))}
        </div>
        <div className="mt-60 border-y-[1px] border-black w-40 mx-auto"></div>
        <div className="flex flex-col gap-6 mt-5  mx-12 text-black text-[16px] text-center">
          {navItem.map((nav, idx) => (
            <Link
              className={` ${
                pathname === `${nav.path}`
                  ? "border border-black w-40 rounded-xl px-1 py-1"
                  : ""
              }`}
              key={idx}
              href={nav.path}
            >    <h1 className='flex items-center  text-base gap-2'>   {React.createElement(nav.icon)}
            {nav.route}</h1>
            </Link>
          ))}
        </div>
      </div> */}
     </div>
    </div>
    </PrivateRoute>
  );
};

export default DashNavbar;
