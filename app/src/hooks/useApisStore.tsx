import { RootState } from "../entities/entities";
import { Api, UseApisStore } from "../entities/entities";
import { setApis } from "../store/apis/apisSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useApisStore = (): UseApisStore => {
  const { apis } = useAppSelector((state: RootState) => state.apis);
  const dispatch = useAppDispatch();

  const handleSetApis = async (apis: Promise<Api[]>): Promise<void> => {
    dispatch(setApis(await apis));
    return;
  };

  return {
    apis,
    handleSetApis,
  };
};
