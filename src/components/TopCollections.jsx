import React from "react";

const TopCollections = () => {
  return (
    <section className="container mx-auto my-28">
      <div className="grid grid-cols-3 gap-16">
        <div className="col-span-1">
          <div>
            <img width={"100%"} src="/public/top-main.png" alt="" />
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <div>
                <img src="/public/avatar-1.png" alt="" />
              </div>
              <div>
                <h3>The Futr Abstr</h3>
                <p>10 in the stock</p>
              </div>
            </div>
            <div>
              <p>Highest Bid</p>
              <h5 className="flex">
                <img src="/public/ethereum 2.png" alt="" />
                0.25 ETH
              </h5>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex gap-3 mb-6">
            <div>
              <img src="/public/img-1.png" alt="" />
            </div>
            <div className="">
              <h1 className="text-xl font-bold mb-4">The Futr Abstr</h1>
              <div className="flex gap-2 mb-6">
                <img
                  width="34px"
                  height="34px"
                  src="/public/avatar-1.png"
                  alt=""
                />

                <img
                  width="80px"
                  height="32px"
                  src="/public/Frame 6.png"
                  alt=""
                />

                <p>1 of 8</p>
              </div>
              <button className="bg-[#3D00B7] text-white text-sm px-6 py-3 font-integral rounded-full">
                Place a bid
              </button>
            </div>
          </div>
          <div className="flex gap-3 mb-6">
            <div>
              <img src="/public/img-2.png" alt="" />
            </div>
            <div className="">
              <h1 className="text-xl font-bold mb-4">The Futr Abstr</h1>
              <div className="flex gap-2 mb-6">
                <img
                  width="34px"
                  height="34px"
                  src="/public/avatar-1.png"
                  alt=""
                />

                <img
                  width="80px"
                  height="32px"
                  src="/public/Frame 6.png"
                  alt=""
                />

                <p>1 of 8</p>
              </div>
              <button className="outline outline-[#3D00B7] text-[#3D00B7] text-bold text-sm px-6 py-3 font-integral rounded-full">
                Place a bid
              </button>
            </div>
          </div>
          <div className="flex gap-3 mb-6">
            <div>
              <img src="/public/img-3.png" alt="" />
            </div>
            <div className="">
              <h1 className="text-xl font-bold mb-4">The Futr Abstr</h1>
              <div className="flex gap-2 mb-6">
                <img
                  width="34px"
                  height="34px"
                  src="/public/avatar-1.png"
                  alt=""
                />

                <img
                  width="80px"
                  height="32px"
                  src="/public/Frame 6.png"
                  alt=""
                />

                <p>1 of 8</p>
              </div>
              <button className="outline outline-[#3D00B7] text-[#3D00B7] text-sm px-6 py-3 font-integral rounded-full">
                Place a bid
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-4">
            <h1 className="uppercase text-xl font-integral font-extrabold">
              Top Collections over{" "}
            </h1>
            <h3 className="font-dm-sans font-extrabold text-[#3D00B7] text-lg">
              Last 7 Days
            </h3>
          </div>
          <div className="flex items-center gap-4 border-b-2 py-3">
            <div>
              <h3 className="text-2xl font-dm-sans font-bold">1</h3>
            </div>
            <div className="flex gap-4">
              <div>
                <img src="/public/cryptoFunks.png" alt="" />
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
          <div className="flex items-center gap-4 border-b-2 py-3">
            <div>
              <h3 className="text-2xl font-dm-sans font-bold">2</h3>
            </div>
            <div className="flex gap-4">
              <div>
                <img src="/public/cryptoFunks.png" alt="" />
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
          <div className="flex items-center gap-4 border-b-2 py-3">
            <div>
              <h3 className="text-2xl font-dm-sans font-bold">3</h3>
            </div>
            <div className="flex gap-4">
              <div>
                <img src="/public/cryptoFunks.png" alt="" />
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
          <div className="flex items-center gap-4 border-b-2 py-3">
            <div>
              <h3 className="text-2xl font-dm-sans font-bold">4</h3>
            </div>
            <div className="flex gap-4">
              <div>
                <img src="/public/cryptoFunks.png" alt="" />
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
          <div className="flex items-center gap-4 border-b-2 py-3">
            <div>
              <h3 className="text-2xl font-dm-sans font-bold">5</h3>
            </div>
            <div className="flex gap-4">
              <div>
                <img src="/public/cryptoFunks.png" alt="" />
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
          <div className="flex items-center gap-4 py-2">
            <div>
              <h3 className="text-2xl font-dm-sans font-bold">6</h3>
            </div>
            <div className="flex gap-4">
              <div>
                <img src="/public/cryptoFunks.png" alt="" />
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
