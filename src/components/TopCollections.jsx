import React from "react";
import imgCover from "../assets/images/top-main.png";
import imgUser from '../assets/images/avatar-1.png';
import etherium from '../assets/images/Frame 6.png';
import imgCol1 from '../assets/images/cryptoFunks.png';
import imgCol2 from '../assets/images/collection-1.png';
import imgCol3 from '../assets/images/collection-2.png';
import imgCol4 from '../assets/images/collectin-3.png';
import imgCol5 from '../assets/images/collection-4.png';
import img1 from '../assets/images/img-1.png';
import img2 from '../assets/images/img-2.png';
import img3 from '../assets/images/img-3.png';

const TopCollections = () => {
  return (
    <section className="container mx-auto my-28">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-12">
        <div className="col-span-1">
          <div>
            <img width={"100%"} src={imgCover} alt="" />
          </div>
          <div className="flex justify-between mt-10">
            <div className="flex">
              <div>
                <img src={imgUser} alt="" />
              </div>
              <div className="pl-2">
                <h3 className="text-xl font-bold font-dm-sans">The Futr Abstr</h3>
                <p className="text-sm">10 in the stock</p>
              </div>
            </div>
            <div>
              <p className="text-[12px] font-medium ">Highest Bid</p>
              <h5 className="flex pt-2">
                <img src="/public/ethereum 2.png" alt="" />
               <span className="font-bold font-dm-sans text-[#3A3A3A] pl-3"> 0.25 ETH</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex gap-3 mb-10">
            <div>
              <img src={img1} alt="" />
            </div>
            <div className="">
              <h1 className="text-xl font-bold mb-4">The Futr Abstr</h1>
              <div className="flex gap-2 mb-6">
                <img
                  width="34px"
                  height="34px"
                  src={imgUser}
                  alt=""
                />

                <img
                  width="80px"
                  height="32px"
                  src={etherium}
                  alt=""
                />

                <p>1 of 8</p>
              </div>
              <button className="bg-[#3D00B7] text-white text-sm px-6 py-3 font-integral rounded-full">
                Place a bid
              </button>
            </div>
          </div>
          <div className="flex gap-3 mb-10">
            <div>
              <img src={img2} alt="" />
            </div>
            <div className="">
              <h1 className="text-xl font-bold mb-4">The Futr Abstr</h1>
              <div className="flex gap-2 mb-6">
                <img
                  width="34px"
                  height="34px"
                  src={imgUser}
                  alt=""
                />

                <img
                  width="80px"
                  height="32px"
                  src={etherium}
                  alt=""
                />

                <p>1 of 8</p>
              </div>
              <button className="outline outline-[#3D00B7] outline-2 text-[#3D00B7] font-bold text-sm px-6 py-3 font-integral rounded-full">
                Place a bid
              </button>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <img src={img3} alt="" />
            </div>
            <div className="">
              <h1 className="text-xl font-bold mb-4">The Futr Abstr</h1>
              <div className="flex gap-2 mb-6">
                <img
                  width="34px"
                  height="34px"
                  src={imgUser}
                  alt=""
                />

                <img
                  width="80px"
                  height="32px"
                  src={etherium}
                  alt=""
                />

                <p>1 of 8</p>
              </div>
              <button className="outline outline-[#3D00B7]  outline-2 text-[#3D00B7] font-bold text-sm px-6 py-3 font-integral rounded-full">
                Place a bid
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 border-l-2 pl-10">
          <div className="mb-4">
            <h1 className="uppercase  text-xl font-integral font-extrabold">
              Top Collections over{" "}
            </h1>
            <h3 className="font-dm-sans font-extrabold text-[#3D00B7] text-lg">
              Last 7 Days
            </h3>
          </div>
          <div className="flex items-center gap-4 border-b-2 py-4">
            <div>
              <h3 className="text-2xl font-dm-sans font-bold">1</h3>
            </div>
            <div className="flex gap-4">
              <div>
                <img src={imgCol1} alt="" />
              </div>
              <div>
                <h3 className="font-dm-sans font-semibold">CryptoFunks</h3>
                <h5 className="flex">
                  {" "}
                  <img src="/public/ethereum 2.png" alt="" />
                  <span className="text-[#636363] text-sm font-poppins font-semibold pl-1">
                    19,769.39
                  </span>
                </h5>
              </div>
            </div>
            <dev className="pl-2">
              <h3 className="text-[#14C8B0] text-xl font-poppins font-semibold">
                +26.52%
              </h3>
            </dev>
          </div>
          <div className="flex items-center gap-4 border-b-2 py-4">
            <div>
              <h3 className="text-2xl font-dm-sans font-bold">2</h3>
            </div>
            <div className="flex gap-4">
              <div>
                <img src={imgCol2} alt="" />
              </div>
              <div>
                <h3 className="font-dm-sans font-semibold">CryptoFunks</h3>
                <h5 className="flex">
                  {" "}
                  <img src="" alt="" />
                  <span className="text-[#636363] text-sm font-poppins font-semibold pl-1">
                    19,769.39
                  </span>
                </h5>
              </div>
            </div>
            <dev className="pl-2">
              <h3 className="text-[#14C8B0] text-xl font-poppins font-semibold">
                +26.52%
              </h3>
            </dev>
          </div>
          <div className="flex items-center gap-4 border-b-2 py-4">
            <div>
              <h3 className="text-2xl font-dm-sans font-bold">3</h3>
            </div>
            <div className="flex gap-4">
              <div>
                <img src={imgCol3} alt="" />
              </div>
              <div>
                <h3 className="font-dm-sans font-semibold">CryptoFunks</h3>
                <h5 className="flex">
                  {" "}
                  <img src="/public/ethereum 2.png" alt="" />
                  <span className="text-[#636363] text-sm font-poppins font-semibold pl-1">
                    19,769.39
                  </span>
                </h5>
              </div>
            </div>
            <dev className="pl-2">
              <h3 className="text-[#14C8B0] text-xl font-poppins font-semibold">
                +26.52%
              </h3>
            </dev>
          </div>
          <div className="flex items-center gap-4 border-b-2 py-4">
            <div>
              <h3 className="text-2xl font-dm-sans font-bold">4</h3>
            </div>
            <div className="flex gap-4">
              <div>
                <img src={imgCol4} alt="" />
              </div>
              <div>
                <h3 className="font-dm-sans font-semibold">CryptoFunks</h3>
                <h5 className="flex">
                  {" "}
                  <img src="/public/ethereum 2.png" alt="" />
                  <span className="text-[#636363] text-sm font-poppins font-semibold pl-1">
                    19,769.39
                  </span>
                </h5>
              </div>
            </div>
            <dev className="pl-2">
              <h3 className="text-[#14C8B0] text-xl font-poppins font-semibold">
                +26.52%
              </h3>
            </dev>
          </div>
          <div className="flex items-center gap-4 py-4">
            <div>
              <h3 className="text-2xl font-dm-sans font-bold">5</h3>
            </div>
            <div className="flex gap-4">
              <div>
                <img src={imgCol5} alt="" />
              </div>
              <div>
                <h3 className="font-dm-sans font-semibold">CryptoFunks</h3>
                <h5 className="flex">
                  {" "}
                  <img src="/public/ethereum 2.png" alt="" />
                  <span className="text-[#636363] text-sm font-poppins font-semibold pl-1">
                    19,769.39
                  </span>
                </h5>
              </div>
            </div>
            <dev className="pl-2">
              <h3 className="text-[#14C8B0] text-xl font-poppins font-semibold">
                +26.52%
              </h3>
            </dev>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCollections;
