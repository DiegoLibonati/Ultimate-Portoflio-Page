import { useEffect } from "react";
import { useRouter } from "../hooks/useRouter";
import { MainLayout } from "../layout/MainLayout";
import { getPublicationFeed } from "../api/getPublicationFeed";
import { usePublicationsFeedStore } from "../hooks/usePublicationsFeedStore";
import { useUiStore } from "../hooks/useUiStore";
import { PublicationFeed } from "../entities/entities";
import { lazy, Suspense } from "react";
import { Loader } from "../components/Loader/Loader";

const PublicationFeedLazy = lazy(
  () => import("../components/Publication/Publication")
);

const PublicationPage = () => {
  const { params, redirectTo } = useRouter();
  const { activePublicationFeed, handleSetPublicationFeed } =
    usePublicationsFeedStore();
  const { theme } = useUiStore();

  useEffect(() => {
    const publication = getPublicationFeed(params.id);

    publication.then((pub: PublicationFeed) => {
      if (!pub) {
        return redirectTo("/feed/1");
      }
    });

    handleSetPublicationFeed(publication);
  }, []);

  return (
    <MainLayout>
      <section
        className={`flex flex-col w-full md:w-[70%] lg:w-[63%] xl:w-[48%] 2xl:w-[40%] 3xl:w-[35%] ${
          theme ? "bg-primaryWhite" : "bg-primaryBlack"
        }`}
      >
        <Suspense fallback={<Loader className="h-full w-full my-6"></Loader>}>
          <PublicationFeedLazy
            publication={activePublicationFeed!}
            section="publication"
          ></PublicationFeedLazy>
        </Suspense>
      </section>
    </MainLayout>
  );
};

export default PublicationPage;
