import { ButtonPublicationProps } from "../../entities/entities";
import { useUiStore } from "../../hooks/useUiStore";

export const ButtonPublication = ({
  id,
  hasMargin,
  children,
  arialLabel,
  onClick,
}: ButtonPublicationProps): JSX.Element => {
  const { theme } = useUiStore();
  return (
    <button
      className={`flex flex-row relative z-[100] items-center justify-center cursor-pointer p-1 rounded-lg transition-all active:scale-50 ${
        hasMargin ? "mr-1" : ""
      } ${theme ? "hover:bg-hoverGray4" : "hover:bg-hoverGray"}`}
      onClick={(e) => onClick!(e)}
      id={id}
      type="button"
      aria-label={arialLabel}
    >
      {children}
    </button>
  );
};
