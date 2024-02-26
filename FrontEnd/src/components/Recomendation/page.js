"use client";
import { useEffect, useState } from "react";
import Article from "../Article/Article";
import Card from "../Card/Card";
import { useAuth } from "@/context/authContext";
import Title from "../shared/ReusableComponents/Title";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { FaCircle } from "react-icons/fa";
const Recomendation = () => {
  const axiosSecure = useAxiosSecure();
  const [audience, setAudience] = useState([]);
  const [data, setData] = useState([]);
  const author = useAuth();
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
  console.log(audience);
  console.log(author);
  console.log(author.email);
  const users = audience.filter(
    (userss) => userss.email === "shawal@gmail.com"
  );
  console.log(users);
  const userFav = users.map((fav) => fav.favourite.map((favo) => favo.value));
  console.log(userFav[0]);
  const datas = data.map((dataa) => dataa.texteditor);
  console.log(datas);
  const fav = datas.filter((art) => userFav[0].includes(art.category));
  console.log(fav);
  const ranDom = fav.sort(() => Math.random() - 0.5);
  return (
    <div>
      <div className="bg-white p-5 lg:pt-20 lg:pb-40 rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] z-1">
        <h2 className="lg:px-20 lg:py-5" data-aos="fade-up">
          Recommendation <span className="underline">For you</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 lg:px-40">
          {ranDom.slice(1, 4).map((art, idx) => (
            // <div
            //   key={idx}
            //   className="grid grid-cols-1 lg:grid-cols-2 py-10 lg:px-40"
            // >
            //   <div
            //     className="w-full flex flex-col-2 gap-5 border-b-2 py-20"
            //     data-aos="fade-up"
            //   >
            //     <h2 className="text-gray-400"></h2>
            //     <div className="space-y-3">
            //       <div className="flex items-center gap-3 mt-[-30px]">
            //         <FaCircle />
            //         <p>{art.authorEmail}</p>
            //       </div>
            //       <h5 className="font-bold">{art.articleTitle}</h5>
            //       <small>{art.category}</small>
            //     </div>
            //   </div>
            // </div>
            <div
              className="w-full flex flex-col-2 gap-5 border-b-2 py-20"
              data-aos="fade-up"
            >
              <h2 className="text-gray-400">01</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 mt-[-30px]">
                  <FaCircle />
                  <p>Author</p>
                </div>
                <h5 className="font-bold">
                  Lorem Ipsum is simply dummy text of the printing
                </h5>
                <small>5 Feb</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recomendation;
