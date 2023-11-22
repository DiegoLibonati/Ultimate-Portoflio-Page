import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useUiStore } from "../../hooks/useUiStore";
import { PaginatorType } from "../../entities/types";
import { ButtonPaginator } from "../ButtonPaginator/ButtonPaginator";

export const Paginator = ({
  actualPage,
  elementsToRender,
  handleSetPage,
}: PaginatorType): JSX.Element => {
  const { theme } = useUiStore();

  return (
    <article className="flex flex-row items-center justify-center w-full mt-2">
      <FaChevronLeft
        size={25}
        className={`mx-1 cursor-pointer ${
          theme ? "hover:fill-black" : "hover:fill-white"
        }`}
        fill={theme ? "#e9e9e9" : "#212529"}
        onClick={() => handleSetPage(actualPage - 1)}
      ></FaChevronLeft>
      {elementsToRender.map((element: number, index: number) => {
        return (
          <ButtonPaginator
            actualPage={actualPage}
            element={element}
            handleSetPage={handleSetPage}
            key={index * 50}
          ></ButtonPaginator>
        );
      })}
      <FaChevronRight
        size={25}
        className={`mx-1 cursor-pointer ${
          theme ? "hover:fill-black" : "hover:fill-white"
        }`}
        fill={theme ? "#e9e9e9" : "#212529"}
        onClick={() => handleSetPage(actualPage + 1)}
      ></FaChevronRight>
    </article>
  );
};
