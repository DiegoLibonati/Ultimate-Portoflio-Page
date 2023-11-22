import { LinkType } from "../../entities/types";
import { openInNewTab } from "../../helpers/openInNewTab";

export const Link = ({ children, linkText, link }: LinkType): JSX.Element => {
  const onClickLink = (): void => {
    openInNewTab(link);
    return;
  };

  return (
    <div
      className="flex flex-row relative items-center justify-start h-12 w-full bg-primaryPurpure rounded-lg mb-2 p-2 transition hover:bg-opacity-60 active:scale-95 "
      onClick={onClickLink}
    >
      {children}
      <h2 className="text-white cursor-pointer text-base text-center w-full">
        {linkText}
      </h2>
    </div>
  );
};
