"use client";
import DeleteButton from "@/components/shared/DeleteButton/DeleteButton";
import Loader from "@/components/shared/Loader/Loader";
import Pagination from "@/components/shared/Pagination/Pagination";
import Title from "@/components/shared/ReusableComponents/Title";
import UserUpdate from "@/components/shared/UserUpdate/UserUpdate";


import useAxiosPublic from "@/utils/useAxiosPublic";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [update, setUpdate] = useState(Date.now());
  const [allUsersData, setAllUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersResponse = await axiosPublic.get("/user");
        const usersCount = usersResponse.data.length;
        const totalPagesCount = Math.ceil(usersCount / itemsPerPage);
        setTotalPages(totalPagesCount);

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, usersCount);
        const usersData = usersResponse.data.slice(startIndex, endIndex);

        setAllUsersData(usersData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [axiosPublic, currentPage]);
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
          {allUsersData?.length === 0 && <div>No Users found.</div>}
          {allUsersData?.length > 0 && (
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Membership</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="min-h-[70vh]">
                    {allUsersData?.map((user) => (
                      <tr key={user._id}>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={user.photoURL} alt="user" />
                                
                              </div>
                            </div>
                            <div>
                              <p>{user.name}</p>
                              
                            </div>
                          </div>
                        </td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td> {user.membership}</td>
                        
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
             <div className="mt-2 flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;
