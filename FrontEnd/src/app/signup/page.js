"use client";

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { imageUpload } from "@/utils/imageUpload";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { MdOutlineCancel } from "react-icons/md";
import SocialLogin from "@/components/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, handleUpdateProfile,user ,loader } = useAuth();
  const [favourite,useFavourite]=useState([]);
  const router = useRouter();
  const options = [
    { value: 'Tech', label: 'Tech' },
    { value: 'Business', label: 'Business' },
    { value: 'sports', label: 'sports' },
    {value:'Health',label:'Health'},
    { value:'Travels',label:'Travels'},
    {value:'Photograph',label:'Photograph'},
    {value:'Food',label:'Food'},
    {value:'Relationship',label:'Relationship'},
    {value:'Design',label:'Design'},
    {value:'Arts',label:'Arts'},
    {value:'Vehicles',label:'Vehicles'},
  ];
  const animatedComponents = makeAnimated();
  const handleFavourite =(selectedValues)=>{
      useFavourite(selectedValues)
  }
  useEffect(() => {
    if (!loader && user) {
      router.replace('/dashboard'); // Redirect to dashboard if user is already logged in
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
          image: photoURL,
          role: "guest",
          recommandation:favourite,
        };
        console.log(userInfo);
      } catch (err) {
        console.log(err);
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
                   <input type="text" name="name"
                  
                      placeholder="Name"
                         className="w-full px-4 py-3 border-2 rounded-3xl border-[#4C2F17] text-black" />

                  </div>
                </div>
                <div className="space-y-6 my-6">
                  <div className="md:w-2/5 mx-auto">
                   <input type="email" name="email"
                  
                      placeholder="Email"
                         className="w-full px-4 py-3 border-2 rounded-3xl border-[#4C2F17] text-black" />

                  </div>
                </div>
                <div className="space-y-6 my-6">
                  <div className="md:w-2/5 mx-auto">
                   <input type="file" name="image"
                  
                      placeholder="Image"
                         className="w-full px-4 py-3 border-2 rounded-3xl border-[#4C2F17] text-black" />

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
        className="w-full px-4 py-3 border-2 rounded-3xl border-[#4C2F17] text-black"
    />

                  </div>
                </div>
                <div className="space-y-6 my-6">
                  <div className="md:w-2/5 mx-auto">
                   <input type="password" name="password"
                  
                      placeholder="Password"
                         className="w-full px-4 py-3 border-2 rounded-3xl border-[#4C2F17] text-black" />

                  </div>
                </div>
                <div className="md:w-1/4 mx-auto">
      <button
        type="submit"
        className="w-full rounded-3xl py-3 border-2 border-[#4C2F17] text-[#4C2F17] md:text-lg transition-all duration-300 hover:bg-[#4C2F17] hover:text-white"
      >
        Sign Up
      </button>
      </div>
               </form>

               <div>
                <SocialLogin/>
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


          </div >      
      </div>
    </div>
   </div>
  );
};

export default SignUp;
