import React from "react";

const NFTCard = ({ nft }) => {
  return (
    <div className="col-span-1 bg-[#FFF] p-3 rounded-xl">
      <div>
        <img className="w-full" src={nft.imgCover} alt="" />
      </div>
      <div className="flex mt-[-20px] ml-3">
        <img src={nft.imgUser1} alt="" />
        <img className="ml-[-13px]" src={nft.imgUser2} alt="" />
        <img className="ml-[-13px]" src={nft.imgUser3} alt="" />
        <img className="ml-[-13px]" src={nft.imgUser4} alt="" />
      </div>
      <div className="px-3">
        <h3 className="text-xl font-dm-sans font-bold ">{nft.title}</h3>
      </div>
      <div className="flex justify-between px-3 py-4">
        <div className="text-[#00AC4F]">
          <p className="flex text-[11px] font-dm-sans font-bold">
            <img src="/public/ethereum 1.png" alt="" />
            <span className="pl-1"> 0.25 ETH</span>
          </p>
        </div>
        <div>
          <p className="text-[#838383] text-[13px] font-semibold font-dm-sans">
            1 of 321
          </p>
        </div>
      </div>
      <div className="flex justify-between px-3 pt-2 border-t-[1px]">
        <div className="bg-[#F5F5F5] text-[#5539A8] text-[11px] px-3 py-1 rounded-full font-dm-sans font-extrabold">
          3h 50m 2s left
        </div>
        <div className="text-[#4F33A3] text-[15px] font-dm-sans font-semibold">
          Place a bid
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
