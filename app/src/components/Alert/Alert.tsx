import {
  AiOutlineCheck,
  AiOutlineInfoCircle,
  AiOutlineStop,
  AiOutlineWarning,
  AiFillCloseCircle,
} from "react-icons/ai";
import { useUiStore } from "../../hooks/useUiStore";

// Types: Error / red - Success / green - Warning / yellow - Info / blue

export const Alert = (): JSX.Element => {
  const { alert, handleSetAlert } = useUiStore();

  return (
    <div
      className={`flex flex-row items-center justify-start fixed z-[9999] bottom-0 right-0 p-4 rounded-md border-[.1rem] shadow-md w-full md:w-[50%] md:m-4 lg:w-[65%] xl:w-[40%] ${
        alert.type === "Error"
          ? "bg-dustyRose border-maroon"
          : alert.type === "Success"
          ? "bg-paleGreen border-oliveGreen"
          : alert.type === "Warning"
          ? "bg-cream border-bronze"
          : alert.type === "Info"
          ? "bg-skyBlue border-steelBlue"
          : ""
      }`}
    >
      <div className="flex items-center justify-center w-[25%]">
        {alert.type === "Error" && (
          <AiOutlineStop
            size={45}
            fill="#A52B32"
            className="bg-paleRose rounded-full p-2"
          ></AiOutlineStop>
        )}
        {alert.type === "Success" && (
          <AiOutlineCheck
            size={45}
            fill="#607558"
            className="bg-mintGreen rounded-full p-2"
          ></AiOutlineCheck>
        )}
        {alert.type === "Warning" && (
          <AiOutlineWarning
            size={45}
            fill="#8D6D34"
            className="bg-paleYellow rounded-full p-2"
          ></AiOutlineWarning>
        )}
        {alert.type === "Info" && (
          <AiOutlineInfoCircle
            size={45}
            fill="#4C7EA0"
            className="bg-lightBlue rounded-full p-2"
          ></AiOutlineInfoCircle>
        )}
      </div>

      <h2
        className={`font-bold text-base ${
          alert.type === "Error"
            ? "text-maroon"
            : alert.type === "Success"
            ? "text-oliveGreen"
            : alert.type === "Warning"
            ? "text-bronze"
            : alert.type === "Info"
            ? "text-steelBlue"
            : ""
        }`}
      >
        {alert.type}: <span className="font-semibold">{alert.message}</span>
      </h2>

      <AiFillCloseCircle
        size={25}
        fill={
          alert.type === "Error"
            ? "#E4B1AB"
            : alert.type === "Success"
            ? "#C6DEB9"
            : alert.type === "Warning"
            ? "#EBE3A9"
            : alert.type === "Info"
            ? "#A6D6EE"
            : ""
        }
        className="cursor-pointer font-bold absolute right-2 top-2"
        onClick={() => handleSetAlert(false, "", "")}
      ></AiFillCloseCircle>
    </div>
  );
};

// md:w-[70%] lg:w-[63%] xl:w-[48%] 2xl:w-[40%] 3xl:w-[35%]
