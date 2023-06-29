const Hero = () => {
  return (
  <section className="py-16">
      <div className="container mx-auto flex">
      <div className="w-3/5">
        <h1 className="text-[40px] font-integral font-extrabold">DISCOVER, AND COLLECT DIGITAL ART NFTS </h1>
        <p className="font- text-xl pt-6">
          Digital marketplace for crypto collectibles and <br /> non-fungible tokens
          (NFTs). Buy, Sell, and discover <br /> exclusive digital assets.
        </p>
       <div className="py-10">
       <button className="bg-[#3D00B7] text-white font-integral text-xl rounded-full py-3 px-10">Explore Now</button>
       </div>
        <div className="flex gap-6">
            <div>
                <h3 className="text-[40px] font-integral font-extrabold leading-8">98K+</h3>
                <p className="text-[#565656] text-xl">Artwork</p>
            </div>
            <div>
                <h3  className="text-[40px] font-integral font-extrabold  leading-8">12K+</h3>
                <p className="text-[#565656] text-xl">Auction</p>
            </div>
            <div>
                <h3  className="text-[40px] font-integral font-extrabold  leading-8">15K+</h3>
                <p className="text-[#565656] text-xl">Artist</p>
            </div>
        </div>
      </div>
      <div className="w-2/5 text-center">
        <h1>This right</h1>
      </div>
    </div>
  </section>
  );
};

export default Hero;
