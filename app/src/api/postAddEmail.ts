import portfolioApi from "./portfolioApi";

export const postAddEmail = async (
  body: Record<string, string>
): Promise<boolean> => {
  try {
    const result = await portfolioApi.post("/news/add", body);

    console.log(result);

    return result.data.message;
  } catch (e) {
    return false;
  }
};
