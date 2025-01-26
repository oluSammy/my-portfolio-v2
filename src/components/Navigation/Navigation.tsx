"use client";

import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const navLinks = [
  {
    name: "About",
    link: "",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const Navigation = () => {
  const [active, setActive] = useState("");

  return (
    <div className="flex justify-between flex-wrap md:p-4 items-center px-8 pt-4">
      <Logo />
      <div className=" md:order-1 order-2 hidden md:flex gap-4 glass glass-border rounded-full px-8 gap-x-8 py-2 ">
        {navLinks.map((link) => {
          const isActive = active === link.link;

          return (
            <Link
              key={link.name}
              href={link.link}
              className={`text-xs md:text-sm px-6 rounded-full  py-2 relative font-outfit ${
                isActive
                  ? "border font-semibold text-base glass"
                  : "font-normal text-gray-450"
              }`}
              onClick={() => setActive(link.link)}
            >
              {link.name}
              {isActive && (
                <span className="absolute w-14 rounded-t-lg h-1 bg-white -top-3 left-1/2 -translate-x-1/2 "></span>
              )}
            </Link>
          );
        })}
      </div>
      <Link
        href="https://docs.google.com/document/d/1wj0gCp8ErcemZ9zCbuYoqwIzAXrdeJcJ/edit"
        target="_blank"
        className="flex md:order-2 order-1 items-center font-outfit gap-2 text-green-100 font-medium glass md:px-6 px-4 md:py-4 py-2 glass-border rounded-full hover:scale-105 transition-all duration-300"
      >
        Resume
        <FaArrowRight className="-rotate-45" />
      </Link>
    </div>
  );
};

export default Navigation;
