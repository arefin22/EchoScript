import Image from "next/image";



const Popular = () => {
    return (
      <div className="bg-white z-1">
        <div className="sticky top-0 lg:mt-[-100px]">
          <div
            className="w-full h-screen rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px]"
            style={{
              backgroundImage: "url(https://i.ibb.co/rsGgD7b/banner.jpg)",
            }}
          ></div>
        </div>

        <div className="sticky top-0 lg:mt-[-100px]">
          <div
            className="w-full h-screen rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/Vwcwgwn/1-z-5sz44-FOBGUwh-Qqpl-Fotw.webp)",
            }}
          ></div>
        </div>
        <div className="sticky top-0 lg:mt-[-100px]">
          <div
            className="w-full h-screen rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[100px] lg:rounded-tr-[100px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/n3b56qG/0-dxp-NPWAOOa-F-Lcx-B.webp)",
            }}
          ></div>
        </div>
        <div className="sticky top-0 bg-white rounded-tl-[100px] rounded-tr-[100px]">
          <div
            className="w-full h-screen rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[30px] lg:rounded-bl-[100px] lg:rounded-br-[100px] lg:rounded-tl-[100px] lg:rounded-tr-[100px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/6wxTt4W/1-RNy-Xe0v36rg8-X4i-Cp-QYFag.webp)",
            }}
          ></div>
        </div>
      </div>
    );
};

export default Popular;