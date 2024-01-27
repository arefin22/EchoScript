"use client";
import React from "react";

// import { LuLogIn } from "react-icons/lu";

import Link from "next/link";
// import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { useAuth } from "@/context/authContext";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ButtonWithoutBgColor from "@/components/Button/ButtonWithoutBgColor";
import ButtonWithBgColor from "@/components/Button/ButtonWithBgColor";

const LogIn = () => {
  const { googleLogIn, logIn } = useAuth();
  const router = useRouter();

  const handleGoogle = () => {
    try {
      googleLogIn().then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
          image: res.user?.photoURL,
          role: "guest",
        };
        // router.push("/");
        console.log(res.user);
      });

      console.log(userInfo);

      toast.success("User login successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handlelogin = (e) => {
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
          image: res.user?.photoURL,
          role: "guest",
        };
        router.push("/");
        console.log(userInfo);
        toast.success("User login successfully");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="hero min-h-screen p-2 m-2 bg-base-200">
      <div className="hero-content  ">
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative  grid  overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-[#025] to-[#025] bg-clip-border shadow-[#025]/40">
              <h3 className="block  font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                Log In
              </h3>
            </div>
            <form onSubmit={handlelogin}>
              <div className="flex flex-col gap-4 p-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="email"
                    name="email"
                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#025] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#025] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#025] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="password"
                    name="password"
                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#025] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#025] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#025] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Password
                  </label>
                </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  className=" w-full flex justify-center items-center select-none rounded-lg bg-gradient-to-tr from-[#025] to-[#025] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                  data-ripple-light="true"
                >
                  {/* <LuLogIn className="text-2xl" /> */}
                  Log In
                </button>
              </div>
            </form>
            <div className="w-5/6 mx-auto">
              <button
                onClick={handleGoogle}
                className="btn btn-outline btn-block btn-info border-[#025]"
              >
                {/* LOG IN WITH  // <FcGoogle className="text-2xl" /> */}
                GOOGLE
              </button>
            </div>
            <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
              Dont have an account?
              <Link className=" font-semibold text-green-400" href={"/signup"}>
                {" "}
                Sign Up
              </Link>
            </p>
            <div className="w-full mx-auto text-center m-4">
              <Link href="/">
                {/* <ButtonWithoutBgColor name="Back Home"></ButtonWithoutBgColor> */}
                <ButtonWithBgColor name="Back to Home" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
