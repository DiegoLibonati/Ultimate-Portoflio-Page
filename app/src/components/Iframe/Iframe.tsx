import { IframeType } from "../../entities/types";

const Iframe = ({ className, src, title }: IframeType): JSX.Element => {
  return (
    <iframe className={className} src={src} title={title}>
      Iframe
    </iframe>
  );
};

export default Iframe;
