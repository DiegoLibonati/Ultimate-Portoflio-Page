import { useEffect } from "react";
import { useRouter } from "../hooks/useRouter";
import { MainLayout } from "../layout/MainLayout";
import { useUiStore } from "../hooks/useUiStore";
import { Work } from "../entities/entities";
import { lazy, Suspense } from "react";
import { Loader } from "../components/Loader/Loader";
import { useWorksStore } from "../hooks/useWorksStore";
import { getWork } from "../api/getWork";

const Publication = lazy(() => import("../components/Publication/Publication"));

const WorkPage = (): JSX.Element => {
  const { params, redirectTo } = useRouter();
  const { activeWork, handleSetWork } = useWorksStore();
  const { theme } = useUiStore();

  useEffect(() => {
    const work = getWork(params.id);

    work.then((res: Work) => {
      if (!res) {
        return redirectTo("/feed/1");
      }
    });

    handleSetWork(work);
  }, []);

  return (
    <MainLayout>
      <section
        className={`flex flex-col w-full md:w-[70%] lg:w-[63%] xl:w-[48%] 2xl:w-[40%] 3xl:w-[35%] ${
          theme ? "bg-primaryWhite" : "bg-primaryBlack"
        }`}
      >
        <Suspense fallback={<Loader className="w-full h-full my-6"></Loader>}>
          <Publication publication={activeWork!} section="work"></Publication>
        </Suspense>
      </section>
    </MainLayout>
  );
};

export default WorkPage;
