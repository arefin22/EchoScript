"use client";

import { axiosSecure } from "@/utils/useAxiosSecure";
import Link from "next/link";
import { useEffect, useState } from "react";

const Popular = () => {
  const [thumbnails, setThumbnails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get("/textArticle").then((res) => {
      
      const sortedData = res.data.sort(
        (a, b) => b.likes.length - a.likes.length
      );
// console.log(sortedData);
      const thumbnails = sortedData.slice(0, 4).map((item) => ({
        thumbnail: item.texteditor?.thumbnail,
        postId: item._id,

      }));


      setThumbnails(thumbnails);
      setLoading(false);
    });
  }, [axiosSecure]);

  // console.log(data.map((d) => console.log(d.texteditor?.thumbnail)));
  // console.log(thumbnails);

  return (
    <div className="bg-white z-1">
      {thumbnails.map((thumbnail, index) => (
        <div key={index} className="sticky top-0 lg:mt-[-100px]">
          <Link href={`/article/${thumbnail.postId}`}>
            <div
              className="w-full h-screen rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] lg:rounded-bl-[100px] lg:rounded-br-[100px]"
              style={{
                backgroundImage: `url(${thumbnail.thumbnail})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </Link>
        </div>
      ))}

      {/* <div className="sticky top-0 lg:mt-[-100px]">
          <div
            className="w-full h-screen rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px]"
            style={{
              backgroundImage: "url(https://i.ibb.co/rsGgD7b/banner.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div> */}
    </div>
  );
};

export default Popular;
