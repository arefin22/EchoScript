import Image from "next/image";

const page = () => {
  return (
    <div className="ml-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>images</th>
              <th>Author Name</th>
              <th>Title</th>
              <th>Like</th>
              <th>Comment</th>
              <th>share</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>1</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src="https://i.ibb.co/1dWtPt3/download.jpg"
                        alt="Avatar Tailwind CSS Component"
                        width="500"
                        height="500"
                      ></Image>
                      {/* <img
                        src="https://i.ibb.co/1dWtPt3/download.jpg"
                        alt="Avatar Tailwind CSS Component"
                      /> */}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <p className="font-bold">Shawal</p>
              </td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>20k</td>
              <td>1000</td>
              <td>10</td>
              <th>
                <button className="btn ">Details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
