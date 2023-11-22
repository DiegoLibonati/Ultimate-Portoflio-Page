import { LoaderType } from "../../entities/types";
import "./Loader.css";

export const Loader = ({ className }: LoaderType): JSX.Element => {
  return (
    <div
      className={`
        ${!className ? "w-full h-full" : className}
      flex items-center justify-center `}
    >
      <div className="loader"></div>
    </div>
  );
};
