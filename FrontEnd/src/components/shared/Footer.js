import Link from "next/link";
import { FaGithub, FaGlobe, FaGlobeAfrica, FaGlobeAsia } from "react-icons/fa";

const Footer = () => {
 
  
  return (
    <div className="bg-black text-white ">
      <footer className="footerFirst flex flex-col md:flex-row space-y-5 md:space-y-0 w-full mx-auto justify-around p-10 py-40">
        <div className="space-y-3 md:w-[40%]">
          <h3 className="">EchoScript</h3>
          <div className="pl-3 space-y-3">
            <p className="text-lg w-2/3">
              An International Project by Team ByteBlazers.{" "}
            </p>
            <div className="flex gap-5 text-xl">
              <FaGithub /> <FaGlobeAsia />
            </div>
          </div>
        </div>
        <div className="space-y-3 md:w-[30%]">
          <h3 className="">Links</h3>
          <div className="pl-3 flex flex-col space-y-3">
            <Link href={'/'} className="link link-hover">Home</Link>
            <Link href={''} className="link link-hover">Payment</Link>
            <Link href={'/dashboard'} className="link link-hover">Dashboard</Link>
          </div>
        </div>
        <div className="space-y-3 md:w-[30%]">
          <h3 className="">Additional Links</h3>
          <div className="pl-3 flex flex-col space-y-3">
            <Link href={'/contact'} className="link link-hover">Contact Us</Link>
            <Link href={'/about'} className="link link-hover">About Us</Link>
            <Link href={'/articles'} className="link link-hover">Services</Link>
            <Link href={'/'} className="link link-hover">Privacy Policy</Link>
          </div>
        </div>
      </footer>
      <div className="border-t text-white py-10">
        <p className="text-center">@Right to - ByteBlazers Team | 2024</p>
      </div>
    </div>
  );
};

export default Footer;
