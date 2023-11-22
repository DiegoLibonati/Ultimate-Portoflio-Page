import { ImgMediaType } from "../../entities/types";
import { useRouter } from "../../hooks/useRouter";
import { useUiStore } from "../../hooks/useUiStore";

export const ImgMedia = ({
  id,
  src,
  alt,
  likes,
}: ImgMediaType): JSX.Element => {
  const { redirectTo } = useRouter();
  const { theme } = useUiStore();

  return (
    <div className="flex items-center justify-center relative w-full h-52">
      <img
        onClick={() => redirectTo(`/publication/${id}`)}
        src={src}
        alt={alt}
        className="relative z-20 rounded-lg w-full h-full object-cover hover:opacity-25 cursor-pointer"
      ></img>
      <h2
        className={`absolute z-10 text-sm md:text-5xl ${
          theme ? "text-black" : "text-white"
        }`}
      >
        {likes} 💕
      </h2>
    </div>
  );
};
