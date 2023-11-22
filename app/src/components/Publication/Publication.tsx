import { TbPinnedFilled } from "react-icons/tb";
import { AiOutlineHeart, AiOutlineShareAlt, AiFillHeart } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import { useProfileStore } from "../../hooks/useProfileStore";
import { ButtonPublication } from "../ButtonPublication/ButtonPublication";
import { useRouter } from "../../hooks/useRouter";
import { PublicationComponentType } from "../../entities/types";
import { parseDate } from "../../helpers/parseDate";
import { useLikes } from "../../hooks/useLikes";
import { useEffect, useState } from "react";
import { useUiStore } from "../../hooks/useUiStore";
import { useHost } from "../../hooks/useHost";
import { useCheckMobileScreen } from "../../hooks/useCheckMobileScreen";
import { images } from "../../assets/exports";

export const Publication = ({
  publication,
}: PublicationComponentType): JSX.Element => {
  const [preventClick, setPreventClick] = useState<boolean>(false);
  const [wasLike, setWasLike] = useState<boolean>(false);

  const { profile } = useProfileStore();
  const { redirectTo } = useRouter();
  const { buttonEffect, handleSetLikes } = useLikes({
    idPublication: publication?.id,
  });
  const { theme, handleSetAlert } = useUiStore();
  const { hostname, protocol, port } = useHost();
  const { isMobile } = useCheckMobileScreen();

  const onUsernameClick = (): void => {
    redirectTo("/feed");
    return;
  };

  const onPublicationClick = (): void => {
    if (!preventClick) {
      redirectTo(`/publication/${publication?.id}`);
      return;
    }
    return;
  };

  useEffect(() => {
    if (preventClick && isMobile) {
      const timeout = setTimeout(() => {
        setPreventClick(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [isMobile, preventClick]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWasLike(false);
    }, 1750);

    return () => clearTimeout(timeout);
  }, [wasLike]);

  return (
    <article
      className={`flex flex-row justify-start p-2 mt-2 rounded-lg cursor-pointer ${
        publication?.isPinned && "flex-wrap"
      } ${theme ? "hover:bg-hoverGray3" : "hover:bg-hoverGray2"}`}
      onClick={onPublicationClick}
      onMouseEnter={() => setPreventClick(false)}
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
              onClick={() => onUsernameClick()}
              onMouseEnter={() => setPreventClick(true)}
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
              theme ? "text-black" : "text-white"
            }`}
          >
            {publication?.description}
          </p>
        </div>

        <div className="flex flex-col w-full mt-1 relative">
          <div className="flex items-center justify-center relative w-full">
            <img
              src={publication?.link}
              alt={"Diego Libonati"}
              className="relative z-20 rounded-lg w-full max-h-52 object-cover md:max-h-96 hover:opacity-25 transition-opacity"
            ></img>
            {wasLike && (
              <img
                src={images.heart}
                alt={"heart gif"}
                className="absolute z-50 h-72 w-72"
              ></img>
            )}
            <h2
              className={`absolute z-10 text-7xl ${
                theme ? "text-black" : "text-white"
              }`}
            >
              {publication?.likes} 💕
            </h2>
          </div>
          <div className="flex flex-row items-center justify-start mt-2">
            <SiGooglemaps size={15} color="#868E96"></SiGooglemaps>
            <h2 className="text-primaryGray text-xs ml-1">
              {publication?.ubication}
            </h2>
          </div>
        </div>

        <div className="flex flex-row items-center justify-end w-full mt-1 mr-2 relative">
          <ButtonPublication
            hasMargin={true}
            onClick={(): void => {
              navigator.clipboard.writeText(
                protocol + hostname + port + `/#/publication/${publication?.id}`
              );
              handleSetAlert(
                true,
                "¡It is successfully copied to your clipboard!",
                "Success"
              );
              return;
            }}
            onMouseEnter={(): void => {
              setPreventClick(true);
              return;
            }}
            onTouchStart={(): void => {
              setPreventClick(true);
              return;
            }}
          >
            <AiOutlineShareAlt
              size={30}
              color={"#495057"}
              className={"hover:fill-primaryPurpure"}
            ></AiOutlineShareAlt>
          </ButtonPublication>

          <ButtonPublication
            hasMargin={true}
            onMouseEnter={(): void => {
              setPreventClick(true);
              return;
            }}
            onTouchStart={(): void => {
              setPreventClick(true);
              return;
            }}
            onClick={(): void => {
              if (preventClick) {
                handleSetLikes();
                setWasLike(true);
                return;
              }
              return;
            }}
          >
            <AiOutlineHeart
              size={30}
              color={"#495057"}
              className={"hover:fill-primaryPurpure"}
            ></AiOutlineHeart>

            <AiFillHeart
              size={30}
              color={"red"}
              className={`absolute opacity-0 ${
                buttonEffect ? "z-10" : "-z-10"
              }`}
              style={{
                animation: buttonEffect
                  ? "appear 1s ease"
                  : "disappear 2s ease",
              }}
            ></AiFillHeart>
          </ButtonPublication>
        </div>
      </div>
    </article>
  );
};
