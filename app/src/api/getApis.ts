import { Api } from "../entities/entities";

export const getApis = async (): Promise<Api[]> => {
  try {
    const result = await fetch("/apis.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const apis: Api[] = await result.json();
    return apis;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
