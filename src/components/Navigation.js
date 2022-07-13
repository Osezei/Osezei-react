import React, { useState, useRef, useEffect } from "react";
import { links } from "./navData";
import "../index.css";

const Navigation = () => {
  return (
    <nav className="container fixed bottom-0 pb-3 pt-3 ">
      <ul className="animate__animated animate__bounce links flex justify-evenly font-semibold capitalize text-xl ">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id} className="hover:opacity-70">
              <a href={url} className="">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
