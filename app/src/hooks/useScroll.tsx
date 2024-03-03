import { useState, useEffect } from "react";
import { UseScroll } from "../entities/entities";

export const useScroll = (): UseScroll => {
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
