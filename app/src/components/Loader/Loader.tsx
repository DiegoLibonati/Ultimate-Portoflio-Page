import { LoaderProps } from "../../entities/entities";
import "./Loader.css";

export const Loader = ({ className }: LoaderProps): JSX.Element => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="loader"></div>
    </div>
  );
};
