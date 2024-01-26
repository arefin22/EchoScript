import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLogin = () => {
  const iconStyle = {
    borderRadius: "50%",
    border: "2px solid black",
    padding: "16px",
    cursor: "pointer",
  };

  return (
    <div>
      <div className="flex justify-center items-center space-x-12 m-4 p-3 border-gray-300 rounded">
        <div style={iconStyle} className="hover:bg-gray-200">
          <FcGoogle size={24} className="text-black" />
        </div>
        <div style={iconStyle} className="hover:bg-gray-200">
          <FaFacebookF size={24} className="text-black" />
        </div>
        <div style={iconStyle} className="hover:bg-gray-200">
          <FaXTwitter size={24} className="text-black" />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
