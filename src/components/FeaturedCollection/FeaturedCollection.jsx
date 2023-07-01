import React from "react";
import imgUser from '../../assets/images/avatar-1.png';
import FeatureCard from "./FeatureCard";
import imgCover from "../../assets/images/top-main.png";
import imgCover2 from "../../assets/images/main-2.png";
import imgCover3 from "../../assets/images/main-3.png";

import imgFeature1 from "../../assets/images/feature-1.png"
import imgFeature2 from "../../assets/images/feature-2.png"
import imgFeature3 from "../../assets/images/feature-3.png"
import imgFeature4 from "../../assets/images/feature-4.png"

const featureCollections = [
  {
    id: 1,
    imgCover: imgCover,
    img1: imgFeature1,
    img2: imgFeature2,
    img3:  imgFeature3,
    title: "Amazing Collection",
    userImg: imgUser,
    userName: "by Arkhan",
    totalItem: "Total 54 Items",
  },
  {
    id: 2,
    imgCover: imgCover2,
    img1: imgFeature2,
    img2:  imgFeature4,
    img3: imgFeature3,
    title: "Amazing Collection",
    userImg: imgUser,
    userName: "by Arkhan",
    totalItem: "Total 54 Items",
  },
  {
    id: 3,
    imgCover: imgCover3,
    img1: imgFeature3,
    img2:  imgFeature4,
    img3: imgFeature2,
    title: "Amazing Collection",
    userImg: imgUser,
    userName: "by Arkhan",
    totalItem: "Total 54 Items",
  },
];

const FeaturedCollection = () => {
  return (
    <section className="bg-[#F7F8FA]">
      <div className="container mx-auto py-16">
        <div className="pb-8">
          <h1 className="uppercase tracking-tight text-[#000] text-[28px] font-integral font-extrabold ">
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
