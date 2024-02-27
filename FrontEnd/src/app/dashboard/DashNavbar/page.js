"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import logo from "./../../../assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import { GrOverview, GrArticle, GrHistory, GrBookmark } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaArrowCircleLeft } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { useAuth } from "@/context/authContext";
import { FaUsers } from "react-icons/fa6";
import { axiosPublic } from "@/utils/useAxiosPublic";
const DashNavbar = () => {
  const pathname = usePathname();
  const { user } = useAuth();
  const [open, setOpen] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState([]);

  console.log(user?.email);

  let userEmail = user?.email;

  useEffect(() => {
    axiosPublic.get(`/user/${userEmail}`).then((res) => {
      setLoggedInUser(res.data);
    });
  }, [userEmail]);

  console.log(loggedInUser);
  // All Data
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
    // {
    //   path: "/",
    //   route: "Home",
    //   icon: IoHomeOutline,
    // },
    {
      path: "/dashboard/profile",
      route: "My Profile",
      icon: CgProfile,
    },
    {
      path: "/setting",
      route: "Setting",
      icon: IoSettingsOutline,
    },
  ];

  // Admin Panel
  const admin = [
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
  ];

  // Writer Panel
  const writer = [
    {
      path: "/dashboard",
      route: "Overview",
      icon: GrOverview,
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
      path: "/dashboard/articles",
      route: "Articles",
      icon: GrArticle,
    },
    {
      path: "/dashboard/write",
      route: "Write",
      icon: TfiWrite,
    },
    {
      path: "/dashboard/profile",
      route: "My Profile",
      icon: CgProfile,
    },
  ];

  // Reader Panel
  const reader = [
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
      path: "/dashboard/profile",
      route: "My Profile",
      icon: CgProfile,
    },
  ];

  const navItem = [];
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (idx) => {
    if (activeIndex !== idx) {
      setHoveredIndex(idx);
    }
  };
  return (
    <PrivateRoute>
      <div className="min-h-[100vh]  flex justify-center items-center">
        <div>
          <div className="block md:hidden">
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
                  <div className="flex-shrink-0 hidden -mt-6 items-center justify-start lg:flex"></div>
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
        </div>
        <div className="hidden md:block fixed">
          <div className={`bg-black p-5 rounded-full w-[72px] duration-300 `}>
            <div className=" text-white"></div>
            {/* <ul className="ml-1 ">
              <>
                {navs.map((nav, idx) => (
                  <Link key={idx} href={nav.path}>
                    <li
                      onClick={() => setOpen(open)}
                      className={`text-white text-sm flex justify-between items-center gap-x-4 cursor-pointer py-2 rounded-md mt-2 ${
                        pathname === `${nav.path}`
                          ? `bg-black rounded-md ${open ? "w-36" : "w-[72px] "}`
                          : ""
                      }`}
                    >
                      <span className="text-[20px] block float-left ">
                        {React.createElement(nav.icon)}
                      </span>
                      <span
                        className={`text-base ml-2 font-medium flex-1  ${
                          !open && "scale-0"
                        } duration-300`}
                      >
                        {nav.route}{" "}
                      </span>
                    </li>
                  </Link>
                ))}
              </>
            </ul> */}

            {/* perfect design */}
            {/* <ul className="ml-1">
              {navs.map((nav, idx) => (
                <Link key={idx} href={nav.path}>
                  <li
                    onClick={() => setOpen(open)}
                    className="text-white text-sm flex items-center gap-x-4 cursor-pointer py-4 rounded-md "
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <span className="text-xl block float-left">
                      {React.createElement(nav.icon)}
                    </span>
                    {hoveredIndex === idx && (
                      <span className="text-base font-medium w-auto px-3 py-2 inline-block ml-10 absolute bg-black rounded-tr-[20px] rounded-br-[20px]">
                        {nav.route}
                      </span>
                    )}
                  </li>
                </Link>
              ))}
            </ul> */}

            <ul className="ml-1">
              <li>
                <Link href="/">
                  <MdArticle className="text-white text-2xl items-center cursor-pointer my-2" />
                </Link>
              </li>

              {/* {navs.map((nav, idx) => (


                <Link key={idx} href={nav.path}>
                  <li
                    onClick={() => {
                      setOpen(open);
                      setActiveIndex(idx);
                    }}
                    className={`text-white text-sm flex items-center gap-x-4 cursor-pointer py-4 rounded-md ${
                      activeIndex === idx ? "bg-black" : ""
                    }`}
                    onMouseEnter={() => handleHover(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <span className="text-xl block float-left">
                      {React.createElement(nav.icon)}
                    </span>
                    {(hoveredIndex === idx || activeIndex === idx) && (
                      <span className="text-base font-medium w-auto px-3 py-2 inline-block ml-10 absolute bg-black rounded-tr-[20px] rounded-br-[20px]">
                        {nav.route}
                      </span>
                    )}
                  </li>
                </Link>
              ))} */}

              {/* {loggedInUser?.role === "admin" &&
                admin.map((nav, idx) => (
                  <Link key={idx} href={nav.path}>
                    <li
                      onClick={() => {
                        setOpen(open);
                        setActiveIndex(idx);
                      }}
                      className={`text-white text-sm flex items-center gap-x-4 cursor-pointer py-4 rounded-md ${
                        activeIndex === idx ? "bg-black" : ""
                      }`}
                      onMouseEnter={() => handleHover(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <span className="text-xl block float-left">
                        {React.createElement(nav.icon)}
                      </span>
                      {(hoveredIndex === idx || activeIndex === idx) && (
                        <span className="text-base font-medium w-auto px-3 py-2 inline-block ml-10 absolute bg-black rounded-tr-[20px] rounded-br-[20px]">
                          {nav.route}
                        </span>
                      )}
                    </li>
                  </Link>
                ))}
              {loggedInUser?.role === "writer" &&
                writer.map((nav, idx) => (
                  <Link key={idx} href={nav.path}>
                    <li
                      onClick={() => {
                        setOpen(open);
                        setActiveIndex(idx);
                      }}
                      className={`text-white text-sm flex items-center gap-x-4 cursor-pointer py-4 rounded-md ${
                        activeIndex === idx ? "bg-black" : ""
                      }`}
                      onMouseEnter={() => handleHover(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <span className="text-xl block float-left">
                        {React.createElement(nav.icon)}
                      </span>
                      {(hoveredIndex === idx || activeIndex === idx) && (
                        <span className="text-base font-medium w-auto px-3 py-2 inline-block ml-10 absolute bg-black rounded-tr-[20px] rounded-br-[20px]">
                          {nav.route}
                        </span>
                      )}
                    </li>
                  </Link>
                ))}
              {loggedInUser?.role === "reader" &&
                reader.map((nav, idx) => (
                  <Link key={idx} href={nav.path}>
                    <li
                      onClick={() => {
                        setOpen(open);
                        setActiveIndex(idx);
                      }}
                      className={`text-white text-sm flex items-center gap-x-4 cursor-pointer py-4 rounded-md ${
                        activeIndex === idx ? "bg-black" : ""
                      }`}
                      onMouseEnter={() => handleHover(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <span className="text-xl block float-left">
                        {React.createElement(nav.icon)}
                      </span>
                      {(hoveredIndex === idx || activeIndex === idx) && (
                        <span className="text-base font-medium w-auto px-3 py-2 inline-block ml-10 absolute bg-black rounded-tr-[20px] rounded-br-[20px]">
                          {nav.route}
                        </span>
                      )}
                    </li>
                  </Link>
                ))} */}

              {["admin", "writer", "reader"].includes(loggedInUser?.role) &&
                (loggedInUser?.role === "admin"
                  ? admin
                  : loggedInUser?.role === "writer"
                  ? writer
                  : loggedInUser?.role === "reader" && reader
                ).map((nav, idx) => (
                  <Link key={idx} href={nav.path}>
                    <li
                      onClick={() => {
                        setOpen(open);
                        setActiveIndex(idx);
                      }}
                      className={`text-white text-sm flex items-center gap-x-4 cursor-pointer py-4 rounded-md ${
                        activeIndex === idx ? "bg-black" : ""
                      }`}
                      onMouseEnter={() => handleHover(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <span className="text-xl block float-left">
                        {React.createElement(nav.icon)}
                      </span>
                      {(hoveredIndex === idx || activeIndex === idx) && (
                        <span className="text-base font-medium w-auto px-3 py-2 inline-block ml-10 absolute bg-black rounded-tr-[20px] rounded-br-[20px]">
                          {nav.route}
                        </span>
                      )}
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default DashNavbar;
