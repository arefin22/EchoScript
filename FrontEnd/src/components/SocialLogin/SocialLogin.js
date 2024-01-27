"use client"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useAuth } from "@/context/authContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SocialLogin = () => {
  const {googleLogIn} = useAuth();
  const router=useRouter()
  const iconStyle = {
    borderRadius: "50%",
    border: "2px solid black",
    padding: "20px",
    cursor: "pointer",
  };
  const handleGoogle = () => {
    try {
      googleLogIn().then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
          image: res.user?.photoURL,
          role: "guest",
        };
        router.push("/");
        console.log(res.user);
      });

      console.log(userInfo);

      toast.success("User login successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center space-x-12 m-4 p-3 border-gray-300 rounded">
        <div style={iconStyle} className="hover:bg-gray-200">
          <button onClick={handleGoogle}>
          <FcGoogle size={24} className="text-black text-center" />
          </button>
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
