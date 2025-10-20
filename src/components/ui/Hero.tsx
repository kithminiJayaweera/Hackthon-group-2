
import Stripe from "./Stripe";

const Hero = () => {
  return (
    <div className=" mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Work Smart, Earn Big, Learn Fast
      </h1>
      <p className="max-w-[700px] text-lg md:text-xl  text-white">
        Experience a rewarding academic journey, personal growth, and a lively
        social and sports community.
      </p>
    <button className=" rounded-4xl mt-6 px-6 py-3 bg-white text-black  hover:bg-blue-700 transition"> Apply Now </button>
  
    <Stripe />
  
    </div>
  );
};

export default Hero;
