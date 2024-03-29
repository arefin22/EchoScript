"use client";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useAuth } from "@/context/authContext";
import Title from "../shared/ReusableComponents/Title";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { FaCircle } from "react-icons/fa";

import Link from "next/link";
import Trending from "../Trending/Trending";
const Recomendation=() => {
  const axiosSecure = useAxiosSecure();
  const [audience, setAudience] = useState([]);
  const [data, setData] = useState([]);
  const {user} = useAuth()
  // const favCat=['Tech', 'Sports']
  useEffect(() => {
    axiosSecure.get("/user").then((res) => {
      setAudience(res.data);
    });
  }, [axiosSecure]);
  useEffect(() => {
    axiosSecure.get("/textArticle").then((res) => {
      setData(res.data);
    });
  }, [axiosSecure]);
  
  const users = audience?.filter((userss)=>userss?.email===user?.email);
  const userFav =users?.map((fav)=>fav?.favourite?.map((favo)=>favo?.value))
  const datas = data?.map((dataa)=>dataa)
  const other = datas?.filter((myEmail)=>myEmail?.texteditor?.authorEmail !==user?.email)
  const fav = other?.filter((art) => userFav[0]?.includes(art.texteditor.category))
  const ran = fav?.map((f)=>f.texteditor)
  const ranDom = fav?.sort(() => Math.random() - 0.5);

  return (
    <div>
       {
        ranDom.length > 0 ? <div className="bg-white p-5 lg:pt-20 lg:pb-40 rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] z-1">
        <h2 className="lg:px-20 lg:py-5" data-aos="fade-up">
          Recommendation <span className="underline">For you</span>
        </h2>
        
      
        <div  className="grid grid-cols-1 lg:grid-cols-2 py-10 lg:px-40"> 
        { ranDom?.slice(1, 6).map((art,idx) => (
         <div key={idx}
           className="w-full flex flex-col-2 gap-5 border-b-2 py-20"
           data-aos="fade-up"
         >
           <h2 className="text-gray-400">{idx+1}</h2>
           <div className="space-y-3">
             <div className="flex items-center gap-3 mt-[-30px]">
               <FaCircle />
               <p>{audience
                  .filter((user) => user?.email === art.texteditor?.authorEmail)
                  .map((author) => author.name)}</p>
             </div>
             
              <Link key={idx} href={`/article/${art._id}`}>
              <h5 className="font-bold">
                {art.texteditor?.articleTitle}
              </h5>
                </Link>
             <small>{art.texteditor?.category}</small>
           </div>
         </div>       
       
        ))}
       </div>
        </div> : <Trending />
       }
    </div>

  );
};

export default Recomendation;
