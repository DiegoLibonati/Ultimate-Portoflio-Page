import { useState, useRef, useEffect } from "react";
import {
  PublicationType,
  usePaginatorReturnType,
  usePaginatorType,
} from "../entities/types";
import { useRouter } from "./useRouter";

export const usePaginator = ({
  page,
  perPage,
  customArr,
}: usePaginatorType): usePaginatorReturnType => {
  const [actualPage, setActualPage] = useState<number>(page);
  const [navHeight] = useState<number>(60);
  const [lastPage, setLastPage] = useState<number>(0);
  const [elementsPerPage] = useState<number>(perPage);
  const [elementsToRender, setElementsToRender] = useState<number[] | never>(
    []
  );
  const [arr, setArr] = useState<PublicationType[] | never>([]);

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
      setArr(
        customArr.slice(
          elementsPerPage * (actualPage - 1),
          elementsPerPage * actualPage
        )
      );

      return;
    }
  }, [customArr, elementsPerPage, actualPage]);

  useEffect(() => {
    if (customArr.length > 0) {
      const pages = Math.ceil(customArr.length / elementsPerPage);
      setLastPage(pages);

      if (params.page > pages) {
        setActualPage(1);
        return redirectTo("/feed/1");
      }

      setElementsToRender([...Array(pages).keys()].map((key) => key + 1));
    }
  }, [customArr]);

  useEffect(() => {
    if (parentRef!.current) {
      window.scrollTo({ top: parentRef.current?.offsetTop - navHeight });
    }
  }, [actualPage]);

  return {
    publications: arr,
    parentRef,
    actualPage,
    elementsToRender,
    handleSetPage,
  };
};
