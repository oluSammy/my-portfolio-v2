import Header from "@/components/Header/Header";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-white py-20">
      <div className="container px-2 md:px-0 mx-auto grid grid-cols-12 gap-0 md:gap-10 ">
        <div className="md:col-span-6 col-span-12">
          <div className="flex items-center gap-x-8">
            <Header title="About Me" />
            <p className="h-[1px] w-2/5 md:w-3/6 bg-gray-650"></p>
          </div>

          <div className="mt-12 px-2">
            <p className="text-black text-xl font-extralight font-outfit text-justify">
              When I’m not diving into code, I’m constantly seeking ways to
              challenge the norm and deliver beyond expectations. My work spans
              a variety of industries, from education to blockchain, where I’ve
              spearheaded projects that simplify workflows, inspire
              collaboration, and enhance performance. I believe every line of
              code tells a story—a story of problem-solving, precision, and a
              relentless drive to make the world a little bit better with
              technology.
            </p>
            <p className="text-black text-xl font-extralight font-outfit text-justify mt-8">
              I’m an optimist at heart, inspired by the belief that what we’ve
              achieved so far is just the beginning of what can be accomplished.
            </p>
          </div>
        </div>
        <div className="md:col-span-6 col-span-12 md:mt-0 mt-20 flex justify-center items-center">
          <figure className="h-[600px] md:w-[500px] sm:w-[350px] w-[320px]">
            <div className="h-full w-full bg-black rounded-2xl">
              <Image
                src="/olumorin-samuel.JPG"
                alt="olumorin-samuel"
                width={500}
                height={500}
                className="h-full w-full object-cover rounded-2xl translate-x-4 -translate-y-4"
              />
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default About;
