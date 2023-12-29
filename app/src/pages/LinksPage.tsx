import { Link } from "../components/Link/Link";
import { links } from "../constants/links";
import { useProfileStore } from "../hooks/useProfileStore";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { useUiStore } from "../hooks/useUiStore";
import { lazy, Suspense } from "react";
import { Loader } from "../components/Loader/Loader";
import { openInNewTab } from "../helpers/openInNewTab";
import { useRouter } from "../hooks/useRouter";

const Image = lazy(() => import("../components/Image/Image"));

const LinksPage = () => {
  const { profile } = useProfileStore();
  const { theme } = useUiStore();
  const { redirectTo } = useRouter();

  return (
    <main
      className={`flex items-start justify-center min-h-screen w-full px-2 ${
        theme ? "bg-primaryWhite" : "bg-primaryBlack"
      }`}
    >
      <section className="flex flex-col w-full h-full md:w-[70%] lg:w-[63%] xl:w-[48%] 2xl:w-[40%] 3xl:w-[35%] mt-6">
        <article className="flex flex-col items-center justify-center w-full">
          <Suspense fallback={<Loader className="w-36 h-36"></Loader>}>
            <Image
              src={profile.avatar}
              alt={profile.username}
              className="w-36 h-36 rounded-full object-cover"
              width={"100%"}
              height={"100%"}
            ></Image>
          </Suspense>
          <h2
            className={`font-semibold mt-2 text-3xl ${
              theme ? "text-black" : "text-white"
            }`}
          >
            {profile.username}
          </h2>
          <h4 className="text-primaryGray text-sm">{profile.title}</h4>
        </article>

        <article className="flex flex-col items-center justify-center mt-14">
          <Link
            linkText="Instagram"
            onClick={() => {
              openInNewTab(links.instagram);
              return;
            }}
          >
            <AiOutlineInstagram
              color="#fff"
              className="absolute left-2"
              size={25}
            ></AiOutlineInstagram>
          </Link>

          <Link
            linkText="Linkedin"
            onClick={() => {
              openInNewTab(links.linkedin);
              return;
            }}
          >
            <AiOutlineLinkedin
              color="#fff"
              className="absolute left-2"
              size={25}
            ></AiOutlineLinkedin>
          </Link>

          <Link
            linkText="Github"
            onClick={() => {
              openInNewTab(links.github);
              return;
            }}
          >
            <AiFillGithub
              color="#fff"
              className="absolute left-2"
              size={25}
            ></AiFillGithub>
          </Link>

          <Link
            linkText="Volver al Feed"
            onClick={() => {
              redirectTo("/feed/1");
              return;
            }}
          >
            <MdWorkOutline
              color="#fff"
              className="absolute left-2"
              size={25}
            ></MdWorkOutline>
          </Link>
        </article>
      </section>
    </main>
  );
};

export default LinksPage;
