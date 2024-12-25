import React from "react";
import Navigation from "../Navigation/Navigation";
import { FiLinkedin } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-primary-100 font-brolimo relative">
      <Navigation />

      <div className="container mx-auto mt-48 ">
        <div className="ml-32">
          <div>
            <h4 className="text-green-100 text-2xl">Hi, my name is</h4>
            <h1 className="text-6xl font-normal text-white">Samuel Olumorin</h1>
            <h2 className="text-2xl font-normal text-white">
              Software Engineer
            </h2>
          </div>

          <p className="text-5xl font-extralight font-outfit text-gray-50 mt-16 ">
            I build scalable solutions, <br /> one line of code at a <br />{" "}
            time.
          </p>
        </div>
      </div>
      <Socials />
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-green-100 flex items-center justify-center rounded-full cursor-pointer">
        <div className="w-8 h-8 bg-black flex items-center justify-center rounded-full">
          <FaArrowDown className="text-green-100" />
        </div>
      </div>
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
