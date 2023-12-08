import { WorkType, UseWorksStoreType } from "../entities/types";
import { setWork, setWorks } from "../store/works/worksSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useWorksStore = (): UseWorksStoreType => {
  const { activeWork, works } = useAppSelector((state) => state.works);
  const dispatch = useAppDispatch();

  const handleSetWorks = async (works: Promise<WorkType[]>): Promise<void> => {
    dispatch(setWorks(await works));
    return;
  };

  const handleSetWork = async (work: Promise<WorkType>): Promise<void> => {
    dispatch(setWork(await work));
    return;
  };

  return {
    activeWork,
    works,
    handleSetWork,
    handleSetWorks,
  };
};
