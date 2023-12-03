import { useEffect } from "react";
import { useRouter } from "../hooks/useRouter";
import { MainLayout } from "../layout/MainLayout";
import { getPublication } from "../api/getPublication";
import { usePublicationsStore } from "../hooks/usePublicationsStore";
import { useUiStore } from "../hooks/useUiStore";
import { PublicationType } from "../entities/types";
import { lazy, Suspense } from "react";
import { Loader } from "../components/Loader/Loader";

const Publication = lazy(() => import("../components/Publication/Publication"));

const PublicationPage = () => {
  const { params, redirectTo } = useRouter();
  const { activePublication, handleSetPublication } = usePublicationsStore();
  const { theme } = useUiStore();

  useEffect(() => {
    const publication = getPublication(params.id);

    publication.then((pub: PublicationType) => {
      if (!pub) {
        return redirectTo("/feed/1");
      }
    });

    handleSetPublication(publication);
  }, []);

  return (
    <MainLayout>
      <section
        className={`flex flex-col w-full md:w-[70%] lg:w-[63%] xl:w-[48%] 2xl:w-[40%] 3xl:w-[35%] ${
          theme ? "bg-primaryWhite" : "bg-primaryBlack"
        }`}
      >
        <Suspense fallback={<Loader className="my-6"></Loader>}>
          <Publication
            publication={activePublication}
            section="publication"
          ></Publication>
        </Suspense>
      </section>
    </MainLayout>
  );
};

export default PublicationPage;
