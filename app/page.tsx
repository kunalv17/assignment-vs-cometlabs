"use client";

import React, { useState } from "react";
import { useNavContext } from "./context/NavContext";
import { Features, TeamMembers } from "./constants";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Member from "./components/Member";
import ContactForm from "./components/ContactForm";
import ImageTextCard from "./components/ImageTextCard";
import Feature from "./components/Feature";

export default function Home() {
  const [country, setCountry] = useState<string>("India");

  const { clientsRef, contactRef, processRef, servicesRef, teamRef } =
    useNavContext();

  return (
    <main className="h-screen overflow-x-hidden overflow-y-scroll">
      <Hero />
      <div className="bg-gradient-to-b from-[#e2f6fd] via-[#c6edfc] to-[#e4fef1]">
        <section className="py-8 px-4 sm:p-16 flex flex-col w-full gap-12 justify-center items-center box-border">
          <div ref={servicesRef}>
            <ImageTextCard
              reverse
              title="Our Services"
              subtitle="TOOLKIT"
              url="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VydmljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                est tellus, pulvinar ac iaculis vel, varius eu arcu. Integer id
                lectus posuere nisi dignissim gravida at ac justo."
            />
          </div>
          <div ref={processRef}>
            <ImageTextCard
              title="Our Process"
              subtitle="EXPERIENCE"
              url="https://images.unsplash.com/photo-1618255339659-0084b31196b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2Nlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                est tellus, pulvinar ac iaculis vel, varius eu arcu. Integer id
                lectus posuere nisi dignissim gravida at ac justo."
            />
          </div>
          <div
            className="pt-12 w-full max-w-[350px]  sm:max-w-[900px]"
            ref={clientsRef}
          >
            <p className="text-xs sm:text-sm font-bold text-center tracking-widest text-gray-500 mb-6">
              CLIENTS THAT LOVE US
            </p>
            <div className="grid grid-cols-4 w-full gap-4">
              {["A", "B", "C", "D", "E", "F", "G", "H"].map((client, i) => (
                <div
                  key={i}
                  className="col-span-2 sm:col-span-1 aspect-video bg-[#f6fbfd] flex w-full h-full items-center justify-center text-3xl font-bold text-[#1e3264]"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-y border-gray-300 flex w-full md:flex-row flex-col">
          <div
            className="md:w-1/2 w-full flex flex-col p-4 md:p-8 justify-center items-center"
            ref={contactRef}
          >
            <h3 className="text-2xl sm:text-3xl my-4 sm:my-6 font-medium text-[#1e3264] text-center">
              Interested In Our Services?
            </h3>
            <p className="text-sm sm:text-base text-gray-500 whitespace-pre-wrap mb-12 text-center source">
              Use the form headline and this subheader <br /> to describe the
              purpose of your form.
            </p>
            <ContactForm />
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-evenly items-center p-4 md:p-8 pt-0 md:py-12 pb-12 sm:border-l border-gray-300 gap-4">
            {Features.map((feature, i) => (
              <Feature
                key={i}
                title={feature.title}
                description={feature.description}
                Icon={feature.icon}
              />
            ))}
          </div>
        </section>
        <section
          className="py-8 px-4 sm:p-16 flex flex-col justify-center items-center"
          ref={teamRef}
        >
          <ImageTextCard
            reverse
            url="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="The Team"
            subtitle="SAY HELLO TO"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                est tellus, pulvinar ac iaculis vel, varius eu arcu. Integer id
                lectus posuere nisi dignissim gravida at ac justo."
          />
          <div className="grid grid-cols-2 justify-start sm:justify-between md:w-full md:py-24 py-12 gap-y-12 max-w-[900px]">
            {TeamMembers.map((member, i) => (
              <Member key={i} index={i} {...member} />
            ))}
          </div>
          <ImageTextCard
            url="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzc2lvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="Culture"
            subtitle="BLOD, SWEAT & HUSTLE"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                est tellus, pulvinar ac iaculis vel, varius eu arcu. Integer id
                lectus posuere nisi dignissim gravida at ac justo."
          />
        </section>
      </div>
      <Footer />
    </main>
  );
}
