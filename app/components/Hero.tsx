import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className={`container w-screen`}>
      <Navbar />
      <div className="relative w-screen flex flex-col justify-center items-center gap-4 px-[5%] md:px-[9%] lg:px-[12%] pb-12 py-[12%] md:py-[14%] lg:py-[16%]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-center text-[#1E3264] poppins whitespace-pre-wrap">
          Success starts with <br className="hidden sm:block" /> hardworking
          consultants
        </h1>
        <p className="text-sm sm:px-[20%] sm:text-base md:text-lg lg:text-xl font-medium text-center text-[#1E3264] source whitespace-pre-wrap">
          Morbi leo tortor, fermentum sed orci vitae, tempor auctor turpis.
          Fusce bibendum accumsan fringilla. Nulla aliquam luctus sem, at
          posuere nibh lobortis et. Ut ac mollis risus, eu congue libero. Nulla
          vestibulum ultricies tortor at ultrices.
        </p>
        <div className="absolute flex self-center bottom-0 text-[#1E3264] animate-bounce cursor-pointer">
          <ChevronDownIcon className="h-6 w-6 md:h-12 md:w-12" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
