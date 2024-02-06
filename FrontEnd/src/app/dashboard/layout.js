import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import DashNavbar from "./DashNavbar/page";


const dashbordlayout = ({ children }) => {
  return (
    <PrivateRoute>
      <div className="flex flex-col md:flex-row ">
        <DashNavbar />
        <div className="p-8 w-full">{children}</div>
      </div>
    </PrivateRoute>
  );
};

export default dashbordlayout;
