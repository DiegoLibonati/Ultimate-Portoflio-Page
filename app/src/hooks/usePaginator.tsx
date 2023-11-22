import { useState, useRef, useEffect } from "react";
import {
  PublicationType,
  usePaginatorReturnType,
  usePaginatorType,
} from "../entities/types";
import { usePublicationsStore } from "./usePublicationsStore";

export const usePaginator = ({
  page,
  perPage,
}: usePaginatorType): usePaginatorReturnType => {
  const { publications } = usePublicationsStore();

  const [actualPage, setActualPage] = useState<number>(page);
  const [navHeight] = useState<number>(60);
  const [lastPage, setLastPage] = useState<number>(0);
  const [elementsPerPage] = useState<number>(perPage);
  const [elementsToRender, setElementsToRender] = useState<number[] | never>(
    []
  );
  const [arr, setArr] = useState<PublicationType[] | never>([]);

  const parentRef = useRef<HTMLElement | null>(null);

  const handleSetPage = (page: number): void => {
    if (page <= 0) {
      setActualPage(1);
    } else if (page > lastPage) {
      setActualPage(lastPage);
    } else {
      setActualPage(page);
    }

    return;
  };

  useEffect(() => {
    if (publications.length > 0) {
      setArr(
        publications.slice(
          elementsPerPage * (actualPage - 1),
          elementsPerPage * actualPage
        )
      );
      return;
    }
  }, [publications, elementsPerPage, actualPage]);

  useEffect(() => {
    if (publications.length > 0) {
      const pages = Math.ceil(publications.length / elementsPerPage);
      setLastPage(pages);
      setElementsToRender([...Array(pages).keys()].map((key) => key + 1));
    }
  }, [publications]);

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
