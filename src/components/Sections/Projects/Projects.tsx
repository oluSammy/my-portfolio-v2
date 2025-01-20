import React from "react";
import Header from "@/components/Header/Header";
import Project from "./Project";
const Projects = () => {
  return (
    <div className="bg-primary-100 py-40">
      <div className="container mx-auto">
        <div className="flex items-center gap-x-8 mb-20">
          <p className="h-[1px] flex-1 bg-gray-650"></p>
          <Header title="Projects" className="px-8 py-4" />
        </div>
        <Project />
      </div>
    </div>
  );
};

export default Projects;
