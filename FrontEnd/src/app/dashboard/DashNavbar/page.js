"use client";
import { usePathname } from "next/navigation";
import logo from "./../../../assets/img/logo.png";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  const pathname = usePathname();
  const navs = [
    {
      path: "/dashboard",
      route: "Overview",
    },
    {
      path: "/dashboard/articles",
      route: "Articles",
    },
    {
      path: "/dashboard/write",
      route: "Write",
    },
    {
      path: "/",
      route: "Home",
    },
  ];
  const navItem = [
    {
      path: "/dashboard/profile",
      route: "My Profile",
    },
    {
      path: "/setting",
      route: "Setting",
    },
  ];
  return (
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
              className={`${
                pathname === `${nav.path}`
                  ? "border border-black w-40 rounded-xl px-4 py-1"
                  : ""
              }`}
              href={nav.path}
            >
              {nav.route}
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
            >
              {nav.route}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
