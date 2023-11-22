export const openInNewTab = (url: string): void => {
  window.open(url, "_blank", "noreferrer");
  return;
};
