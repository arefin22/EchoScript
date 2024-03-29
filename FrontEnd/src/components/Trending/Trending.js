'use client'
import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Link from "next/link";
const Trending = () => {
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [audience, setAudience] = useState([]);
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
  const lastTofirst = data.slice().reverse();
  return (
    <div className="bg-white text-black p-5 lg:pt-20 lg:pb-40 rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] z-1">
      <h2 className="lg:px-20 lg:py-5" data-aos="fade-up">
        Trending On <span className="underline">EchoScript</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-10 lg:px-40">
       {
        lastTofirst.slice(0,6).map((trend,idx)=> <div key={idx}
        className="w-full flex flex-col-2 gap-5 border-b-2 py-20"
        data-aos="fade-up"
      >
        <h2 className="text-gray-400">{idx+1}</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 mt-[-30px]">
            <FaCircle />
            <p>{audience
                .filter((user) => user?.email === trend.texteditor?.authorEmail)
                .map((author) => author.name)}</p>
          </div>
          <Link  href={`/article/${trend._id}`}>
            <h5 className="font-bold">
            {trend?.texteditor?.articleTitle}
            </h5>
              </Link>
          <small> {trend?.texteditor?.category}</small>
        </div>
      </div>)
       }

       
        

       
      </div>
    </div>
  );
};

export default Trending;
