import { ImageProps } from "../../entities/entities";

const Image = ({
  src,
  alt,
  className,
  width,
  height,
  onClick,
}: ImageProps): JSX.Element => {
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
