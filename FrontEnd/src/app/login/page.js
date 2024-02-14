"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/authContext";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import SocialLogin from "@/components/SocialLogin/SocialLogin";

import { MdOutlineCancel } from "react-icons/md";
import { axiosPublic } from "@/utils/useAxiosPublic";

import { FaEye, FaEyeSlash } from "react-icons/fa6";


const LogIn = () => {
  const { logIn, loader, user } = useAuth();
  const router = useRouter();
  
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!loader && user) {
      router.replace("/dashboard"); // Redirect to dashboard if user is already logged in
    }
  }, [user, loader, router]);

  const cencleStyle = {
    borderRadius: "50%",
    padding: "16px",
    cursor: "pointer",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    logIn(email, password)
      .then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
          image: res.user?.photoURL || '',
          role: "guest",
        };
        axiosPublic.post("/user", userInfo).then((res) => {
          console.log(res.data);
        });
        toast.success("User login successfully");
        router.push("/dashboard");
      })
      .catch((err) => {
        toast.error('user or password invaild');
        form.reset();

      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <div>
        <div className="flex justify-end">
          <div style={cencleStyle} className="hover:bg-gray-200">
            <Link href={"/"}>
              <MdOutlineCancel size={30} className="text-black" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center mb-7 gap-7">
          <h2 className="text-7xl font-extralight">Log In Now</h2>
          <p className="border-2 border-[#4C2F17] w-[200px] "></p>
        </div>

        <div className="w-full">
          <form
            onSubmit={handleLogin}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-6">
              <div className="md:w-2/5 mx-auto">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 border-2 rounded-3xl border-[#4C2F17] text-black hover:border-[#ccc]"
                />
              </div>
              <div className="md:w-2/5 mx-auto relative ">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  className="w-full px-4 py-3 border-2 rounded-3xl border-[#4C2F17] text-black hover:border-[#ccc]"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-sm mt-1 mr-3 text-gray-600 hover:underline focus:outline-none"
                >
                  {showPassword ? (
                    <FaEyeSlash className="mb-2 mr-2 h-6 w-6" />
                  ) : (
                    <FaEye className="mb-2 mr-2 h-6 w-6" />
                  )}
                </button>
              </div>
              <div className="md:w-1/4 mx-auto">
                <button
                  disabled={loader}
                  type="submit"
                  className="w-full rounded-3xl py-3 border-2 border-[#4C2F17] text-[#4C2F17] md:text-lg transition-all duration-300 hover:bg-[#4C2F17] hover:text-white"
                >
                  {loader ? (
                    <span className="loading loading-bars loading-lg"></span>
                  ) : (
                    <span>Sign In</span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>

        <SocialLogin />
        <div className="text-center">
          <p className="pb-6">
            To have the full facility of EchoScript,
            <Link href="/signup" className="underline">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

