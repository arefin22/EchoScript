"use client";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useAuth } from "@/context/authContext";
import Title from "../shared/ReusableComponents/Title";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
const page=({authorEmail,Id}) => {
  const axiosSecure = useAxiosSecure();
  const [audience, setAudience] = useState([]);
  const [data, setData] = useState([]);
  const {user} = useAuth()
  const authoremail=authorEmail
  const postId =Id
  // console.log(postId);
// const category =authorcat.authorCategory
// const recommend= [`${category}`]
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
  const datas = data?.map((dataa)=>dataa)
  const other = datas.filter((myEmail)=>myEmail.texteditor.authorEmail ===authoremail)
  const  filterId= other.filter((fil)=> fil._id !==postId)
//   const fav = filterId.filter((art) => recommend.includes(art.texteditor.category))
  const ranDom = filterId.sort(() => Math.random() - 0.5);
  return (
    <div>
       {
        ranDom.length >0 && <div className=" p-5 lg:pt-20 lg:pb-10 rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] z-1">
        <h2 className="lg:px-60 text-[20px] lg:py-5" data-aos="fade-up">
         More Post from {audience
      .filter((user) => user?.email ===authoremail)
      .map((author) => author.name)}
        </h2>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 py-10 lg:px-60">
         {
          ranDom?.slice(0,6).map((trend,idx)=><Link key={idx}  href={`/article/${trend._id}`}> 
          
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
       }
    
    </div>

       
     
  );
};

export default page;
