import { IframeType } from "../../entities/types";

const Iframe = ({ className, src }: IframeType): JSX.Element => {
  return (
    <iframe className={className} src={src}>
      Iframe
    </iframe>
  );
};

export default Iframe;
