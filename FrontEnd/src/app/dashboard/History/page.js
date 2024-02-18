"use client";

import DeleteButton from "@/components/shared/DeleteButton/DeleteButton";
import Loader from "@/components/shared/Loader/Loader";
import Pagination from "@/components/shared/Pagination/Pagination";
import Title from "@/components/shared/ReusableComponents/Title";
import { useAuth } from "@/context/authContext";
import useAxiosPublic from "@/utils/useAxiosPublic";
import Image from "next/image";
import { useEffect, useState } from "react";

const HistoryPage = () => {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;
  const axiosPublic = useAxiosPublic();
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const historyResponse = await axiosPublic.get("/history");
        
        const historyCount = historyResponse.data.length;
        const totalPagesCount = Math.ceil(historyCount / itemsPerPage);
        setTotalPages(totalPagesCount);

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, historyCount);
        const userHistory = historyResponse.data.filter(
          (history) => history.user === user.email
          );
          console.log(userHistory)
          const historyData = userHistory.slice(startIndex, endIndex);
        setHistoryData(historyData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHistory();

    
    return () => {
      
    };
  }, [axiosPublic, user, currentPage]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div>
        <Title title={`${error.message}`} />
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mx-auto">
        <h1 className="text-[20px]">
          History of{" "}
          <span className="text-[20px] text-green-500">{user.displayName}</span>{" "}
        </h1>
      </div>
      <div></div>

      <div className="w-full mx-auto mt-9">
        {historyData.length === 0 && (
          <div>
            <Title title={"No history has been added"} />
          </div>
        )}
        {historyData.length > 0 && (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>History</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="min-h-[70vh]">
                {historyData?.reverse().map((history) => (
                  <tr key={history.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <Image
                              src={history?.userAvatar}
                              alt="History"
                              width={200}
                              height={200}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{history.userName}</div>
                        </div>
                      </div>
                    </td>
                    <td>{history.title}</td>
                    <td>{history.date}</td>
                    <td>
                      <DeleteButton
                        className="btn btn-ghost btn-xs"
                        api={"/history"}
                        id={history.id}
                      />
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
  );
};

export default HistoryPage;
