"use client";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { imageUpload } from "@/utils/imageUpload";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { MdOutlineCancel } from "react-icons/md";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import { axiosPublic } from "@/utils/useAxiosPublic";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { saveUser } from "@/utils/useSaveUser";

const SignUp = () => {
  const { createUser, handleUpdateProfile, user, loader } = useAuth();
  const [favourite, useFavourite] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const options = [
    { value: "Tech", label: "Tech" },
    { value: "Business", label: "Business" },
    { value: "sports", label: "sports" },
    { value: "Health", label: "Health" },
    { value: "Travels", label: "Travels" },
    { value: "Photograph", label: "Photograph" },
    { value: "Food", label: "Food" },
    { value: "Relationship", label: "Relationship" },
    { value: "Design", label: "Design" },
    { value: "Arts", label: "Arts" },
    { value: "Vehicles", label: "Vehicles" },
  ];
  const animatedComponents = makeAnimated();
  const handleFavourite = (selectedValues) => {
    useFavourite(selectedValues);
  };
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
  const handleSignUp = async (e) => {
    try {
      e.preventDefault();

      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const image = form.image.files[0];

      const name = form.name.value;
      if (password.length < 6) {
        toast.error("password must be at least 6 characters");
        return;
      }
      try {
        const photoURL = await imageUpload(image);
        console.log(email, password, name, photoURL);
        console.log(createUser);
        createUser(email, password).then((res) => {
          handleUpdateProfile(name, photoURL);
          router.push("/");
          console.log(res.user);
        });
        const userInfo = {
          email: email,
          name: name,
          photoURL: photoURL,
          role: "guest",
          favourite: favourite,
        };
        console.log(userInfo)
        await axiosPublic.post('/user',userInfo)
        toast.success('user login successfully')
        .then(res=>{console.log(res.data)});
       
        toast.success('user created successfully')
          
             console.log(result)
        const DBresponse = await saveUser(result?.user)
        console.log(DBresponse)
      } catch (err) {
        console.log(err);
        form.reset();
      }
    } catch (err) {
      console.log(err);
    }
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
        <div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center py-10">
              <h2 className="text-7xl font-extralight">Sign Up Now</h2>
              <p className="border-2 border-[#4C2F17] w-[200px] mt-4"></p>
            </div>
            <div className="w-full">
              <form onSubmit={handleSignUp}>
                <div className="space-y-6 my-6">
                  <div className="md:w-2/5 mx-auto">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full px-4 py-3 border-2 rounded-3xl border-[#ccc] text-black hover:border-[#4C2F17]"
                    />
                  </div>
                </div>
                <div className="space-y-6 my-6">
                  <div className="md:w-2/5 mx-auto">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border-2 rounded-3xl border-[#ccc] text-black hover:border-[#4C2F17]"
                    />
                  </div>
                </div>
                <div className="space-y-6 my-6">
                  <div className="md:w-2/5 mx-auto">
                    <input
                      type="file"
                      className="file-input file-input-ghost w-full border-2 rounded-3xl border-[#ccc] text-black hover:border-[#4C2F17]"
                    />
                  </div>
                </div>

                <div className="space-y-6 my-6">
                  <div className="md:w-2/5 mx-auto">
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isMulti
                      options={options}
                      value={favourite}
                      onChange={handleFavourite}
                      className="w-full text-black"
                      placeholder="Select Category"
                      styles={{
                        control: (provided, state) => ({
                          ...provided,
                          border: state.isFocused
                            ? "2px solid #4C2F17"
                            : "2px solid #ccc",
                          borderRadius: "24px",
                          padding: "7px",
                          boxShadow: "none",
                          "&:hover": {
                            borderColor: "#4C2F17",
                          },
                        })
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-6 my-6">
                  <div className="md:w-2/5 mx-auto relative ">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      className="w-full px-4 py-3 border-2 rounded-3xl border-[#ccc] text-black hover:border-[#4C2F17]"
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
                </div>
                <div className="md:w-1/4 mx-auto">
                  <button
                    disabled={loader}
                    className="w-full rounded-3xl py-3 border-2 border-[#4C2F17] text-[#4C2F17] md:text-lg transition-all duration-300 hover:bg-[#4C2F17] hover:text-white"
                  >
                    {loader ? (
                      <span className="loading loading-bars loading-lg"></span>
                    ) : (
                      <span>Sign Up</span>
                    )}
                  </button>
                </div>
              </form>

              <div>
                <SocialLogin />
              </div>
              <div className="text-center">
                <p className="pb-6">
                  Already have an account?{" "}
                  <Link href="/login" className="underline">
                    Log In Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
