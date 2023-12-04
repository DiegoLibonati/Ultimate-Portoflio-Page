import { TabType } from "../../entities/types";
import { useRouter } from "../../hooks/useRouter";
import { useUiStore } from "../../hooks/useUiStore";

export const Tab = ({ tabRoute, tabText, index }: TabType): JSX.Element => {
  const { pathIsActive, redirectTo } = useRouter();
  const { theme } = useUiStore();

  return (
    <article
      className={`flex items-center justify-center w-full py-3 cursor-pointer ${
        index === 3 ? "col-span-3" : "col-span-1"
      } ${
        pathIsActive.includes(tabText.toLowerCase()) &&
        `border-b-[0.15rem] border-primaryPurpure ${theme && "text-black"}`
      } ${
        theme ? "hover:bg-hoverGray3" : "hover:bg-hoverGray"
      }  hover:bg-opacity-60`}
      onClick={(): void => redirectTo(tabRoute)}
    >
      <h2
        className={`font-bold text-sm ${theme ? "text-trGray" : "text-white"}`}
      >
        {tabText}
      </h2>
    </article>
  );
};
