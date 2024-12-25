import React from "react";

const Logo = () => {
  return (
    <div className="relative">
      <LogoEdge className="-bottom-1 -right-1" />
      <LogoEdge className="-top-1 -right-1" />
      <LogoEdge className="-bottom-1 -left-1" />
      <LogoEdge className="-top-1 -left-1" />
      <p className="text-white font-extrabold text-[26px] border-2 px-4 py-2 leading-[29px] border-white ">
        SO
      </p>
    </div>
  );
};

const LogoEdge = ({ className }: { className: string }) => {
  return (
    <div
      className={`${className} absolute w-3 border-white border-2 h-3 bg-primary-100`}
    >
      &nbsp;
    </div>
  );
};

export default Logo;
