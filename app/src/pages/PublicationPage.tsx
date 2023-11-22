import { useEffect } from "react";
import { useRouter } from "../hooks/useRouter";
import { MainLayout } from "../layout/MainLayout";
import { Publication } from "../components/Publication/Publication";
import { getPublication } from "../api/getPublication";
import { usePublicationsStore } from "../hooks/usePublicationsStore";
import { useUiStore } from "../hooks/useUiStore";

export const PublicationPage = () => {
  const { params, redirectTo } = useRouter();
  const { activePublication, handleSetPublication } = usePublicationsStore();
  const { theme } = useUiStore();

  useEffect(() => {
    const publication = getPublication(params.id);

    publication.catch(() => {
      return redirectTo("/feed");
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
        <Publication publication={activePublication}></Publication>
      </section>
    </MainLayout>
  );
};
