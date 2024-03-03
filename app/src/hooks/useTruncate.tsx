import { useCallback, useState } from "react";
import { UseTruncate, UseTruncateProps } from "../entities/entities";

export const useTruncate = ({
  propertyValue,
  fontType,
}: UseTruncateProps): UseTruncate => {
  const [shouldTruncate, setShouldTruncate] = useState<boolean>(false);
  const [readMore, setReadMore] = useState<boolean>(false);

  const elementRef = useCallback((node: HTMLParagraphElement) => {
    if (node?.parentElement) {
      const elHeight = node.offsetHeight;
      const styles = window.getComputedStyle(node);
      const lineHeight = styles
        .getPropertyValue(propertyValue)
        .replace(fontType, "");
      const elLineCount = elHeight / parseInt(lineHeight, 10);

      setShouldTruncate(elLineCount > 3);
    }
  }, []);

  return {
    shouldTruncate,
    readMore,
    elementRef,
    setReadMore,
  };
};
