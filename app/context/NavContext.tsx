"use client"

import React, { createContext, useRef, RefObject, useContext } from "react";

interface ScrollContextValue {
  servicesRef: RefObject<HTMLDivElement>;
  processRef: RefObject<HTMLDivElement>;
  clientsRef: RefObject<HTMLDivElement>;
  teamRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
  scrollToElement: (ref: RefObject<HTMLDivElement>) => void;
}

const ScrollContext = createContext<ScrollContextValue | null>(null);

const ScrollProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const clientsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToElement = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollContextValue: ScrollContextValue = {
    servicesRef,
    processRef,
    clientsRef,
    teamRef,
    contactRef,
    scrollToElement,
  };

  return (
    <ScrollContext.Provider value={scrollContextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

const useNavContext = (): ScrollContextValue => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};

export { ScrollProvider, useNavContext };
