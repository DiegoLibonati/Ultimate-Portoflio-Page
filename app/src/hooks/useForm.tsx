import { ChangeEvent, useState } from "react";
import { useFormReturnType } from "../entities/types";

export const useForm = (
  initialValue: Record<string, string>
): useFormReturnType => {
  const [formValue, setFormValue] =
    useState<Record<string, string>>(initialValue);

  const onInputValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const key = e.target.name;
    const value = e.target.value;
    setFormValue({ ...formValue, [key]: value });
    return;
  };

  const onResetForm = (): void => {
    setFormValue({ email: "" });
    return;
  };

  const onSubmitForm = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    onResetForm();
    return;
  };

  return {
    formValue,
    onInputValueChange,
    onSubmitForm,
  };
};
