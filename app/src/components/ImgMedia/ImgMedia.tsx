import { ImgMediaType } from "../../entities/types";
import { useRouter } from "../../hooks/useRouter";
import { useUiStore } from "../../hooks/useUiStore";
import { lazy, Suspense } from "react";
import { Loader } from "../Loader/Loader";

const Image = lazy(() => import("../Image/Image"));

const ImgMedia = ({ id, src, alt, title }: ImgMediaType): JSX.Element => {
  const { redirectTo } = useRouter();
  const { theme } = useUiStore();

  return (
    <div className="flex items-center justify-center relative w-full h-52">
      <Suspense fallback={<Loader></Loader>}>
        <Image
          onClick={() => redirectTo(`/publication/${id}`)}
          src={src}
          alt={alt}
          className="relative z-20 rounded-lg w-full h-full min-h-full object-cover hover:opacity-25 cursor-pointer"
          width={"100%"}
          height={"100%"}
        ></Image>
      </Suspense>
      <h2
        className={`absolute z-10 text-md text-center ${
          theme ? "text-black" : "text-white"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default ImgMedia;
