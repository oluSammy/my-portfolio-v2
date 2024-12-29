/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { CSSProperties, useEffect, useRef, useState } from "react";
import Navigation from "../Navigation/Navigation";
import { FiLinkedin } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web";

const repeatCount = 3;
const AnimatedDiv = animated(`div`);

const Hero = () => {
  const counter = useRef(0);

  const pages: ((
    props: AnimatedProps<{ style: CSSProperties }>
  ) => React.ReactElement)[] = [
    ({ style }) => <AnimatedDiv style={{ ...style }}>Software</AnimatedDiv>,
    ({ style }) => <AnimatedDiv style={{ ...style }}>Backend</AnimatedDiv>,
    ({ style }) => <AnimatedDiv style={{ ...style }}>Frontend</AnimatedDiv>,
    ({ style }) => <AnimatedDiv style={{ ...style }}>Fullstack</AnimatedDiv>,
  ];

  const [index, set] = useState(0);

  useEffect(() => {
    setInterval(() => {
      set((state) => (state + 1) % 3);
    }, 4000);
  }, []);

  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(0,0%,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0%,0)" },
    leave: { opacity: 0, transform: "translate3d(0,0%,0)" },
    // from: { opacity: 0 },
    // enter: { opacity: 1 },
    // leave: { opacity: 1 },
  });
  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <div className="h-screen w-full bg-primary-100 font-brolimo relative">
      <Navigation />

      <div className="container mx-auto mt-48 ">
        <div className="ml-32">
          <div className="mb-10">
            <h4 className="text-green-100 text-2xl">Hi, my name is</h4>
            <h1 className="text-6xl font-normal text-white">Samuel Olumorin</h1>

            <h2 className="text-2xl font-normal text-white flex items-start gap-x-2">
              <div>
                {transitions((style, i) => {
                  const Page = pages[i];
                  return <Page style={style} />;
                })}
              </div>{" "}
              <span>Engineer</span>
            </h2>
          </div>

          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
            }}
            className="text-5xl font-extralight font-outfit text-gray-50 mt-16"
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
