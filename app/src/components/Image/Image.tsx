import { ImageType } from "../../entities/types";

const Image = ({
  src,
  alt,
  className,
  width,
  height,
  onClick,
}: ImageType): JSX.Element => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onClick={onClick}
    ></img>
  );
};

export default Image;
