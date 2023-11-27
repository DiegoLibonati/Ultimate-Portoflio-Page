import { ButtonPublicationType } from "../../entities/types";
import { useUiStore } from "../../hooks/useUiStore";

export const ButtonPublication = ({
  id,
  hasMargin,
  children,
  onClick,
}: ButtonPublicationType): JSX.Element => {
  const { theme } = useUiStore();
  return (
    <button
      className={`flex flex-row relative z-[100] items-center justify-center cursor-pointer p-1 rounded-lg transition-all active:scale-50 ${
        hasMargin ? "mr-1" : ""
      } ${theme ? "hover:bg-hoverGray4" : "hover:bg-hoverGray"}`}
      onClick={(e) => onClick!(e)}
      id={id}
      type="button"
    >
      {children}
    </button>
  );
};
