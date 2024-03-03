import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useUiStore } from "../../hooks/useUiStore";
import { PaginatorProps } from "../../entities/entities";
import { ButtonPaginator } from "../ButtonPaginator/ButtonPaginator";

export const Paginator = ({
  actualPage,
  elementsToRender,
  allElementsToRender,
  handleSetPage,
}: PaginatorProps): JSX.Element => {
  const { theme } = useUiStore();

  return (
    <article className="flex flex-row items-center justify-center w-full mt-2">
      {allElementsToRender.length > 3 ? (
        <ButtonPaginator
          actualPage={actualPage}
          element={allElementsToRender[0]}
          handleSetPage={handleSetPage}
          key={22 * 50}
          arialLabel={`page-${allElementsToRender[0]}`}
        ></ButtonPaginator>
      ) : null}

      <FaChevronLeft
        size={25}
        className={`mx-1 cursor-pointer ${
          theme ? "hover:fill-black" : "hover:fill-white"
        }`}
        fill={theme ? "#e9e9e9" : "#212529"}
        onClick={() => handleSetPage(actualPage - 1)}
      ></FaChevronLeft>

      <div className="flex flex-wrap items-center justify-center">
        {elementsToRender.map((element: number, index: number) => {
          return (
            <ButtonPaginator
              actualPage={actualPage}
              element={element}
              handleSetPage={handleSetPage}
              key={index * 50}
              arialLabel={`page-${element}`}
            ></ButtonPaginator>
          );
        })}
      </div>
      <FaChevronRight
        size={25}
        className={`mx-1 cursor-pointer ${
          theme ? "hover:fill-black" : "hover:fill-white"
        }`}
        fill={theme ? "#e9e9e9" : "#212529"}
        onClick={() => handleSetPage(actualPage + 1)}
      ></FaChevronRight>

      {allElementsToRender.length > 3 ? (
        <ButtonPaginator
          actualPage={actualPage}
          element={allElementsToRender[allElementsToRender.length - 1]}
          handleSetPage={handleSetPage}
          key={22 * 50}
          arialLabel={`page-${
            allElementsToRender[allElementsToRender.length - 1]
          }`}
        ></ButtonPaginator>
      ) : null}
    </article>
  );
};
