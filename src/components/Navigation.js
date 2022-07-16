import React, { useState, useRef, useEffect } from "react";
import { links } from "./navData";
import { Link } from "react-router-dom";
import "../index.css";

const Navigation = () => {
  return (
    <nav className="container fixed bottom-0 left-0 right-0 pb-3 pt-3 mr-auto ml-auto">
      <ul className="animate__animated animate__bounce flex justify-evenly links text-center  font-semibold capitalize text-xl ">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id} className="">
              {/* <a href={url} className="text-center hover:underline">
                {text}
              </a> */}
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
