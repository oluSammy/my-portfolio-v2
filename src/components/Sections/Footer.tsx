import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { CiInstagram, CiMail, CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const ExternalLink = ({
  link,
  icon,
  label,
}: {
  link: string;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="glass flex items-center gap-2 w-fit px-4 py-2 rounded-lg text-gray-250 text-sm font-outfit"
    >
      {icon}
      {label}
      <FaLongArrowAltUp className="text-green-100 rotate-45 text-xs" />
    </a>
  );
};

const Footer = () => {
  return (
    <div className="container mx-auto lg:px-0 px-8">
      <div className="glass glass-border px-10 py-10 rounded-xl">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <ExternalLink
            link="mailto:olumorinsammy@gmail.com"
            icon={<CiMail />}
            label="olumorinsammy@gmail.com"
          />
          <ExternalLink
            link="https://github.com/olusammy"
            icon={<LuGithub />}
            label="Github"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <ExternalLink
            link="https://www.linkedin.com/in/samuel-olumorin/"
            icon={<CiLinkedin />}
            label="LinkedIn"
          />
          <ExternalLink
            link="https://x.com/olusamayor"
            icon={<CiTwitter />}
            label="X"
          />
          <ExternalLink
            link="https://www.instagram.com/samueldii"
            icon={<CiInstagram />}
            label="Instagram"
          />
        </div>
      </div>

      <p className="text-gray-250 text-sm font-outfit mt-8"></p>
    </div>
  );
};

export default Footer;
