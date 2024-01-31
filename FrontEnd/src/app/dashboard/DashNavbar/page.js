"use client";
import React from 'react';
import { usePathname } from "next/navigation";
import logo from "./../../../assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import { GrOverview , GrArticle,GrHistory  } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { IoHomeOutline,IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
const DashNavbar = () => {
  const pathname = usePathname();

  const navs = [
    {
      path: "/dashboard",
      route: "Overview",
      icon:GrOverview
    },
    {
      path: "/dashboard/articles",
      route: "Articles",
      icon:GrArticle
    },{
      path:"/dashboard/History",
      route:"History",
      icon:GrHistory 
    },
    {
      path: "/dashboard/write",
      route: "Write",
      icon:TfiWrite
    },
    {
      path: "/",
      route: "Home",
      icon:IoHomeOutline
    },
  ];
  const navItem = [
    {
      path: "/dashboard/profile",
      route: "My Profile",
      icon:CgProfile 
    },
    {
      path: "/setting",
      route: "Setting",
      icon:IoSettingsOutline
    },
  ];
  return (
    <PrivateRoute>
    <div>
      <div className="w-64 border-r-2 border-black min-h-screen  flex flex-col    ">
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="Logo" className="w-48 mx-auto mt-2" />
            <p className="text-black text-center text-[10px]">
              Empowering Voices, Enriching Minds.
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-6 mt-5  mx-auto text-black text-[16px] text-center">
          {navs.map((nav, idx) => (
            <Link
              key={idx}
              className={ `${
                pathname === `${nav.path}`
                  ? "border border-black w-40 rounded-xl px-4 py-1"
                  : ""
              }`}
              href={nav.path}
            >
              <h1 className='flex items-center justify-center mx-auto text-base gap-2'>   {React.createElement(nav.icon)}
              {nav.route}</h1>
            </Link>
          ))}
        </div>
        <div className="mt-60 border-y-[1px] border-black w-40 mx-auto"></div>
        <div className="flex flex-col gap-6 mt-5  mx-auto text-black text-[16px] text-center">
          {navItem.map((nav, idx) => (
            <Link
              className={` ${
                pathname === `${nav.path}`
                  ? "border border-black w-40 rounded-xl px-4 py-1"
                  : ""
              }`}
              key={idx}
              href={nav.path}
            >    <h1 className='flex items-center justify-center mx-auto text-base gap-2'>   {React.createElement(nav.icon)}
            {nav.route}</h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </PrivateRoute>
  );
};

export default DashNavbar;
