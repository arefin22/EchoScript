"use client";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
const Banner = () => {
  return (
   <div className="max-w-7xl min-h-screen mx-auto bg-[#A0AECD] flex justify-evenly items-center">
   <div className="flex flex-row items-center justify-center gap-8">
   <div className="">
     <h1 className="text-8xl font-bold">Tell Stories.</h1>
     <p className="mt-4 text-2xl">
       Publish, Grow and manage your written <br></br> stories all in one
       place
     </p>
  {/* Todo:   Button from componrnts */}
     <h1 className="btn  border rounded-lg p-2 w-40 text-center mt-2">
       Explore More
     </h1>
   </div>
   <div className="">
     {/* player from lottie player */}
     <Player
       autoplay
       loop
       src="https://lottie.host/0691843e-fabe-4711-87ce-ae863b6ee983/zxFxYeAWxQ.json"
       style={{ height: "300px", width: "300px" }}
     >
       <Controls
         visible={false}
         buttons={["play", "repeat", "frame", "debug"]}
       />
     </Player>
   </div>
 </div>
   </div>
  );
};

export default Banner;
