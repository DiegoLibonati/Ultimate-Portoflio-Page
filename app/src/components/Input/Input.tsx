import { InputType } from "../../entities/types";

export const Input = ({
  id,
  name,
  placeholder,
  className,
  type,
  onChange,
  value,
}: InputType): JSX.Element => {
  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      className={className}
      type={type}
      onChange={onChange}
      value={value}
    ></input>
  );
};
