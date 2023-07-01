import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import img1 from "../assets/images/main-2.png";
import img2 from "../assets/images/main-3.png";
import img3 from "../assets/images/top-main.png";
import img4 from "../assets/images/img-1.png";
import img5 from "../assets/images/img-3.png";

const Hero = () => {
  const slides = [
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img3,
    },

    {
      url: img4,
    },
    {
      url: img5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <section className="py-16">
      <div className="container mx-auto flex sm:flex-col xl:flex-row">
        <div className="sm:w-full xl:w-3/5">
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
        <div className="sm:w-full xl:w-2/5">
          <div className="max-w-[full] sm:h-[500px] xl:h-full w-full relative group items-end">
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            ></div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="text-2xl cursor-pointer"
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
