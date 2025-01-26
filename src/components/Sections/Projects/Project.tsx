import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  github: string[];
  link: string;
  image: string;
  bg: string;
  useDefaultColor?: boolean;
};

const Project = ({
  description,
  github,
  link,
  image,
  technologies,
  name,
  bg,
  useDefaultColor = true,
}: Project) => {
  return (
    <div className="p-3 bg-blue-55 border border-gray-75 z-20 mb-20 hover:bg-green-15 group transition-all duration-700 rounded-2xl">
      <div
        className={`px-8 pt-8 rounded-2xl border z-20 border-gray-75`}
        style={{
          backgroundImage: bg,
        }}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-blue-50 lg:text-3xl text-xl font-normal">
            {name}
          </h3>

          <div
            className={`flex items-center lg:gap-x-4 gap-x-2 ${
              useDefaultColor ? "text-green-100" : "text-black"
            }`}
          >
            {github.map((link) => (
              <Link
                key={link}
                href={link}
                target="_blank"
                className="hover:scale-110 transition-all duration-300"
              >
                <LuGithub className="lg:text-2xl text-xl" />
              </Link>
            ))}
            <Link
              href={link}
              target="_blank"
              className="hover:scale-110 transition-all duration-300"
            >
              <LuExternalLink className="lg:text-2xl text-xl" />
            </Link>
          </div>
        </div>
        <p className="text-gray-150 font-outfit text-sm">{description}</p>
        <ul
          className={`flex flex-wrap ${
            useDefaultColor
              ? "text-green-50 group-hover:text-green-500"
              : "text-black"
          }  items-center lg:gap-x-8 gap-x-4 ml-4 mt-2 list-disc lg:group-hover:translate-y-20 lg:group-hover:translate-x-[600px] transition-all duration-700`}
        >
          {technologies.map((technology) => (
            <li key={technology} className="font-outfit lg:text-sm text-xs">
              {technology}
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-20">
          <figure className="mt-8 z-10  group-hover:translate-x-2 transition-all duration-700">
            <Image
              src={image}
              alt={name}
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
