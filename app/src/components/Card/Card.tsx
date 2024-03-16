import { TbPinnedFilled } from "react-icons/tb";
import { CardProps } from "../../entities/entities";
import { useCheckMobileScreen } from "../../hooks/useCheckMobileScreen";
import { useUiStore } from "../../hooks/useUiStore";
import { Suspense, lazy } from "react";
import { Loader } from "../Loader/Loader";
import { useProfileStore } from "../../hooks/useProfileStore";
import { ButtonPublication } from "../ButtonPublication/ButtonPublication";
import { AiFillGithub, AiOutlineShareAlt } from "react-icons/ai";
import { parseDate } from "../../helpers/parseDate";
import { useRouter } from "../../hooks/useRouter";
import { openInNewTab } from "../../helpers/openInNewTab";

const Image = lazy(() => import("../Image/Image"));

const Card = ({ api }: CardProps): JSX.Element => {
  const { theme, handleSetAlert } = useUiStore();
  const { profile } = useProfileStore();
  const { isMobile } = useCheckMobileScreen();
  const { redirectTo } = useRouter();

  const onUsernameClick = (
    e: React.MouseEvent<HTMLHeadElement, MouseEvent>
  ): void => {
    e.preventDefault();
    e.stopPropagation();
    redirectTo("/feed/1");
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
        url: window.location.origin + `/#/apis/1`,
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
      className={`flex flex-row justify-start relative py-2 pl-2 pr-5 mt-2 rounded-lg cursor-pointer ${
        api?.isPinned && "flex-wrap"
      } ${
        theme && !isMobile
          ? "hover:bg-hoverGray3"
          : !theme && !isMobile
          ? "hover:bg-hoverGray2"
          : theme && isMobile
          ? "bg-hoverGray3 m-2"
          : "bg-hoverGray2 m-2"
      }`}
    >
      {api?.avatarLanguage ? (
        <Image
          src={api?.avatarLanguage}
          alt={api?.avatarLanguage}
          className={`absolute top-2 right-2 object-cover flex items-center justify-center h-7 w-7 rounded-full p-1 ml-2 ${
            theme ? "bg-trGray" : "bg-secondaryGray"
          }`}
          width={"100%"}
          height={"100%"}
        ></Image>
      ) : null}

      {api?.isPinned ? (
        <div className="flex flex-row items-center w-full mb-1">
          <TbPinnedFilled size={20} color={"#868E96"}></TbPinnedFilled>
          <p className="text-xs text-[#868E96] pl-1">Pinned Cheep</p>
        </div>
      ) : null}

      <div className="flex flex-row items-start justify-center w-[10%]">
        <Suspense
          fallback={<Loader className="h-9 w-9 mt-1 md:h-12 md:w-12"></Loader>}
        >
          <Image
            src={profile.avatar}
            alt="Diego Libonati"
            className="rounded-full h-9 w-9 mt-1 md:h-12 md:w-12 object-cover"
            width={"100%"}
            height={"100%"}
          ></Image>
        </Suspense>
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
              • {parseDate(api?.date).date}
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-1 w-full">
          <h2
            className={`text-lg font-bold md:text-2xl ${
              theme ? "text-black" : "text-white"
            }`}
          >
            {api?.title}
          </h2>

          <p
            className={`text-sm mt-1 font-semibold md:text-base  ${
              theme ? "text-black" : "text-white"
            }`}
          >
            Version: {api?.version}
          </p>

          <p
            className={`text-base mt-1 md:text-lg  ${
              theme ? "text-black" : "text-white"
            }`}
          >
            {api?.description}
          </p>
        </div>

        <div className="flex flex-row items-center justify-start w-full mt-2 mr-2 relative">
          <ButtonPublication
            hasMargin={true}
            id={`button-${api?.id}`}
            onClick={(e) => onCopyClipboard(e)}
            arialLabel="Share"
          >
            <AiOutlineShareAlt
              size={30}
              color={"#495057"}
              className={"hover:fill-primaryPurpure"}
            ></AiOutlineShareAlt>
          </ButtonPublication>

          {api?.github ? (
            <ButtonPublication
              hasMargin={true}
              id={`button-${api?.github}-${api.id}`}
              onClick={(e) => onGithubClick(e, api!.github!)}
              arialLabel="GitHub"
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

export default Card;
