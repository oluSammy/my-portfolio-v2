import { FaArrowDown } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex items-center gap-8 bg-green-100 w-fit px-4 py-2 rounded-full">
      <span className="uppercase text-black text-xs font-outfit font-semibold">
        About Me
      </span>
      <div className="w-8 h-8 bg-black flex items-center justify-center rounded-full">
        <FaArrowDown className="text-green-100" />
      </div>
    </div>
  );
};

export default Header;
