import React from "react";

const FeatureCard = ({feature}) => {
  return (
    <div className="col-span-1 xl:h-96">
      <div className="flex xl:h-2/3 sm:flex-col xl:flex-row sm:h-full">
        <div
          className="xl:w-2/3 bg-no-repeat bg-cover h-full  rounded-xl"
          style={{backgroundImage: feature.imgCover, height: "calc(100%)" }}
        >
          {/* <img className="h-full w-full" src="/public/top-main.png" alt="" /> */}
        </div>
        <div className="flex xl:w-1/3 xl:ml-4 sm:w-full xl:flex-col sm:flex-row sm:flex-nowrap sm:mt-2 xl:mt-0">
          <div style={{backgroundImage: feature.img1}} className="xl:w-full xl:h-1/3 sm:w-1/3 sm:h-[100px] sm:m-0 rounded-xl bg-no-repeat bg-cover"></div>
          <div  style={{backgroundImage: feature.img2}} className="xl:w-full xl:h-1/3 sm:w-1/3 sm:h-full xl:mt-2 sm:ml-2  xl:ml-0 rounded-xl bg-no-repeat bg-cover"></div>
          <div  style={{backgroundImage: feature.img3}} className="xl:w-full xl:h-1/3 sm:w-1/3 sm:h-full xl:mt-2 sm:ml-2  xl:ml-0 rounded-xl bg-no-repeat bg-cover"></div>
          {/* <img className="pb-2" src="/public/feature-1.png" alt="" /> */}
          {/* <img className="pb-2" src="/public/feature-2.png" alt="" /> */}
          {/* <img className=" " src="/public/feature-3.png" alt="" /> */}
        </div>
      </div>
      <div className="mt-6">
        <h1 className="text-xl font-bold font-dm-sans">{feature.title}</h1>
      </div>
      <div>
        <div className="flex justify-between items-center pt-3">
          <div className="flex">
            <img width={28} height={28} src={feature.userImg} alt="" />
            <p className="text-sm font-dm-sans font-semibold pl-2">{feature.userName}</p>
          </div>
          <div>
            <button className="outline outline-[#2639ED] outline-1 text-[#2639ED] text-[11px] font-bold rounded-full px-2 py-1">
              {feature.totalItem}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
