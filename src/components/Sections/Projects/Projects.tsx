import React from "react";
import Header from "@/components/Header/Header";
import Project from "./Project";

const projects = [
  {
    name: "MusicBox",
    description: "Listen to music, create playlist, browse artists, and songs",
    technologies: [
      "Node.js",
      "MongoDB",
      "React.js",
      "Express.js",
      "Deezer API",
    ],
    github: [
      "https://github.com/oluSammy/music-box-api",
      "https://github.com/oluSammy/music-box-client",
    ],
    link: "https://themusicbox.netlify.app",
    image: "/music-box.png",
    bg: "radial-gradient(circle, rgba(37,37,37,1) 7%, rgba(16,16,16,1) 85%)",
  },
  {
    name: "Waz Academy",
    description:
      "An innovative, accessible, and professional online training institution for individuals with a keen interest in audiovisuals, cultural, and media professions.",
    technologies: ["Node.js", "MongoDB", "React.js", "Express.js"],
    github: ["https://github.com/muzz-code/wazobia-academy-node"],
    link: "https://www.wazobiaacademy.com/",
    image: "/waz-academy.png",
    bg: "linear-gradient(to right top, #c45bf9, #a539a4, #75245f, #3f172b, #000000)",
  },
  {
    name: "ValutWay",
    description:
      "Fintech turning savings into lifestyle and Meeting your financial goals",
    technologies: ["React.js", "Material UI", "Node.js", "Express.js"],
    github: ["https://github.com/oluSammy/Vault-way"],
    link: "https://vaultway.netlify.app/",
    image: "/vaultway.png",
    bg: "linear-gradient(to right top, #02411b, #0e6c34, #1d9a4e, #2ccc6b, #3bff89);",
    useDefaultColor: false,
  },
  {
    name: "Tap Ready",
    description: "Powering Contactless Payments on NFC enabled devices",
    technologies: ["Next.js", "Tailwind CSS"],
    github: ["https://github.com/oluSammy/tapReady-app"],
    link: "https://tapready.netlify.app/",
    image: "/vaultway.png",
    bg: "linear-gradient(to left bottom, #030303, #0c161e, #00252e, #003531, #0f4324)",
  },
];

const Projects = () => {
  return (
    <div className="bg-primary-100 py-40">
      <div className="container mx-auto lg:px-0 px-5">
        <div className="flex items-center gap-x-8 mb-20">
          <p className="h-[1px] flex-1 bg-gray-650"></p>
          <Header title="Projects" className="lg:px-8 lg:py-4 px-4 py-2" />
        </div>
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
