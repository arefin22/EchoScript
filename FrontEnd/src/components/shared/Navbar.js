import React from "react";
import Theme from "./Theme";
import logo from "./../../assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from '@/context/authContext';
import person from "@/assets/img/person-removebg-preview.png"


const Navbar = () => {
  const {  user,loader,logout }= useAuth();
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
  ];
  return (
    <div>
      <div className="flex flex-col gap-3 items-center justify-center p-16 bg-white w-full">
        <Image src={logo} alt="Logo" className="w-96" />
        <h2 className="text-2xl font-thin">
          Empowering Voices, Enriching Minds.
        </h2>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full mt-4 bg-white md:w-auto"
        />
      </div>
      <div className="bg-[#282C32]">
        <div className="container mx-auto">
          <div className="navbar bg-[#282C32] text-white">
            <div className="flex-1">
              <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1 items-center">
                  {navItem.map((item, idx) => (
                    <Link key={idx} href={item.pathName}>
                      <li className="mr-5">{item.route}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-none gap-2">
              <div>
                <Theme />
              </div>
              <div>
                {
              user?.email?(
               <div className='flex gap-2'>
                <Image src={user.photoURL} width={20} height={20} alt={"user"}/>
                <button onClick={logout} className="btn btn-error inline-block">LogOut</button>
               </div>
              )
              :(
                <div>
                    <Link href={"/signup"} className="btn">
            <Image src={person} width={20} height={20} alt='demo'/>Sign Up</Link>
                </div>
              )
             }
              </div>
            </div>           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
