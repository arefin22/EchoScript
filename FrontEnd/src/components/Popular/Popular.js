import Image from "next/image";



const Popular = () => {
    return (
      <div>
        <div className="sticky top-0">
          <Image
            src="https://i.ibb.co/1RSYcQy/library-isometric-horizontal-banner-vector.jpg"
            width={1680}
            height={600}
            className="rounded-tl-[100px] rounded-tr-[100px] mt-[-100px]"
          />
        </div>
        <div className="sticky top-0">
          <Image
            src="https://i.ibb.co/Vwcwgwn/1-z-5sz44-FOBGUwh-Qqpl-Fotw.webp"
            width={1680}
            height={600}
            className="rounded-tl-[100px] rounded-tr-[100px] sticky top-0"
          />
        </div>
        <div className="sticky top-0">
          <Image
            src="https://i.ibb.co/n3b56qG/0-dxp-NPWAOOa-F-Lcx-B.webp"
            width={1680}
            height={600}
            className="rounded-tl-[100px] rounded-tr-[100px] sticky top-0"
          />
        </div>
        <div className="sticky top-0">
          <Image
            src="https://i.ibb.co/6wxTt4W/1-RNy-Xe0v36rg8-X4i-Cp-QYFag.webp"
            width={1680}
            height={600}
            className="rounded-[100px]"
          />
        </div>
      </div>
    );
};

export default Popular;