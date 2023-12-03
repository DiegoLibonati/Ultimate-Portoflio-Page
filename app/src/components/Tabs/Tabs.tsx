import { tabs } from "../../constants/tabs";
import { Tab } from "../Tab/Tab";

export const Tabs = (): JSX.Element => {
  return (
    <section className="flex flex-row flex-wrap items-center justify-between w-full h-auto px-2 mt-7 md:w-[70%] lg:w-[63%] xl:w-[48%] 2xl:w-[40%] 3xl:w-[35%]">
      {tabs.map((tab) => {
        return <Tab key={tab.id} tabRoute={tab.route} tabText={tab.text}></Tab>;
      })}
    </section>
  );
};
