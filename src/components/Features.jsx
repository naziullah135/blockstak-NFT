import img1 from '../assets/images/card-tick.svg';
import img2 from '../assets/images/chart-square.svg';

const Features = () => {
  return (
    <section className="bg-[#F7F8FA] py-32">
     <div className="container mx-auto flex flex-wrap justify-between">
     <div className="md:w-2/5">
        <h1 className="uppercase tracking-tight text-[#000] text-3xl font-integral font-[900]">
          The amazing NFT art <br /> of the world here
        </h1>
      </div>
      <div className="md:w-[30%]">
        <div className="flex">
          <div className="w-16">
            <img src={img1} alt="" />
          </div>
          <div className="px-3">
            <h3 className="text-xl text-[#000] font-bold">Fast Transaction</h3>
            <p className="py-4 text-[#696969]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-[30%] flex">
        <div className="w-16">
          <img src={img2} alt="" />
        </div>
        <div className="px-3">
          <h3 className="text-xl text-[#000] font-bold">Growth Transaction</h3>
          <p className="py-4 text-[#696969]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            etiam viverra tellus
          </p>
        </div>
      </div>
     </div>
    </section>
  );
};

export default Features;
