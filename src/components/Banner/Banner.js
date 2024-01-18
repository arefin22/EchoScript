'use client'
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import ButtonWithBgColor from "../Button/ButtonWithBgColor";
const Banner = () => {
  return (
   <div className="max-w-full min-h-screen mx-auto bg-[#A0AECD] flex justify-evenly items-center">
   <div className="flex flex-row items-center justify-center gap-8 max-w-7xl">
   <div className="">
     <h1 className="text-8xl font-bold">Tell Stories...</h1>
     <p className="mt-4 text-xl mb-4">
       Publish, Grow and manage your written <br></br> stories all in one
       place
     </p>
  {/* Todo:   Button from components */}
  <ButtonWithBgColor name={"Exolore More"} />
     {/* <h1 className="btn  border rounded-lg p-2 w-40 text-center mt-2">
       Explore More
     </h1> */}
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
