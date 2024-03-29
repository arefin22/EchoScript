"use client";
import { FaUser } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";
import { FaPenFancy } from "react-icons/fa";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   ResponsiveContainer,
//   Legend,
//   LabelList,
//   Tooltip,
// } from "recharts";

import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const page = () => {
  const [stats, setStats] = useState({});
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/stats").then((data) => {
      setStats(data?.data);
    });
  }, []);

  const data = [
    {
      name: "Users",
      users: parseInt(stats?.users),
    },
    {
      name: "Articles",
      articles: parseInt(stats?.article),
    },
    {
      name: "writer",
      writer: parseInt(stats?.writerLength),
    },
  ];

  return (
    <div className="">
      <div className="flex justify-center items-center mb-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5">
          <div className="lg:w-72 md:w-72 w-64 h-32 bg-gray-200 rounded-xl pl-3">
            <div>
              <h1>Total Users</h1>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <FaUser className="w-14 h-12" color="" />
              </div>
              <div className="text-4xl mt-5 font-semibold">{stats?.users}</div>
            </div>
          </div>
          <div className="lg:w-72 md:w-72 w-64 h-32 bg-gray-200 rounded-xl pl-3">
            <div>
              <h1>Total Article</h1>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <MdOutlineArticle className="w-14 h-12" color="" />
              </div>
              <div className="text-4xl mt-5 font-semibold">
                {stats?.article}
              </div>
            </div>
          </div>
          <div className="lg:w-72 md:w-72 w-64 h-32 bg-gray-200 rounded-xl pl-3">
            <div>
              <h1>Total Writer</h1>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <FaPenFancy fontSize="3rem" color="" />
              </div>
              <div className="text-4xl mt-5 font-semibold">
                {stats?.writerLength}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] mx-auto text-center" style={{ height: "300px" }}>
        {/* <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="#8884d8">
              <LabelList dataKey="users" position="center" stroke="white" />
            </Bar>
            <Bar dataKey="articles" fill="#82ca9d">
              <LabelList dataKey="articles" position="center" stroke="white" />
            </Bar>
            <Bar dataKey="writer" fill="#0088FE">
              <LabelList dataKey="writer" position="center" stroke="white" />
            </Bar>
          </BarChart>
        </ResponsiveContainer> */}
        <div></div>
      </div>
    </div>
  );
};

export default page;
