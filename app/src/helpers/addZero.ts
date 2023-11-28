export const addZero = (value: number): string => {
  console.log(value);
  return value > 10 ? String(value) : `0${value}`;
};
