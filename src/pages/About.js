import React from "react";
import Papi from "../images/papi.jpeg";

export const About = () => {
  return (
    <>
      <div className="container grid justify-center">
        <h3 className="animate__animated animate__zoomIn heading">About</h3>
      </div>
      <section className="container mt-6 md:block lg:grid grid-cols-2 gap-4 place-items-center h-56">
        <div className="animate__animated animate__fadeInLeft papi-container">
          <img className="papi-x md: mb-8" src={Papi} alt="headboy" />
        </div>
        <div className="animate__animated animate__fadeInRight text-lg">
          <p>
            I am a Frontend Developer able to build a Web presence from the
            ground concept, layout and UI to re-useable code, a goal-oriented
            Frontend Developer with a strong commitment to collaboration and
            solutions-oriented problem-solving.
          </p>
          <br />

          <p>
            Skilled at writing well-designed, testable and efficient code using
            current best practices in development.
          </p>
          <br />

          <p>
            Fast learner, hard worker and team player ready to work in a
            fast-paced, an collaborative environment.
          </p>
          <br />
          <a
            href="#"
            className="text-2xl uppercase font-bold underline-offset-8 hover:underline"
          >
            download resume
          </a>
        </div>
      </section>
    </>
  );
};
