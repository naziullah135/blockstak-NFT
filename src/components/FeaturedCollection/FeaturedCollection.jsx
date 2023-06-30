import React from "react";
import FeatureCard from "./FeatureCard";

const featureCollections = [
  {
    id: 1,
    imgCover: "url('/public/top-main.png')",
    img1: "url('/public/feature-1.png')",
    img2:  "url('/public/feature-2.png')",
    img3:  "url('/public/feature-3.png')",
    title: "Amazing Collection",
    userImg: "/public/avatar-1.png",
    userName: "by Arkhan",
    totalItem: "Total 54 Items",
  },
  {
    id: 2,
    imgCover: "url('/public/main-2.png')",
    img1: "url('/public/feature-2.png')",
    img2:  "url('/public/feature-4.png')",
    img3:  "url('/public/feature-3.png')",
    title: "Amazing Collection",
    userImg: "/public/avatar-1.png",
    userName: "by Arkhan",
    totalItem: "Total 54 Items",
  },
  {
    id: 3,
    imgCover: "url('/public/main-3.png')",
    img1: "url('/public/feature-3.png')",
    img2:  "url('/public/feature-4.png')",
    img3:  "url('/public/feature-2.png')",
    title: "Amazing Collection",
    userImg: "/public/avatar-1.png",
    userName: "by Arkhan",
    totalItem: "Total 54 Items",
  },
];

const FeaturedCollection = () => {
  return (
    <section className="bg-[#F7F8FA]">
      <div className="container mx-auto py-16">
        <div className="pb-8">
          <h1 className="uppercase text-[28px] font-integral font-extrabold ">
            Collection Featured NFTs
          </h1>
        </div>
        <div className="grid sm:grid-cols-1 xl:grid-cols-3 gap-8">
       
            {featureCollections.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}

          {/* <div className="col-span-1">
            <div className="grid md:grid-cols-3">
              <div className="col-span-2">
                <img className="h-full" src="/public/main-2.png" alt="" />
              </div>
              <div className="col-span-1 pl-4">
                <img
                  className="pb-2 w-full"
                  src="/public/feature-1.png"
                  alt=""
                />
                <img
                  className="pb-2 w-full"
                  src="/public/feature-2.png"
                  alt=""
                />
                <img className="w-full" src="/public/feature-3.png" alt="" />
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-xl font-bold font-dm-sans">
                Amazing Collection
              </h1>
            </div>

            <div>
              <div className="flex justify-between items-center pt-3">
                <div className="flex">
                  <img
                    width={28}
                    height={28}
                    src="/public/avatar-1.png"
                    alt=""
                  />
                  <p className="text-sm font-dm-sans font-semibold pl-2">
                    by Arkhan
                  </p>
                </div>
                <div>
                  <button className="outline outline-[#2639ED] outline-1 text-[#2639ED] text-[11px] font-bold rounded-full px-2 py-1">
                    Total 54 Items
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-span-1">
            <div className="grid md:grid-cols-3">
              <div className="col-span-2">
                <img className="h-full" src="/public/main-3.png" alt="" />
              </div>
              <div className="col-span-1 pl-4">
                <img
                  className="pb-2 w-full"
                  src="/public/feature-1.png"
                  alt=""
                />
                <img
                  className="pb-2 w-full"
                  src="/public/feature-2.png"
                  alt=""
                />
                <img className="w-full" src="/public/feature-3.png" alt="" />
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-xl font-bold font-dm-sans">
                Amazing Collection
              </h1>
            </div>

            <div>
              <div className="flex justify-between items-center pt-3">
                <div className="flex">
                  <img
                    width={28}
                    height={28}
                    src="/public/avatar-1.png"
                    alt=""
                  />
                  <p className="text-sm font-dm-sans font-semibold pl-2">
                    by Arkhan
                  </p>
                </div>
                <div>
                  <button className="outline outline-[#2639ED] outline-1 text-[#2639ED] text-[11px] font-bold rounded-full px-2 py-1">
                    Total 54 Items
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
