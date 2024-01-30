"use client";
import React from "react";
import Theme from "./Theme";
import logo from "./../../assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import person from "@/assets/img/person-removebg-preview.png";

const Navbar = () => {
  const { user, loader, logout } = useAuth();
  const navItem = [
    {
      route: "Home",
      pathName: "/",
    },

    {
      route: "About Us",
      pathName: "/about",
    },

    {
      route: "All Article",
      pathName: "/article",
    },
    {
      route: "Dashboard",
      pathName: "/dashboard",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-3 items-center justify-center p-16 bg-white w-full">
        <Image src={logo} alt="Logo" className="w-96" />
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
                {navItem.map((item, idx) => (
                  <Link key={idx} href={item.pathName}>
                    <li className="mr-5 py-2">{item.route}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 hidden -mt-6 items-center justify-start lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navItem.map((item, idx) => (
                  <Link key={idx} href={item.pathName}>
                    <li className="mr-5">{item.route}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="navbar-end">
            <div className="flex flex-row items-center justify-end gap-2">
              <div>
                <Theme />
              </div>
              <div>
                {user?.email ? (
                  <div className="flex gap-2">
                    <Image
                      src={user.photoURL}
                      width={20}
                      height={20}
                      alt={"user"}
                    />
                    <button
                      onClick={logout}
                      className="btn btn-error inline-block"
                    >
                      LogOut
                    </button>
                  </div>
                ) : (
                  <div>
                    <Link href={"/login"} className="btn">
                      <Image src={person} width={20} height={20} alt="demo" />
                      Log In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
