import { useEffect, useState } from "react";
import { useCheckMobileScreenType } from "../entities/types";

export const useCheckMobileScreen = (): useCheckMobileScreenType => {
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
