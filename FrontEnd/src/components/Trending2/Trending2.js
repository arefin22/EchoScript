'use client'
import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Link from "next/link";
import Card from "../Card/Card";
const Trending2 = () => {
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
    <div className="text-black p-5 lg:pt-20 lg:pb-40 rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] z-1">
      <h2 className="lg:px-60 text-[20px] lg:py-5" data-aos="fade-up">
        Trending On EchoScript
      </h2>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 py-10 lg:px-60">
       {
        lastTofirst?.slice(0,6).map((trend,idx)=><Link key={idx}  href={`/article/${trend._id}`}> 
        
        <Card
        title= {trend?.texteditor?.articleTitle}
  image= {trend?.texteditor?.thumbnail}
  authorName={audience
    .filter((user) => user?.email === trend.texteditor?.authorEmail)
    .map((author) => author.name)}
  date={trend?.texteditor?.category}
        />
        </Link>
      )
       }
      </div>
    </div>
  );
};

export default Trending2;
