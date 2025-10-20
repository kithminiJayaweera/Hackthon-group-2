
import Stripe from "./Stripe";
import HeroBackground from "../../assets/heroimage.jpg";

const Hero = () => {
  return (
    <div className=" mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4">
      <img src={HeroBackground} alt="Hero Background" className="absolute inset-0 w-full h-screen object-cover" />
      <div className="flex flex-col items-center justify-center z-10">
        <h1 className="Shlop text-4xl tracking-[.20em] md:text-[80px] font-bold mb-4 text-white z-10">
          Work Smart, Earn Big, Learn Fast
        </h1>
        <p className="max-w-[700px] text-lg md:text-xl  text-white z-10">
          Experience a rewarding academic journey, personal growth, and a lively
          social and sports community.
        </p>
        <button className=" rounded-4xl mt-6 px-6 py-3 bg-white text-black transition"> Apply Now </button>

      </div>

      {/* <Stripe /> */}



    </div>
  );
};

export default Hero;
