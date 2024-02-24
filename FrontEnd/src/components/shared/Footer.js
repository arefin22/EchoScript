import { FaGithub, FaGlobe, FaGlobeAfrica, FaGlobeAsia } from "react-icons/fa";

const Footer = () => {
  // const navItem = [
  //   {
  //     route: "Home",
  //     pathName: "/",
  //   },

  //   {
  //     route: "About Us",
  //     pathName: "/about",
  //   },

  //   {
  //     route: "All Article",
  //     pathName: "/article",
  //   },
  // ];


//   EchoScript
// Links
// Additional Links
// An International Project by Team ByteBlazers. 
// Home
// 
// Payment
// About Us
// Dashboard
// Services
// Privacy Policy
//   @Right to - ByteBlazers Team | 2024
  
  return (

    <>
      <footer className="footer p-10 text-white py-40" data-aos="fade-up">
        <nav className="space-y-3">
          <h3 className="">EchoScript</h3>
          <div className="pl-3 space-y-3">
            <p className="text-lg w-2/3">
              An International Project by Team ByteBlazers.{" "}
            </p>
            <div className="flex gap-5 text-xl">
              <FaGithub /> <FaGlobeAsia />
            </div>
          </div>
        </nav>
        <nav className="space-y-3">
          <h3 className="">Links</h3>
          <div className="pl-3 flex flex-col space-y-3">
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Payment</a>
            <a className="link link-hover">Dashboard</a>
          </div>
        </nav>
        <nav className="space-y-3">
          <h3 className="">Additional Links</h3>
          <div className="pl-3 flex flex-col space-y-3">
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Services</a>
            <a className="link link-hover">Privacy Policy</a>
          </div>
        </nav>
      </footer>
      <div className="border-t text-white py-10">
        <p className="text-center">@Right to - ByteBlazers Team | 2024</p>
      </div>
    </>
  );
};

export default Footer;
