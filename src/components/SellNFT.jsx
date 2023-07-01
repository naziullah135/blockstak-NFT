import imgNFT1 from "../assets/images/main-2.png";
import imgNFT2 from "../assets/images/ownNft-2.png";
import imgNFT3 from "../assets/images/ownNFT-3.png";
import owner1 from "../assets/images/avatar-2.png";
import owner2 from "../assets/images/avatar1.2.png";

const SellNFT = () => {
  return (
    <section className="container mx-auto py-32">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 items-center">
        <div className="col-span-1">
          <div className="flex justify-end items-center">
            <div className="sm:w-full  md:w-1/2 xl:w1/2">
              <div className="flex justify-end">
                <div className="indicator">
                  <span className="indicator-item indicator-start md:indicator-bottom lg:indicator-center  xl:indicator-end">
                    <img src={owner2} alt="" />
                  </span>
                  <div className="grid w-[300px] h-[300px] place-items-center">
                    <img className="w-full h-full" src={imgNFT1} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-12">
                <div className="indicator">
                  <span className="indicator-item indicator-start md:indicator-bottom lg:indicator-center xl:indicator-end ">
                    <img src={owner1} alt="" />
                  </span>
                  <div className="grid w-[195px] h-[214px] place-items-center">
                    <img className="w-full h-full" src={imgNFT2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex justify-end">
                <div className="indicator">
                  <span className="indicator-item indicator-start md:indicator-bottom lg:indicator-center xl:indicator-end ">
                    <img src={owner1} alt="" />
                  </span>
                  <div className="grid w-[241px] h-[265px] place-items-center">
                    <img className="w-full h-full" src={imgNFT3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 pl-20 pt-10">
          <h1 className="uppercase text-[#000] leading-9 font-integral text-[32px] font-extrabold tracking-tight">
            Create and <br /> sell your NFTs
          </h1>
          <p className="text-[#636363] text-lg font-dm-sans py-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </p>

          <div className="">
            <button className="bg-[#3D00B7] text-white font-integral text-xl rounded-full py-4 px-10">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellNFT;
