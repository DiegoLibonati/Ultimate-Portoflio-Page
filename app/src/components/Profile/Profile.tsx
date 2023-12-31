import { BsLinkedin, BsPatchCheckFill } from "react-icons/bs";
import { MdWork, MdOutlineJoinFull } from "react-icons/md";
import { LiaLinkSolid } from "react-icons/lia";
import { FaBirthdayCake } from "react-icons/fa";
import { openInNewTab } from "../../helpers/openInNewTab";
import { links } from "../../constants/links";
import { Tag } from "../Tag/Tag";
import { Input } from "../Input/Input";
import { useForm } from "../../hooks/useForm";
import { useProfileStore } from "../../hooks/useProfileStore";
import { Loader } from "../Loader/Loader";
import { useUiStore } from "../../hooks/useUiStore";

export const Profile = () => {
  const { formValue, onInputValueChange, onSubmitForm } = useForm({
    email: "",
  });
  const { profile } = useProfileStore();
  const { theme } = useUiStore();

  return (
    <section className="flex flex-col w-full items-center md:w-[80%] lg:w-[75%] xl:w-[56%] 2xl:w-[48%] 3xl:w-[40%]">
      <article className="relative w-full">
        {profile.frontPage ? (
          <iframe className="h-[15rem] w-full" src={profile.frontPage}></iframe>
        ) : (
          <Loader className="h-h-[15rem] w-full"></Loader>
        )}

        {profile.avatar ? (
          <img
            className={`absolute top-[12.5rem] left-4 h-20 w-20 object-cover rounded-full border-4 md:h-28 md:w-28 md:left-24 md:top-[11rem] lg:left-28 lg:top-[11.5rem] 2xl:h-32 2xl:w-32 2xl:left-22 2xl:top-[10.8rem] ${
              theme ? "border-black" : "border-white"
            }`}
            src={profile.avatar}
            alt="Diego Libonati"
          ></img>
        ) : (
          <Loader className="absolute top-[5.2rem] left-4 h-20 w-20 object-cover rounded-full border-white border-4 md:h-28 md:w-28 md:left-24 md:top-[11rem] lg:left-28 lg:top-[11.5rem] 2xl:h-32 2xl:w-32 2xl:left-22 2xl:top-[10.8rem]"></Loader>
        )}
      </article>

      <article className="flex flex-col justify-between w-full h-[23.5rem] px-4 mt-2 md:w-[80%] md:h-[21rem]">
        <button
          className={`flex flex-row items-center justify-center h-[2.25rem] w-[6.125rem] bg-primaryPurpure rounded-full cursor-pointer self-end hover:border-2 ${
            theme ? "hover:border-black" : "hover:border-white"
          }`}
          onClick={() => openInNewTab(links.linkedin)}
        >
          <h2 className="text-white text-sm mr-1 font-semibold">Follow</h2>
          <BsLinkedin color="white" size={18}></BsLinkedin>
        </button>

        {profile.title && profile.description && profile.username ? (
          <div className="flex flex-col w-full mt-2">
            <div className="flex flex-row w-full items-center">
              <h2
                className={`text-xl font-bold md:text-2xl 2xl:text-3xl ${
                  theme ? "text-black" : "text-white"
                }`}
              >
                {profile.username}
              </h2>
              <BsPatchCheckFill className="fill-primaryPurpure ml-1 md:text-2xl 2xl:text-3xl"></BsPatchCheckFill>
            </div>
            <p
              className={`text-base mt-1 ${
                theme ? "text-black" : "text-white"
              }`}
            >
              {profile.title}
            </p>
            <p
              className={`text-base mt-1 ${
                theme ? "text-black" : "text-white"
              }`}
            >
              {profile.description}
            </p>
          </div>
        ) : (
          <Loader></Loader>
        )}

        <div className="flex flex-row flex-wrap w-full mt-2">
          <Tag
            icon={<MdWork className="fill-primaryGray mr-1"></MdWork>}
            textTag={profile.status}
          ></Tag>

          <Tag
            icon={
              <LiaLinkSolid className="fill-primaryGray mr-1"></LiaLinkSolid>
            }
            textTag="/links"
            isLink={true}
          ></Tag>

          <Tag
            icon={
              <FaBirthdayCake className="fill-primaryGray mr-1"></FaBirthdayCake>
            }
            textTag="July 29th"
          ></Tag>

          <Tag
            icon={
              <MdOutlineJoinFull className="fill-primaryGray mr-1"></MdOutlineJoinFull>
            }
            textTag="Joined Aug. 2023"
          ></Tag>
        </div>

        <form
          className="flex flex-col items-center mt-2"
          onSubmit={onSubmitForm}
        >
          <p
            className={`text-base text-center  ${
              theme ? "text-black" : "text-white"
            }`}
          >
            Keep up to date with my latest projects and adventures!
          </p>
          <div className="flex flex-row mt-1 w-[95%] md:w-[86%] lg:w-[67%]">
            <Input
              id="email"
              name="email"
              placeholder="Email Address"
              className={`w-[70%] p-2 rounded-tl-full rounded-bl-full placeholder:pl-1 focus:outline focus:outline-[0.1rem]  ${
                theme
                  ? "bg-white focus:outline-primaryPurpure text-black"
                  : "bg-primaryGray focus:outline-white text-white"
              }`}
              type="email"
              onChange={onInputValueChange}
              value={formValue.email}
            ></Input>
            <button
              className={`bg-primaryPurpure rounded-tr-full rounded-br-full py-2 px-4 text-white font-bold text-sm w-[30%] hover:border-2 ${
                theme ? "hover:border-black" : "hover:border-white"
              }`}
            >
              Subscribe!
            </button>
          </div>
          <p className="text-xs text-primaryGray text-center mt-1">
            No spam. Unsubscribe any time.
          </p>
        </form>
      </article>
    </section>
  );
};
