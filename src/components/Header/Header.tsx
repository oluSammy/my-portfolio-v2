import { FaArrowDown } from "react-icons/fa6";

const Header = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex items-center gap-8 bg-green-100 w-fit px-4 py-2 rounded-full ${className}`}
    >
      <span className="uppercase text-black text-xs font-outfit font-semibold">
        {title}
      </span>
      <div className="w-8 h-8 bg-black flex items-center justify-center rounded-full">
        <FaArrowDown className="text-green-100" />
      </div>
    </div>
  );
};

export default Header;
