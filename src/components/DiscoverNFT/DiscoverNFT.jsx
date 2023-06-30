import React from "react";
import NFTCard from "./NFTCard";
import imgCover1 from "../../assets/images/discover-1.png";
import imgCover2 from "../../assets/images/discover-2.png";
import imgCover3 from "../../assets/images/discover-3.png";
import imgCover4 from "../../assets/images/discover-4.png";
import imgUser1 from "../../assets/images/user-1.png";
import imgUser2 from "../../assets/images/user-2.png";
import imgUser3 from "../../assets/images/user-3.png";
import imgUser4 from "../../assets/images/user-4.png";

const NFTData = [
  {
    id: 1,
    imgCover: imgCover1,
    imgUser1: imgUser1,
    imgUser2: imgUser2,
    imgUser3: imgUser3,
    imgUser4: imgUser4,
    title: "ArtCrypto",
  },
  {
    id: 2,
    imgCover: imgCover2,
    imgUser1: imgUser1,
    imgUser2: imgUser2,
    imgUser3: imgUser3,
    imgUser4: imgUser4,
    title: "This NFT",
  },
  {
    id: 3,
    imgCover: imgCover3,
    imgUser1: imgUser1,
    imgUser2: imgUser2,
    imgUser3: imgUser3,
    imgUser4: imgUser4,
    title: "NameCrypto",
  },
  {
    id: 4,
    imgCover: imgCover4,
    imgUser1: imgUser1,
    imgUser2: imgUser2,
    imgUser3: imgUser3,
    imgUser4: imgUser4,
    title: "KingCrypto",
  },
  {
    id: 5,
    imgCover: imgCover2,
    imgUser1: imgUser1,
    imgUser2: imgUser2,
    imgUser3: imgUser3,
    imgUser4: imgUser4,
    title: "ArtCrypto",
  },
  {
    id: 6,
    imgCover: imgCover4,
    imgUser1: imgUser1,
    imgUser2: imgUser2,
    imgUser3: imgUser3,
    imgUser4: imgUser4,
    title: "KingCrypto",
  },
  {
    id: 7,
    imgCover: imgCover1,
    imgUser1: imgUser1,
    imgUser2: imgUser2,
    imgUser3: imgUser3,
    imgUser4: imgUser4,
    title: "This NFT",
  },
  {
    id: 8,
    imgCover: imgCover3,
    imgUser1: imgUser1,
    imgUser2: imgUser2,
    imgUser3: imgUser3,
    imgUser4: imgUser4,
    title: "NameCrypto",
  },
  {
    id: 9,
    imgCover: imgCover4,
    imgUser1: imgUser1,
    imgUser2: imgUser2,
    imgUser3: imgUser3,
    imgUser4: imgUser4,
    title: "ArtCrypto",
  },
  {
    id: 10,
    imgCover: imgCover3,
    imgUser1: imgUser1,
    imgUser2: imgUser2,
    imgUser3: imgUser3,
    imgUser4: imgUser4,
    title: "ArtCrypto",
  },
  {
    id: 11,
    imgCover: imgCover2,
    imgUser1: imgUser1,
    imgUser2: imgUser2,
    imgUser3: imgUser3,
    imgUser4: imgUser4,
    title: "ArtCrypto",
  },
  {
    id: 12,
    imgCover: imgCover4,
    imgUser1: imgUser1,
    imgUser2: imgUser2,
    imgUser3: imgUser3,
    imgUser4: imgUser4,
    title: "ArtCrypto",
  },
  {
    id: 13,
    imgCover: imgCover1,
    imgUser1: imgUser1,
    imgUser2: imgUser2,
    imgUser3: imgUser3,
    imgUser4: imgUser4,
    title: "ArtCrypto",
  },
  {
    id: 14,
    imgCover: imgCover2,
    imgUser1: imgUser1,
    imgUser2: imgUser2,
    imgUser3: imgUser3,
    imgUser4: imgUser4,
    title: "ArtCrypto",
  },
  {
    id: 15,
    imgCover: imgCover3,
    imgUser1: imgUser1,
    imgUser2: imgUser2,
    imgUser3: imgUser3,
    imgUser4: imgUser4,
    title: "ArtCrypto",
  },
  {
    id: 16,
    imgCover: imgCover4,
    imgUser1: imgUser1,
    imgUser2: imgUser2,
    imgUser3: imgUser3,
    imgUser4: imgUser4,
    title: "nameCrypto",
  },
];

const DiscoverNFT = () => {
  return (
    <section className="bg-[#D9E0EC44]">
      <div className="container mx-auto py-12">
        <div>
          <h1 className="uppercase text-[34px] font-integral font-extrabold">
            Discover more NFTs
          </h1>
        </div>
        <div className="flex justify-between my-8">
          <div className="gap-2">
            <button className="bg-[#3D00B7] text-white text-sm font-dm-sans px-4 py-2 rounded-full">
              All Categories
            </button>
            <button className="bg-[#F2F3F5] text-sm px-4 py-2 font-dm-sans font-semibold rounded-full ml-3">
              Art
            </button>
            <button className="bg-[#F2F3F5] text-sm px-4 py-2 font-dm-sans font-semibold rounded-full ml-3">
              Celebrities
            </button>
            <button className="bg-[#F2F3F5] text-sm px-4 py-2 font-dm-sans font-semibold rounded-full ml-3">
              Gaming
            </button>
            <button className="bg-[#F2F3F5] text-sm px-4 py-2 font-dm-sans font-semibold rounded-full ml-3">
              Sport
            </button>
            <button className="bg-[#F2F3F5] text-sm px-4 py-2 font-dm-sans font-semibold rounded-full ml-3">
              Music
            </button>
            <button className="bg-[#F2F3F5] text-sm px-4 py-2 font-dm-sans font-semibold rounded-full ml-3">
              Crypto
            </button>
          </div>
          <div>
            <button className="flex bg-[#F2F3F5] text-sm px-4 py-2 font-dm-sans font-semibold rounded-full gap-2 text-[#3D00B7]">
              <img src="/public/filter.png" alt="" /> All Filters
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 xl:grid-cols-4 gap-10">
          {NFTData.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
        <div className="flex justify-center py-12">
          <button className="outline outline-[#4F33A3] outline-2 rounded-full text-[#4F33A3] px-6 py-3 text-xl font-dm-sans font-semibold">
            More NFTs
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverNFT;
