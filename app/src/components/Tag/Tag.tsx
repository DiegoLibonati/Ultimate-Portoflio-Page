import { links } from "../../constants/links";
import { TagType } from "../../entities/types";
import { useRouter } from "../../hooks/useRouter";

export const Tag = ({ icon, textTag, isLink }: TagType): JSX.Element => {
  const { redirectTo } = useRouter();

  const onClickTag = (): void => {
    redirectTo(links.links);
    return;
  };

  return (
    <div className="flex flex-row items-center mr-6" onClick={onClickTag}>
      {icon}
      <h2
        className={`${
          isLink
            ? "text-primaryPurpure font-bold cursor-pointer hover:underline hover:underline-offset-2"
            : "text-primaryGray"
        } text-sm`}
      >
        {textTag}
      </h2>
    </div>
  );
};
