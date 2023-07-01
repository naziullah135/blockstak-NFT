import React from "react";
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import linkedin from '../assets/images/linkedin.png';

const Footer = () => {
  return (
<footer className="container mx-auto">
<div className="footer py-16 text-base-content">
      <div>
        <h1 className="uppercase text-2xl text-[#000] font-integral font-extrabold">
          NFters
        </h1>
        <p className="text-[#565656] text-sm font-medium py-4">
          The world’s first and largest digital marketplace for <br /> crypto
          collectibles and non-fungible tokens (NFTs). <br /> Buy, sell, and
          discover exclusive digital items.2
        </p>
        <div className="flex gap-4">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </div>
      <div>
        <p className="text-[#000] text-lg font-dm-sans font-extrabold pb-4">
          Market Place
        </p>

        <a className="link link-hover text-[#3D3D3D] text-sm font-dm-sans font-semibold">
          All NFTs
        </a>
        <a className="link link-hover text-[#3D3D3D] text-sm font-dm-sans font-semibold">
          New
        </a>
        <a className="link link-hover text-[#3D3D3D] text-sm font-dm-sans font-semibold">
          Art
        </a>
        <a className="link link-hover text-[#3D3D3D] text-sm font-dm-sans font-semibold">
          Sports
        </a>
        <a className="link link-hover text-[#3D3D3D] text-sm font-dm-sans font-semibold">
          Utility
        </a>
        <a className="link link-hover text-[#3D3D3D] text-sm font-dm-sans font-semibold">
          Music
        </a>
        <a className="link link-hover text-[#3D3D3D] text-sm font-dm-sans font-semibold">
          Domain Name
        </a>
      </div>
      <div>
        <p className="text-[#000] text-lg font-dm-sans font-extrabold pb-4">
          My Account
        </p>
        <a className="link link-hover text-[#3D3D3D] text-sm font-dm-sans font-semibold">
          Profile
        </a>
        <a className="link link-hover text-[#3D3D3D] text-sm font-dm-sans font-semibold">
          Favorite
        </a>
        <a className="link link-hover text-[#3D3D3D] text-sm font-dm-sans font-semibold">
          My Collections
        </a>
        <a className="link link-hover text-[#3D3D3D] text-sm font-dm-sans font-semibold">
          Settings
        </a>
      </div>
      <div>
        <p className="text-[#000] text-lg font-dm-sans font-extrabold pb-4">
          Stay in the loop
        </p>
        <p className=" text-[#363639] text-sm font-dm-sans font-medium mb-4">
          Join our mailing list to stay in the loop with our newest <br />{" "}
          feature releases, NFT drops, and tips and tricks for <br /> navigating
          NFTs.
        </p>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Enter your email address"
            className="input rounded-full input-bordered w-full pr-16"
          />
          <button className="btn bg-[#2639ED] text-white absolute py-1 top-0 right-0 rounded-full">
            Subscribe Now
          </button>
        </div>
      </div>
    
    </div>
    <div className="flex justify-center py-4 border-t-2">
        <h3 className="text-[#A4A4A4] text-sm">Copyright © 2022 Avi Yansah</h3>
    </div>
</footer>
  );
};

export default Footer;
