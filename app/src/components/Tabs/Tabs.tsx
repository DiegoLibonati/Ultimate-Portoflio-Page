import { tabs } from "../../constants/tabs";
import { Tab } from "../Tab/Tab";

export const Tabs = (): JSX.Element => {
  return (
    <section className="grid grid-cols-3 gap-2 w-full px-2 mt-7 md:w-[70%] lg:w-[63%] xl:w-[48%] 2xl:w-[40%] 3xl:w-[35%]">
      {tabs.map((tab, index) => {
        return (
          <Tab
            key={tab.id}
            tabRoute={tab.route}
            tabText={tab.text}
            index={index}
          ></Tab>
        );
      })}
    </section>
  );
};
