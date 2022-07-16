import React from "react";
import Navigation from "../components/Navigation";
import Socials from "../components/socials";
import "../index.css";

export const Contact = () => {
  return (
    <>
      <div className="container text-center">
        <h3 className="animate__animated animate__zoomIn heading">
          <span className="opacity-50"> Con</span>
          tact
        </h3>
      </div>
      <section className="container text-center mt-48 animate__animated animate__fadeInUp">
        <h3 className="uppercase text-center font-semibold text-lg mb-4">
          Send me a message
        </h3>
        <a
          className="container font-bold md:text-2xl lg:text-6xl"
          href="mailto:john.osezei@yahoo.com"
          target="_blank"
          rel="noreferrer"
        >
          john.osezei@yahoo.com
        </a>
        <h3 className="font-semibold mt-4 text-lg text-center">
          OR CONNECT WITH ME ON SOCIALS
        </h3>
        <div className="w-max mr-auto ml-auto text-2xl">
          <Socials />
        </div>
      </section>
      <Navigation />
    </>
  );
};
