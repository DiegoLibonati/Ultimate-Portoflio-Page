import { useEffect, useState } from "react";
import { UseCheckMobileScreen } from "../entities/entities";

export const useCheckMobileScreen = (): UseCheckMobileScreen => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const handleWindowSizeChange = (): void => {
    setWidth(window.innerWidth);
    return;
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return {
    isMobile: width <= 768,
  };
};
