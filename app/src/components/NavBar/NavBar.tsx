import { images } from "../../assets/exports";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useScroll } from "../../hooks/useScroll";
import { useRouter } from "../../hooks/useRouter";
import { links } from "../../constants/links";
import { useUiStore } from "../../hooks/useUiStore";
import "./NavBar.css";

export const NavBar = (): JSX.Element => {
  const { scrolled } = useScroll();
  const { redirectTo } = useRouter();
  const { theme, handleSetTheme } = useUiStore();

  const onClickImage = (): void => {
    redirectTo(links.portfolio);
    return;
  };

  return (
    <header className={"sticky left-0 top-0 w-full h-[3.75rem] z-[9999]"}>
      <nav
        className={
          !scrolled
            ? `flex items-center justify-between w-full h-full px-1 transition-background ${
                theme ? "bg-primaryWhite" : "bg-primaryBlack"
              }`
            : "blur-background transition-background"
        }
      >
        <button
          className="flex items-center justify-center w-9 h-9 rounded-lg active:bg-neutral-400 active:bg-opacity-40"
          onClick={onClickImage}
        >
          <img
            src={theme ? images.lightDl : images.nightDL}
            alt="DiegoLibonati"
            className="h-full w-full object-cover"
          ></img>
        </button>
        <button
          className={`flex items-center justify-center w-9 h-9 rounded-lg active:bg-opacity-40 active:bg-neutral-400`}
          onClick={() => handleSetTheme()}
        >
          {theme ? (
            <BsFillSunFill color="#000" size={18}></BsFillSunFill>
          ) : (
            <BsFillMoonFill color="#fff" size={18}></BsFillMoonFill>
          )}
        </button>
      </nav>
    </header>
  );
};
