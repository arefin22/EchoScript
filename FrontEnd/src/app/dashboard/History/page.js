"use client";
import DeleteButton from "@/components/shared/DeleteButton/DeleteButton";
import Loader from "@/components/shared/Loader/Loader";
import Title from "@/components/shared/ReusableComponents/Title";
import { useAuth } from "@/context/authContext";
import useAxiosPublic from "@/utils/useAxiosPublic";
import Image from "next/image";
import { useEffect, useState } from "react";

const HistoryPage = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const historyResponse = await axiosPublic.get("/history");
        const userHistory = historyResponse.data.filter(
          (history) => history.user === user.email
        );
        setHistoryData(userHistory);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchHistory();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, [axiosPublic, user]);

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
              <tbody>
                {historyData?.reverse().map((history) => (
                  <tr key={history.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={history.userAvatar} alt="History" />
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
      </div>
    </div>
  );
};

export default HistoryPage;
