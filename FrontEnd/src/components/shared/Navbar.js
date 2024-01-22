import React from 'react';
import Theme from './Theme';
import logo from './../../assets/img/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const navItem = [
    {
    route: "Home",
    pathName: "/"
    },
    
    {
    route: "About Us",
    pathName: "/about"
    },
    
    {
    route: "All Article",
    pathName: "/article"
    },
  ]
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItem.map((item, idx) => (
                  <Link key={idx} href={item.pathName}>
                    <li className="mr-5">{item.route}</li>
                  </Link>
                ))}
                <li>
                  <Theme />
                </li>
              </ul>
            </div>
            <Link href={"/"}>
              <Image src={logo} alt="Logo" className="w-48" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 items-center">
              {navItem.map((item, idx) => (
                <Link key={idx} href={item.pathName}>
                  <li className="mr-5">{item.route}</li>
                </Link>
              ))}
              <li>
                <Theme />
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Login</a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;