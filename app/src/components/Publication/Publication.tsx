import { TbPinnedFilled } from "react-icons/tb";
import { AiFillGithub, AiOutlineShareAlt } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import { useProfileStore } from "../../hooks/useProfileStore";
import { ButtonPublication } from "../ButtonPublication/ButtonPublication";
import { useRouter } from "../../hooks/useRouter";
import { PublicationComponentType } from "../../entities/types";
import { parseDate } from "../../helpers/parseDate";
import { useUiStore } from "../../hooks/useUiStore";
import { useCheckMobileScreen } from "../../hooks/useCheckMobileScreen";
import { useTruncate } from "../../hooks/useTruncate";
import { openInNewTab } from "../../helpers/openInNewTab";

export const Publication = ({
  section,
  publication,
}: PublicationComponentType): JSX.Element => {
  const { profile } = useProfileStore();
  const { redirectTo } = useRouter();
  const { theme, handleSetAlert } = useUiStore();
  const { isMobile } = useCheckMobileScreen();
  const { readMore, shouldTruncate, elementRef, setReadMore } = useTruncate({
    propertyValue: "line-height",
    fontType: "px",
  });

  const onUsernameClick = (
    e: React.MouseEvent<HTMLHeadElement, MouseEvent>
  ): void => {
    e.preventDefault();
    e.stopPropagation();
    redirectTo("/feed/1");
    return;
  };

  const onPublicationClick = (): void => {
    redirectTo(`/${section}/${publication?.id}`);
    return;
  };

  const onCopyClipboard = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.share({
        title: "Diego Libonati",
        text: "Diego Libonati Portfolio!",
        url: window.location.origin + `/#/${section}/${publication?.id}`,
      });
      handleSetAlert(
        true,
        "¡It is successfully copied to your clipboard!",
        "Success"
      );
    } catch (err) {
      alert(err);
      handleSetAlert(
        true,
        "¡Could not copy link successfully to your clipboard!",
        "Error"
      );
    }
    return;
  };

  const onGithubClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    link: string
  ): Promise<void> => {
    e.preventDefault();
    e.stopPropagation();
    openInNewTab(link);
    return;
  };

  return (
    <article
      className={`flex flex-row justify-start py-2 pl-2 pr-5 mt-2 rounded-lg cursor-pointer ${
        publication?.isPinned && "flex-wrap"
      } ${
        theme && !isMobile
          ? "hover:bg-hoverGray3"
          : !theme && !isMobile
          ? "hover:bg-hoverGray2"
          : theme && isMobile
          ? "bg-hoverGray3 m-2"
          : "bg-hoverGray2 m-2"
      }`}
      onClick={onPublicationClick}
    >
      {publication?.isPinned ? (
        <div className="flex flex-row items-center w-full mb-1">
          <TbPinnedFilled size={20} color={"#868E96"}></TbPinnedFilled>
          <p className="text-xs text-[#868E96] pl-1">Pinned Cheep</p>
        </div>
      ) : null}

      <div className="flex flex-row items-start justify-center w-[10%]">
        <img
          src={profile.avatar}
          alt="Diego Libonati"
          className="rounded-full h-9 w-9 mt-1 md:h-12 md:w-12 object-cover"
        ></img>
      </div>

      <div className="flex flex-col items-center justify-start w-[90%] pl-2">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row items-center justify-start">
            <h2
              className={`text-sm font-bold hover:underline hover:underline-offset-2 cursor-pointer ${
                theme ? "text-black" : "text-white"
              }`}
              onClick={(e) => onUsernameClick(e)}
            >
              {profile.username}{" "}
            </h2>
            <p className="text-xs text-primaryGray font-normal ml-2">
              • {parseDate(publication?.date).date}
            </p>
          </div>
          <div>
            <p
              className={`inline-block text-xs font-bold mt-1  rounded-full py-1 px-4 md:text-sm ${
                theme ? "bg-trGray text-black" : "bg-secondaryGray text-white"
              }`}
            >
              {publication?.status}
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-1 w-full">
          <h2
            className={`text-lg font-bold md:text-2xl ${
              theme ? "text-black" : "text-white"
            }`}
          >
            {publication?.title}
          </h2>
          <p
            className={`text-base mt-1 md:text-lg ${
              shouldTruncate && !readMore ? "line-clamp-3" : "line-clamp-none"
            } ${theme ? "text-black" : "text-white"}`}
            ref={elementRef}
          >
            {publication?.description}
          </p>
          {shouldTruncate && (
            <button
              className={
                "text-primaryPurpure text-start text-base font-semibold md:text-lg hover:underline"
              }
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setReadMore(!readMore);
              }}
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
          )}
        </div>

        <div className="flex flex-col w-full mt-1 relative">
          <div className="flex items-center justify-center relative w-full">
            <img
              src={publication?.link}
              alt={"Diego Libonati"}
              className="relative z-20 rounded-lg w-full min-h-[11.25rem] max-h-52 object-cover md:max-h-96 md:min-h-[21.25rem] hover:opacity-25 transition-opacity"
            ></img>
            <h2
              className={`absolute z-10 text-md text-center truncate ${
                theme ? "text-black" : "text-white"
              }`}
            >
              {publication?.title}
            </h2>
          </div>
          {publication?.ubication ? (
            <div className="flex flex-row items-center justify-start mt-2">
              <SiGooglemaps size={15} color="#868E96"></SiGooglemaps>
              <h2 className="text-primaryGray text-xs ml-1">
                {publication?.ubication}
              </h2>
            </div>
          ) : null}
        </div>
        <div className="flex flex-row items-center justify-end w-full mt-2 mr-2 relative">
          <ButtonPublication
            hasMargin={true}
            id="copy_link"
            onClick={(e) => onCopyClipboard(e)}
          >
            <AiOutlineShareAlt
              size={30}
              color={"#495057"}
              className={"hover:fill-primaryPurpure"}
            ></AiOutlineShareAlt>
          </ButtonPublication>

          {publication?.github ? (
            <ButtonPublication
              hasMargin={true}
              id="copy_link"
              onClick={(e) => onGithubClick(e, publication!.github!)}
            >
              <AiFillGithub
                size={30}
                color={"#495057"}
                className={"hover:fill-primaryPurpure"}
              ></AiFillGithub>
            </ButtonPublication>
          ) : null}
        </div>
      </div>
    </article>
  );
};
