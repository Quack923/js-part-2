export const clearHtml = (htmlString) => {
  if (htmlString === undefined || htmlString === null) {
    return "";
  }

  return htmlString
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
};