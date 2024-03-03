import { TagProps } from "../../entities/entities";

export const Tag = ({
  icon,
  textTag,
  isLink,
  onClickTag,
}: TagProps): JSX.Element => {
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
