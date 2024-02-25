import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import DashNavbar from "./DashNavbar/page";


const dashboardLayout = ({ children }) => {
  
  return (
    <PrivateRoute>
      <div className="flex flex-col md:flex-row ">
        <DashNavbar />
        <div className="flex-1 ml-[250px] mt-5 mr-10">
         <div className="ml-10">
         {children}
         </div>
          
          </div>
      </div>
    </PrivateRoute>
  );
};

export default dashboardLayout;
