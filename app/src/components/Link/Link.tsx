import { LinkProps } from "../../entities/entities";

export const Link = ({
  children,
  linkText,
  onClick,
}: LinkProps): JSX.Element => {
  return (
    <div
      className="flex flex-row relative items-center justify-start h-12 w-full bg-primaryPurpure rounded-lg mb-2 p-2 transition hover:bg-opacity-60 active:scale-95 "
      onClick={onClick}
    >
      {children}
      <h2 className="text-white cursor-pointer text-base text-center w-full">
        {linkText}
      </h2>
    </div>
  );
};
