import { RootState } from "../entities/entities";
import { Work, UseWorksStore } from "../entities/entities";
import { setWork, setWorks } from "../store/works/worksSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useWorksStore = (): UseWorksStore => {
  const { activeWork, works } = useAppSelector(
    (state: RootState) => state.works
  );
  const dispatch = useAppDispatch();

  const handleSetWorks = async (works: Promise<Work[]>): Promise<void> => {
    dispatch(setWorks(await works));
    return;
  };

  const handleSetWork = async (work: Promise<Work>): Promise<void> => {
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
