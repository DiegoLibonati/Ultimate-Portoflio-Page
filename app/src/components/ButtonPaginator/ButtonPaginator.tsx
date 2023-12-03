import { ButtonPaginatorType } from "../../entities/types";
import { useUiStore } from "../../hooks/useUiStore";

export const ButtonPaginator = ({
  actualPage,
  element,
  handleSetPage,
}: ButtonPaginatorType): JSX.Element => {
  const { theme } = useUiStore();

  return (
    <button
      className={`text-center text-lg h-10 w-10 mx-1 font-semibold rounded-lg ${
        !theme && actualPage === element
          ? "text-black bg-primaryWhite"
          : !theme && actualPage !== element
          ? "text-white bg-hoverGray2 hover:text-black hover:bg-primaryWhite"
          : theme && actualPage === element
          ? "text-white bg-primaryBlack"
          : "text-black bg-hoverGray3 hover:text-white hover:bg-primaryBlack"
      }`}
      onClick={() => handleSetPage(Number(element))}
    >
      {element}
    </button>
  );
};
