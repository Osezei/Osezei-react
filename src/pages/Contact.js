import React from "react";
import Navigation from "../components/Navigation";
import Socials from "../components/socials";

export const Contact = () => {
  return (
    <>
      <div className="container grid justify-center">
        <h3 className="animate__animated animate__zoomIn heading">
          <span className="opacity-50"> Con</span>tact
        </h3>
      </div>
      <section className="animate__animated animate__fadeInUp container ">
        <div className="text-center">
          <h3 className="text-xl font-bold mt-20 mb-8 uppercase opacity-70">
            Send me a message
          </h3>
          <a
            className="sm: text-4xl md:text-4xl lg:text-6xl font-semibold"
            href="mailto:john.osezei@yahoo.com"
            target="_blank"
            rel="noreferrer"
          >
            john.osezei@yahoo.com
          </a>
        </div>
        <div className="grid justify-center">
          <h3 className="text-xl font-bold mt-8 mb-8 uppercase opacity-70">
            OR CONNECT WITH ME ON SOCIALS
          </h3>
          <div className="ml-auto mr-auto text-2xl">
            <Socials />
          </div>
        </div>
      </section>
      <Navigation />
    </>
  );
};
