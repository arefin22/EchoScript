

import DashNavbar from "./dashnavbar/page"
const dashbordlayout = ({children}) => {
    return (
        <div className="flex">
            <DashNavbar></DashNavbar>
            <div className="p-8">
                {children}
            </div>
        </div>
    );
};

export default dashbordlayout;