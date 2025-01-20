import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";

const Project = () => {
  return (
    <div className="p-3 bg-blue-55 border border-gray-75 z-20 hover:bg-green-15 group transition-all duration-700 rounded-2xl">
      <div className="project-bg px-8 pt-8 rounded-2xl border z-20 border-gray-75">
        <div className="flex items-center justify-between">
          <h3 className="text-blue-50 text-3xl font-normal">MusicBox</h3>

          <div className="flex items-center gap-x-4 text-green-100">
            <Link
              href=""
              target="_blank"
              className="hover:scale-110 transition-all duration-300"
            >
              <LuGithub className="text-2xl" />
            </Link>
            <Link
              href=""
              target="_blank"
              className="hover:scale-110 transition-all duration-300"
            >
              <LuExternalLink className="text-2xl" />
            </Link>
          </div>
        </div>
        <p className="text-gray-150 font-outfit text-sm">
          Listen to music, create playlist, browse artists, and songs{" "}
        </p>
        <ul className="flex items-center gap-x-8 ml-4 mt-2 list-disc group-hover:translate-y-20 group-hover:translate-x-[800px] transition-all duration-700">
          <li className="text-green-50 font-outfit text-sm">Node.js</li>
          <li className="text-green-50 font-outfit text-sm">MongoDB</li>
          <li className="text-green-50 font-outfit text-sm">React.js</li>
        </ul>

        <div className="flex justify-center mt-20">
          <figure className="mt-8 z-10  group-hover:translate-x-2 transition-all duration-700">
            <Image
              src="/music-box.png"
              alt="MusicBox"
              width={1000}
              height={1000}
              className="rounded-t-2xl border-x border-t border-gray-75"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Project;
