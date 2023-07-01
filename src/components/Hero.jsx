import img1 from "../assets/images/cover-stack.png";
import img2 from "../assets/images/cover-stack2.png";
import img3 from "../assets/images/ownNft-2.png";
import imgUser from "../assets/images/avatar-1.png";
import badge from "../assets/images/badge.png";
import badgeInfo from "../assets/images/badge-info.png";

const Hero = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto flex sm:flex-col xl:flex-row">
        <div className="sm:w-full md:w-3/5 lg:w-3/5  xl:w-3/5">
          <h1 className="text-[#000] tracking-tight text-[40px] font-integral font-extrabold">
            DISCOVER, AND COLLECT <br /> DIGITAL ART NFTS{" "}
          </h1>
          <p className="font- text-xl pt-6">
            Digital marketplace for crypto collectibles and <br /> non-fungible
            tokens (NFTs). Buy, Sell, and discover <br /> exclusive digital
            assets.
          </p>
          <div className="py-10">
            <button className="bg-[#3D00B7] text-white font-integral text-xl rounded-full py-3 px-10">
              Explore Now
            </button>
          </div>
          <div className="flex gap-6">
            <div className="">
              <h3 className="text-[#000] text-[40px] font-integral font-extrabold leading-8">
                98K+
              </h3>
              <p className="text-[#565656] text-xl">Artwork</p>
            </div>
            <div>
              <h3 className="text-[#000] text-[40px] font-integral font-extrabold  leading-8">
                12K+
              </h3>
              <p className="text-[#565656] text-xl">Auction</p>
            </div>
            <div>
              <h3 className="text-[#000] text-[40px] font-integral font-extrabold  leading-8">
                15K+
              </h3>
              <p className="text-[#565656] text-xl">Artist</p>
            </div>
          </div>
        </div>
        <div className="sm:w-full md:w-2/5 lg:w-2/5 xl:w-2/5 flex relative justify-end">
          <div className="w-[400px] h-[340px]  top-12  absolute rounded-lg">
            <img className="w-full h-full" src={img3} alt="" />
          </div>
          <div className="w-[400px] h-[400px] absolute top-5 left-[86px] rounded-lg">
            <img className="w-full h-full  items-center" src={img2} alt="" />
          </div>
          <div
            style={{ backgroundImage: `url(${img1})` }}
            className="w-[400px] h-[440px] absolute left-12 rounded-lg"
          >
            <div className="pt-6 pl-6">
              <h1 className="text-[#FFF] text-[28px] font-extrabold font-dm-sans ">
                Abstr Gradient NFT
              </h1>
              <p className="flex items-center pt-2">
                <img width={32} height={32} src={imgUser} alt="" />
                <span className="pl-2 text-[#FFF] text-xl font-dm-sans font-extrabold ">
                  Arkhan17
                </span>
              </p>
            </div>
            <div className="ml-[-70px] pt-24">
              <img src={badge} alt="" />
            </div>
            <div className="flex justify-center">
              <img src={badgeInfo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
