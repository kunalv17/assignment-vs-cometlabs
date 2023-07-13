import Logo from "./icons/Logo";

const Footer = () => { 
  return (
    <footer className="flex flex-col md:flex-row justify-evenly items-start p-4 md:px-8 py-12 md:mx-0 gap-4">
      <div className="flex md:flex-row flex-col gap-2">
        <Logo className="h-8 w-8" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#1e3264] my-4">
              VANCOUVER
            </p>
            <p className="text-sm sm:text-base text-gray-500 whitespace-pre-wrap source">
              400-401 West Georgia Street <br /> Vancouver, BC, Canada, V6B 5A1
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#1e3264] my-4">
              BERLIN
            </p>
            <p className="text-sm sm:text-base text-gray-500 whitespace-pre-wrap source">
              Friedrichstraße 68 <br /> 10117 Berlin, Germany
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#1e3264] my-4">
            FOLLOW US ON
          </p>
          <ul className="text-sm sm:text-base text-gray-500 whitespace-pre-wrap source">
            <li className="cursor-pointer">Twitter</li>
            <li className="cursor-pointer">Facebook</li>
            <li className="cursor-pointer">LinkedIn</li>
            <li className="cursor-pointer">Instagram</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:max-w-[25%]">
        <div className="flex flex-col">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#1e3264] my-4">
            ABOUT US
          </p>
          <p className="text-sm sm:text-base text-gray-500 whitespace-pre-wrap source">
            Since 2009, Unbounce has helped marketers and digital agencies
            increase website and campaign conversions.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm sm:text-base text-gray-500 whitespace-pre-wrap source">
            © 2018 Unbounce All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;