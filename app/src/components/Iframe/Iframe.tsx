import { IframeProps } from "../../entities/entities";

const Iframe = ({ className, src, title }: IframeProps): JSX.Element => {
  return (
    <iframe className={className} src={src} title={title}>
      Iframe
    </iframe>
  );
};

export default Iframe;
