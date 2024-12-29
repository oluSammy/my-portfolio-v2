/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Navigation from "../Navigation/Navigation";
import { FiLinkedin } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { useRef } from "react";

const repeatCount = 3;

const Hero = () => {
  const counter = useRef(0);

  return (
    <div className="h-screen w-full bg-primary-100 font-brolimo relative">
      <Navigation />

      <div className="container mx-auto mt-48 ">
        <div className="md:ml-32 ml-16">
          <div className="mb-10">
            <h4 className="text-green-100 text-2xl">Hi, my name is</h4>
            <h1 className=" text-4xl md:text-6xl font-normal text-white">Samuel Olumorin</h1>

            <h2 className="text-base md:text-2xl font-normal text-white flex items-start gap-x-2">
              <ol className="list-none h-8 overflow-hidden leading-8">
                <li className="li-animation animate-bounce">
                  <span className="whitespace-nowrap text-green-100 ">
                    Frontend
                  </span>
                </li>
                <li className="li-animation">
                  <span className="whitespace-nowrap">
                    <span className="text-green-100">Back</span>end
                  </span>
                </li>
                <li className="li-animation">
                  <span className="whitespace-nowrap">Fullstack</span>
                </li>
                <li className="li-animation">
                  <span className="whitespace-nowrap">
                    So<span className="text-green-100">f</span>tware
                  </span>{" "}
                </li>
              </ol>
              <span>Engineer</span>
            </h2>
          </div>

          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
            }}
            className="text-3xl md:text-5xl font-extralight font-outfit text-gray-50 mt-16"
            sequence={[
              `Crafting Code,\nCreating Possibilities!`,
              5000,
              (el: any) => {
                if (counter.current == repeatCount) {
                  el.classList.remove("custom-type-animation-cursor");
                } else {
                  counter.current++;
                }
              },
            ]}
            repeat={repeatCount}
          />
        </div>
      </div>
      <Socials />
      <Link
        href="#about"
        className="absolute bottom-10 md:bottom-40 right-5 md:right-20 w-10 h-10 bg-green-100 flex items-center justify-center rounded-full cursor-pointer"
      >
        <div className="w-6 h-6 bg-black flex items-center justify-center rounded-full">
          <FaArrowDown className="text-green-100" />
        </div>
      </Link>
    </div>
  );
};

const Socials = () => {
  return (
    <div className="flex flex-col gap-y-6 absolute items-center bottom-32 text-gray-550 left-10 ">
      <Link
        href={"https://www.linkedin.com/in/samuel-olumorin/"}
        target="_blank"
      >
        <FiLinkedin />
      </Link>
      <Link href={"https://github.com/oluSammy"} target="_blank">
        <FiGithub />
      </Link>
      <Link href={"https://www.instagram.com/samueldii/"} target="_blank">
        <FaInstagram />
      </Link>
      <Link href={"https://x.com/olusamayor"} target="_blank">
        <CiTwitter />
      </Link>
      <div className="w-[1px] h-32 bg-gray-550" />
    </div>
  );
};

export default Hero;
