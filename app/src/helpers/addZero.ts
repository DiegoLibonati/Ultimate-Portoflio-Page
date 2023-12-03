export const addZero = (value: number): string => {
  return value >= 10 ? String(value) : `0${value}`;
};
