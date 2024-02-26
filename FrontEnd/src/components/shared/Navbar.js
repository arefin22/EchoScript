"use client";
import React, { useEffect, useRef, useState } from "react";
import Theme from "./Theme";
import logo from "./../../assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import person from "@/assets/img/person-removebg-preview.png";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useAxiosPublic from "@/utils/useAxiosPublic";
import VoiceButton from "./VoiceButton/VoiceButton";
import { FaList } from "react-icons/fa";

const Navbar = () => {
  const { user, loader, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState([]);
  const dropdownRef = useRef(null);
  const nameInputRef = useRef(null);
  const inputRefs = [nameInputRef];

  const navItem = [
    {
      route: "All Articles",
      pathName: "/article",
    },
    {
      route: "Subscriptions",
      pathName: "/packages",
    },
    {
      route: "Dashboard",
      pathName: "/dashboard",
    },
    {
      route: "Home",
      pathName: "/",
    },
    {
      route: "About Us",
      pathName: "/about",
    },
  ];

  useEffect(() => {
    axiosSecure.get("/textArticle").then((res) => {
      setData(res.data);
    });
  }, [axiosSecure]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <div className="hidden lg:block bg-black text-white rounded-full px-2 py-3">
        {/* middle part */}
        <nav className="flex xl:gap-2 items-center justify-around">
          {navItem.slice(0, 3).map((item, idx) => (
            <Link key={idx} href={item.pathName}>
              <li className="list-none text-lg xl:text-xl font-semibold">{item.route}</li>
            </Link>
          ))}
          <li className="list-none">
            <details className="dropdown dropdown-hover">
              <summary className="btn bg-transparent border-hidden hover:border-hidden hover:bg-transparent ">
                {user?.email ? (
                  <div className="flex">
                    <div className="avatar">
                      <div className="w-10 rounded-full ring ring-offset-base-100 ring-offset-2">
                        <Image
                          src={user?.photoURL || person}
                          width={8}
                          height={8}
                          alt={"user"}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Image src={person} width={8} height={8} alt="demo" />
                  </div>
                )}
              </summary>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-[#282C32] rounded-box w-52"
              >
                {user?.email ? (
                  <li className="list-none">
                    <button
                      onClick={logout}
                      className="btn btn-error inline-block text-center text-2xl hover:text-white"
                    >
                      LogOut
                    </button>
                  </li>
                ) : (
                  <Link href={"/login"}>
                    <li className="list-none text-center">log In</li>
                  </Link>
                )}
              </ul>
            </details>
          </li>
        </nav>
      </div>
      <div className="w-[30%] md:w-[20%] ml-[50%] lg:hidden flex items-center justify-around bg-black text-white rounded-full px-3">
        {/* mobile nav option */}
        <div>
          <details className="dropdown dropdown-hover">
            <summary className="m-1 btn bg-transparent border-hidden hover:border-hidden hover:bg-transparent ">
              <FaList className="text-white"/>
            </summary>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 ml-[-50px] z-[1] p-2 shadow text-white bg-[#282C32] rounded-box w-52"
            >
              {navItem.map((item, idx) => (
                <Link key={idx} href={item.pathName}>
                  <li className="py-2 text-center list-none">
                    {item.route}
                  </li>
                </Link>
              ))}
              {user?.email ? (
                <li className="list-none">
                  <button
                    onClick={logout}
                    className="btn btn-error h-10 inline-block text-center p-2"
                  >
                    LogOut
                  </button>
                </li>
              ) : (
                <Link href={"/login"}>
                  <li className="list-none">log In</li>
                </Link>
              )}
            </ul>
          </details>
        </div>

        <div>
          {user?.email ? (
            <div className="flex gap-2">
              <div className="avatar ">
                <div className="w-8 rounded-full ring  ring-offset-base-100 ring-offset-2">
                  <Image
                    src={user?.photoURL || person}
                    width={8}
                    height={8}
                    alt={"user"}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Image src={person} width={8} height={8} alt="demo" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
