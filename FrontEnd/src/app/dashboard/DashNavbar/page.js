"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import { GrOverview, GrArticle, GrHistory, GrBookmark } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdArticle } from "react-icons/md";
import { useAuth } from "@/context/authContext";
import { FaUsers } from "react-icons/fa6";
import { axiosPublic } from "@/utils/useAxiosPublic";

const DashNavbar = () => {
  const pathname = usePathname();
  const { user } = useAuth();
  const [open, setOpen] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState([]);

  let userEmail = user?.email;

  useEffect(() => {
    axiosPublic.get(`/user/${userEmail}`).then((res) => {
      setLoggedInUser(res?.data);
    });
  }, [userEmail]);

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
      path: "/",
      route: "Home",
      icon: MdArticle,
    },
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
      path: "/",
      route: "Home",
      icon: MdArticle,
    },
    {
      path: "/dashboard",
      route: "Overview",
      icon: GrOverview,
    },
    {
      path: "/dashboard/History",
      route: "Activity",
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
      path: "/",
      route: "Home",
      icon: MdArticle,
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
      path: "/dashboard/profile",
      route: "My Profile",
      icon: CgProfile,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (idx) => {
    if (activeIndex !== idx) {
      setHoveredIndex(idx);
    }
  };
  return (
    <PrivateRoute>
      <div className="md:min-h-[100vh] flex justify-center items-center overflow-x-hidden">
        <nav className="fixed z-50 bottom-0 left-0 right-5 backdrop-blur-md backdrop-filter bg-zinc-50 bg-opacity-60 bg-transparent py-2  ml-5 lg:hidden md:hidden block h-14">
          <div className="items-center gap-10 tracking-wider flex justify-around text center relative">
            {["admin", "writer", "reader"].includes(loggedInUser?.role) &&
              (loggedInUser?.role === "admin"
                ? admin
                : loggedInUser?.role === "writer"
                ? writer
                : loggedInUser?.role === "reader" && reader
              ).map((nav, idx) => (
                <div key={idx}>
                  <Link
                    className={`${
                      pathname === nav?.path ? "text-black" : "text-gray-600"
                    }`}
                    href={nav.path}
                  >
                    <nav.icon className="mx-auto" fontSize={"1.5rem"} />
                    {pathname === nav?.path ? (
                      <p className="text-center uppercase text-black">
                        {nav.route}
                      </p>
                    ) : (
                      ""
                    )}
                  </Link>
                </div>
              ))}
          </div>
        </nav>
        <div className="hidden md:block fixed">
          <div className={`bg-black p-5 rounded-full w-[72px] duration-300 `}>
            <div className=" text-white"></div>

            <ul className="ml-1">
              {["admin", "writer", "reader"].includes(loggedInUser?.role) &&
                (loggedInUser?.role === "admin"
                  ? admin
                  : loggedInUser?.role === "writer"
                  ? writer
                  : loggedInUser?.role === "reader" && reader
                ).map((nav, idx) => (
                  <Link key={idx} href={nav?.path}>
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
                        {React.createElement(nav?.icon)}
                      </span>
                      {(hoveredIndex === idx || activeIndex === idx) && (
                        <span className="text-base font-medium w-auto px-3 py-2 inline-block ml-10 absolute bg-black rounded-tr-[20px] rounded-br-[20px]">
                          {nav?.route}
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
