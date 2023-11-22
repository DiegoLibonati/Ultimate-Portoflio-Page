import { ButtonPublicationType } from "../../entities/types";
import { useUiStore } from "../../hooks/useUiStore";

export const ButtonPublication = ({
  hasMargin,
  children,
  onClick,
  onMouseDown,
  onMouseEnter,
  onTouchStart,
}: ButtonPublicationType): JSX.Element => {
  const { theme } = useUiStore();
  return (
    <div
      className={`flex flex-row items-center justify-center cursor-pointer p-1 rounded-lg transition-all active:scale-50 ${
        hasMargin ? "mr-1" : ""
      } ${theme ? "hover:bg-hoverGray4" : "hover:bg-hoverGray"}`}
      onClick={() => onClick!()}
      onMouseDown={(e) => onMouseDown!(e)}
      onMouseEnter={() => onMouseEnter!()}
      onTouchStart={() => onTouchStart!()}
    >
      {children}
    </div>
  );
};
