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
import { FaSearch } from "react-icons/fa";

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
  const [voiceButtonActive, setVoiceButtonActive] = useState(false); // New state variable

  const navItem = [
    {
      route: "All Article",
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

  // Function to toggle voice button active state
  const toggleVoiceButtonActive = () => {
    setVoiceButtonActive((prevState) => !prevState);
  };

  // useEffect to focus input when voice button is activated
  useEffect(() => {
    if (voiceButtonActive) {
      nameInputRef.current.focus();
    }
  }, [voiceButtonActive]);

  return (
    <div className="bg-transparent z-50 sticky top-5">
      <div className="navbar text-white  rounded-2xl ">
        <div className="container sticky flex flex-wrap items-center justify-between lg:justify-between mx-auto lg:flex lg:items-center ">
          <div className="navbar-start  w-1/5 lg:w-auto items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn text-black btn-ghost lg:hidden"
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
            <div className="flex-shrink-0 bg-transparent  sticky md:block w-3/5 lg:w-auto hidden -mt-6 items-center justify-center   lg:flex">
              <div className="left-0 mr-auto">
                <Image
                  src={logo}
                  alt="Logo"
                  width={40}
                  height={60}
                  className="w-60"
                />
              </div>
              <div className="  bg-black rounded-full h-10 mx-auto p-5 flex items-center justify-center">
                <ul className="menu flex justify-center items-center menu-horizontal px-1">
                  <li className="flex gap-6 justify-center items-center ">
                    <div>
                      {navItem.slice(0, 3).map((item, idx) => (
                        <Link key={idx} href={item.pathName}>
                          <li className="mr-5">{item.route}</li>
                        </Link>
                      ))}
                      <li>
                        <div className="text-black">
                          <div className="dropdown dropdown-end dropdown-hover">
                            <div tabIndex={0} role="button" className=" m-1">
                              <div>
                                {user?.email ? (
                                  <div className="flex gap-2">
                                    <div className="avatar online">
                                      <div className="w-6 rounded-full ring  ring-offset-base-100 ring-offset-2">
                                        <Image
                                          src={user?.photoURL || person}
                                          width={6}
                                          height={6}
                                          alt={"user"}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div>
                                    <Link
                                      href={"/login"}
                                      className="text-white rounded-full border-white flex items-center justify-center gap-2"
                                    >
                                      <Image
                                        src={person}
                                        width={12}
                                        height={12}
                                        alt="demo"
                                      />
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </div>
                            <ul
                              tabIndex={0}
                              className="dropdown-content z-[1] menu p-2 text-center shadow bg-base-100 rounded-box w-52"
                            >
                              {navItem.map((item, idx) => (
                                <Link key={idx} href={item.pathName}>
                                  <li className="mr-5 py-2">{item.route}</li>
                                </Link>
                              ))}
                              <li>
                                <div>
                                  {user?.email ? (
                                    <div className="flex gap-2 w-2/4 mx-auto justify-center items-center">
                                      <button
                                        onClick={logout}
                                        className="btn btn-error h-10 inline-block"
                                      >
                                        LogOut
                                      </button>
                                    </div>
                                  ) : (
                                    <div>
                                      <Link href={"/login"} className="btn">
                                        <Image
                                          src={person}
                                          width={10}
                                          height={10}
                                          alt="demo"
                                        />
                                        Log In
                                      </Link>
                                    </div>
                                  )}
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="navbar-end w-1/5 h-10 lg:w-auto flex justify-center items-center gap-2">
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                className="btn btn-outline btn-circle"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <FaSearch />
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost text-black absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <div className="relative w-full mx-auto flex gap-1 justify-center items-center">
                    <input
                      type="text"
                      ref={nameInputRef}
                      placeholder="Search"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="input mx-auto input-bordered w-full mt-4 bg-black text-white md:w-5/6 "
                    />
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
                      <VoiceButton
                        inputRefs={inputRefs}
                        toggleVoiceButtonActive={toggleVoiceButtonActive}
                        voiceButtonActive={voiceButtonActive}
                      />
                    </div>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
