import React from "react";
import Logo from "./icons/Logo";
import { useNavContext } from "../context/NavContext";

const Navbar: React.FC = () => {
  const {
    clientsRef,
    contactRef,
    processRef,
    servicesRef,
    teamRef,
    scrollToElement,
  } = useNavContext();

  const NavOptions = [
    {
      name: "Services",
      ref: servicesRef,
    },
    {
      name: "Process",
      ref: processRef,
    },
    {
      name: "Clients",
      ref: clientsRef,
    },
    {
      name: "Team",
      ref: teamRef,
    },
  ];

  return (
    <nav className="w-[100vw] flex sm:justify-between sm:items-center px-2 pt-2 sm:pt-8 sm:px-12 md:px-24 lg:px-36 xl:px-48 relative z-10">
      <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-2 w-full">
        <Logo className="h-8 w-8" />
        <ul className="flex gap-6 items-center text-[#1E3264] font-medium">
          {NavOptions.map((option, index) => (
            <li
              className="hover:text-sky-500 cursor-pointer text-xs sm:text-base"
              key={index}
              onClick={() => scrollToElement(option.ref)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block">
        <button
          className="border whitespace-nowrap border-[#1E3264] text-[#1E3264] text-xs font-semibold px-4 py-4 rounded-md hover:text-sky-500 hover:border-sky-500 backdrop-blur-2xl"
          onClick={() => scrollToElement(contactRef)}
        >
          REQUEST A CALL BACK
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
