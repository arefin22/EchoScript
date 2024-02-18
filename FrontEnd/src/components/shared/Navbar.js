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
      route: "Home",
      pathName: "/",
    },

    {
      route: "About Us",
      pathName: "/about",
    },
    {
      route: "Subscriptions",
      pathName: "/packages",
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

  useEffect(() => {
    axiosSecure.get("/article").then((res) => {
      setData(res.data);
    });
  }, [axiosSecure]);

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    try {
      if (query.trim() === "") {
        setSuggestions([]);
        return;
      } else if (query.trim().length < searchQuery.trim().length) {
        return;
      } else {
        const response = await axiosPublic.get(`/search?query=${query}`);
        const { articles, user } = response.data;
        const combinedSuggestions = [
          ...(articles
            ? articles?.map((article) => ({
                title: article.title,
                _id: article._id,
              }))
            : []),
          ...(user
            ? user?.map((Suser) => ({
                name: Suser?.name,
                photoURL: Suser?.photoURL,
              }))
            : []),
        ];
        setSuggestions(combinedSuggestions);
      }
    } catch (error) {
      console.error("Error searching items:", error);
    }
  };

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
    <div>
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
       <div className="flex justify-center items-center gap-5">
       <input
          type="text"
          ref={nameInputRef}
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="input input-bordered w-full mt-4 bg-white md:w-auto"
        />
        <VoiceButton className="btn ml-5" inputRefs={inputRefs}/>
       </div>
      </div>
      <div className="flex justify-center w-3/4 " ref={dropdownRef}>
        {suggestions?.length > 0 && searchQuery?.length > 0 && (
          <div
            key={Math.random()}
            className="absolute mt-2 p-2 bg-white shadow rounded-lg border z-50 border-gray-300 w-96 cursor-pointer"
          >
            {suggestions?.map((item) => (
              // <Link href={`/article/${item._id}`}>
              <p
                onClick={() => {
                  setSearchQuery(item.title || item.name);
                  setSuggestions([]);
                }}
                className="flex justify-center items-center"
                key={item._id}
              >
                {item.photoURL ? (
                  <Image
                    className="rounded-full"
                    src={item.photoURL}
                    width={50}
                    height={50}
                    alt="user image"
                  />
                ) : (
                  ""
                )}
                {item.title || item.name}
              </p>
              // </Link>
            ))}
          </div>
        )}
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
                    <div className="avatar online">
                      <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image
                          src={user?.photoURL || person}
                          width={12}
                          height={12}
                          alt={"user"}
                        />
                      </div>
                    </div>
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