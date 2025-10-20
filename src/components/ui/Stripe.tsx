import Marquee from 'react-fast-marquee';

const Stripe = () => {
  return (
    <Marquee>
      <div className="overflow-hidden">
        <div className="animate-marquee flex  whitespace-nowrap ">
          {Array.from({ length: 20 }).map((_, index) => (
            <h1
              key={index}
              className="text-white text-sm "
            >
              Next Intake Starts on January 10, 2026
            </h1>
          ))}
        </div>
      </div>
    </Marquee>
  );
};

export default Stripe;
