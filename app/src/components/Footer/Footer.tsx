import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { links } from "../../constants/links";
import { useUiStore } from "../../hooks/useUiStore";

export const Footer = (): JSX.Element => {
  const { theme } = useUiStore();
  return (
    <footer
      className={`flex flex-col w-full justify-center items-center py-8 ${
        theme ? "bg-primaryWhite" : "bg-primaryBlack"
      }`}
    >
      <div className="flex flex-row items-center justify-around w-[25%]">
        <a
          href={links.github}
          target="_blank"
          className="cursor-pointer transition-all active:scale-50"
        >
          <AiFillGithub
            color={theme ? "#000" : "#dee2e6"}
            size={35}
            className={`p-1 rounded-lg cursor-pointer ${
              theme ? "hover:bg-hoverGray4" : "hover:bg-hoverGray2"
            }`}
          ></AiFillGithub>
        </a>

        <a
          href={links.linkedin}
          target="_blank"
          className="cursor-pointer transition-all active:scale-50"
        >
          <AiOutlineLinkedin
            color={theme ? "#000" : "#dee2e6"}
            className={`p-1 rounded-lg cursor-pointer ${
              theme ? "hover:bg-hoverGray4" : "hover:bg-hoverGray2"
            }`}
            size={35}
          ></AiOutlineLinkedin>
        </a>

        <a
          href={links.instagram}
          target="_blank"
          className="cursor-pointer transition-all active:scale-50"
        >
          <AiOutlineInstagram
            color={theme ? "#000" : "#dee2e6"}
            size={35}
            className={`p-1 rounded-lg cursor-pointer ${
              theme ? "hover:bg-hoverGray4" : "hover:bg-hoverGray2"
            }`}
          ></AiOutlineInstagram>
        </a>
      </div>
      <h2
        className={`text-xs font-normal mt-1 ${
          theme ? "text-black" : "text-secondaryGray"
        }`}
      >
        Diego Libonati © 2023
      </h2>
    </footer>
  );
};
