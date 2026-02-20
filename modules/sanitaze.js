export const clearHtml = (htmlString) => {
    return htmlString
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  };
