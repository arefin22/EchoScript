import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import DashNavbar from "./DashNavbar/page";


const dashboardLayout = ({ children }) => {
  
  return (
    <PrivateRoute>
      <div className="flex flex-col md:flex-row bg-white text-black gap-20 rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] lg:rounded-bl-[100px] lg:rounded-br-[100px] rounded-bl-[30px] rounded-br-[30px]">
        <DashNavbar />
        <div className="flex-1">
          <div className="min-h-[100vh] p-10 flex justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default dashboardLayout;
