import Navbar from "../shared/Navbar";

const StickyNavbar = () => {
    return (
      <div className="mx-auto sticky z-50 -mt-7 top-[40px] md:-mt-8 md:top-[40px] lg:-mt-14 lg:w-[45%] lg:top-[65px] xl:w-[40%] xl:top-[65px] xl:-mt-18 2xl:w-[35%]">
        <Navbar />
      </div>
    );
};

export default StickyNavbar;