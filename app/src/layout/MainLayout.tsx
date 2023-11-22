import { Alert } from "../components/Alert/Alert";
import { Profile } from "../components/Profile/Profile";
import { Tabs } from "../components/Tabs/Tabs";
import { MainLayoutType } from "../entities/types";
import { useUiStore } from "../hooks/useUiStore";

export const MainLayout = ({ children }: MainLayoutType): JSX.Element => {
  const { theme, alert } = useUiStore();

  return (
    <main
      className={`flex flex-col items-center w-full ${
        theme ? "bg-primaryWhite" : "bg-primaryBlack"
      }`}
    >
      <Profile></Profile>
      <Tabs></Tabs>
      {children}
      {alert.status && <Alert></Alert>}
    </main>
  );
};
