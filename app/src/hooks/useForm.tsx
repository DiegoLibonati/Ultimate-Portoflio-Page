import { ChangeEvent, useState } from "react";
import { useFormReturnType } from "../entities/types";
import { postAddEmail } from "../api/postAddEmail";
import { useUiStore } from "./useUiStore";

export const useForm = (
  initialValue: Record<string, string>
): useFormReturnType => {
  const [formValue, setFormValue] =
    useState<Record<string, string>>(initialValue);
  const { handleSetAlert } = useUiStore();

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
    const result = await postAddEmail(formValue);

    if (!result) {
      handleSetAlert(
        true,
        `An error occurred while trying to add your email address to the newsletter.`,
        "Error"
      );
      onResetForm();
      return;
    }

    handleSetAlert(
      true,
      `The email: ${formValue.email} successfully added to the newsletter`,
      "Success"
    );

    onResetForm();
    return;
  };

  return {
    formValue,
    onInputValueChange,
    onSubmitForm,
  };
};
