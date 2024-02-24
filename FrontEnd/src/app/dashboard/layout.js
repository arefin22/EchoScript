import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import DashNavbar from "./DashNavbar/page";


const dashbordlayout = ({ children }) => {
  
  return (
    <PrivateRoute>
      <div className="flex flex-col md:flex-row  ">
        <DashNavbar />
        <div className="flex-1 bg-white">
         <div className="ml-[200px] ">
         {children}
         </div>
          
          </div>
      </div>
    </PrivateRoute>
  );
};

export default dashbordlayout;
