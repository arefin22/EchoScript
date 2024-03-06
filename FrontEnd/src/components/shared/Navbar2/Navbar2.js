"use client";
import React, { useEffect } from "react";
import logo from "@/assets/img/logo.png";
import Image from "next/image";
import person from "@/assets/img/person-removebg-preview.png";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { useRef, useState } from "react";
import useAxiosSecure from "@/utils/useAxiosSecure";
import useAxiosPublic from "@/utils/useAxiosPublic";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import VoiceButton from "../VoiceButton/VoiceButton";

const Navbar2 = () => {
  const { user, loader, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState([]);
  const dropdownRef = useRef(null);
  const nameInputRef = useRef(null);
  const [isHidden, setIsHidden] = useState(false);
  const inputRefs = [nameInputRef];
  const [voiceButtonActive, setVoiceButtonActive] = useState(false);
  const toggleVoiceButtonActive = () => {
    setVoiceButtonActive(prevState => !prevState);
  };
  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has scrolled beyond a certain threshold
      if (window.scrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up by removing the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    if (voiceButtonActive) {
      nameInputRef.current.focus();
    }
  }, [voiceButtonActive]);
  const navItem = [
    {
      route: "Articles",
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
  
  return (
    <div className="h-20  rounded-full  mx-auto bg-transparent z-50 sticky top-5">
      <div className="flex h-20 justify-center items-center p-2 text-sm font-thin text-center">
       {/* left part */}
        <div className="w-1/5 h-8 flex items-center lg:justify-center gap-28 justify-between lg:w-auto">
          <div className="lg:hidden text-black flex items-start justify-start left-0">
            <details className="dropdown">
              <summary className="m-1 btn btn-xs h-6 bg-[#282C32] text-white">
                <IoMenu />
              </summary>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-[#282C32] rounded-box w-52"
              >
                {navItem?.map((item, idx) => (
                  <Link key={idx} href={item.pathName}>
                    <li className="mr-5 py-2">{item.route}</li>
                  </Link>
                ))}
                {user?.email ? (
                  <li>
                    <button
                      onClick={logout}
                      className="btn btn-error h-10 inline-block"
                    >
                      LogOut
                    </button>
                  </li>
                ) : (
                  <Link href={"/login"}>
                    <li>Log In</li>
                  </Link>
                )}
              </ul>
            </details>
          </div>
          <div className={`${isHidden ? 'hidden' : ''} p-1 lg:m-2 lg:items-center lg:justify-between lg:mx-auto`}>
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Logo"
                width={40}
                height={40}
                className="w-40"
              />
            </Link>
          </div>
        </div>
           {/* center part */}
        <div className="hidden text-lg font-medium  sm:hidden md:hidden  bg-black w-2/5 text-white rounded-full h-16 mx-auto p-5 lg:flex items-center justify-around">
          <ul className=" flex  justify-around items-start gap-2   px-1">
            {navItem?.slice(0, 3).map((item, idx) => (
              <Link key={idx} href={item.pathName}>
                <li className="mr-1 mt-4 list-none">{item.route}</li>
              </Link>
            ))}
            <li className="list-none">
              <details className="dropdown dropdown-hover">
                <summary className="m-1 btn bg-transparent border-hidden hover:border-hidden hover:bg-transparent ">
                  {user?.email ? (
                    <div className="flex gap-2">
                      <div className="avatar ">
                        <div className="w-12 rounded-full ring  ring-offset-base-100 ring-offset-2">
                          <Image
                            src={user?.photoURL || person}
                            width={12}
                            height={12}
                            alt={user?.name}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Image src={person} width={12} height={12} alt="demo" />
                    </div>
                  )}
                </summary>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-[#282C32] rounded-box w-52"
                >
                  {navItem?.map((item, idx) => (
                    <Link key={idx} href={item.pathName}>
                      <li className="mr-5 py-2 list-none">{item.route}</li>
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
            </li>
          </ul>
        </div>
        {/* right part */}
        <div className={`${isHidden ? 'hidden' : ''}`}>
         {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn border-hidden hover:border-hidden hover:bg-transparent bg-transparent h-10" onClick={()=>document.getElementById('my_modal_3').showModal()}><FaSearch className="w-12 h-12"/></button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box ">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className="relative bg-transparent w-full mx-auto flex gap-2 justify-center items-center">
                <div className="w-3/4">
                <input
             type="text"
             ref={nameInputRef}
             placeholder="Search"
           
             className="input mx-auto input-bordered w-full mt-4   md:w-5/6 "
             />
                </div>
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
  );
};

export default Navbar2;


