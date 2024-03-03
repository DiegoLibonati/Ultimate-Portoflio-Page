import { useState, useRef, useEffect } from "react";
import { useRouter } from "./useRouter";
import { UsePaginator, UsePaginatorProps } from "../entities/entities";

export const usePaginator = <T,>({
  page,
  perPage,
  customArr,
}: UsePaginatorProps<T>): UsePaginator<T> => {
  const [actualPage, setActualPage] = useState<number>(page);
  const [lastPage, setLastPage] = useState<number>(0);
  const [elementsPerPage] = useState<number>(perPage);

  const [elementsToRender, setElementsToRender] = useState<number[]>([]);
  const [originalElementsToRender, setOriginalElementsToRender] = useState<
    number[]
  >([]);

  const [arr, setArr] = useState<T[]>([]);
  const [originalArr, setOriginalArr] = useState<T[]>([]);

  const [minIndex, setMinIndex] = useState<number | null>(null);
  const [maxIndex, setMaxIndex] = useState<number | null>(null);

  const [navHeight] = useState<number>(60);

  const parentRef = useRef<HTMLElement | null>(null);

  const { params, pathname, redirectTo } = useRouter();

  const handleSetPage = (page: number): void => {
    let number = null;

    if (page <= 0) {
      setActualPage(1);
      number = 1;
    } else if (page > lastPage) {
      setActualPage(lastPage);
      number = lastPage;
    } else {
      setActualPage(page);
      number = page;
    }

    history.replaceState(null, "", `#/${pathname.split("/")[1]}/${number}`);

    return;
  };

  useEffect(() => {
    if (customArr.length > 0) {
      const finalArr = [...customArr].sort(
        // @ts-ignore:next-line
        (pub, pub2) => pub2.isPinned - pub.isPinned
      );
      setOriginalArr(finalArr);
      return;
    }
  }, [customArr]);

  useEffect(() => {
    if (originalArr.length > 0) {
      setArr(
        originalArr.slice(
          elementsPerPage * (actualPage - 1),
          elementsPerPage * actualPage
        )
      );
    }
  }, [originalArr, elementsPerPage, actualPage]);

  useEffect(() => {
    if (customArr.length > 0) {
      const pages = Math.ceil(customArr.length / elementsPerPage);
      setLastPage(pages);

      if (params.page > pages) {
        setActualPage(1);
        return redirectTo("/feed/1");
      }

      setOriginalElementsToRender(
        [...Array(pages).keys()].map((key) => key + 1)
      );
    }
  }, [customArr]);

  useEffect(() => {
    if (parentRef!.current) {
      window.scrollTo({ top: parentRef.current?.offsetTop - navHeight });
    }

    if (originalElementsToRender.length > 0) {
      const index = originalElementsToRender.findIndex(
        (elem) => elem === actualPage
      );

      if (index === 0) {
        setMinIndex(0);
        setMaxIndex(3);
      } else if (index === originalElementsToRender.length - 1) {
        setMinIndex(actualPage - 3);
        setMaxIndex(actualPage);
      } else if (index === originalElementsToRender.length - 2) {
        setMinIndex(actualPage - 2);
        setMaxIndex(actualPage + 2);
      } else {
        setMinIndex(actualPage - 1);
        setMaxIndex(actualPage + 2);
      }
    }
  }, [actualPage, originalElementsToRender]);

  useEffect(() => {
    if (
      (Number(minIndex) === 0 || Number(minIndex)) &&
      Number(maxIndex) &&
      originalElementsToRender.length > 0
    ) {
      const min = Number(minIndex) === -1 ? 0 : Number(minIndex);
      setElementsToRender(
        originalElementsToRender.slice(min, Number(maxIndex))
      );
    }
  }, [minIndex, maxIndex, originalElementsToRender]);

  return {
    publications: arr,
    parentRef,
    actualPage,
    elementsToRender,
    originalElementsToRender,
    handleSetPage,
  };
};
