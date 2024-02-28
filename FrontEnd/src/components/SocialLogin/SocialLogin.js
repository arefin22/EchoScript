"use client"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF,FaGithub } from "react-icons/fa";

import { useAuth } from "@/context/authContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaTwitter } from "react-icons/fa6";
import { axiosPublic } from "@/utils/useAxiosPublic";

const SocialLogin = () => {
  const {googleLogIn,facebookLogIn,githubLogIn,twitterLogIn} = useAuth();
  const router=useRouter()
  const iconStyle = {
    border: "2px solid black",
    // padding: "20px",
    cursor: "pointer",
  };
  const handleTwitterLogin = async () => {
    try {
      const res= await twitterLogIn(); 
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        image: res.user?.photoURL || '',
        role: "reader",
      };
      axiosPublic.post('/user',userInfo)
      .then(res=>{console.log(res.data)});
      toast.success('user login successfully')
      router.push("/dashboard");
     
      toast.success("User login successfully"); 
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleGitHub = async () => {
    try {
      const res = await githubLogIn();
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        image: res.user?.photoURL || '',
        role: "reader",
      };
      axiosPublic.post('/user',userInfo)
      .then(res=>{console.log(res.data)});
      toast.success('user login successfully')
      router.push("/dashboard");
     
      toast.success("User login successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleGoogle = async () => {
    try {
      const res = await googleLogIn();
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        image: res.user?.photoURL || '',
        role: "reader",
      };
      axiosPublic.post('/user',userInfo)
                .then(res=>{console.log(res.data)});
                toast.success('user login successfully')
      router.push("/dashboard");
      
      toast.success("User login successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleFacebook = async () => {
    try {
      const res = await facebookLogIn();
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        image: res.user?.photoURL || '',
        role: "reader",
      };
      axiosPublic.post('/user',userInfo)
                .then(res=>{console.log(res.data)});
                toast.success('user login successfully')
      router.push("/dashboard");
      console.log(userInfo);
      toast.success("User login successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full mx-auto flex items-center justify-center py-5">
      <div className="grid grid-cols-2 md:grid-cols-4 border-gray-300 gap-5 text-center">
        <div style={iconStyle} className="hover:bg-gray-200 w-full mr-10 mt-5 rounded-full py-4">
          <button onClick={handleGoogle}>
            <FcGoogle size={24} className="text-black text-center" />
          </button>
        </div>
        <div style={iconStyle} className="hover:bg-gray-200 w-full mr-10 mt-5 rounded-full py-4">
          <button onClick={handleFacebook}>
            <FaFacebookF size={24} className="text-black text-center" />
          </button>
        </div>
        <div style={iconStyle} className="hover:bg-gray-200 w-full mr-10 mt-5 rounded-full py-4">
          {/* <FaXTwitter size={24} className="text-black" /> */}
          <button onClick={handleTwitterLogin}>
            <FaTwitter size={24} className="text-black text-center" />
          </button>
        </div>
        <div style={iconStyle} className="hover:bg-gray-200 w-full mt-5 rounded-full py-4">
          {/* <FaXTwitter size={24} className="text-black" /> */}
          <button onClick={handleGitHub}>
            <FaGithub size={24} className="text-black text-center" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
