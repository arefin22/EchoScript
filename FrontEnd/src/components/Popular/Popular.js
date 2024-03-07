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
      const thumbnails = sortedData?.slice(0, 4).map((item) => ({
        thumbnail: item.texteditor,
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
      <h2 className="lg:px-20 lg:py-5" data-aos="fade-up">
        Popular Posts
      </h2>
      {thumbnails?.map((thumbnail, index) => (
        <div key={index} className="sticky top-0 lg:mt-[-100px]">
          <Link href={`/article/${thumbnail?.thumbnail?.postId}`}>
            <div
              className="w-full h-screen rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px]"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5494572829131652) 100%), url(${thumbnail?.thumbnail?.thumbnail})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="lg:pt-72 pt-24 pl-3 lg:w-1/2 w-2/3 grid grid-rows-1 lg:gap-10 gap-10">
                <div>
                  <p className="text-white font-medium lg:text-xl text-base">
                    {thumbnail?.thumbnail?.category}
                  </p>
                </div>
                <h3 className="text-white font-medium text-2xl lg:text-5xl">
                  {thumbnail?.thumbnail?.articleTitle}
                </h3>

                <Link
                  href={`/article/${thumbnail?.thumbnail?.postId}`}
                  className="text-white"
                >
                  {" "}
                  See Details{" "}
                </Link>
              </div>
            </div>
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
