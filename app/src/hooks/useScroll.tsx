import { useState, useEffect } from "react";
import { useScrollReturnType } from "../entities/types";

export const useScroll = (): useScrollReturnType => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScrolled = (e: Event): void => {
    const { currentTarget } = e;
    const window = currentTarget as Window;

    if (window!.scrollY > 15) {
      return setScrolled(true);
    }

    return setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScrolled(e), false);
    return window.removeEventListener(
      "scroll",
      (e) => handleScrolled(e),
      false
    );
  }, []);

  return {
    scrolled,
  };
};
