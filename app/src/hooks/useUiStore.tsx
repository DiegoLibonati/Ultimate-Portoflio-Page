import { useEffect } from "react";
import { UseUiStoreType } from "../entities/types";
import { setAlert, setTheme } from "../store/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useUiStore = (): UseUiStoreType => {
  const { theme, alert } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const handleSetTheme = (): void => {
    dispatch(setTheme());
    return;
  };

  const handleSetAlert = (
    status: boolean,
    message: string,
    type: string
  ): void => {
    dispatch(setAlert({ message: message, status: status, type: type }));
  };

  useEffect(() => {
    const timeout = setTimeout((): void => {
      handleSetAlert(false, "", "");
      return;
    }, 2000);

    return () => clearTimeout(timeout);
  }, [alert.status]);

  return {
    theme,
    alert,
    handleSetTheme,
    handleSetAlert,
  };
};
