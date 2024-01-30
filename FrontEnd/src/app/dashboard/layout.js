import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import DashNavbar from "./dashNavbar/page";



const dashbordlayout = ({children}) => {
    return (
        <PrivateRoute>
        <div className="flex">
            <DashNavbar></DashNavbar>
            <div className="p-8 w-full">
                {children}
            </div>
        </div>
        </PrivateRoute>
    );
};

export default dashbordlayout;