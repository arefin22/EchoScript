"use client";
import DeleteButton from "@/components/shared/DeleteButton/DeleteButton";
import Loader from "@/components/shared/Loader/Loader";
import Title from "@/components/shared/ReusableComponents/Title";
import UserUpdate from "@/components/shared/UserUpdate/UserUpdate";


import useAxiosPublic from "@/utils/useAxiosPublic";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [usersData, setUsersData] = useState([]);
  const [update, setUpdate] = useState(Date.now());
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersResponse = await axiosPublic.get("/user");

        setUsersData(usersResponse.data);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUsers();
    return () => {
      // Any cleanup code if needed
    };
  }, [axiosPublic]);
  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Title title={`${error.message}`} />
      </div>
    );
  }
  return (
    <div className=" mx-auto">
      <div className="flex flex-col  w-full">
        <div className="grid  card   rounded-box ">
          <div className="mx-auto">
            {usersData?.length === 0 && <div>No Users found.</div>}
            {usersData.length > 0 && (
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersData?.reverse().map((user) => (
                      <tr key={user.id}>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={user.photoURL} alt="bookmark" />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        {/* <td></td>
                                        <td>
                                       
                                        </td> */}
                        <td className="flex justify-center items-center">
                          <button className="btn btn-sm btn-primary mr-2">
                            <UserUpdate id={user._id} setUpdate={setUpdate} />
                          </button>
                          <button className="btn btn-sm btn-error">
                            <DeleteButton
                              api={"user"}
                              id={user._id}
                              setUpdate={setUpdate}
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
