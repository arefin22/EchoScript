import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import DashNavbar from "./DashNavbar/page";


const dashboardLayout = ({ children }) => {
  
  return (
    <PrivateRoute>
      <div className="flex flex-col md:flex-row border-black rounded-full ">
        <DashNavbar />
        <div className="flex-1 mb-7 bg-white min-h-[95vh] w-full pb-96 rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px] lg:rounded-bl-[100px] lg:rounded-br-[100px] rounded-bl-[30px] rounded-br-[30px]">
         <div className="ml-[200px] ">
         {children}
         </div>
          
          </div>
      </div>
    </PrivateRoute>
  );
};

export default dashboardLayout;
